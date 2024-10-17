'use client'
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { envelope } from '@awesome.me/kit-KIT_CODE/icons/classic/solid'


export default function ResumePage() {
  return (
    <div className="dark:bg-nightSoft">
        <div className="flex flex-wrap max-w-[800px] my-[12px] mx-auto box-border p-[12px] rounded-[4px] bg-white/[0.5] dark:bg-white/[0.25]">
            <div id="Face&Title" className="mb-[12px] basis-full items-center">
                <div>
                    <Image
                        src="/myface_hd.jpg"
                        width={250}
                        height={250}
                        alt="My Face"
                    />
                </div>
                <div className="flex flex-col text-left mr-auto">
                    <span className="mb-[6px] text-[32px]">Brandon Manuel Navarro</span>
                    <span className="">Software engineer with a focus on frontend development</span>
                </div>
            </div>
            <div className="box-border pl-[8px]">
                <div className="mb-[1em]">
                    <div className="border-b-black dark:border-b-white/50">
                        <span className="text-left mb-[12px] text-[14px] font-bold leading-[32px]">CONTACT</span>
                    </div>

                    <div>
                        <FontAwesomeIcon icon={envelope} />
                    </div>
                </div>
                <div>SKills Section</div>
            </div>
            <div></div>
            <div></div>
        </div>
    </div>
  );
}
