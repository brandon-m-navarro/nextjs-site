"use client";

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
  return (
    <div
      className={
        "flex flex-col !text-black dark:!text-white transition-colors" +
        " " +
        className
      }
    >
      <span className="!text-dayOrange mb-[12px] text-center text-[28px] h-[32px] dark:!text-nightGold">
        {number}
      </span>
      <span className="font-semibold text-center text-[20px] whitespace-nowrap h-[28px] mb-[12px]">
        {title}
      </span>
      <span className="text-[14px] font-light">{content}</span>
    </div>
  );
}
