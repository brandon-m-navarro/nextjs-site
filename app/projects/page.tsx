"use client";

import Image from "next/image";
import { useState } from "react";

// Define the project type
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  mobileImage: string;
  link: string;
  tags: string[];
  github?: string;
  liveDemo?: string;
  longDescription?: string;
}

// Create Projects
const projects: Project[] = [
    {
    id: "1",
    title: "SSO App Dashboard",
    description: "",
    longDescription: "This app serves as an OIDC provider for my todo and dashboard applications. Creating this required a lot of research, reading through multiple RFCs (6749, 6750, 9700) to learn about Authorization Flow, PKCE, OIDC, and OIDC Providers. I iterated through various implementations, trying out both Auth0 and Okta as identity providers with next-auth. Unhappy with the limitations (and running into paywalls), I moved onto self-hosted solutions. I set up a central authority server using KeyCloak and Docker, but didn't want to commit to an Amazon EC2 instance for such a small project. After a bit more research, I decided to try the better-auth framework, as it had a beta version of an OIDC Provider plugin. Working with early versions of that plugin meant manually implementing the Authorization Flow to securely fetch from the user token endpoint. Since that implementation, better-auth has simplified the process by including .well-known discovery endpoints.",
    image: "/login_bnav.png",
    mobileImage: "/login_bnav.png",
    link: "/",
    tags: ["Authentication", "SSO", "OAuth2", "OIDC", "Route 53 (AWS)"],
    github: "https://github.com/brandon-m-navarro/app-dashboard",
    liveDemo: "https://login.bnav.dev/",
  },
  {
    id: "2",
    title: "Todo App",
    description: "",
    longDescription: "A full-stack web application built with Next.js. The app allows for both public and private projects, using my SSO solution to provide authentication. This project served as a great learning experience, as its development was not guided by any tutorials; any questions that arose were solved by reading through documentation. This app originally didn't have users, authentication, or use ORM for database interactions, so it also offered good insight into database migration, and how much easier an ORM makes things.",
    image: "/todo.png",
    mobileImage: "/mobile_todo.png",
    link: "/",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Postgres"],
    github: "https://github.com/brandon-m-navarro/nextjs-todo",
    liveDemo: "https://todo.bnav.dev/",
  },
  {
    id: "3",
    title: "Duolingo Chinese → Anki Bridge",
    description: "",
    longDescription: "I enjoy using Duolingo, but not having a dedicated flashcard feature for vocab felt a bit limiting. My tool streamlines the creation of Anki flashcards from your lessons. It complies with Duolingo's TOS by not scraping their copyrighted assets; instead, it extracts the Hanzi characters along with their Pinyin counterpart and English translations, then uses external TTS services to generate new audio. Check out the README on GitHub for a demo of the workflow.",
    image: "/duo.png",
    mobileImage: "/duo.png",
    link: "/",
    tags: ["JS", "CSS3", "Python", "Userscripts"],
    github: "https://github.com/brandon-m-navarro/duolingo-chinese-anki-bridge/tree/main",
    liveDemo: "",
  },
  {
    id: "4",
    title: "Portfolio Site",
    description: "",
    longDescription: "This site began as a vanilla JavaScript application, built without any frameworks using basic ES6 classes and CSS. I've since reimplemented the site using React, Typescript, and TailwindCSS. This served as a practical comparison of how simple HTML/JS/CSS has evolved to modern framework-based development.",
    image: "/js.png",
    mobileImage: "/js_mobile.png",
    link: "/",
    tags: ["JS (ES6)", "CSS3", "SVG"],
    github: "https://github.com/brandon-m-navarro/brandon-m-navarro.github.io",
    liveDemo: "https://js.bnav.dev",
  },
  {
    id: "5",
    title: "NextJS Dashboard",
    description: "",
    longDescription: "A dashboard application built as my introduction to Next.js, following the official Next.js tutorial. This project served as a hands-on learning experience for modern React frameworks and full-stack development patterns. As a prerequisite, I also completed Vercel's React Foundations course, which covered the fundamentals of React (components, props, state, hooks, along with newer features like Server Components and Suspense). I've since made changes to the app to allow it to interface with my SSO ecosystem.",
    image: "/dashboard.png",
    mobileImage: "/dash_mobile.png",
    link: "/",
    tags: ["Authentication", "Next.js", "Postgres", "Typescript", "React"],
    github: "https://github.com/brandon-m-navarro/nextjs-dashboard",
    liveDemo: "https://dash.bnav.dev/",
  },
  {
    id: "6",
    title: "Escape",
    description: "",
    longDescription: "Escape is a family of board games originally developed in 7 weeks for my CS4233: Object-Oriented Analysis & Design term project. This project focused on designing an OO program and working through iterations of new rules, pieces, and board types. Since originally implementing 5 years ago, I've recently returned to the project to refresh what I'd learned in a 4000-level course at WPI and make a number of improvements. The key improvements include: eliminating the use of raw types, fixing wildcard capture issues, fixing all failing tests, and creating a visualization tool to more easily inspect initialized boards. It's important to note there is no GUI for this game, so it cannot be played as one would think. The board game concept was used to create a project where OO principles and patterns can be implemented.",
    image: "/escape_vis.png",
    mobileImage: "/escape.png",
    link: "/",
    tags: ["Java", "OO Design", "JUnit"],
    github: "https://github.com/brandon-m-navarro/escape",
    liveDemo: "",
  },
];

