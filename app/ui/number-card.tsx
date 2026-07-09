"use client";
import ThemeContext from "../store/ThemeContext";
import { useContext } from "react";
import clsx from "clsx";

export default function NumberedCard({
  number,
  title,
  content,
  className,
}: {
  number: number;
  title: string;
  content: string;
  className?: string;
}) {
  const { getIsDark } = useContext(ThemeContext);
  return (
    <div
      className={
        "flex flex-col !text-black dark:!text-white transition-colors" +
        " " +
        className
      }
    >
      <span className={`mb-[12px] text-center text-[28px] h-[32px] 
        ${!getIsDark() ? "text-[#FF3205]":"text-[rgba(255, 239, 203, 1)"}
        `}>
        {number}
      </span>
      <span className="font-semibold text-center text-[20px] whitespace-nowrap h-[28px] mb-[12px]">
        {title}
      </span>
      <span className="text-[14px] font-light">{content}</span>
    </div>
  );
}
