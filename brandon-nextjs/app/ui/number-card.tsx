'use client'
import clsx from "clsx"

export default function NumberedCard ({isDayMode, number, title, content, className} : {isDayMode:boolean, number: number, title: string, content: string, className?:string}) {

    return (
        <div className={clsx(
            {
                "!text-black": isDayMode,
            },
            "flex flex-col transition-colors text-white" + ' ' + className,
        )}>
            <span
                className={clsx(
                    "text-dayOrange text-[28px] h-[32px]",
                    {
                        "!text-nightGold": !isDayMode
                    }
                )}
            >
                {number}
            </span>
            <span className="font-semibold text-[24px] whitespace-nowrap h-[32px] mb-[12px] mt-[12px]">{title}</span>
            <span className="text-[16px]">{content}</span>
        </div>
    )
}
