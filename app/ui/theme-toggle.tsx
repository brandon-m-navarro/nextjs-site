"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import ThemeContext from "../store/ThemeContext";

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { applyLight, applyDark, getIsDark } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (getIsDark()) {
      applyLight();
    } else {
      applyDark();
    }
  };

  if (!mounted) {
    return (
      <div className={`flex items-center ${className}`}>
        <button
          className="relative flex items-center justify-center w-8 h-8 cursor-pointer rounded-full border-none bg-[#81a988] opacity-75 transition-all duration-250 ease-in-out hover:opacity-100 hover:scale-110"
          aria-label="Toggle theme"
        >
          <div className="w-[18px] h-[18px]" />
        </button>
      </div>
    );
  }

  const isDark = getIsDark();
  const iconSrc = isDark ? "/sun.svg" : "/moon.svg";
  const iconAlt = isDark ? "Switch to light mode" : "Switch to dark mode";
  const ariaLabel = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <div className={`flex items-center ${className}`}>
      <button
        className={`relative flex items-center justify-center w-8 h-8 cursor-pointer rounded-full border-none opacity-75 transition-all duration-250 ease-in-out hover:opacity-100 hover:scale-110 ${
          isDark ? "bg-[#81a988]" : "bg-[#35364a]"
        }`}
        onClick={toggleTheme}
        aria-label={ariaLabel}
      >
        <Image
          src={iconSrc}
          width={18}
          height={18}
          alt={iconAlt}
          className="w-[18px] h-[18px] pointer-events-none transition-transform duration-250 ease-in-out"
        />
      </button>
    </div>
  );
}
