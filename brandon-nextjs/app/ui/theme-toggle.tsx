"use-client";
import clsx from "clsx";
import Sun from "../../public/sun.svg";
import Moon from "../..//public/moon.svg";
export default function ThemeToggle({
  isDayMode = true,
}: {
  isDayMode: boolean;
}) {
  return (
    <div className="flex w-[150px] justify-around">
      <div
        className={clsx(
          "rounded-full opacity-50 hover:opacity-75 transition-all bg-green w-[36px] h-[36px] flex justify-center items-center cursor-pointer",
          {
            "!opacity-100": isDayMode,
          }
        )}
      >
        <img src={Sun} className="w-[24px] h-[24px]"></img>
      </div>
      <div
        className={clsx(
          "rounded-full opacity-25 hover:bg-arsenic hover:opacity-75 transition-all bg-arsenic w-[36px] h-[36px] flex justify-center items-center cursor-pointer",
          {
            "!opacity-100": !isDayMode,
          }
        )}
      >
        <img src={Moon} className="w-[24px] h-[24px]"></img>
      </div>
    </div>
  );
}
