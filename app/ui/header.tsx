"use client";

import NavBar from "./nav-bar";
import { lato } from "@/app/ui/fonts";
import ThemeToggle from "./theme-toggle";

export default function Header() {
  return (
    <div
      className={`${lato.className} sticky top-0 z-50 h-[10vh] w-full flex flex-row place-items-center dark:bg-[#020916] bg-white`}
    >
      <div className="flex w-full">
        <NavBar />
        <ThemeToggle className="ml-auto mr-[24px]"/>
      </div>
    </div>
  );
}
