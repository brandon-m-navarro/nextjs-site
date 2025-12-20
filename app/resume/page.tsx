"use client";
import clsx from "clsx";
import Image from "next/image";
import { useContext } from "react";
import ThemeContext from "../store/ThemeContext";
import localFont from "next/font/local";
import SkillRating from "../ui/skill-rating";
import { skillsByCategory } from "../data/skills";
import "@/app/globals.css";

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
      className={`text-black dark:text-white w-full dark:bg-[#1A202C] py-1 ${lato.className}`}
    >
      <div className="max-w-[800px] mx-auto my-[1em] resume-button">
        <a href="/CV.pdf" download="CV.pdf">
          <button className="flex-1 pointer-cursor max-w-[200px] bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
            Download Resume
          </button>
        </a>
      </div>
      <div className="flex flex-wrap  max-w-[800px] my-[12px] mx-auto box-border p-[12px] rounded-[4px] bg-black/[0.05] dark:bg-[#2d3748]">
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
              className={`${josefinSansLight.className} text-[16px] leading-[16px] font-[600]`}
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
            <div className="skill-rating-container">
              {Object.entries(skillsByCategory).map(
                ([category, categorySkills]) => (
                  <div key={category} className="skill-rating-section">
                    <span
                      className={`text-left mb-[12px] text-[12px] leading-[24px] ${latoBold.className}`}
                    >
                      {category}
                    </span>
                    <div className="flex flex-col">
                      {categorySkills.map((skill) => (
                        <div key={skill.label} className="skill-rating">
                          <span>{skill.label}</span>
                          <div className="">
                            <SkillRating
                              rating={skill.rating}
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
                      ))}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
        <div className="flex-[1_1_100%] md:flex-[0.75_1_0%] px-[4px]">
          <div className="border-b-black border-b-[1px] dark:border-b-white leading-[32px] dark:border-b-white/50 mb-[12px]">
            <span className={`${latoBold.className} text-[14px] text-left`}>
              EDUCATION
            </span>
          </div>

          <div className="flex mb-[12px]">
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
          <div className="flex flex-col mb-[12px]">
            <span className="text-[14px] font-[700]">Campus Involvement</span>

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
                <li>Led the PR commitee for 2 years.</li>
                <li>
                  Contributed to creating and maintaining our current{" "}
                  <a
                    className="dark:text-[#faebd7] text-[#551A8B] underline"
                    href="https://sigmapigammaiota.org/"
                  >
                    chapter site
                  </a>
                  .
                </li>
                <li>
                  Was an event coordinator for Amazing Day, an annual week-long
                  campus event that raised awareness for mental health and
                  suicide in the WPI community.
                </li>
                <li>
                  Volunteered bi-weekly at the local food pantry to help prep,
                  cook, and clean on weekends.
                </li>
              </ul>
            </div>
          </div>

          <div className="border-b-black border-b-[1px] dark:border-b-white leading-[32px] dark:border-b-white/50 mb-[12px]">
            <span className={`${latoBold.className} text-[14px] text-left`}>
              Professional Experience
            </span>
          </div>
          <div className="flex mb-[12px]">
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
              across mobile and desktop. Led in the initial planning for the
              application and created all frontend model classes and UI
              components. <br />
              <br />
              Working at a startup meant wearing many hats, including
              programmer, marketer, instructor, and recruiter:
              <br />
              <ul className="text-[12px] list-disc pl-[12px] mt-[6px]">
                <li>
                  Designed and implemented unique features aimed at greek life
                  organizations.
                </li>
                <li>
                  Created promotional content for social media; designed all app
                  store visual assets to improve app store optimization.
                </li>
                <li>
                  Helped mentor several new hires, getting them through setup,
                  introducing them to the codebase, and reviewing their code.
                </li>
                <li>
                  Was involved in the recruitment process where I would help
                  conduct interviews with prospective hires.
                </li>
              </ul>
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
      </div>
    </div>
  );
}
