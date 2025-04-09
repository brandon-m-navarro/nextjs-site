'use client'
import React, { useContext, useEffect } from 'react'
import { debounceResizeListener } from '../lib/utils';
import clsx from 'clsx';
import ThemeContext from '../store/ThemeContext';

export default function Mountains({children} : {children?:React.ReactNode}) {

    const {getIsDark} = useContext(ThemeContext);

    // Listen to the native browser window resize event from within React component
    useEffect(() => {
        function handleResize() {

            const pathGroup = window.document.getElementById('paths');
            if (typeof pathGroup !== 'undefined' && pathGroup !== null) {
                pathGroup.style.transform = 'scaleX(' + window.innerWidth / 9 + '%)';
            }
        }

        // Put handleResize call into a variable so we can later remove the event listener
        const eventHandler = debounceResizeListener(handleResize);
        window.addEventListener('resize', eventHandler);

        // Ensure SVG is appropriatly sized on initial load
        handleResize();

        // Return values in useEffect should be a cleanup function that removes listener
        return () => window.removeEventListener('resize', eventHandler);
    })

    return (
        <div className='relative w-full'>
            <div>{children}</div>
            <div>
                <svg id="visual" width='100%' height="600">

                    <defs>
                    <filter id="sunMoon" x="0" y="0" width="100%" height="100%" filterUnits="userSpaceOnUse">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dx="-4" dy="-4"/>
                            <feGaussianBlur stdDeviation="10"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.623529 0 0 0 0 0.0196078 0 0 0 1 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2005_2"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2005_2" result="shape"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feMorphology radius="7" operator="erode" in="SourceAlpha" result="effect2_innerShadow_2005_2"/>
                        <feOffset/>
                        <feGaussianBlur stdDeviation="3"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.623529 0 0 0 0 0.0196078 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_2005_2"/>
                        </filter>
                    </defs>

                    <rect
                        x="0" y="0"
                        width="100%" height="600"
                        fill={clsx(
                            {
                                "#FB532C": !getIsDark(),
                                "transparent": getIsDark()
                            }
                        )}>
                    </rect>
                    <g filter="url(#sunMoon)">

                        <circle
                            id="mtn-moon-sun"
                            cx="75%" cy="65%" r="50"
                            fill={clsx(
                                {
                                    "#FFD102": !getIsDark(),
                                    "#F5E3B3": getIsDark()
                                }
                            )}>
                        </circle>
                    </g>
                    <g id='paths'>
                        <path
                            d="
                                M 0, 417
                                L 82, 409
                                L 164, 414
                                L 245,366
                                L 327, 388
                                L 409, 418
                                L 491, 409
                                L 573, 371
                                L 655, 418
                                L 736, 404
                                L 818, 365
                                L 900, 391
                                L 900, 601
                                L 818, 601
                                L 736, 601
                                L 655, 601
                                L 573, 601
                                L 491, 601
                                L 409, 601
                                L 327, 601
                                L 245, 601
                                L 164, 601
                                L 82, 601
                                L 0 601
                                Z
                            "
                            fill={clsx(
                                {
                                    "#e72c27": !getIsDark(),
                                    "#020916": getIsDark()
                                }
                            )}>
                        </path>
                        <path
                            d="
                                M 0, 411
                                L 82, 397
                                L 164, 398
                                L 245, 441
                                L 327, 445
                                L 409, 403
                                L 491, 403
                                L 573, 433
                                L 655, 417
                                L 736, 442
                                L 818, 415
                                L 900, 418
                                L 900, 601
                                L 818, 601
                                L 736, 601
                                L 655, 601
                                L 573, 601
                                L 491, 601
                                L 409, 601
                                L 327, 601
                                L 245, 601
                                L 164, 601
                                L 82, 601
                                L 0, 601
                                Z
                            "
                            fill={clsx(
                                {
                                    "#c72423": !getIsDark(),
                                    "#0A111C": getIsDark()
                                }
                            )}>
                        </path>
                        <path
                            d="
                                M 0, 465
                                L 82, 442
                                L 164, 462
                                L 245, 465
                                L 327, 431
                                L 409, 436
                                L 491, 463
                                L 573, 460
                                L 655, 469
                                L 736, 450
                                L 818, 431
                                L 900, 466
                                L 900, 601
                                L 818, 601
                                L 736, 601
                                L 655, 601
                                L 573, 601
                                L 491, 601
                                L 409, 601
                                L 327, 601
                                L 245, 601
                                L 164, 601
                                L 82, 601
                                L 0, 601
                                Z
                            "
                            fill={clsx(
                                {
                                    "#a81c1f": !getIsDark(),
                                    "#101622": getIsDark()
                                }
                            )}>
                        </path>
                        <path
                            d="
                                M 0, 484
                                L 82, 480
                                L 164, 487
                                L 245, 486
                                L 327, 466
                                L 409, 478
                                L 491, 485
                                L 573, 489
                                L 655, 484
                                L 736, 477
                                L 818, 480
                                L 900, 497
                                L 900, 601
                                L 818, 601
                                L 736, 601
                                L 655, 601
                                L 573, 601
                                L 491, 601
                                L 409, 601
                                L 327, 601
                                L 245, 601
                                L 164, 601
                                L 82, 601
                                L 0, 601
                                Z
                            "
                            fill={clsx(
                                {
                                    "#8a161a": !getIsDark(),
                                    "#151B28": getIsDark()
                                }
                            )}>
                        </path>
                        <path
                            d="
                                M 0, 520
                                L 82, 505
                                L 164, 490
                                L 245, 490
                                L 327, 500
                                L 409, 499
                                L 491, 503
                                L 573, 521
                                L 655, 492
                                L 736, 501
                                L 818, 507
                                L 900, 493
                                L 900, 601
                                L 818, 601
                                L 736, 601
                                L 655, 601
                                L 573, 601
                                L 491, 601
                                L 409, 601
                                L 327, 601
                                L 245, 601
                                L 164, 601
                                L 82, 601
                                L 0, 601
                                Z
                            "
                            fill={clsx(
                                {
                                    "#6d1015": !getIsDark(),
                                    "#1A202F": getIsDark()
                                }
                            )}>
                        </path>
                        <path
                            d="
                                M 0, 522
                                L 82, 520
                                L 164, 546
                                L 245, 545
                                L 327, 545
                                L 409, 520
                                L 491, 535
                                L 573, 532
                                L 655, 545
                                L 736, 524
                                L 818, 526
                                L 900, 533
                                L 900, 601
                                L 818, 601
                                L 736, 601
                                L 655, 601
                                L 573, 601
                                L 491, 601
                                L 409, 601
                                L 327, 601
                                L 245, 601
                                L 164, 601
                                L 82, 601
                                L 0, 601
                                Z
                            "
                            fill={clsx(
                                {
                                    "#510b0e": !getIsDark(),
                                    "#1F2435": getIsDark()
                                }
                            )}>
                        </path>
                        <path
                            d="
                                M 0, 564
                                L 82, 552
                                L 164, 560
                                L 245, 566
                                L 327, 557
                                L 409, 556
                                L 491, 555
                                L 573, 559
                                L 655, 551
                                L 736, 560
                                L 818, 555
                                L 900, 551
                                L 900, 601
                                L 818, 601
                                L 736, 601
                                L 655, 601
                                L 573, 601
                                L 491, 601
                                L 409, 601
                                L 327, 601
                                L 245, 601
                                L 164, 601
                                L 82, 601
                                L 0, 601
                                Z
                            "
                            fill={clsx(
                                {
                                    "#370601": !getIsDark(),
                                    "#25293C": getIsDark()
                                }
                            )}>
                        </path>
                    </g>
                    
                </svg>
            </div>
        </div>
    );
}
