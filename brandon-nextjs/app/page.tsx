import Image from "next/image";
import Mountains from "./ui/mountains";
import NavBar from "./ui/nav-bar";
import ThemeToggle from "./ui/theme-toggle";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen pb-20 font-[family-name:var(--font-geist-sans)]">
      <div className="bg-white h-[10vh] w-full flex flex-row place-items-center">
        <div className="w-[150px]"></div>
        <div className="flex justify-around w-full">
          <NavBar/>
        </div>
        <ThemeToggle isDayMode={false}/>
      </div>
      <Mountains>
        <div className="absolute flex items-center top-28 left-[50%] translate-x-[-50%] w-[90%]">
          <div className="mr-8 drop-shadow-image max-w-[250px] min-w-[250px] max-h-[250px] min-h-[250px] overflow-hidden">
            <Image
                  src="/me_sitting.JPG"
                  width={338}
                  height={226}
                  alt="Picture of me"
                  className="min-w-[135%] max-w-[135%] translate-x-[-12%] translate-y-[1%]"
            />
          </div>
          <span className="text-[clamp(1rem, .8852rem + .4898vw, 1.375rem)] p-1 bg-mask text-center rounded">
            My name is Brandon. I'm a software engineer looking to expand my knowledge in a
            close-knit, team environment. I've previously worked at a small startup developing
            a mobile/web application called MyChapter. My work was primarily focused on frontend
            development, but I'm always looking to learn about new frameworks, languages, and any
            other technology under the sun.
          </span>
        </div>
      </Mountains>
      <main 
        className="flex flex-col items-center row-start-2 gap-8 sm:items-start">
      </main>
    </div>
  );
}
