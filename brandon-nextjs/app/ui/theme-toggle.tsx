"use client";
import Image from "next/image";
import React, { useContext } from 'react';
import ThemeContext from "../store/ThemeContext";

export default function ThemeToggle() {

  const {applyLight, applyDark} = useContext(ThemeContext);

  return (
    <div className="flex flex-row-reverse w-[150px] justify-around">
      <button
        className="rounded-full transition-all bg-green w-[36px] h-[36px] flex justify-center items-center cursor-pointer dark:hover:opacity-75 dark:opacity-50"
        onClick={applyLight}
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
        className="rounded-full opacity-25 hover:opacity-75 transition-all bg-arsenic w-[36px] h-[36px] flex justify-center items-center cursor-pointer dark:opacity-100"
        onClick={applyDark}
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
