"use client";
import clsx from "clsx";
import Image from "next/image";
import { useContext } from "react";
import ThemeContext from "../store/ThemeContext";

import localFont from "next/font/local";
import SkillRating from "../ui/skill-rating";

import "@/app/ui/global.css";
import Modal from "../ui/modal";

const josefinSansLight = localFont({
  src: "../fonts/added/jsans-light.woff",
});

const lato = localFont({
  src: "../fonts/added/lato-regular.woff2",
});
const latoBold = localFont({
  src: "../fonts/added/lato-bold.woff2",
});

export default function ResumePage() {
  const { getIsDark } = useContext(ThemeContext);

  return (
    <div
      className={`text-black dark:text-white w-full dark:bg-nightSoft py-1 ${lato.className}`}
    >
      <div className="flex flex-wrap  max-w-[800px] my-[12px] mx-auto box-border p-[12px] rounded-[4px] bg-black/[0.05] dark:bg-black/[0.25]">
        <div id="Face&Title" className="flex mb-[12px] basis-full items-center">
          <div className="flex overflow-hidden h-[50px] w-[50px] rounded-[4px] justify-center items-center">
            <Image
              src="/myface_hd.jpg"
              width={50}
              height={50}
              alt="My Face"
              className="translate-y-[7px]"
            />
          </div>
          <div className="flex flex-col text-left mr-auto ml-[12px]">
            <span className="mb-[6px] text-[32px] leading-[36px] max-[436px]:text-[24px]">
              Brandon Manuel Navarro
            </span>
            <span
              className={`${josefinSansLight.className} text-[16px] leading-[16px]`}
            >
              Software engineer with a focus on frontend development
            </span>
          </div>
        </div>
        <div className="pr-[8px] flex-[1_1_100%] md:flex-[0.25_1_0%]">
          <div className="flex flex-col mb-[1em]">
            <div className="border-b-black border-b-[1px] dark:border-b-white/50 leading-[32px] mb-[12px]">
              <span
                className={`text-left mb-[12px] text-[14px] font-bold leading-[32px] ${latoBold}`}
              >
                CONTACT
              </span>
            </div>
            <div className="flex items-center p-[4px] mb-[6px] rounded-[4px]">
              <Image
                src={clsx({
                  "/envelope-regular.png": !getIsDark(),
                  "/envelope-regular_w.png": getIsDark(),
                })}
                width={18}
                height={18}
                alt="Email Icon"
                className="object-contain w-[18px] h-[18px]"
              />
              <span className="ml-[8px] text-[12px]">
                brandon.m.navarro@gmail.com
              </span>
            </div>

            <div className="flex items-center p-[4px] mb-[6px] rounded-[4px]">
              <Image
                src={clsx({
                  "/location-dot-solid.png": !getIsDark(),
                  "/location-dot-solid_w.png": getIsDark(),
                })}
                width={18}
                height={18}
                alt="Location Icon"
                className="object-contain w-[18px] h-[18px]"
              />
              <span className="ml-[8px] text-[12px]">Somerville, MA</span>
            </div>

            <button
              className="hover:bg-white/20 cursor-pointer transition-colors p-[4px] rounded-[4px]"
              onClick={() => {
                window
                  ?.open("https://github.com/brandon-m-navarro", "_blank")
                  ?.focus();
              }}
            >
              <div className="flex items-center">
                <Image
                  src={clsx({
                    "/square-github-solid.svg": !getIsDark(),
                    "/square-github-brands-solid_w.png": getIsDark(),
                  })}
                  width={18}
                  height={18}
                  alt="GitHub Icon"
                  className="object-contain w-[18px] h-[18px]"
                />
                <span className="ml-[8px] text-[12px] leading-[13px] text-left">
                  https://github.com/brandon-m-navarro
                </span>
              </div>
            </button>

            <button
              className="hover:bg-white/20 cursor-pointer transition-colors p-[4px] rounded-[4px]"
              onClick={() => {
                window
                  ?.open(
                    "https://www.linkedin.com/in/brandon-navarro-b36b97149/",
                    "_blank"
                  )
                  ?.focus();
              }}
            >
              <div className="flex items-center">
                <Image
                  src={clsx({
                    "/linkedin-brands-solid.png": !getIsDark(),
                    "/linkedin-brands-solid_w.png": getIsDark(),
                  })}
                  width={18}
                  height={18}
                  alt="LinkedIn Icon"
                  className="object-contain w-[18px] h-[18px]"
                />
                <span className="ml-[8px] text-[12px]">brandon-m-navarro</span>
              </div>
            </button>
          </div>
          <div>
            <div className="border-b-black border-b-[1px] dark:border-b-white leading-[32px] dark:border-b-white/50">
              <span
                className={`text-left mb-[12px] text-[14px] font-bold leading-[32px] ${latoBold.className}`}
              >
                SKILLS
              </span>
            </div>
            <div className="mb-[0.75em]">
              <span
                className={`text-left mb-[12px] text-[12px] leading-[24px] ${latoBold.className}`}
              >
                Programming
              </span>
              <div className="flex flex-col">
                <div className="skill-rating">
                  <span>Javascript</span>
                  <SkillRating
                    rating={4}
                    backgroundColor={clsx({
                      "bg-skillBackgroundLight": !getIsDark(),
                      "bg-skillBackgroundDark": getIsDark(),
                    })}
                    fillColor={clsx({
                      "bg-skillFillLight": !getIsDark(),
                      "bg-skillFillDark": getIsDark(),
                    })}
                  />
                </div>
                <div className="skill-rating">
                  <span>HTML</span>
                  <SkillRating
                    rating={4}
                    backgroundColor={clsx({
                      "bg-skillBackgroundLight": !getIsDark(),
                      "bg-skillBackgroundDark": getIsDark(),
                    })}
                    fillColor={clsx({
                      "bg-skillFillLight": !getIsDark(),
                      "bg-skillFillDark": getIsDark(),
                    })}
                  />
                </div>
                <div className="skill-rating">
                  <span>CSS</span>
                  <SkillRating
                    rating={4}
                    backgroundColor={clsx({
                      "bg-skillBackgroundLight": !getIsDark(),
                      "bg-skillBackgroundDark": getIsDark(),
                    })}
                    fillColor={clsx({
                      "bg-skillFillLight": !getIsDark(),
                      "bg-skillFillDark": getIsDark(),
                    })}
                  />
                </div>
                <div className="skill-rating">
                  <span>Java</span>
                  <SkillRating
                    rating={3}
                    backgroundColor={clsx({
                      "bg-skillBackgroundLight": !getIsDark(),
                      "bg-skillBackgroundDark": getIsDark(),
                    })}
                    fillColor={clsx({
                      "bg-skillFillLight": !getIsDark(),
                      "bg-skillFillDark": getIsDark(),
                    })}
                  />
                </div>
                <div className="skill-rating">
                  <span>Node</span>
                  <SkillRating
                    rating={3}
                    backgroundColor={clsx({
                      "bg-skillBackgroundLight": !getIsDark(),
                      "bg-skillBackgroundDark": getIsDark(),
                    })}
                    fillColor={clsx({
                      "bg-skillFillLight": !getIsDark(),
                      "bg-skillFillDark": getIsDark(),
                    })}
                  />
                </div>
                <div className="skill-rating">
                  <span>PHP</span>
                  <SkillRating
                    rating={2}
                    backgroundColor={clsx({
                      "bg-skillBackgroundLight": !getIsDark(),
                      "bg-skillBackgroundDark": getIsDark(),
                    })}
                    fillColor={clsx({
                      "bg-skillFillLight": !getIsDark(),
                      "bg-skillFillDark": getIsDark(),
                    })}
                  />
                </div>
                <div className="skill-rating">
                  <span>Python</span>
                  <SkillRating
                    rating={2}
                    backgroundColor={clsx({
                      "bg-skillBackgroundLight": !getIsDark(),
                      "bg-skillBackgroundDark": getIsDark(),
                    })}
                    fillColor={clsx({
                      "bg-skillFillLight": !getIsDark(),
                      "bg-skillFillDark": getIsDark(),
                    })}
                  />
                </div>
                <div className="skill-rating">
                  <span>SQL</span>
                  <SkillRating
                    rating={2}
                    backgroundColor={clsx({
                      "bg-skillBackgroundLight": !getIsDark(),
                      "bg-skillBackgroundDark": getIsDark(),
                    })}
                    fillColor={clsx({
                      "bg-skillFillLight": !getIsDark(),
                      "bg-skillFillDark": getIsDark(),
                    })}
                  />
                </div>
                <div className="skill-rating">
                  <span>C</span>
                  <SkillRating
                    rating={2}
                    backgroundColor={clsx({
                      "bg-skillBackgroundLight": !getIsDark(),
                      "bg-skillBackgroundDark": getIsDark(),
                    })}
                    fillColor={clsx({
                      "bg-skillFillLight": !getIsDark(),
                      "bg-skillFillDark": getIsDark(),
                    })}
                  />
                </div>
                <div className="skill-rating">
                  <span>C++</span>
                  <SkillRating
                    rating={2}
                    backgroundColor={clsx({
                      "bg-skillBackgroundLight": !getIsDark(),
                      "bg-skillBackgroundDark": getIsDark(),
                    })}
                    fillColor={clsx({
                      "bg-skillFillLight": !getIsDark(),
                      "bg-skillFillDark": getIsDark(),
                    })}
                  />
                </div>
              </div>
            </div>

            <div className="mb-[0.75em]">
              <span
                className={`text-left mb-[12px] text-[12px] leading-[24px] ${latoBold.className}`}
              >
                Operating Systems
              </span>
              <div className="flex flex-col">
                <div className="skill-rating">
                  <span>Windows</span>
                  <SkillRating
                    rating={4}
                    backgroundColor={clsx({
                      "bg-skillBackgroundLight": !getIsDark(),
                      "bg-skillBackgroundDark": getIsDark(),
                    })}
                    fillColor={clsx({
                      "bg-skillFillLight": !getIsDark(),
                      "bg-skillFillDark": getIsDark(),
                    })}
                  />
                </div>
                <div className="skill-rating">
                  <span>MacOS</span>
                  <SkillRating
                    rating={4}
                    backgroundColor={clsx({
                      "bg-skillBackgroundLight": !getIsDark(),
                      "bg-skillBackgroundDark": getIsDark(),
                    })}
                    fillColor={clsx({
                      "bg-skillFillLight": !getIsDark(),
                      "bg-skillFillDark": getIsDark(),
                    })}
                  />
                </div>
                <div className="skill-rating">
                  <span>iOS</span>
                  <SkillRating
                    rating={2}
                    backgroundColor={clsx({
                      "bg-skillBackgroundLight": !getIsDark(),
                      "bg-skillBackgroundDark": getIsDark(),
                    })}
                    fillColor={clsx({
                      "bg-skillFillLight": !getIsDark(),
                      "bg-skillFillDark": getIsDark(),
                    })}
                  />
                </div>
                <div className="skill-rating">
                  <span>Android</span>
                  <SkillRating
                    rating={2}
                    backgroundColor={clsx({
                      "bg-skillBackgroundLight": !getIsDark(),
                      "bg-skillBackgroundDark": getIsDark(),
                    })}
                    fillColor={clsx({
                      "bg-skillFillLight": !getIsDark(),
                      "bg-skillFillDark": getIsDark(),
                    })}
                  />
                </div>
              </div>
            </div>

            <div className="mb-[0.75em]">
              <span
                className={`text-left mb-[12px] text-[12px] leading-[24px] ${latoBold.className}`}
              >
                Frameworks
              </span>
              <div className="flex flex-col">
                <div className="skill-rating">
                  <span>Require.js</span>
                  <SkillRating
                    rating={4}
                    backgroundColor={clsx({
                      "bg-skillBackgroundLight": !getIsDark(),
                      "bg-skillBackgroundDark": getIsDark(),
                    })}
                    fillColor={clsx({
                      "bg-skillFillLight": !getIsDark(),
                      "bg-skillFillDark": getIsDark(),
                    })}
                  />
                </div>
                <div className="skill-rating">
                  <span>Tailwind</span>
                  <SkillRating
                    rating={4}
                    backgroundColor={clsx({
                      "bg-skillBackgroundLight": !getIsDark(),
                      "bg-skillBackgroundDark": getIsDark(),
                    })}
                    fillColor={clsx({
                      "bg-skillFillLight": !getIsDark(),
                      "bg-skillFillDark": getIsDark(),
                    })}
                  />
                </div>
                <div className="skill-rating">
                  <span>React</span>
                  <SkillRating
                    rating={3}
                    backgroundColor={clsx({
                      "bg-skillBackgroundLight": !getIsDark(),
                      "bg-skillBackgroundDark": getIsDark(),
                    })}
                    fillColor={clsx({
                      "bg-skillFillLight": !getIsDark(),
                      "bg-skillFillDark": getIsDark(),
                    })}
                  />
                </div>
                <div className="skill-rating">
                  <span>Next.js</span>
                  <SkillRating
                    rating={3}
                    backgroundColor={clsx({
                      "bg-skillBackgroundLight": !getIsDark(),
                      "bg-skillBackgroundDark": getIsDark(),
                    })}
                    fillColor={clsx({
                      "bg-skillFillLight": !getIsDark(),
                      "bg-skillFillDark": getIsDark(),
                    })}
                  />
                </div>
              </div>
            </div>

            <div className="mb-[0.75em]">
              <span
                className={`text-left mb-[12px] text-[12px] leading-[24px] ${latoBold.className}`}
              >
                Tools
              </span>
              <div className="flex flex-col">
                <div className="skill-rating">
                  <span>Figma</span>
                  <SkillRating
                    rating={5}
                    backgroundColor={clsx({
                      "bg-skillBackgroundLight": !getIsDark(),
                      "bg-skillBackgroundDark": getIsDark(),
                    })}
                    fillColor={clsx({
                      "bg-skillFillLight": !getIsDark(),
                      "bg-skillFillDark": getIsDark(),
                    })}
                  />
                </div>
                <div className="skill-rating">
                  <span>Git</span>
                  <SkillRating
                    rating={4}
                    backgroundColor={clsx({
                      "bg-skillBackgroundLight": !getIsDark(),
                      "bg-skillBackgroundDark": getIsDark(),
                    })}
                    fillColor={clsx({
                      "bg-skillFillLight": !getIsDark(),
                      "bg-skillFillDark": getIsDark(),
                    })}
                  />
                </div>
                <div className="skill-rating">
                  <span>Adobe Premiere</span>
                  <SkillRating
                    rating={3}
                    backgroundColor={clsx({
                      "bg-skillBackgroundLight": !getIsDark(),
                      "bg-skillBackgroundDark": getIsDark(),
                    })}
                    fillColor={clsx({
                      "bg-skillFillLight": !getIsDark(),
                      "bg-skillFillDark": getIsDark(),
                    })}
                  />
                </div>
                <div className="skill-rating">
                  <span>Android Studio</span>
                  <SkillRating
                    rating={2}
                    backgroundColor={clsx({
                      "bg-skillBackgroundLight": !getIsDark(),
                      "bg-skillBackgroundDark": getIsDark(),
                    })}
                    fillColor={clsx({
                      "bg-skillFillLight": !getIsDark(),
                      "bg-skillFillDark": getIsDark(),
                    })}
                  />
                </div>
                <div className="skill-rating">
                  <span>Docker</span>
                  <SkillRating
                    rating={2}
                    backgroundColor={clsx({
                      "bg-skillBackgroundLight": !getIsDark(),
                      "bg-skillBackgroundDark": getIsDark(),
                    })}
                    fillColor={clsx({
                      "bg-skillFillLight": !getIsDark(),
                      "bg-skillFillDark": getIsDark(),
                    })}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-[1_1_100%] md:flex-[0.75_1_0%] px-[4px]">
          <div className="border-b-black border-b-[1px] dark:border-b-white leading-[32px] dark:border-b-white/50 mb-[12px]">
            <span className={`${latoBold.className} text-[14px] text-left`}>
              EDUCATION
            </span>
          </div>

          <div className="flex items-center mb-[12px]">
            <div className="flex flex-col flex-[0.5_0.5_0]">
              <div className="flex items-center mb-[6px]">
                <Image
                  src={clsx({
                    "/calendar-regular.png": !getIsDark(),
                    "/calendar-regular_w.png": getIsDark(),
                  })}
                  width={18}
                  height={18}
                  alt="Calendar Icon"
                  className="object-contain w-[18px] h-[18px]"
                />
                <span className="text-[12px] ml-[8px]">2016 - 2020</span>
              </div>

              <div className="flex items-center">
                <Image
                  src={clsx({
                    "/location-dot-solid.png": !getIsDark(),
                    "/location-dot-solid_w.png": getIsDark(),
                  })}
                  width={18}
                  height={18}
                  alt="Location Icon"
                  className="object-contain w-[18px] h-[18px]"
                />
                <span className="text-[12px] ml-[8px]">Worcester, MA</span>
              </div>
            </div>
            <div className="flex flex-col flex-[0.5_0.5_0] items-end leading-[24px] whitespace-nowrap text-[12px]">
              <span>Bachelor of Science in Computer Science</span>
              <span className="italic">3.25 GPA</span>
            </div>
          </div>

          {/*Campus Involvement*/}
          <div className="flex flex-col">
            <span className="text-[12px]">Campus Involvement</span>

            {/* Sigma Pi */}
            <div className="flex flex-col">
              <div className="flex items-center h-[50px]">
                <div className="h-[34px] w-[50px] rounded-[2px] bg-white/95 overflow-hidden justify-center items-center">
                  <Image
                    src={"/sigmapi_t.png"}
                    height={34}
                    width={50}
                    alt="Sigma Pi"
                    className="translate-y-[-13px]"
                  />
                </div>
                <span className="text-[14px] ml-[6px]">
                  Sigma Pi Fraternity International, Gamma Iota Chapter
                </span>
                <span className="whitespace-nowrap ml-auto italic text-[12px]">
                  2016 - 2020
                </span>
              </div>
              <ul className="text-[12px] list-disc pl-[40px]">
                <li>Active member and former PR chair</li>
                <li>
                  Was on the WebTech committee for 2 years, which made drastic
                  improvements to our{" "}
                  <a
                    className="dark:text-[#faebd7] text-[#551A8B]"
                    href="https://sigmapigammaiota.org/"
                  >
                    chapter site
                  </a>
                </li>
                <li>
                  Helped organize a multi-day campus event, Amazing Day, to
                  raise awareness for mental health and suicide in the WPI
                  community
                </li>
                <li>
                  Volunteered weekly at a local food pantry, Mustard Seed to
                  help setup, cook, & clean
                </li>
              </ul>
            </div>

            {/* SPARC */}
            <div className="flex flex-col mb-[1em]">
              <div className="flex items-center h-[50px]">
                <div className="h-[34px] w-[50px] rounded-[2px] bg-white/95 overflow-hidden justify-center items-center">
                  <Image
                    src={"/sparc_t.png"}
                    height={34}
                    width={50}
                    alt="SPARC"
                    className="translate-y-[-8px]"
                  />
                </div>
                <span className="text-[14px] ml-[6px]">SPARC Member</span>
                <span className="whitespace-nowrap ml-auto italic text-[12px]">
                  2018 - 2020
                </span>
              </div>
              <ul className="text-[12px] list-disc pl-[40px]">
                <li>
                  Was an active member of a SPARC, a student run committee that
                  interfaced with college admins and hosted campus events to
                  raise awareness and provide resources for sexual assualt
                  victims in the WPI community
                </li>
                <li>
                  Helped run the annual, campus-wide event,{" "}
                  <a
                    className="dark:text-[#faebd7] text-[#551A8B]"
                    href="https://www.wpi.edu/news/take-back-night"
                  >
                    Take Back the Night
                  </a>
                </li>
                <li>
                  Created and distributed electronic surveys to gauge students
                  sentiments about safety on campus which were then presented to
                  WPI admins
                </li>
              </ul>
            </div>
          </div>

          <div className="border-b-black border-b-[1px] dark:border-b-white leading-[32px] dark:border-b-white/50 mb-[12px]">
            <span className={`${latoBold.className} text-[14px] text-left`}>
              Professional Experience
            </span>
          </div>
          <div className="flex mb-[6px]">
            <div className="flex flex-col flex-[0.5_0.5_0] justify-between">
              <div className="flex items-center mb-[6px]">
                <Image
                  src={clsx({
                    "/calendar-regular.png": !getIsDark(),
                    "/calendar-regular_w.png": getIsDark(),
                  })}
                  width={18}
                  height={18}
                  alt="Calendar Icon"
                  className="object-contain w-[18px] h-[18px]"
                />
                <span className="text-[12px] ml-[8px]">2018 - 2024</span>
              </div>

              <div className="flex items-center">
                <Image
                  src={clsx({
                    "/location-dot-solid.png": !getIsDark(),
                    "/location-dot-solid_w.png": getIsDark(),
                  })}
                  width={18}
                  height={18}
                  alt="Location Icon"
                  className="object-contain w-[18px] h-[18px]"
                />
                <span className="text-[12px] ml-[8px]">
                  Remote / North Reading, MA
                </span>
              </div>
            </div>
            <div className="flex flex-col flex-[0.5_0.5_0] items-end leading-[24px] whitespace-nowrap text-[12px]">
              <span className="italic">Software Engineer II</span>
              <span className="italic">TrampleZone LLC.</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-[12px] w-[95%] m-auto text-left">
              Worked closely with the founder of the company in planning and
              developing a single page application that is currently available
              across mobile and desktop. I was involved in the initial planning
              for the application and created most of the model classes, UI
              components, and panels on the frontend. I also created promotional
              content and app store materials using various Adobe tools along
              with Figma. Throughout my time there I also trained several new
              hires and was involved in the recruitment process.
            </span>
            <div className="flex mt-[12px] ml-[12px] mb-[12px] md:mb-0">
              <Image
                src={"/mychapter.png"}
                height={115}
                width={167}
                alt="MyChapter Logo & Text"
                className="bg-white/95 rounded-sm"
              />

              <div className="flex flex-col justify-around ml-[12px]">
                <button
                  className="flex items-center dark:bg-night bg-slate-300 box-border p-[4px] pointer-events-auto"
                  onClick={() => {
                    window
                      ?.open(
                        "https://apps.apple.com/us/app/mychapter-app-for-my-chapter/id6444417593",
                        "_blank"
                      )
                      ?.focus();
                  }}
                >
                  <Image
                    src={clsx({
                      "/apple-brands-solid.svg": !getIsDark(),
                      "/apple-brands-solid_w.svg": getIsDark(),
                    })}
                    width={25}
                    height={30}
                    alt="Apple AppStore Icon"
                    className="pointer-events-none"
                  />
                  <span className="ml-[6px] flex flex-col text-[12px] pointer-events-none">
                    <span className="text-[8px] mr-auto">View in the</span>App
                    Store
                  </span>
                </button>

                <button
                  className="flex items-center dark:bg-night bg-slate-300 box-border p-[4px]"
                  onClick={() => {
                    window
                      ?.open(
                        "https://play.google.com/store/apps/details?id=com.tramplezone.mychapter&hl=en_US&pli=1",
                        "_blank"
                      )
                      ?.focus();
                  }}
                >
                  <Image
                    src={clsx({
                      "/google-play-brands-solid.svg": !getIsDark(),
                      "/google-play-brands-solid_w.svg": getIsDark(),
                    })}
                    width={27}
                    height={30}
                    alt="Google Play Icon"
                    className="pointer-events-none"
                  />
                  <span className="ml-[6px] flex flex-col text-[12px] pointer-events-none">
                    <span className="text-[8px] mr-auto">View in the</span>
                    Google Play Store
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="basis-full flex flex-col">
          <div className="border-b-black border-b-[1px] dark:border-b-white leading-[32px] dark:border-b-white/50 mb-[12px]">
            <span className={`${latoBold.className} text-[14px] text-left`}>
              PROJECTS
            </span>
          </div>

          <div className="mb-[1em]">
            <button
              className="w-full"
              onClick={() => {
                window
                  ?.open(
                    "https://github.com/brandon-m-navarro/escape/tree/master",
                    "_blank"
                  )
                  ?.focus();
              }}
            >
              <div className="flex flex-nowrap items-center mb-[6px] cursor-pointer">
                <span className="text-[18px] leading-[32px]">
                  Escape (Board Game)
                </span>
                <div className="h-[42px] w-[42px] flex items-center justify-center ml-[12px]">
                  <Image
                    src={clsx({
                      "/link-solid.png": !getIsDark(),
                      "/link-solid_w.png": getIsDark(),
                    })}
                    height={20}
                    width={16}
                    alt="Link to Escape repo"
                  />
                </div>
                <span className="ml-auto text-[12px]">2020</span>
              </div>
            </button>
            <div className="flex">
              <Image
                src={"/escape.png"}
                height={70}
                width={80}
                alt="Escape"
                className="max-h-[70px]"
              />
              <span className="text-[12px] ml-[24px]">
                Escape is a family of board games, designed for the term project
                of CS4233: Object-Oriented Analysis & Design. The game is
                initialized using a collection of XML files to control different
                aspects like board dimension and shape, game pieces, victory
                conditions, and different battle rules. The course focused on
                using a TDD approach and evolutionary code design to continually
                add to and improve the game throughout the 7 weeks of
                development.
              </span>
            </div>
          </div>

          <div className="mb-[1em]">
            <button
              className="w-full"
              onClick={() => {
                window
                  ?.open("https://github.com/Benmw99/TeamE3733TTB2", "_blank")
                  ?.focus();
              }}
            >
              <div className="flex flex-nowrap items-center mb-[6px]  cursor-pointer">
                <span className="text-[18px] leading-[32px]">
                  TTB Application
                </span>
                <div className="h-[42px] w-[42px] flex items-center justify-center ml-[12px]">
                  <Image
                    src={clsx({
                      "/link-solid.png": !getIsDark(),
                      "/link-solid_w.png": getIsDark(),
                    })}
                    height={20}
                    width={16}
                    alt="Link to TTB Repo"
                  />
                </div>
                <span className="ml-auto text-[12px]">2018</span>
              </div>
            </button>

            <div className="flex flex-col">
              <span className="text-[12px]">
                Worked within a team of 8 to develop an application to aid the
                Alcohol and Tobacco Tax and Trade Bureau (TTB) in the submission
                and review process of new product applications. The class was an
                7 week, intensive simulation of what it was like working in an
                Agile Software development team. Our team held daily standup
                meetings to keep an open line of communication and to delegate
                work. Gave a presentation at the end of the class to a panel of
                our professor and government officials.
              </span>
              <span className="text-[16px] mt-[12px]">
                Roles and responsibilities
              </span>
              <div className="text-[14px] ml-[1em] mt-[10px]">
                <span className="">Documentation Analyst</span>
                <ul className="pl-[2em] text-[12px] list-disc">
                  <li>
                    Created and maintained all technical documentation including
                    UML diagrams, sequence diagrams, training materials, and
                    software code documentation.
                  </li>
                </ul>
              </div>

              <div className="text-[14px] ml-[1em] mt-[10px]">
                <span className="">Software Engineer</span>
                <ul className="pl-[2em] text-[12px] list-disc">
                  <li>
                    Helped design the UI for the application using a mockup tool
                    Figma.
                  </li>
                  <li>
                    Helped implement the designed UI using JavaFX and FXML (an
                    XML-based markup language for constructing Java object
                    graphs).
                  </li>
                  <li>
                    Implemented the algorithm that was used to search through a
                    database seeded with a collection of alcohols. The fuzzy
                    search I implemented adapted the Damerau-Levenshtein
                    approach and ran in O(n*m) time.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-[1em] flex flex-col">
            <button
              className="w-full text-left"
              onClick={() => {
                window
                  ?.open(
                    "https://digital.wpi.edu/concern/student_works/rf55zb37d?locale=en",
                    "_blank"
                  )
                  ?.focus();
              }}
            >
              <div className="flex flex-nowrap items-center mb-[6px]  cursor-pointer">
                <span className="text-[18px] leading-[32px] max-w-[75%]">
                  Active Telepresence Assistance for Supervisory Control: A User
                  Study with a Multi-Camera Tele-Nursing Robot
                </span>
                <div className="h-[42px] w-[42px] flex items-center justify-center ml-[12px]">
                  <Image
                    src={clsx({
                      "/link-solid.png": !getIsDark(),
                      "/link-solid_w.png": getIsDark(),
                    })}
                    height={20}
                    width={16}
                    alt="Link to Escape repo"
                  />
                </div>
                <span className="ml-auto text-[12px]">2019 - 2020</span>
              </div>
            </button>

            <span className="text-[12px]">
              Worked within a team of 7 with an advisor to conduct a study which
              explored autonomous camera control and selection on a TRINA robot
              using a VR headset. Was involved in creating the software used to
              control the cameras by reading the inertial measurement unit (IMU)
              data from the VR headset using Unity and GStreamer library. Using
              C++ and Python scripts to interface with{" "}
              <a
                className="underline"
                href="https://wiki.ros.org/ROS/Introduction"
              >
                ROS
              </a>
              , our team was able to control TRINAs arms and main camera using
              the VR headset and controllers. Also helped in running ~10
              participants through the study.
            </span>
            <div className="flex mt-[12px]">
              <Modal
                title="MQP Poster"
                content={
                  <Image
                    src={"/mqp-poster.svg"}
                    height={641}
                    width={500}
                    alt="MQP Poster"
                    className="max-w-[600px] min-w-[275px]"
                  />
                }
              >
                <Image
                  src={"/mqp-poster.svg"}
                  height={195}
                  width={250}
                  alt="MQP Poster"
                  className="mr-[12px] pointer-events-none max-w-[250px]"
                />
              </Modal>
              <Image
                src={"/trina.png"}
                height={195}
                width={250}
                alt="TRINA Robot"
                className="hidden sm:block"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <button
              className="w-full"
              onClick={() => {
                window
                  ?.open(
                    "https://digital.wpi.edu/concern/student_works/x633f145v?locale=en",
                    "_blank"
                  )
                  ?.focus();
              }}
            >
              <div className="flex flex-nowrap items-center mb-[6px] cursor-pointer">
                <span className="text-[18px] leading-[32px] max-w-[75%] text-left">
                  Mathematics Tutoring Center at NUST
                </span>
                <div className="h-[42px] w-[42px] flex items-center justify-center ml-[12px]">
                  <Image
                    src={clsx({
                      "/link-solid.png": !getIsDark(),
                      "/link-solid_w.png": getIsDark(),
                    })}
                    height={20}
                    width={16}
                    alt="Link to Escape repo"
                  />
                </div>
                <span className="ml-auto text-[12px]">2018 - 2019</span>
              </div>
            </button>
            <span className="text-[12px] mb-[12px]">
              Worked within a team of 4 to create and implement e-learning
              modules at the Namibia University of Science and Technology
              (NUST). Our team worked with university staff to test these
              modules in various mathematics courses as a supplemental learning
              tool for students. My main contributions to the project were
              creating the modules as well as writing and editing the final
              paper. The e-learning modules were developed using a software
              created by a WPI professor (ASSISTments), which I also worked with
              before the project.
            </span>
            <Image
              src={"/iqp_team_sm.png"}
              width={250}
              height={187}
              alt="My team members, sponsors, and I eating cake"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
