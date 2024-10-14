'use client'
import React, { useEffect } from 'react'
import { debounce } from '../lib/utils';

export default function Mountains({children} : {children?:React.ReactNode;}) {

    // Listen to the native browser window resize event from within React component
    useEffect(() => {
        function handleResize() {
            // console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
            let pathGroup = window.document.getElementById('paths');
            if (typeof pathGroup !== 'undefined' && pathGroup !== null) {
                pathGroup.style.transform = 'scaleX(' + window.innerWidth / 9 + '%)';
            }
        }

        // Put handleResize call into a variable so we can later remove the event listener
        let eventHandler = debounce(handleResize);
        window.addEventListener('resize', eventHandler);

        // Ensure SVG is appropriatly sized on initial load
        handleResize();

        // Return values in useEffect should be a cleanup function that removes listener
        return () => window.removeEventListener('resize', eventHandler);
    })

    return (
        <div className='relative w-full'>
            <div>{children}</div>
            <svg id="visual" viewBox="0 0 100% 600" width='100%' height="600" preserveAspectRatio="none">
                <rect x="0" y="0" width="100%" height="600" fill="#FB532C"></rect>
                <rect x="0" y="600" width="100%" height="200" fill="#370601"></rect>
                <g filter="url(#filter0_di_0_1)">
                    <circle id="mtn-moon-sun" cx="75%" cy="65%" r="50" fill="#FFD102"></circle>
                </g>
                <g id='paths' className='transition-transform'>
                    <path d="M0 417 L82 409 L164 414 L245 366 L327 388 L409 418 L491 409 L573 371 L655 418 L736 404 L818 365 L900 391 L900 601 L818 601 L736 601 L655 601 L573 601 L491 601 L409 601 L327 601 L245 601 L164 601 L82 601 L0 601Z" fill="#e72c27"></path>
                    <path d="M0 411 L82 397 L164 398 L245 441 L327 445 L409 403 L491 403 L573 433 L655 417 L736 442 L818 415 L900 418 L900 601 L818 601 L736 601 L655 601 L573 601 L491 601 L409 601 L327 601 L245 601 L164 601 L82 601 L0 601Z" fill="#c72423"></path>
                    <path d="M0 465 L82 442 L164 462 L245 465 L327 431 L409 436 L491 463 L573 460 L655 469 L736 450 L818 431 L900 466 L900 601 L818 601 L736 601 L655 601 L573 601 L491 601 L409 601 L327 601 L245 601 L164 601 L82 601 L0 601Z" fill="#a81c1f"></path>
                    <path d="M0 484 L82 480 L164 487 L245 486 L327 466 L409 478 L491 485 L573 489 L655 484 L736 477 L818 480 L900 497 L900 601 L818 601 L736 601 L655 601 L573 601 L491 601 L409 601 L327 601 L245 601 L164 601 L82 601 L0 601Z" fill="#8a161a"></path>
                    <path d="M0 520 L82 505 L164 490 L245 490 L327 500 L409 499 L491 503 L573 521 L655 492 L736 501 L818 507 L900 493 L900 601 L818 601 L736 601 L655 601 L573 601 L491 601 L409 601 L327 601 L245 601 L164 601 L82 601 L0 601Z" fill="#6d1015"></path>
                    <path d="M0 522 L82 520 L164 546 L245 545 L327 545 L409 520 L491 535 L573 532 L655 545 L736 524 L818 526 L900 533 L900 601 L818 601 L736 601 L655 601 L573 601 L491 601 L409 601 L327 601 L245 601 L164 601 L82 601 L0 601Z" fill="#510b0e"></path>
                    <path d="M0 564 L82 552 L164 560 L245 566 L327 557 L409 556 L491 555 L573 559 L655 551 L736 560 L818 555 L900 551 L900 601 L818 601 L736 601 L655 601 L573 601 L491 601 L409 601 L327 601 L245 601 L164 601 L82 601 L0 601Z" fill="#370601"></path>
                </g>
            </svg>
        </div>
    );
}
