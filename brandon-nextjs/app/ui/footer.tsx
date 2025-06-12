'use client'

import clsx from "clsx"
import ThemeToggle from "./theme-toggle"
import Image from "next/image"
import { useContext, useEffect } from "react";
import ThemeContext from "../store/ThemeContext";
import { copyTextToClipboard } from "../lib/utils"

export default function Footer() {
    const {getIsDark} = useContext(ThemeContext);

    let closeEmailPopup = function() {
        const popupDiv = window.document.getElementById('email-popup');
        if (popupDiv) {
            popupDiv.style.display = 'none';
        }
    }

    function handleCopyEmail () {
        const popup = window.document.getElementById('email-popup');
        const emailCopied = window.document.getElementById('email-copied');

        // Show 'Copied' text in div and fade div out
        copyTextToClipboard('brandon.m.navarro@gmail.com');
        console.log('copied')
            emailCopied?.classList.add('translate-y-0');
            emailCopied?.classList.remove('translate-y-[-150%]');
        setTimeout(() => {
            emailCopied?.classList.remove('translate-y-0');
            emailCopied?.classList.add('translate-y-[-150%]');
        }, 1500)
    }

    function handleMaskClick () {
        const mask = window.document.getElementById('mask');
        mask?.classList.add('hidden');
        closeEmailPopup();
    }

    // 
    function handleEmailClick() {
        const popupDiv = window.document.getElementById('email-popup');
        const mask = window.document.getElementById('mask');
        if (popupDiv) {
            if (popupDiv.style.display+'' == 'flex') {
                popupDiv.style.display = 'none';
                mask?.classList.add('hidden');
            } else {
                popupDiv.style.display = 'flex';
                mask?.classList.remove('hidden');
            }
        }
    }

    return (
        <div className="relative h-[64px] w-full flex flex-row place-items-center border-t-2 border-black/25 dark:border-white/25 bg-white dark:bg-[#242532]">
            <div className="ml-[5%] hidden">
                <Image
                    src={'/react-brands_blue.png'}
                    width={44}
                    height={44}
                    alt="React Icon"
                    className="object-contain w-[44px] h-[44px] bg-[#23272f]/75 box-border p-[6px] cursor-pointer rounded-full"/>
            </div>
            <div className="z-10 flex justify-center items-center m-auto absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-black">
                <button onClick={()=> {window?.open('https://www.linkedin.com/in/brandon-navarro-b36b97149/', '_blank')?.focus()}}>
                    <Image
                        src={clsx({
                            '/linkedin-brands-solid.png': !getIsDark(),
                            '/linkedin-brands-solid_w.png': getIsDark()
                        })}
                        width={38}
                        height={41}
                        alt="LinkedIn Icon"
                        className="object-contain w-[38px] h-[41px] p-[6px] cursor-pointer transition-opacity hover:opacity-75"
                    />
                </button>
                <button onClick={handleEmailClick} className="dark:text-white text-[14px] border-black/50 dark:border-white/50 mx-[12px] cursor-pointer leading-[41px] border-b-[1px] border-t-[1px]">brandon.m.navarro@gmail.com</button>
                <button onClick={()=> {window?.open('https://github.com/brandon-m-navarro', '_blank')?.focus()}}>
                    <Image
                        src={clsx({
                            '/square-github-solid.svg': !getIsDark(),
                            '/square-github-brands-solid_w.png': getIsDark()
                        })}
                        width={38}
                        height={41}
                        alt="Github Icon"
                        className="object-contain w-[38px] h-[41px] p-[6px] cursor-pointer transition-opacity hover:opacity-75"
                    />
                </button>
                <div id="email-popup" className="hidden z-10 absolute left-[50%] top-[-76px] translate-x-[-50%] h-[54px] leading-[23px] p-[6px] box-border rounded-[4px] bg-black dark:bg-[#242532] overflow-hidden">
                    <div id="email-copied" className="z-20 leading-[54px] absolute top-0 left-0 text-white w-full h-[54px] translate-y-[-150%] transition-transform bg-black dark:bg-[#242532] text-center">Copied</div>
                    <button onClick={handleCopyEmail} className="relative mr-[24px] cursor-pointer hover:shadow-white after:content[''] after:absolute after:bg-white after:w-full after:h-[2px] after:left-[50%] after:translate-x-[-200%] after:transition-transform after:top-[calc(100%+3px)] text-center hover:after:translate-x-[-50%]">
                        <Image
                            src={'/copy-solid_w.png'}
                            width={32}
                            height={28}
                            alt="Copy Icon"
                            className="object-contain w-[38px] h-[28px]"
                        />
                        <span className="text-white text-[14px]">Copy</span>
                    </button>
                    <button onClick={() => { window.location.href = "mailto:brandon.m.navarro@gmail.com?"; }} className="relative cursor-pointer hover:shadow-white after:content[''] after:absolute after:bg-white after:w-full after:h-[2px] after:left-[50%] after:translate-x-[200%] after:transition-transform after:top-[calc(100%+3px)] text-center hover:after:translate-x-[-50%]">
                        <Image
                            src={'/envelope-regular_w.png'}
                            width={32}
                            height={28}
                            alt="Envelope Icon"
                            className="object-contain w-[38px] h-[28px]"
                        />
                        <span className="text-white text-[14px]">Email</span>
                    </button>
                </div>
            </div>
            <div className="ml-auto">
                <ThemeToggle/>
            </div>
            <button id='mask' onClick={handleMaskClick} className="hidden absolute w-full h-[100vh] bottom-0 z-0 cursor-default"></button>
        </div>
    )
}
