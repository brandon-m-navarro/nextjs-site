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
      <span className="!text-dayOrange text-[28px] h-[32px] dark:!text-nightGold">
        {number}
      </span>
      <span className="font-semibold text-[24px] whitespace-nowrap h-[32px] mb-[12px] mt-[12px]">
        {title}
      </span>
      <span className="text-[16px]">{content}</span>
    </div>
  );
}
