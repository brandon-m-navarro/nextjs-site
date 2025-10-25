"use client";

import Image from "next/image";
import Mountains from "./ui/mountains";
import NumberedCard from "./ui/number-card";
import NightSky from "./ui/night-sky";

export default function Home() {
  return (
    <div className="bg-white dark:bg-[#1a202c] flex flex-col transition-colors items-center justify-items-center min-h-screen pb-20 font-[family-name:var(--font-geist-sans)]">
      <NightSky bg="#282A3A" />
      <Mountains>
        <div className="absolute flex flex-col sm:flex-row items-center justify-center top-10 sm:top-28 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl">
          {/* Image Container */}
          <div className="relative mb-6 sm:mb-0 sm:mr-10 lg:mr-12 w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 shadow-2xl shadow-black/20">
            <Image
              src="/me_sitting.JPG"
              fill
              alt="Portrait of me (Brandon Navarro)"
              className="object-cover object-center scale-105 hover:scale-110 transition-transform duration-500"
              priority
              sizes="(max-width: 640px) 192px, (max-width: 1024px) 224px, 256px"
            />
            {/* Subtle overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
          </div>

          {/* Text Container */}
          <div className="relative max-w-screen-sm">
            <div className="select-none text-[clamp(1rem,.8852rem+.4898vw,1.375rem)] p-6 sm:p-8 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-center rounded-2xl shadow-2xl shadow-black/20 border border-white/20">
              <p className="text-gray-800 dark:text-gray-200 leading-relaxed font-medium">
                Welcome to my portfolio, built with modern technologies
                including React, Next.js, and Tailwind CSS. Thanks for stopping
                by!
              </p>
            </div>

            {/* Optional decorative element */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-80"></div>
          </div>
        </div>
      </Mountains>

      {/* Cards Container */}
      <div className="flex justify-center flex-wrap max-w-4xl xl:max-w-6xl mt-12 lg:mt-16 w-full mx-auto px-4 sm:px-6">
        <NumberedCard
          className="p-[24px] rounded-[12px] dark:bg-[#374151] dark:border-[#4b5563] border-[#e5e7eb] border-[1px] m-4 flex-1 basis-full sm:basis-[calc(50%-2rem)] min-w-80 max-w-md lg:max-w-lg xl:max-w-none hover:transform hover:-translate-y-2 transition-all duration-300"
          number={1}
          title="Research & Wireframing"
          content="After documenting requirements to fully understand the problem space, I conduct competitive analysis and UI research. This informs the creation of detailed wireframes and mockups that help identify overlooked requirements and effectively communicate vision to stakeholders."
        />
        <NumberedCard
          className="p-[24px] rounded-[12px] dark:bg-[#374151] dark:border-[#4b5563] border-[#e5e7eb] border-[1px] m-4 flex-1 basis-full sm:basis-[calc(50%-2rem)] min-w-80 max-w-md lg:max-w-lg xl:max-w-none hover:transform hover:-translate-y-2 transition-all duration-300"
          number={2}
          title="Feedback & Collaboration"
          content="With wireframes established, I facilitate collaborative review sessions with cross-functional teams. This iterative feedback process not only enhances design quality but also fosters team alignment and creates an environment that values diverse perspectives."
        />
        <NumberedCard
          className="p-[24px] rounded-[12px] dark:bg-[#374151] dark:border-[#4b5563] border-[#e5e7eb] border-[1px] m-4 flex-1 basis-full sm:basis-[calc(50%-2rem)] min-w-80 max-w-md lg:max-w-lg xl:max-w-none hover:transform hover:-translate-y-2 transition-all duration-300"
          number={3}
          title="Refinement & Prototyping"
          content="Incorporating team feedback, I evolve wireframes into high-fidelity prototypes with interactive elements. This stage focuses on usability testing, visual polish, and preparing assets for development handoff."
        />
        <NumberedCard
          className="p-[24px] rounded-[12px] dark:bg-[#374151] dark:border-[#4b5563] border-[#e5e7eb] border-[1px] m-4 flex-1 basis-full sm:basis-[calc(50%-2rem)] min-w-80 max-w-md lg:max-w-lg xl:max-w-none hover:transform hover:-translate-y-2 transition-all duration-300"
          number={4}
          title="Experimentation & Learning"
          content="I embrace calculated experimentation to push creative boundaries. While not every concept succeeds, each iteration provides valuable insights that drive innovation and continuous improvement in the design process."
        />
      </div>

      {/* About Section */}
      <div className="flex flex-col dark:text-white max-w-[700px] mx-auto my-6 sm:my-12 p-4 sm:py-5 w-full transition-colors text-black">
        <h1 className="text-2xl font-medium py-3">About</h1>
        <div className="max-w-3xl mx-auto space-y-4">
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            During my sophomore year of college, I joined TrampleZone, a small
            startup where I collaborated with fellow students to enhance
            HotSpots—a desktop and mobile application that utilized
            OpenStreetMaps to enable users to rate and review local venues.
          </p>

          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            Several months into my role, we embarked on developing MyChapter, a
            new application focused on Greek life organizations. Under the
            mentorship of founder Jim, I contributed to system architecture by
            creating UML diagrams and took ownership of frontend design and
            implementation. After graduating during the COVID-19 pandemic, I
            transitioned to a full-time software engineering position at
            TrampleZone, where I continued developing MyChapter and conducted
            pilot testing with multiple fraternities at my alma mater.
          </p>

          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            Beyond my professional work, I enjoy exploring Somerville through
            walking and running routes, participating in local basketball
            recreational leagues, and embarking on backpacking hikes when
            visiting family in New Hampshire.
          </p>
        </div>
      </div>

      {/* Images Gallery */}
      <div className="flex flex-col p-4 h-fit mx-auto justify-center w-full sm:flex-row sm:max-w-4xl sm:h-[400px] gap-4">
        {/* Main Image - Left */}
        <div className="relative group h-64 sm:h-full sm:flex-1 overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
          <Image
            src="/skydive.png"
            fill
            alt="Me skydiving in Swakopmund, Namibia during my IQP"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
          <ImageCaption text="Skydiving in Swakopmund, Namibia (IQP)" />
        </div>

        {/* Right Column - Two Images Stacked */}
        <div className="flex flex-col h-auto sm:flex-1 gap-4">
          {/* Top Right Image */}
          <div className="relative group h-64 sm:h-1/2 overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
            <Image
              src="/Hout_Bay.JPG"
              fill
              alt="View of Hout Bay in Cape Town, South Africa"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, 25vw"
            />
            <ImageCaption text="Hout Bay, Cape Town" />
          </div>

          {/* Bottom Right Image */}
          <div className="relative group h-64 sm:h-1/2 overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
            <Image
              src="/hershey.JPG"
              fill
              alt="Hershey the dog being photogenic"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 100vw, 25vw"
            />
            <ImageCaption text="Hershey being photogenic" />
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable ImageCaption component to eliminate duplicate caption styles
function ImageCaption({ text }: { text: string }) {
  return (
    <div className="absolute inset-x-3 bottom-3 bg-white/90 backdrop-blur-sm text-gray-900 transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 rounded-lg px-3 py-2 shadow-lg border border-white/20">
      <span className="text-sm font-medium tracking-tight">{text}</span>
    </div>
  );
}
