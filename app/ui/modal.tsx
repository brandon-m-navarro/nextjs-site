import React, { useContext, useState } from "react";
import Image from "next/image";
import "@/app/ui/global.css";
import ThemeContext from "../store/ThemeContext";
import clsx from "clsx";
import localFont from "next/font/local";
const latoBold = localFont({
  src: "../fonts/added/lato-bold.woff2",
});

export default function Modal({
  title,
  content,
  children,
}: {
  title: string;
  content: React.ReactNode;
  children?: React.ReactNode;
}) {
  const { getIsDark } = useContext(ThemeContext);

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (typeof window !== "undefined") {
    if (modal) {
      window.document.body.classList.add("active-modal");
    } else {
      window.document.body.classList.remove("active-modal");
    }
  }

  return (
    <>
      <button onClick={toggleModal} className="block">
        {children}
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="absolute bg-slate-400 dark:bg-night top-[40%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-sm max-w-[600px] min-w-[275px] border-black border-[1px] dark:border-white/50">
            <div className="border-b-black border-b-[1px] leading-[32px] dark:border-b-white/50 mb-[12px]">
              <h2 className={`p-[12px] ${latoBold.className}`}>{title}</h2>
            </div>
            <div className="box-border px-[12px] pb-[12px]">{content}</div>
            <button
              className="absolute top-[4px] right-[10px] p-[12px] opacity-75 hover:opacity-100 transition-opacity"
              onClick={toggleModal}
            >
              <Image
                src={clsx({
                  "/square-xmark-solid.svg": !getIsDark(),
                  "/square-xmark-solid_w.svg": getIsDark(),
                })}
                height={20}
                width={20}
                alt="Close Modal Icon"
                className=""
              />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