export default function ProjectsPage() {
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(
    null
  );

  const toggleProject = (projectId: string) => {
    if (expandedProjectId === projectId) {
      setExpandedProjectId(null);
    } else {
      setExpandedProjectId(projectId);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#1a202c] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-white max-w-2xl mx-auto">
            {`A collection of projects I've built, featuring modern technologies
            and clean design principles.`}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isExpanded={expandedProjectId === project.id}
              onToggle={toggleProject}
            />
          ))}
        </div>

        {/* Empty State */}
        {projects.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-2xl font-semibold text-gray-600 mb-4">
              No projects yet
            </h3>
            <p className="text-gray-500">
              Projects will be displayed here once added.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

interface ProjectCardProps {
  project: Project;
  isExpanded: boolean;
  onToggle: (projectId: string) => void;
}

function ProjectCard({ project, isExpanded, onToggle }: ProjectCardProps) {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  if (isExpanded) {
    return (
      <div>
        {/* Backdrop */}
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" />

        {/* Expanded Card */}
        <div className="fixed top-8 left-8 right-8 bottom-8 md:top-16 md:left-16 md:right-16 md:bottom-16 bg-white dark:bg-[#2d3748] rounded-xl shadow-2xl z-50 flex flex-col md:flex-row overflow-hidden">
          {/* Image Section */}
          <div className="flex-1 mb-6 md:mb-0">
            <div className="relative h-64 md:h-full rounded-l-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
              <Image
                src={project.mobileImage}
                alt={project.title}
                fill
                className="object-cover cursor-pointer"
                onClick={() => setIsImageModalOpen(true)}
              />
              <button
                onClick={() => setIsImageModalOpen(true)}
                className="absolute top-3 right-3 w-10 h-10 bg-black bg-opacity-70 text-white rounded-lg flex items-center justify-center hover:bg-opacity-90 transition-all backdrop-blur-sm"
                title="Expand image"
              >
                ⛶
              </button>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 flex flex-col overflow-hidden p-6">
            <h2 className="text-[1.5rem] font-bold text-gray-900 dark:text-white mb-4">
              {project.title}
            </h2>

            <div className="flex-1 overflow-y-auto pr-2 mb-6 pb-[24px] [mask-image:linear-gradient(to_bottom,black_calc(100%-40px),transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_calc(100%-40px),transparent_100%)]">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-[1rem]">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3 mb-4">
              <button
                onClick={() => onToggle(project.id)}
                className="flex-1 bg-red-600 text-white text-center py-3 px-4 rounded-lg hover:bg-red-700 transition-colors font-medium"
              >
                Show Less
              </button>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                  title="GitHub Repository"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              )}
            </div>

            {/* Live Demo Link */}
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-lg"
              >
                View Live Demo →
              </a>
            )}
          </div>
        </div>

        {/* Image Modal */}
        {isImageModalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-[60] flex items-center justify-center p-4"
            onClick={() => setIsImageModalOpen(false)}
          >
            <div
              className="relative max-w-4xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={project.image}
                alt={project.title}
                width={1200}
                height={800}
                className="rounded-lg"
              />
              <button
                onClick={() => setIsImageModalOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-black bg-opacity-70 text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors"
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-[#2d3748] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
      {/* Project Image */}
      <div className="relative h-48 w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {project.title}
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-[1.5] text-base line-clamp-3">
          {project.longDescription}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4 min-h-[64px] items-start">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <button
            onClick={() => onToggle(project.id)}
            className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Details
          </button>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
              title="GitHub Repository"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
          )}
        </div>

        {/* Live Demo Link */}
        {project.liveDemo && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-3 text-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
          >
            View Live Demo →
          </a>
        )}
      </div>
    </div>
  );
}
