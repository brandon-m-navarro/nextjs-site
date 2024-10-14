"use-client";
import clsx from "clsx";
import Sun from "../../public/sun.svg";
import Moon from "../..//public/moon.svg";
export default function ThemeToggle({
  isDayMode = true,
}: {
  isDayMode: boolean;
}) {

    let clickHandler = function (event) {
        // Check ehich button was selected
        let mode = event.detail.dataset.mode;
        
    }

  return (
    <div className="flex w-[150px] justify-around">
      <div
        data-mode='day'
        className={clsx(
          "rounded-full opacity-50 hover:opacity-75 transition-all bg-green w-[36px] h-[36px] flex justify-center items-center cursor-pointer",
          {
            "!opacity-100": isDayMode,
          }
        )}
      >
        <img src={Sun} className="w-[24px] h-[24px] pointer-events-none"></img>
      </div>
      <div
        data-mode='night'
        className={clsx(
          "rounded-full opacity-25 hover:bg-arsenic hover:opacity-75 transition-all bg-arsenic w-[36px] h-[36px] flex justify-center items-center cursor-pointer",
          {
            "!opacity-100": !isDayMode,
          }
        )}
      >
        <img src={Moon} className="w-[24px] h-[24px] pointer-events-none"></img>
      </div>
    </div>
  );
}
