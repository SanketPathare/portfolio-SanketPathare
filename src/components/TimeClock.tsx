"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TimeClock: React.FC = () => {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getISTTime = () => {
    if (!time) {
      return {
        hoursMinutes: "02:59",
        period: "pm",
        dateStr: "October 21",
        hour: 2,
        minute: 59,
        second: 0,
      };
    }

    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    const dateFormatter = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Kolkata",
      month: "long",
      day: "numeric",
    });

    const parts = formatter.formatToParts(time);
    const hourVal = parts.find((p) => p.type === "hour")?.value || "12";
    const minVal = parts.find((p) => p.type === "minute")?.value || "00";
    const dayPeriod = (
      parts.find((p) => p.type === "dayPeriod")?.value || "pm"
    ).toLowerCase();

    const hourPart = parseInt(hourVal, 10);
    const minutePart = parseInt(minVal, 10);
    const secondPart = time.getSeconds();

    return {
      hoursMinutes: `${hourVal}:${minVal}`,
      period: dayPeriod,
      dateStr: dateFormatter.format(time),
      hour: hourPart,
      minute: minutePart,
      second: secondPart,
    };
  };

  const ist = getISTTime();

  // Analog angles in degrees
  const secondAngle = (ist.second / 60) * 360;
  const minuteAngle = ((ist.minute + ist.second / 60) / 60) * 360;
  const hourAngle = (((ist.hour % 12) + ist.minute / 60) / 12) * 360;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -4, transition: { duration: 0.2, ease: "easeOut" } }}
      className="bg-white dark:bg-[#121215] border border-[#E4E4E7] dark:border-[#27272A] rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#D4D4D8] dark:hover:border-[#3F3F46] transition-all shadow-[0_2px_12px_rgba(0,0,0,0.02)] h-full"
    >
      <div>
        <div className="text-xs font-semibold tracking-widest uppercase text-[#71717A] dark:text-[#A1A1AA] mb-2">
          TIMEZONE 
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#09090B] dark:text-[#FAFAFA] mb-6">
          Pune, <span className="text-[#71717A] dark:text-[#A1A1AA]">India</span>
        </h2>

        {/* Digital & Analog Display */}
        <div className="flex flex-row items-center justify-between gap-2 sm:gap-4 py-2 sm:py-4 overflow-hidden">
          {/* Digital Time matching user reference image */}
          <div className="flex items-center gap-2 sm:gap-4 min-w-0">
            <span className="text-3xl xs:text-4xl sm:text-6xl font-bold tracking-tight text-[#09090B] dark:text-[#FAFAFA] font-mono tabular-nums leading-none">
              {ist.hoursMinutes}
            </span>
            <div className="flex flex-col text-left leading-tight">
              <span className="text-sm sm:text-lg font-semibold text-[#09090B] dark:text-[#FAFAFA] lowercase">
                {ist.period}
              </span>
              <span className="text-[11px] sm:text-xs text-[#71717A] dark:text-[#A1A1AA] font-medium whitespace-nowrap mt-0.5">
                {ist.dateStr}
              </span>
            </div>
          </div>

          {/* Minimalist Monochrome Analog Clock Face */}
          <div className="flex items-center justify-center flex-shrink-0">
            <svg
              viewBox="0 0 100 100"
              className="w-20 h-20 xs:w-24 xs:h-24 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 drop-shadow-md select-none transition-all duration-300"
            >
              {/* Outer dial */}
              <circle
                cx="50"
                cy="50"
                r="47"
                className="fill-[#FAFAFA] dark:fill-[#18181B] stroke-[#E4E4E7] dark:stroke-[#27272A]"
                strokeWidth="1.5"
              />

              {/* 12 Hour Ticks */}
              {[...Array(12)].map((_, i) => {
                const angle = (i * 30 * Math.PI) / 180;
                const isMajor = i % 3 === 0;
                const r1 = 44;
                const r2 = isMajor ? 38 : 41;
                const x1 = 50 + r1 * Math.sin(angle);
                const y1 = 50 - r1 * Math.cos(angle);
                const x2 = 50 + r2 * Math.sin(angle);
                const y2 = 50 - r2 * Math.cos(angle);
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    className={
                      isMajor
                        ? "stroke-[#09090B] dark:stroke-[#FAFAFA]"
                        : "stroke-[#A1A1AA] dark:stroke-[#52525B]"
                    }
                    strokeWidth={isMajor ? 2.5 : 1.2}
                    strokeLinecap="round"
                  />
                );
              })}

              {/* Hour Hand */}
              <line
                x1="50"
                y1="50"
                x2={50 + 22 * Math.sin((hourAngle * Math.PI) / 180)}
                y2={50 - 22 * Math.cos((hourAngle * Math.PI) / 180)}
                className="stroke-[#09090B] dark:stroke-[#FAFAFA]"
                strokeWidth="3.2"
                strokeLinecap="round"
              />

              {/* Minute Hand */}
              <line
                x1="50"
                y1="50"
                x2={50 + 32 * Math.sin((minuteAngle * Math.PI) / 180)}
                y2={50 - 32 * Math.cos((minuteAngle * Math.PI) / 180)}
                className="stroke-[#71717A] dark:stroke-[#A1A1AA]"
                strokeWidth="2.2"
                strokeLinecap="round"
              />

              {/* Second Hand */}
              <line
                x1="50"
                y1="50"
                x2={50 + 38 * Math.sin((secondAngle * Math.PI) / 180)}
                y2={50 - 38 * Math.cos((secondAngle * Math.PI) / 180)}
                className="stroke-[#18181B] dark:stroke-[#E4E4E7]"
                strokeWidth="1"
                strokeLinecap="round"
              />

              {/* Center Dot */}
              <circle
                cx="50"
                cy="50"
                r="3.5"
                className="fill-[#09090B] dark:fill-[#FAFAFA] stroke-white dark:stroke-[#18181B]"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Card Footer */}
      <div className="pt-6 mt-4 border-t border-[#E4E4E7] dark:border-[#27272A] flex justify-between items-center">
        <span className="text-xs font-medium text-[#A1A1AA] dark:text-[#71717A]">
          UTC+05:30 • IST
        </span>
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#71717A] dark:text-[#A1A1AA]">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Available for hire
        </span>
      </div>
    </motion.div>
  );
};

export default TimeClock;
