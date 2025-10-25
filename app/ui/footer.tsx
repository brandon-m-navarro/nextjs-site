"use client";

import clsx from "clsx";
import Image from "next/image";
import { useContext } from "react";
import ThemeContext from "../store/ThemeContext";
import { copyTextToClipboard } from "../lib/utils";

export default function Footer() {
  const { getIsDark } = useContext(ThemeContext);

  // This function is used to copy the email address to the clipboard
  function handleCopyEmail() {
    const emailCopied = window.document.getElementById("email-copied");

    // Show 'Copied' text in div and fade div out
    copyTextToClipboard("brandon.m.navarro@gmail.com");
    console.log("copied");
    emailCopied?.classList.add("translate-y-0");
    emailCopied?.classList.remove("translate-y-[-150%]");
    setTimeout(() => {
      emailCopied?.classList.remove("translate-y-0");
      emailCopied?.classList.add("translate-y-[-150%]");
    }, 1500);
  }

  // This function is used to close the email popup
  const closeEmailPopup = function () {
    const popupDiv = window.document.getElementById("email-popup");
    if (popupDiv) {
      popupDiv.style.display = "none";
    }
  };

  // This is used to close the email popup when clicking outside of it
  // It adds a 'hidden' class to the mask element to hide it
  // and calls the closeEmailPopup function to hide the popup
  function handleMaskClick() {
    const mask = window.document.getElementById("mask");
    mask?.classList.add("hidden");
    closeEmailPopup();
  }

  // Function to handle the email button click
  function handleEmailClick() {
    const popupDiv = window.document.getElementById("email-popup");
    const mask = window.document.getElementById("mask");
    if (popupDiv) {
      if (popupDiv.style.display + "" == "flex") {
        popupDiv.style.display = "none";
        mask?.classList.add("hidden");
      } else {
        popupDiv.style.display = "flex";
        mask?.classList.remove("hidden");
      }
    }
  }

  return (
    <div className="relative sm:flex-nowrap sm:h-[64px] pt-[12px] pb-[12px] sm:pt-0 sm:pb-0 flex-wrap w-full flex flex-row place-items-center border-t-2 border-black/25 dark:border-white/25 bg-white dark:bg-[#020a16]">
      <div className="z-10 flex justify-center items-center mb-[12px] sm:mb-0 m-auto sm:absolute sm:top-[50%] sm:left-[50%] sm:translate-x-[-50%] sm:translate-y-[-50%] text-black relative basis-full translate-x-0 translate-y-0">
        <button
          onClick={() => {
            window
              ?.open(
                "https://www.linkedin.com/in/brandon-navarro-b36b97149/",
                "_blank"
              )
              ?.focus();
          }}
        >
          <Image
            src={clsx({
              "/linkedin-brands-solid.png": !getIsDark(),
              "/linkedin-brands-solid_w.png": getIsDark(),
            })}
            width={38}
            height={41}
            alt="LinkedIn Icon"
            className="object-contain w-[38px] h-[41px] p-[6px] cursor-pointer transition-opacity hover:opacity-75"
          />
        </button>
        <button
          onClick={handleEmailClick}
          className="dark:text-white text-[14px] border-black/50 dark:border-white/50 mx-[12px] cursor-pointer leading-[41px] border-b-[1px] border-t-[1px]"
        >
          brandon.m.navarro@gmail.com
        </button>
        <button
          onClick={() => {
            window
              ?.open("https://github.com/brandon-m-navarro", "_blank")
              ?.focus();
          }}
        >
          <Image
            src={clsx({
              "/square-github-solid.svg": !getIsDark(),
              "/square-github-brands-solid_w.png": getIsDark(),
            })}
            width={38}
            height={41}
            alt="Github Icon"
            className="object-contain w-[38px] h-[41px] p-[6px] cursor-pointer transition-opacity hover:opacity-75"
          />
        </button>
        <div
          id="email-popup"
          className="hidden z-10 absolute left-[50%] top-[-76px] translate-x-[-50%] h-[54px] leading-[23px] p-[6px] box-border rounded-[4px] bg-black dark:bg-[#242532] overflow-hidden"
        >
          <div
            id="email-copied"
            className="z-20 leading-[54px] absolute top-0 left-0 text-white w-full h-[54px] translate-y-[-150%] transition-transform bg-black dark:bg-[#242532] text-center"
          >
            Copied
          </div>
          <button
            onClick={handleCopyEmail}
            className="relative mr-[24px] cursor-pointer hover:shadow-white after:content[''] after:absolute after:bg-white after:w-full after:h-[2px] after:left-[50%] after:translate-x-[-200%] after:transition-transform after:top-[calc(100%+3px)] text-center hover:after:translate-x-[-50%]"
          >
            <Image
              src={"/copy-solid_w.png"}
              width={32}
              height={28}
              alt="Copy Icon"
              className="object-contain w-[38px] h-[28px]"
            />
            <span className="text-white text-[14px]">Copy</span>
          </button>
          <button
            onClick={() => {
              window.location.href = "mailto:brandon.m.navarro@gmail.com?";
            }}
            className="relative cursor-pointer hover:shadow-white after:content[''] after:absolute after:bg-white after:w-full after:h-[2px] after:left-[50%] after:translate-x-[200%] after:transition-transform after:top-[calc(100%+3px)] text-center hover:after:translate-x-[-50%]"
          >
            <Image
              src={"/envelope-regular_w.png"}
              width={32}
              height={28}
              alt="Envelope Icon"
              className="object-contain w-[38px] h-[28px]"
            />
            <span className="text-white text-[14px]">Email</span>
          </button>
        </div>
      </div>
      <button
        id="mask"
        onClick={handleMaskClick}
        className="hidden absolute w-full h-[100vh] bottom-0 z-0 cursor-default"
      ></button>
    </div>
  );
}
