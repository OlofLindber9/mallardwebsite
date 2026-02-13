import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const projects = [
  {
    title: "Echo",
    description: "Mirrors your Discord support server to a public, SEO-friendly website. Customers can Google their issues and find answers instantly — no Discord account needed.",
    href: "https://echo.mallard.business/",
  },
  {
    title: "Swiftle",
    description: "A Wordle-inspired guessing game where players guess Taylor Swift songs. Test your Swiftie knowledge one guess at a time.",
    href: "https://www.swiftle.org/",
  },
  {
    title: "Live Dart Scorer",
    description: "A real-time dart scoring tool that uses your camera to detect where darts land on the board, automatically calculating and updating your score.",
    href: "https://dartscorer.mallard.business/",
  },
];

export default function ProjectsPage() {
  return (
    <div className="relative pb-16 bg-gradient-to-tl from-black via-[#00a479]/20 to-black min-h-screen overflow-x-hidden">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h1 className="text-5xl font-bold tracking-tight" style={{ color: '#00a479' }}>
            Projects
          </h1>
          <h2 className="mt-4 text-2xl" style={{ color: '#00795a' }}>
            A selection of things I&apos;ve built
          </h2>
        </div>
        <div className="w-full h-px" style={{ backgroundColor: '#00795a' }} />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-3">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full w-full"
              style={{ textDecoration: 'none' }}
            >
              <Card>
                <article className="p-4 md:p-8">
                  <h2 className="z-20 text-3xl font-bold duration-1000 lg:text-4xl font-display" style={{ color: '#00a479' }}>
                    {project.title}
                  </h2>
                  <p className="z-20 mt-4 text-lg duration-1000" style={{ color: '#33ffb1' }}>
                    {project.description}
                  </p>
                </article>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
} 