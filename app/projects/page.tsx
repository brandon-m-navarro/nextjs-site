"use client";

import Image from "next/image";
import { useState } from "react";

// Define the project type
interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
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
    title: "NextJS Dashboard",
    description: "A comprehensive dashboard application built as my introduction to Next.js...",
    longDescription: "A comprehensive dashboard application built as my introduction to Next.js, following the official Next.js tutorial. This project served as a hands-on learning experience for modern React frameworks and full-stack development patterns. As a prerequisite, I also completed their React Foundations course, which covers the fundamentals of React, such as components, props, state, and hooks, and newer features like Server Components and Suspense.",
    image: "/dashboard.png",
    link: "/",
    tags: ["Authentication", "Next.js", "Postgres"],
    github: "https://github.com/brandon-m-navarro/nextjs-dashboard",
    liveDemo: "https://dash.bnav.dev/",
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A full-stack task management web application built with Next.js...",
    longDescription: "A full-stack task management web application built with Next.js, featuring a responsive design and real-time optimistic updates. The app enables users to efficiently organize tasks within projects, with intuitive filtering, sorting, and seamless cross-device synchronization. Developed with a mobile-first approach, this project provided extensive practice with React, TypeScript, Next.js, and Tailwind CSS, particularly focusing on Next.js routing and React Context for efficient database operations with Postgres.",
    image: "/todo.png",
    link: "/",
    tags: ["Next.js", "TypeScript", "Tailwind", "Postgres"],
    github: "https://github.com/brandon-m-navarro/nextjs-todo",
    liveDemo: "https://todo.bnav.dev/",
  },
  {
    id: "3",
    title: "Portfolio Site",
    description: "A client-side application hosted on GitHub Pages...",
    longDescription: "This project began as a vanilla JavaScript application, built with scalable ES6 classes and LocalStorage for persistent user preferences. It was then reimplemented in React/Next.js, serving as a practical comparison of foundational patterns versus modern framework-based development.",
    image: "/portfolio.png",
    link: "/",
    tags: ["JS (ES6)", "CSS3", "SVG"],
    github: "https://github.com/brandon-m-navarro/brandon-m-navarro.github.io",
    liveDemo: "https://brandon-m-navarro.github.io/",
  },
  {
    id: "4",
    title: "Duolingo Chinese → Anki Bridge",
    description: "",
    longDescription: "I solved a key problem for language learners: Duolingo's missing flashcard feature. My tool makes it possible to create flashcards using the Anki platform from lesson vocabulary. It ethically complies with Duolingo's TOS by not scraping their copyrighted assets; instead, it extracts text and uses external TTS services to generate new audio, providing a legal and effective study aid. Check out the README on Github for a demo of the workflow.",
    image: "/duo.png",
    link: "/",
    tags: ["JS", "CSS3", "Python", "Userscripts"],
    github: "https://github.com/brandon-m-navarro/duolingo-chinese-anki-bridge/tree/main",
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
                src={project.image}
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
