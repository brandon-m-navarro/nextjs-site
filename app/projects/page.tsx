import Link from "next/link";
import Image from "next/image";

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
}

// Sample projects data - replace with your actual projects
const projects: Project[] = [
  {
    id: "1",
    title: "NextJS Dashboard",
    description:
      "A comprehensive dashboard application built as my introduction to Next.js, following the official Next.js tutorial. This project served as a hands-on learning experience for modern React frameworks and full-stack development patterns.",
    image: "/dashboard.png",
    link: "/",
    tags: ["Authentication", "Next.js", "Postgres"],
    github: "https://github.com/brandon-m-navarro/nextjs-dashboard",
    liveDemo: "https://nextjs-dashboard-sigma-eight-57.vercel.app/",
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "A full-stack task management web application built with Next.js, featuring a responsive design and real-time optimistic updates. The app enables users to efficiently organize tasks within projects, with intuitive filtering, sorting, and seamless cross-device synchronization.",
    image: "/todo.png",
    link: "/",
    tags: ["Next.js", "TypeScript", "Tailwind", "Postgres"],
    github: "https://github.com/brandon-m-navarro/nextjs-todo",
    liveDemo: "https://nextjs-todo-lake.vercel.app/",
  },
  {
    id: "3",
    title: "Portfolio Site",
    description:
      "A client-side application hosted on GitHub Pages, built with ES6 classes and inheritance patterns to promote code reusability and scalable architecture through object-oriented design principles.",
    image: "/portfolio.png",
    link: "/",
    tags: ["JS (ES6)", "CSS3", "SVG"],
    github: "https://github.com/brandon-m-navarro/brandon-m-navarro.github.io",
    liveDemo: "https://brandon-m-navarro.github.io/",
  },
  //   {
  //     id: '3',
  //     title: 'Weather Dashboard',
  //     description: 'A responsive weather application that displays current conditions and forecasts with beautiful data visualizations.',
  //     image: '/images/project3.jpg',
  //     link: '/projects/weather-dashboard',
  //     tags: ['React', 'Chart.js', 'API Integration', 'CSS3'],
  //     github: 'https://github.com/yourusername/weather-app',
  //     liveDemo: 'https://weatherapp.vercel.app'
  //   },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#1a202c] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h1>
          <p className="text-xl text-gray-600 dark:text-white max-w-2xl mx-auto">
            {`A collection of projects I've built, featuring modern technologies
            and clean design principles.`}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-[#2d3748] rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
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

                <p className="text-gray-600 dark:text-white mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <Link
                    href={project.link}
                    className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View Details
                  </Link>

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
                    className="block mt-3 text-center text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View Live Demo →
                  </a>
                )}
              </div>
            </div>
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
