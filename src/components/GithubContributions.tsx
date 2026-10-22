"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import {
  ExternalLink,
  Flame,
  Trophy,
  Calendar,
  GitCommit,
  Loader2,
  RefreshCw,
  Radio,
} from "lucide-react";

interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface GithubData {
  total: Record<string, number>;
  contributions: ContributionDay[];
}

interface GithubContributionsProps {
  username?: string;
}

export const GithubContributions: React.FC<GithubContributionsProps> = ({
  username = "SanketPathare",
}) => {
  const [selectedYear, setSelectedYear] = useState<string>("last");
  const [data, setData] = useState<GithubData | null>(null);
  const [availableYears, setAvailableYears] = useState<string[]>([
    "2026",
    "2025",
    "2024",
    "2023",
  ]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [hoveredDay, setHoveredDay] = useState<{
    date: string;
    count: number;
    x: number;
    y: number;
  } | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  // Fetch available years on mount
  useEffect(() => {
    async function fetchYears() {
      try {
        const res = await fetch(
          `/api/github-contributions?username=${username}&year=all`
        );
        if (res.ok) {
          const json = await res.json();
          if (json.total) {
            const years = Object.keys(json.total)
              .filter((y) => /^\d{4}$/.test(y))
              .sort((a, b) => Number(b) - Number(a));
            if (years.length > 0) {
              setAvailableYears(years);
            }
          }
        }
      } catch (err) {
        console.warn("Could not fetch available years, using defaults", err);
      }
    }
    fetchYears();
  }, [username]);

  // Fetch contributions for selected year
  useEffect(() => {
    let isCancelled = false;
    async function fetchContributions() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `/api/github-contributions?username=${username}&year=${selectedYear}`
        );
        if (!res.ok) {
          throw new Error("Unable to fetch contributions");
        }
        const json = await res.json();
        if (!isCancelled) {
          setData(json);
        }
      } catch (err: any) {
        if (!isCancelled) {
          setError(err?.message || "Failed to load activity");
        }
      } finally {
        if (!isCancelled) {
          setLoading(false);
        }
      }
    }

    fetchContributions();
    return () => {
      isCancelled = true;
    };
  }, [username, selectedYear]);

  // Calculations for weeks, streaks, and best day
  const { weeks, monthLabels, totalCount, currentStreak, longestStreak, bestDay } =
    useMemo(() => {
      if (!data || !data.contributions || data.contributions.length === 0) {
        return {
          weeks: [],
          monthLabels: [],
          totalCount: 0,
          currentStreak: 0,
          longestStreak: 0,
          bestDay: { count: 0, date: "" },
        };
      }

      const list = data.contributions;
      let total = 0;
      let maxStreak = 0;
      let tempStreak = 0;
      let best = { count: 0, date: "" };

      // Calculate stats
      for (let i = 0; i < list.length; i++) {
        const day = list[i];
        total += day.count;
        if (day.count > best.count) {
          best = { count: day.count, date: day.date };
        }
        if (day.count > 0) {
          tempStreak++;
          if (tempStreak > maxStreak) maxStreak = tempStreak;
        } else {
          tempStreak = 0;
        }
      }

      // Calculate current streak
      let curStreak = 0;
      for (let i = list.length - 1; i >= 0; i--) {
        if (list[i].count > 0) {
          curStreak++;
        } else {
          if (i === list.length - 1) continue; // Allow today to be 0 yet
          break;
        }
      }

      // Group into weeks (7 days each: 0=Sun..6=Sat)
      const weeksArr: (ContributionDay | null)[][] = [];
      let currentWeek: (ContributionDay | null)[] = [];

      list.forEach((day) => {
        currentWeek.push(day);
        if (currentWeek.length === 7) {
          weeksArr.push(currentWeek);
          currentWeek = [];
        }
      });
      if (currentWeek.length > 0) {
        while (currentWeek.length < 7) {
          currentWeek.push(null);
        }
        weeksArr.push(currentWeek);
      }

      // Calculate month label indices
      const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      const months: { colIndex: number; label: string }[] = [];
      let lastMonth = -1;

      weeksArr.forEach((w, wIndex) => {
        const firstDay = w.find((d) => d !== null);
        if (firstDay && firstDay.date) {
          const m = new Date(firstDay.date).getMonth();
          if (m !== lastMonth) {
            months.push({ colIndex: wIndex, label: monthNames[m] });
            lastMonth = m;
          }
        }
      });

      // Total count from API total if available
      const computedTotal =
        selectedYear === "last"
          ? data.total?.lastYear || total
          : data.total?.[selectedYear] || total;

      return {
        weeks: weeksArr,
        monthLabels: months,
        totalCount: computedTotal,
        currentStreak: curStreak,
        longestStreak: maxStreak,
        bestDay: best,
      };
    }, [data, selectedYear]);

  // Color mappings
  const getLevelColor = (level: number) => {
    switch (level) {
      case 1:
        return "bg-[#0e4429] dark:bg-[#0e4429] border-[#0e4429]";
      case 2:
        return "bg-[#006d32] dark:bg-[#006d32] border-[#006d32]";
      case 3:
        return "bg-[#26a641] dark:bg-[#26a641] border-[#26a641]";
      case 4:
        return "bg-[#39d353] dark:bg-[#39d353] border-[#39d353]";
      case 0:
      default:
        return "bg-[#EBEDF0] dark:bg-[#161B22] border-[#E1E4E8] dark:border-[#21262D]";
    }
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return "";
    const [y, m, d] = dateStr.split("-").map(Number);
    const date = new Date(y, m - 1, d);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <div
      ref={containerRef}
      className="w-full bg-white dark:bg-[#121215] border border-[#E4E4E7] dark:border-[#27272A] rounded-3xl p-6 sm:p-8 hover:border-[#D4D4D8] dark:hover:border-[#3F3F46] transition-all shadow-[0_2px_12px_rgba(0,0,0,0.02)] mb-6"
    >
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E4E4E7] dark:border-[#27272A]">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 mb-3 rounded-full border border-[#E4E4E7] dark:border-[#27272A] bg-[#FAFAFA] dark:bg-[#18181B] text-xs font-semibold tracking-widest uppercase text-[#71717A] dark:text-[#A1A1AA]">
            <Radio className="w-3 h-3 text-emerald-500 animate-pulse" />
            <span>LIVE GITHUB CONTRIBUTIONS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#09090B] dark:text-[#FAFAFA]">
            {totalCount.toLocaleString()}{" "}
            <span className="text-[#71717A] dark:text-[#A1A1AA] font-normal">
              contributions in{" "}
              {selectedYear === "last" ? "the last year" : selectedYear}
            </span>
          </h2>
        </div>

        {/* GitHub Direct Link Button */}
        <div className="flex items-center gap-3">
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs h-10 px-4 gap-2 inline-flex items-center"
          >
            <FaGithub className="w-4 h-4" />
            <span>@{username}</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>
      </div>

      {/* Stats Summary Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-6 border-b border-[#E4E4E7] dark:border-[#27272A]">
        <div className="p-3.5 rounded-2xl bg-[#FAFAFA] dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] flex flex-col justify-between">
          <span className="text-xs uppercase tracking-wider text-[#71717A] dark:text-[#A1A1AA] font-semibold flex items-center gap-1.5">
            <GitCommit className="w-3.5 h-3.5 text-emerald-500" /> Total
          </span>
          <p className="text-xl sm:text-2xl font-bold text-[#09090B] dark:text-[#FAFAFA] mt-1">
            {totalCount.toLocaleString()}
          </p>
        </div>

        <div className="p-3.5 rounded-2xl bg-[#FAFAFA] dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] flex flex-col justify-between">
          <span className="text-xs uppercase tracking-wider text-[#71717A] dark:text-[#A1A1AA] font-semibold flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-orange-500" /> Current Streak
          </span>
          <p className="text-xl sm:text-2xl font-bold text-[#09090B] dark:text-[#FAFAFA] mt-1">
            {currentStreak} <span className="text-xs font-normal text-[#71717A]">days</span>
          </p>
        </div>

        <div className="p-3.5 rounded-2xl bg-[#FAFAFA] dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] flex flex-col justify-between">
          <span className="text-xs uppercase tracking-wider text-[#71717A] dark:text-[#A1A1AA] font-semibold flex items-center gap-1.5">
            <Trophy className="w-3.5 h-3.5 text-amber-500" /> Longest Streak
          </span>
          <p className="text-xl sm:text-2xl font-bold text-[#09090B] dark:text-[#FAFAFA] mt-1">
            {longestStreak} <span className="text-xs font-normal text-[#71717A]">days</span>
          </p>
        </div>

        <div className="p-3.5 rounded-2xl bg-[#FAFAFA] dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] flex flex-col justify-between">
          <span className="text-xs uppercase tracking-wider text-[#71717A] dark:text-[#A1A1AA] font-semibold flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-blue-500" /> Most in a Day
          </span>
          <p className="text-xl sm:text-2xl font-bold text-[#09090B] dark:text-[#FAFAFA] mt-1 truncate">
            {bestDay.count}{" "}
            <span className="text-xs font-normal text-[#71717A]">
              commits
            </span>
          </p>
        </div>
      </div>

      {/* Main Heatmap Section & Year Selector */}
      <div className="flex flex-col lg:flex-row gap-6 pt-6 items-start">
        {/* Heatmap Card (Outer container styled like GitHub's dark border box) */}
        <div className="flex-1 w-full border border-[#E4E4E7] dark:border-[#27272A] bg-[#FAFAFA] dark:bg-[#0D1117] rounded-2xl p-4 sm:p-5 relative overflow-hidden">
          {loading && (
            <div className="absolute inset-0 bg-white/70 dark:bg-[#0D1117]/70 backdrop-blur-xs flex items-center justify-center z-30">
              <div className="flex items-center gap-2 text-xs font-medium text-[#71717A] dark:text-[#A1A1AA]">
                <Loader2 className="w-4 h-4 animate-spin text-emerald-500" />
                <span>Fetching live GitHub data...</span>
              </div>
            </div>
          )}

          {error && !loading ? (
            <div className="py-12 flex flex-col items-center justify-center text-center">
              <p className="text-xs text-amber-500 mb-2">
                Could not refresh live activity.
              </p>
              <button
                type="button"
                onClick={() => setSelectedYear(selectedYear)}
                className="btn-secondary text-xs py-1.5 px-3 flex items-center gap-1.5"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Retry</span>
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto pb-2 scrollbar-thin">
              <div className="min-w-[760px] select-none">
                {/* Month labels row */}
                <div className="flex text-[11px] text-[#71717A] dark:text-[#8B949E] font-mono h-5 mb-1 pl-8 relative">
                  {monthLabels.map((m, idx) => (
                    <span
                      key={idx}
                      className="absolute"
                      style={{
                        left: `${m.colIndex * 14.5 + 34}px`,
                      }}
                    >
                      {m.label}
                    </span>
                  ))}
                </div>

                {/* Grid: Days of week (Mon, Wed, Fri) + 7 rows x 53 columns */}
                <div className="flex gap-2 items-start">
                  {/* Day labels column */}
                  <div className="flex flex-col text-[9px] text-[#71717A] dark:text-[#8B949E] font-mono leading-none pt-[1px] w-6 shrink-0 gap-[3px]">
                    <span className="h-[11px] flex items-center opacity-0">Sun</span>
                    <span className="h-[11px] flex items-center">Mon</span>
                    <span className="h-[11px] flex items-center opacity-0">Tue</span>
                    <span className="h-[11px] flex items-center">Wed</span>
                    <span className="h-[11px] flex items-center opacity-0">Thu</span>
                    <span className="h-[11px] flex items-center">Fri</span>
                    <span className="h-[11px] flex items-center opacity-0">Sat</span>
                  </div>

                  {/* Heatmap Columns (Weeks) */}
                  <div className="flex gap-[3.5px]">
                    {weeks.map((week, wIdx) => (
                      <div key={wIdx} className="flex flex-col gap-[3.5px]">
                        {week.map((day, dIdx) => {
                          if (!day) {
                            return (
                              <div
                                key={dIdx}
                                className="w-[11px] h-[11px] opacity-0"
                              />
                            );
                          }

                          return (
                            <motion.div
                              key={dIdx}
                              whileHover={{ scale: 1.35 }}
                              transition={{ duration: 0.1 }}
                              onMouseEnter={(e) => {
                                const rect = e.currentTarget.getBoundingClientRect();
                                setHoveredDay({
                                  date: day.date,
                                  count: day.count,
                                  x: rect.left + rect.width / 2,
                                  y: rect.top,
                                });
                              }}
                              onMouseLeave={() => setHoveredDay(null)}
                              className={`w-[11px] h-[11px] rounded-[2px] border transition-all cursor-pointer ${getLevelColor(
                                day.level
                              )}`}
                            />
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Legend */}
                <div className="flex flex-wrap items-center justify-between text-xs text-[#71717A] dark:text-[#8B949E] mt-4 pt-3 border-t border-[#E4E4E7] dark:border-[#21262D]">
                  <a
                    href="https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] hover:text-[#09090B] dark:hover:text-[#FAFAFA] underline underline-offset-2 transition-colors"
                  >
                    Learn how we count contributions
                  </a>

                  <div className="flex items-center gap-1.5 text-[11px]">
                    <span>Less</span>
                    <span className="w-[10px] h-[10px] rounded-[2px] bg-[#EBEDF0] dark:bg-[#161B22] border border-[#E1E4E8] dark:border-[#21262D]" />
                    <span className="w-[10px] h-[10px] rounded-[2px] bg-[#0E4429]" />
                    <span className="w-[10px] h-[10px] rounded-[2px] bg-[#006D32]" />
                    <span className="w-[10px] h-[10px] rounded-[2px] bg-[#26A641]" />
                    <span className="w-[10px] h-[10px] rounded-[2px] bg-[#39D353]" />
                    <span>More</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Year Filter Buttons (Matching GitHub's right-side year selector) */}
        <div className="flex lg:flex-col gap-1.5 shrink-0 w-full lg:w-36 overflow-x-auto pb-1 lg:pb-0">
          <button
            type="button"
            onClick={() => setSelectedYear("last")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold text-left transition-all ${
              selectedYear === "last"
                ? "bg-[#0969DA] text-white shadow-xs"
                : "text-[#71717A] dark:text-[#8B949E] hover:text-[#09090B] dark:hover:text-[#FAFAFA] hover:bg-[#F4F4F5] dark:hover:bg-[#18181B]"
            }`}
          >
            Last Year
          </button>

          {availableYears.map((yr) => (
            <button
              key={yr}
              type="button"
              onClick={() => setSelectedYear(yr)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold text-left transition-all ${
                selectedYear === yr
                  ? "bg-[#0969DA] text-white shadow-xs"
                  : "text-[#71717A] dark:text-[#8B949E] hover:text-[#09090B] dark:hover:text-[#FAFAFA] hover:bg-[#F4F4F5] dark:hover:bg-[#18181B]"
              }`}
            >
              {yr}
            </button>
          ))}
        </div>
      </div>

      {/* Floating Tooltip */}
      {hoveredDay && (
        <div
          style={{
            position: "fixed",
            left: `${hoveredDay.x}px`,
            top: `${hoveredDay.y - 8}px`,
            transform: "translate(-50%, -100%)",
          }}
          className="pointer-events-none z-50 px-2.5 py-1.5 rounded-lg bg-[#09090B] dark:bg-[#21262D] text-white text-[11px] font-medium shadow-xl border border-neutral-700 whitespace-nowrap animate-in fade-in zoom-in-95 duration-100"
        >
          <span className="font-semibold text-emerald-400">
            {hoveredDay.count === 0 ? "No" : hoveredDay.count}{" "}
            {hoveredDay.count === 1 ? "contribution" : "contributions"}
          </span>{" "}
          on {formatDate(hoveredDay.date)}
          <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] border-4 border-transparent border-t-[#09090B] dark:border-t-[#21262D]" />
        </div>
      )}
    </div>
  );
};

export default GithubContributions;
