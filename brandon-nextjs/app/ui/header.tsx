'use client'

import NavBar from "./nav-bar"
import { lato } from '@/app/ui/fonts';

export default function Header() {
    return (
        <div className={`${lato.className} sticky top-0 z-50 h-[10vh] w-full flex flex-row place-items-center bg-white dark:bg-night`}>
            <div className="flex w-full">
                <NavBar/>
            </div>
        </div>
    )
}
