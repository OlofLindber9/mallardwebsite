import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

// Mock projects data
const mockProjects = [
  {
    title: "Project Alpha",
    description: "A revolutionary AI-powered platform that transforms how we interact with technology. Built with cutting-edge machine learning algorithms and modern web technologies.",
    date: "2024-03-15",
    views: 1234
  },
  {
    title: "Project Beta",
    description: "An innovative cloud infrastructure solution that helps businesses scale their operations efficiently. Features include automated resource management and real-time analytics.",
    date: "2024-03-10",
    views: 856
  },
  {
    title: "Project Gamma",
    description: "A next-generation mobile application that redefines social networking. Built with React Native and Firebase, offering seamless cross-platform experiences.",
    date: "2024-03-05",
    views: 567
  }
];

export default function ProjectsPage() {
  return (
    <div className="relative pb-16 bg-gradient-to-tl from-black via-[#00a479]/20 to-black">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight" style={{ color: '#00a479' }}>
            Projects
          </h2>
          <p className="mt-4" style={{ color: '#00795a' }}>
            Some of the projects are from work and some are on my own time.
          </p>
        </div>
        <div className="w-full h-px" style={{ backgroundColor: '#00795a' }} />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-3">
          {mockProjects.map((project, index) => (
            <Card key={index}>
              <article className="p-4 md:p-8">
                <div className="flex justify-between gap-2 items-center">
                  <span className="text-xs duration-1000 drop-shadow-orange" style={{ color: '#00a479' }}>
                    <time dateTime={project.date}>
                      {Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
                        new Date(project.date)
                      )}
                    </time>
                  </span>
                  <span className="text-xs flex items-center gap-1" style={{ color: '#00795a' }}>
                    {Intl.NumberFormat("en-US", { notation: "compact" }).format(project.views)} views
                  </span>
                </div>
                <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl font-display" style={{ color: '#00a479' }}>
                  {project.title}
                </h2>
                <p className="z-20 mt-4 text-sm duration-1000" style={{ color: '#00795a' }}>
                  {project.description}
                </p>
              </article>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
