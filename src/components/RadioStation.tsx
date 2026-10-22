"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Radio,
  Disc3,
  Sparkles,
  Loader2,
} from "lucide-react";

interface Station {
  id: string;
  name: string;
  genre: string;
  freq: string;
  url: string;
  backupUrl?: string;
  description: string;
  location: string;
}

const STATIONS: Station[] = [
  {
    id: "mirchi-top20",
    name: "Mirchi Top 20",
    genre: "Latest Bollywood Hits",
    freq: "98.3 FM",
    url: "https://drive.uber.radio/uber/bollywoodnow/icecast.audio",
    backupUrl: "https://eu8.fastcast4u.com/proxy/clyedupq/stream",
    description: "Trending Bollywood chartbusters & fresh Hindi hits.",
    location: "Mumbai, India",
  },
  {
    id: "radio-mirchi",
    name: "Radio Mirchi Live",
    genre: "Bollywood & Desi Hits",
    freq: "98.3 FM",
    url: "https://eu8.fastcast4u.com/proxy/clyedupq/stream",
    backupUrl: "https://drive.uber.radio/uber/bollywoodnow/icecast.audio",
    description: "Mirchi sunne wale always khush! Pure Hindi radio.",
    location: "Delhi, India",
  },
  {
    id: "mirchi-love",
    name: "Mirchi Love",
    genre: "Romantic Bollywood",
    freq: "104.0 FM",
    url: "https://drive.uber.radio/uber/bollywoodlove/icecast.audio",
    backupUrl: "https://azuracast.vibesounds.in:8010/radio.mp3",
    description: "Non-stop soothing Hindi romantic melodies & love songs.",
    location: "Pune, India",
  },
  {
    id: "hindi-gold",
    name: "Hindi Gold Radio",
    genre: "Retro Evergreen Classics",
    freq: "101.4 FM",
    url: "https://azuracast.vibesounds.in:8010/radio.mp3",
    backupUrl: "https://drive.uber.radio/uber/bollywood2010s/icecast.audio",
    description: "Timeless golden classics from Kishore, Lata, Rafi & RD Burman.",
    location: "India",
  },
  {
    id: "bollywood-2010s",
    name: "Bollywood 2010s",
    genre: "2010s Nostalgia Hits",
    freq: "93.5 FM",
    url: "https://drive.uber.radio/uber/bollywood2010s/icecast.audio",
    backupUrl: "https://drive.uber.radio/uber/bollywoodnow/icecast.audio",
    description: "Superhit Bollywood anthems from the glorious 2010s era.",
    location: "India",
  },
  {
    id: "groove-salad",
    name: "Lo-Fi Coding Chill",
    genre: "Ambient Beats for Devs",
    freq: "94.5 FM",
    url: "https://ice1.somafm.com/groovesalad-128-mp3",
    backupUrl: "https://drive.uber.radio/uber/bollywoodnow/icecast.audio",
    description: "Deep chillout beats for high-focus coding & development.",
    location: "Global",
  },
];

