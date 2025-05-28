import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-[#00a479]/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500"
              style={{ color: '#00795a' }}
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-[#00a479]/0 via-[#00a479]/50 to-transparent" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <div className="flex flex-col items-center z-10 animate-fade-in">
      <img
        src="/mallard_logo_wide_transparent.png"
        alt="Mallard Software Logo"
        className="max-w-2xl w-full mx-auto mb-4"
      />
        <h1
          className="py-3.5 px-0.5 text-4xl z-10 duration-1000 cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap"
          style={{ color: '#00a479' }}
        >
          Mallard Software
        </h1>
      </div>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-[#00a479]/0 via-[#00a479]/50 to-transparent" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm" style={{ color: '#00795a' }}>
          I'm building{" "}
          <Link
            target="_blank"
            href="https://unkey.dev"
            className="underline duration-500 hover:text-[#00a479]"
          >
            unkey.dev
          </Link> to solve API authentication and authorization for developers.
        </h2>
      </div>
    </div>
  );

}
