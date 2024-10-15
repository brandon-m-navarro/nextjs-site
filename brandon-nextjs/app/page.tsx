'use client'

import Image from "next/image";
import Mountains from "./ui/mountains";
import NavBar from "./ui/nav-bar";
import ThemeToggle from "./ui/theme-toggle";
import NumberedCard from "./ui/number-card";
import { useState } from "react";
import clsx from "clsx";

export default function Home() {

  const [isDayMode, setDayMode] = useState(true);

    // Handle day/night mode event from ThemeToggle component
    const modeHandler = function (event: React.SyntheticEvent<HTMLButtonElement | HTMLDivElement>) {

      // Ignore events which are not fired from clicking Button
      if (event.target instanceof HTMLButtonElement) {
        const buttonElm = event.target as HTMLButtonElement,
              mode = buttonElm.dataset.mode == 'day';
        setDayMode(mode);
        event.stopPropagation();
      }
  }

  return (
    <div
    className={clsx(
      "flex flex-col transition-colors items-center justify-items-center min-h-screen pb-20 font-[family-name:var(--font-geist-sans)] bg-white",
      {
        '!bg-night': !isDayMode
      }
    )}
    onClick={modeHandler}>
      <div
      className={clsx("bg-white h-[10vh] w-full flex flex-row place-items-center",
        {
          '!bg-night' : !isDayMode
        }
      )}
      >
        <div className="w-[150px]"></div>
        <div className="flex justify-around w-full">
          <NavBar isDayMode={isDayMode}/>
        </div>
        <ThemeToggle/>
      </div>
      <Mountains isDayMode={isDayMode}>
        <div className="absolute flex items-center justify-center top-28 left-[50%] translate-x-[-50%] w-[90%]">
          <div className="mr-8 drop-shadow-image max-w-[250px] min-w-[250px] max-h-[250px] min-h-[250px] overflow-hidden">
            <Image
                  src="/me_sitting.JPG"
                  width={338}
                  height={226}
                  alt="Picture of me"
                  className="min-w-[135%] max-w-[135%] translate-x-[-12%] translate-y-[1%]"
            />
          </div>
          <span className="select-none text-[clamp(1rem, .8852rem + .4898vw, 1.375rem)] max-w-screen-md p-1 bg-mask text-center rounded">
            {`My name is Brandon. Im a software engineer looking to expand my knowledge in a
            close-knit, team environment. I've previously worked at a small startup developing
            a mobile/web application called MyChapter. My work was primarily focused on frontend
            development, but I'm always looking to learn about new frameworks, languages, and any
            other technology under the sun.`}
          </span>
        </div>
      </Mountains>
      <div className="flex justify-center flex-wrap max-w-[700px] mt-8 w-full m-auto">
        <NumberedCard isDayMode={isDayMode} className="m-[16px] flex-1 basis-2/5" number={1} title="Research / Wireframe" content="After writing down a list of requirements to better understand the problem, I like to begin by looking for other UI's that have tackled the same or a similar problem. Then I begin drafting wireframes and mockups. These allow me to discover requirements I may have missed and gives me a resource that can better convey my ideas to my team."/>
        <NumberedCard isDayMode={isDayMode} className="m-[16px] flex-1 basis-2/5" number={2} title="Feedback / Collaboration" content="With a wireframe in hand, I can now share with the rest of my team to further improve the design. Iteration based on team feedback leads to better designs, and helps build team cohesion by promoting a more open environment which encourages feedback."/>
        <NumberedCard isDayMode={isDayMode} className="m-[16px] flex-1 basis-2/5" number={3} title="Refine" content="Using feedback from my team, it's time to update and further build out my wireframes to more complete prototypes."/>
        <NumberedCard isDayMode={isDayMode} className="m-[16px] flex-1 basis-2/5" number={4} title="Experiment" content="Not everything will work, but it's worth trying if it means learning and gaining insights from what doesn't."/>
      </div>
      <div
      className={clsx(
        "flex flex-col max-w-[650px] m-auto mt-[24px] mb-[48px] box-border py-[20px] transition-colors text-black",
        {
          "text-white": !isDayMode
        }
      )}
      >
        <h1 className="text-[24px] font-medium py-[12px]">About</h1>
        <span className="text-[15px] m-auto w-[90%] mb-[12px]">{`Around the end of my Sophomore year in college, I began working at a small startup called TrampleZone. I was mainly working alongside other college kids helping improve the company's existing application HotSpots, a desktop & mobile app that leveraged OpenStreetMaps to let users rate local venues.`}</span>
        <span className="text-[15px] m-auto w-[90%] mb-[12px]">{`A couple of months into my time there, we began developing a new app with a focus on greek life organizations called MyChapter. With the guidance of the company's founder Jim, I helped map out the expected class structure using UML diagrams and began designing and implementing the frontend. After graduating in the year of COVID, I was fortunate to get a software engineering role at TrampleZone, where I got to continue my work on MyChapter and even began testing out the service with multiple fraternities at my alma mater.`}</span>
        <span className="text-[15px] m-auto w-[90%]">{`Outside of work, I like to go out on walks and runs around Somerville, play in local basketball rec leagues, and go out for backpacking hikes when I'm visiting family in New Hampshire.`}</span>
      </div>

      <div className="flex h-[350px] w-[75%] min-w-[650px] m-auto justify-center">
        <div className="relative group h-full overflow-hidden mr-8">
          <Image
            src="/skydive.png"
            width={339}
            height={350}
            alt="Picture of me skydiving"
            className="min-w-[135%] max-w-[135%] overflow-hidden translate-x-[-12%]"
          />
          <span className="absolute bottom-[4px] min-w-[90%] bg-imageTextWhite text-black transition-opacity opacity-0 group-hover:opacity-100 right-[50%] translate-x-[50%] box-border p-[4px]">Me skydiving in Swakopmund, Namibia (IQP)</span>
        </div>

        <div className="flex flex-col">
          <div className="relative group mb-[4px] h-[50%] overflow-hidden">
            <Image
              src="/Hout_Bay.JPG"
              width={339}
              height={350}
              alt="Picture of Hout Bay"
              // className="min-w-[100%] max-w-[100%] overflow-hidden"
            />
            <span className="absolute bottom-[4px] min-w-[90%] bg-imageTextWhite text-black transition-opacity opacity-0 group-hover:opacity-100 right-[50%] translate-x-[50%] box-border p-[4px]">The Hout Bay in Cape Town</span>
          </div>

          <div className="relative group h-[50%] overflow-hidden">
            <Image
              src="/hershey.jpg"
              width={339}
              height={169}
              alt="Hershey"
              className="min-w-[100%] max-w-[100%] translate-y-[-30%] overflow-hidden"
            />
            <span className="absolute bottom-[4px] min-w-[90%] bg-imageTextWhite text-black transition-opacity opacity-0 group-hover:opacity-100 right-[50%] translate-x-[50%] box-border p-[4px]">Hershey being photogenic</span>
          </div>

        </div>
      </div>
    </div>
  );
}