const RadioStation: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isBuffering, setIsBuffering] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.85);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [triedBackup, setTriedBackup] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const station = STATIONS[currentIdx];

  // Initialize HTML5 Audio Element
  useEffect(() => {
    const audio = new Audio();
    audio.preload = "none";
    audio.volume = volume;

    const onPlay = () => {
      setIsPlaying(true);
      setIsBuffering(false);
    };

    const onPlaying = () => {
      setIsPlaying(true);
      setIsBuffering(false);
    };

    const onWaiting = () => {
      setIsBuffering(true);
    };

    const onPause = () => {
      setIsPlaying(false);
      setIsBuffering(false);
    };

    const onError = () => {
      console.warn("Audio stream error, attempting backup stream...");
      if (!triedBackup && station.backupUrl) {
        setTriedBackup(true);
        audio.src = station.backupUrl;
        audio.load();
        audio.play().catch(() => {
          setIsBuffering(false);
          setIsPlaying(false);
        });
      } else {
        setIsBuffering(false);
        setIsPlaying(false);
      }
    };

    audio.addEventListener("play", onPlay);
    audio.addEventListener("playing", onPlaying);
    audio.addEventListener("waiting", onWaiting);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("error", onError);

    audioRef.current = audio;

    return () => {
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("playing", onPlaying);
      audio.removeEventListener("waiting", onWaiting);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("error", onError);
      audio.pause();
      audio.src = "";
    };
  }, []);

  // Sync volume with audio element
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume;
    }
  }, [volume, isMuted]);

  // Station Switch Handler
  const playStation = (idx: number, shouldPlay: boolean = true) => {
    const target = STATIONS[idx];
    setCurrentIdx(idx);
    setTriedBackup(false);

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = target.url;
      audioRef.current.load();

      if (shouldPlay) {
        setIsBuffering(true);
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setIsPlaying(true);
              setIsBuffering(false);
            })
            .catch((err) => {
              console.warn("Primary stream playback error:", err);
              if (target.backupUrl) {
                audioRef.current!.src = target.backupUrl;
                audioRef.current!.load();
                audioRef.current!.play().catch(() => {
                  setIsBuffering(false);
                  setIsPlaying(false);
                });
              } else {
                setIsBuffering(false);
                setIsPlaying(false);
              }
            });
        }
      } else {
        setIsPlaying(false);
        setIsBuffering(false);
      }
    }
  };

  // Toggle Play / Pause
  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      setIsBuffering(false);
    } else {
      setIsBuffering(true);
      if (!audioRef.current.src || !audioRef.current.src.includes(station.url)) {
        audioRef.current.src = station.url;
        audioRef.current.load();
      }
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setIsBuffering(false);
          })
          .catch((err) => {
            console.warn("Primary stream failed, trying backup:", err);
            if (station.backupUrl) {
              setTriedBackup(true);
              audioRef.current!.src = station.backupUrl;
              audioRef.current!.load();
              audioRef.current!
                .play()
                .then(() => {
                  setIsPlaying(true);
                  setIsBuffering(false);
                })
                .catch(() => {
                  setIsBuffering(false);
                  setIsPlaying(false);
                });
            } else {
              setIsBuffering(false);
              setIsPlaying(false);
            }
          });
      }
    }
  };

  const handleNext = () => {
    const nextIdx = (currentIdx + 1) % STATIONS.length;
    playStation(nextIdx, isPlaying);
  };

  const handlePrev = () => {
    const prevIdx = (currentIdx - 1 + STATIONS.length) % STATIONS.length;
    playStation(prevIdx, isPlaying);
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

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
        {/* Top Tag & Live India Broadcast Status */}
        <div className="flex items-center justify-between mb-2">
          <div className="text-xs font-semibold tracking-widest uppercase text-[#71717A] dark:text-[#A1A1AA] flex items-center gap-2">
            <Radio className="w-3.5 h-3.5 text-[#09090B] dark:text-[#FAFAFA]" />
            LIVE RADIO • INDIA
          </div>

          {/* Always Online / 24/7 Live Indicator */}
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase transition-colors ${
              isPlaying
                ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30"
                : "bg-emerald-500/5 text-emerald-700 dark:text-emerald-400/90 border border-emerald-500/20"
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full bg-emerald-500 ${
                isPlaying ? "animate-ping" : "animate-pulse"
              }`}
            />
            {isBuffering ? "TUNING..." : isPlaying ? "ON AIR" : "LIVE 24/7"}
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-[#09090B] dark:text-[#FAFAFA] mb-1 truncate">
          {station.name}
        </h2>
        <p className="text-xs text-[#71717A] dark:text-[#A1A1AA] mb-4 truncate">
          {station.genre} • <span className="font-mono">{station.freq}</span> • {station.location}
        </p>

        {/* Visualizer & Playing Artwork Box */}
        <div className="bg-[#FAFAFA] dark:bg-[#18181B] border border-[#E4E4E7] dark:border-[#27272A] rounded-2xl p-3 sm:p-4 mb-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center bg-white dark:bg-[#121215] border border-[#E4E4E7] dark:border-[#27272A] shadow-sm text-[#09090B] dark:text-[#FAFAFA] flex-shrink-0 ${
                isPlaying ? "animate-[spin_4s_linear_infinite]" : ""
              }`}
            >
              <Disc3 className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-xs font-semibold text-[#09090B] dark:text-[#FAFAFA] truncate">
                {station.name}
              </span>
              <span className="text-[11px] text-[#71717A] dark:text-[#A1A1AA] truncate">
                {isBuffering ? "Buffering Indian live stream..." : isPlaying ? "Playing live from India" : station.description}
              </span>
            </div>
          </div>

          {/* Equalizer Frequency Bars */}
          <div className="flex items-end gap-1 h-7 px-1 flex-shrink-0">
            {[50, 85, 45, 95, 65, 80, 40].map((height, i) => (
              <span
                key={i}
                className="w-1 bg-[#09090B] dark:bg-[#FAFAFA] rounded-full transition-all duration-300"
                style={{
                  height: isPlaying ? `${height}%` : "18%",
                  animation: isPlaying
                    ? `pulse 0.75s ease-in-out infinite alternate ${i * 0.11}s`
                    : "none",
                }}
              />
            ))}
          </div>
        </div>

        {/* Player Controls & Volume */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          {/* Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              className="w-9 h-9 rounded-full border border-[#E4E4E7] dark:border-[#27272A] bg-white dark:bg-[#18181B] flex items-center justify-center text-[#71717A] dark:text-[#A1A1AA] hover:text-[#09090B] dark:hover:text-[#FAFAFA] hover:border-[#D4D4D8] dark:hover:border-[#3F3F46] transition-all"
              aria-label="Previous Station"
            >
              <SkipBack className="w-4 h-4" />
            </button>

            <button
              onClick={togglePlay}
              className="w-11 h-11 rounded-full bg-[#09090B] dark:bg-[#FAFAFA] text-white dark:text-[#09090B] flex items-center justify-center hover:scale-105 active:scale-95 shadow-sm transition-all"
              aria-label={isPlaying ? "Pause Radio" : "Play Radio"}
            >
              {isBuffering ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : isPlaying ? (
                <Pause className="w-5 h-5 fill-current" />
              ) : (
                <Play className="w-5 h-5 fill-current ml-0.5" />
              )}
            </button>

            <button
              onClick={handleNext}
              className="w-9 h-9 rounded-full border border-[#E4E4E7] dark:border-[#27272A] bg-white dark:bg-[#18181B] flex items-center justify-center text-[#71717A] dark:text-[#A1A1AA] hover:text-[#09090B] dark:hover:text-[#FAFAFA] hover:border-[#D4D4D8] dark:hover:border-[#3F3F46] transition-all"
              aria-label="Next Station"
            >
              <SkipForward className="w-4 h-4" />
            </button>
          </div>

          {/* Volume Control */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleMute}
              className="text-[#71717A] dark:text-[#A1A1AA] hover:text-[#09090B] dark:hover:text-[#FAFAFA] transition-colors"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted || volume === 0 ? (
                <VolumeX className="w-4 h-4" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={isMuted ? 0 : volume}
              onChange={(e) => {
                setVolume(parseFloat(e.target.value));
                if (isMuted) setIsMuted(false);
              }}
              className="w-16 sm:w-20 accent-[#09090B] dark:accent-[#FAFAFA] h-1.5 rounded-lg bg-[#E4E4E7] dark:bg-[#27272A] cursor-pointer"
              aria-label="Volume slider"
            />
          </div>
        </div>

        {/* Quick Station Selector Pills */}
        <div className="flex flex-wrap gap-1.5 mt-3.5">
          {STATIONS.map((s, idx) => (
            <button
              key={s.id}
              onClick={() => playStation(idx, true)}
              className={`px-2 sm:px-2.5 py-1 rounded-lg text-[10px] sm:text-[11px] font-medium transition-all ${
                currentIdx === idx
                  ? "bg-[#09090B] text-white dark:bg-[#FAFAFA] dark:text-[#09090B] shadow-xs"
                  : "bg-[#FAFAFA] dark:bg-[#18181B] text-[#71717A] dark:text-[#A1A1AA] border border-[#E4E4E7] dark:border-[#27272A] hover:border-[#D4D4D8] dark:hover:border-[#3F3F46]"
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>
      </div>

      {/* Card Footer */}
      <div className="pt-6 mt-4 border-t border-[#E4E4E7] dark:border-[#27272A] flex justify-between items-center">
        <span className="text-xs font-medium text-[#A1A1AA] dark:text-[#71717A] flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-amber-500" />
          128 kbps • Live Stream
        </span>
        <span className="text-xs font-medium text-[#71717A] dark:text-[#A1A1AA]">
          🇮🇳 India Radio Network
        </span>
      </div>
    </motion.div>
  );
};

export default RadioStation;
