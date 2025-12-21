"use client";

import Image from "next/image";
import Mountains from "./ui/mountains";
import NumberedCard from "./ui/number-card";
import NightSky from "./ui/night-sky";
import AppleMusicEmbed from "./ui/apple-player";
import SimpleCarousel from "./ui/simple-carousel";

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
                {`Welcome to my portfolio! I'm Brandon, a software engineer
                looking to expand my knowledge in a close-knit, team
                environment. Thanks for stopping by!`}
              </p>
            </div>

            {/* Optional decorative element */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-80"></div>
          </div>
        </div>
      </Mountains>

      {/* Cards Container */}
      <div className="mt-12 lg:mt-16">
        <h1 className="text-2xl font-medium py-3 px-4 text-black dark:text-white">
          My approach to frontend development
        </h1>
        <div className="flex justify-center flex-wrap max-w-4xl xl:max-w-6xl w-full mx-auto px-4 sm:px-6">
          <NumberedCard
            className="p-[24px] rounded-[12px] dark:bg-[#374151] dark:border-[#4b5563] border-[#e5e7eb] border-[1px] m-4 flex-1 basis-full sm:basis-[calc(50%-2rem)] min-w-80 max-w-md lg:max-w-lg xl:max-w-none hover:transform hover:-translate-y-2 transition-all duration-300"
            number={1}
            title="Research & Wireframing"
            content={`When starting a new project or feature, the first things I do is research. Fully understanding a problem means understanding the user; asking clarifying questions, seeing what solutions already exist, and gathering necessary documentation. This informs the creation of wireframes and mockups that help reveal overlooked requirements, and help effectively communicate the plan to team members and stakeholders. The better I understand a problem, the more accurate I can be with deadlines.`}
          />
          <NumberedCard
            className="p-[24px] rounded-[12px] dark:bg-[#374151] dark:border-[#4b5563] border-[#e5e7eb] border-[1px] m-4 flex-1 basis-full sm:basis-[calc(50%-2rem)] min-w-80 max-w-md lg:max-w-lg xl:max-w-none hover:transform hover:-translate-y-2 transition-all duration-300"
            number={2}
            title="Feedback & Collaboration"
            content={`With wireframes in-hand, I find it incredibly useful to tweak my designs based on feedback from other team members. By adopting an iterative process, not only is the design quality improved, but the team stays in sync. An environment that values diverse perspectives leads to better results. I also know it's important to set deadlines at this stage as to prevent the project/feature from getting stuck in endless re-designs.`}
          />
          <NumberedCard
            className="p-[24px] rounded-[12px] dark:bg-[#374151] dark:border-[#4b5563] border-[#e5e7eb] border-[1px] m-4 flex-1 basis-full sm:basis-[calc(50%-2rem)] min-w-80 max-w-md lg:max-w-lg xl:max-w-none hover:transform hover:-translate-y-2 transition-all duration-300"
            number={3}
            title="Refinement & Prototyping"
            content={`Next step is turning my wireframes into more polished prototypes using tools like Figma. This step pays dividends when it comes time for development, as a lot of smaller details (such as colors, sizing, animations) are ironed out. Not having to worry about context-switching between development and designing ensures the feature is delivered efficiently.`}
          />
          <NumberedCard
            className="p-[24px] rounded-[12px] dark:bg-[#374151] dark:border-[#4b5563] border-[#e5e7eb] border-[1px] m-4 flex-1 basis-full sm:basis-[calc(50%-2rem)] min-w-80 max-w-md lg:max-w-lg xl:max-w-none hover:transform hover:-translate-y-2 transition-all duration-300"
            number={4}
            title="Implementation & Testing"
            content={`In my prior experience working at a startup, I had to be my own QA tester. I feel this gives me great insight into how to make my contributions more stable and robust. Comprehensive and informative error handling is essential to not only users, but fellow developers who could one day be working on my code.`}
          />
        </div>
      </div>

      {/* About Section */}
      <div className="flex flex-col dark:text-white max-w-4xl mx-auto my-6 sm:my-12 p-4 sm:py-5 w-full transition-colors text-black">
        <h1 className="text-2xl font-medium py-3">A little about me</h1>
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="mt-[12px] text-base leading-relaxed text-gray-700 dark:text-gray-300">
            {`During my sophomore year of college, I joined TrampleZone, a small
            startup where I collaborated with fellow students to enhance
            HotSpots—a desktop and mobile application that leveraged the
            OpenStreetMaps API to enable users to rate and review local venues.
            This served as one of my first experiences in a professional
            development environment, where I got experience contributing to a
            large codebase.`}
            <br /> <br />
            {`Several months into my role, we embarked on developing MyChapter, a
            new application aimed at Greek life organizations. Under the
            mentorship of the founder, I was in charge of detailing the system
            architecture by creating UML and model diagrams that were refined in weekly meetings.
            After deciding we had enough to begin the project, I took ownership
            of frontend design and implementation. Because I was involved in
            Greek life on campus, I was able to present the application to
            colleagues on campus. Later into development, I also gave more
            formal presentations to organizations like the Interfraternity Council,
            where I got great experience with public speaking and presenting.`}
            <br />
            <br />
            {`After graduating during the COVID-19 pandemic, I transitioned to a
            full-time, remote software engineering position at TrampleZone. Continuing
            with MyChapter's developement, eventually our team was able to begin
            pilot testing with multiple fraternities at my alma mater, where we
            gained modest adoption.`}
            <br />
            <br />
            {`Following my time at TrampleZone in early 2024, I took a step back
            from programming, and spent time exploring other passions and
            getting involved in my local Somerville community. This period allowed
            me to gain valuable perspective, renew my love for software
            engineering, and enjoy an active lifestyle. I have since deepened my
            expertise by exploring new languages and frameworks. I'm now looking and
            excited to join a collaborative team focused on creating software
            that delivers real value to users. I'm currently based in Wilmot,
            NH, but am willing to relocate for the right opportunity.`}
          </p>
        </div>
      </div>

      <div className="w-full">
        <SimpleCarousel>
          {/* Images Gallery 1 */}
          <div className="flex flex-col p-4 h-fit mx-auto justify-center w-full sm:flex-row sm:max-w-4xl sm:h-[450px] gap-4">
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
          <AppleMusicEmbed />

          {/* Images Gallery 2 */}
          <div className="flex flex-col p-4 h-fit mx-auto justify-center w-full sm:flex-row sm:max-w-4xl sm:h-[450px] gap-4">
            {/* Main Image - Left */}
            <div className="relative group h-64 sm:h-full sm:flex-1 overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
              <Image
                src="/Tate_Village.jpeg"
                fill
                alt="Photo of visiting friends in Namibia"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <ImageCaption text="Photo of visiting friends in Namibia" />
            </div>

            {/* Right Column - Two Images Stacked */}
            <div className="flex flex-col h-auto sm:flex-1 gap-4">
              {/* Top Right Image */}
              <div className="relative group h-64 sm:h-1/2 overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
                <Image
                  src="/Luna_Napping.jpeg"
                  fill
                  alt="Luna the Shiba"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes=""
                />
                <ImageCaption text="Luna Napping" />
              </div>

              {/* Bottom Right Image */}
              <div className="relative group h-64 sm:h-1/2 overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
                <Image
                  src="/Tamarindo_Beach.jpeg"
                  fill
                  alt="Photo of visiting friends in Namibia"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, 25vw"
                />
                <ImageCaption text="Tamarindo Beach, Costa Rica" />
              </div>
            </div>
          </div>
        </SimpleCarousel>
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
