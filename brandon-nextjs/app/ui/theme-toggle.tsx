"use client";
import clsx from "clsx";
import Image from "next/image";
import React, { useState } from 'react';

export default function ThemeToggle() {

  const [isDayMode, setDayMode] = useState(true);

    // Define click handler for each Icon button
    const clickHandler = function (event: React.SyntheticEvent<HTMLButtonElement | HTMLDivElement>) {

        // Check which button was selected
        const mode = event.currentTarget.dataset.mode == 'day';
        setDayMode(mode);
    }

  return (
    <div className="flex flex-row-reverse w-[150px] justify-around">
      <button
        data-mode='day'
        className={clsx(
          "rounded-full opacity-50 hover:opacity-75 transition-all bg-green w-[36px] h-[36px] flex justify-center items-center cursor-pointer",
          {
            "!opacity-100": isDayMode,
          }
        )}
        onClick={clickHandler}
      >
        <Image
          src='/sun.svg'
          width={24}
          height={24}
          alt='Sun icon'
          className="w-[24px] h-[24px] pointer-events-none"
        />
      </button>
      <button
        data-mode='night'
        className={clsx(
          "rounded-full opacity-25 hover:opacity-75 transition-all bg-arsenic w-[36px] h-[36px] flex justify-center items-center cursor-pointer",
          {
            "!opacity-100": !isDayMode,
          }
        )}
        onClick={clickHandler}

      >
        <Image
          src='/moon.svg'
          width={24}
          height={24}
          alt='Moon icon'
          className="w-[24px] h-[24px] pointer-events-none"
        />
      </button>
    </div>
  );
}
