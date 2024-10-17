'use client'

import NavBar from "./nav-bar"
import ThemeToggle from "./theme-toggle"

export default function Header() {
    return (
        <div className="h-[10vh] w-full flex flex-row place-items-center bg-white dark:bg-black">
            <div className="w-[150px]"></div>
            <div className="flex justify-around w-full">
                <NavBar/>
            </div>
            <ThemeToggle/>
        </div>
    )
}
