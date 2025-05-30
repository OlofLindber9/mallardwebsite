import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

// Mock products data
const mockProducts = [
  {
    title: "Searchable Support",
    description: "Echo mirrors your Discord support server to a public website with great SEO. Now customers can Google their issues and find solutions instantly.",
    date: "2024-03-15",
    views: 1234
  },
  {
    title: "No Account Needed",
    description: "Your users shouldn't have to create a Discord account to get help. With Echo, they don't have to.",
    date: "",
    views: null
  },
  {
    title: "All Discord Features, No Friction",
    description: "Echo supports everything: Markdown, code snippets, file previews, videos, images — just like Discord, but easier to access.",
    date: "2024-03-05",
    views: 567
  },
  {
    title: "Your Subdomain or Ours",
    description: "Deploy it under your brand (support.yourcompany.com) or let us host it. Flexible, fast, and friction-free.",
    date: "2024-03-05",
    views: 567
  },
  {
    title: "Always Up to Date",
    description: "Echo syncs content from your Discord server in real time, keeping everything fresh without manual work.",
    date: "2024-03-05",
    views: 567
  },
  {
    title: "Try Echo now",
    description: "See how your Discord support can look and feel on the web.",
    date: "2024-03-05",
    views: 567
  }
];

export default function ProductsPage() {
  return (
    <div className="relative pb-16 bg-gradient-to-tl from-black via-[#00a479]/20 to-black min-h-screen overflow-x-hidden">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h1 className="text-5xl font-bold tracking-tight" style={{ color: '#00a479' }}>
            Echo 
          </h1>
          <h2 className="mt-4 text-2xl" style={{ color: '#00795a' }}>
            Echoes your Discord server to the web
          </h2>
        </div>
        <div className="w-full h-px" style={{ backgroundColor: '#00795a' }} />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-3">
          {mockProducts.map((product, index) => {
            // If this is the last card ("Try the product now"), make it clickable
            if (index === mockProducts.length - 1 && product.title === "Try Echo now") {
              return (
                <a
                  key={index}
                  href="https://echo.mallard.business/" // Change this to your actual demo URL
                  className="block h-full w-full"
                  style={{ textDecoration: 'none' }}
                >
                  <Card>
                    <article className="p-4 md:p-8 transition-transform duration-200 hover:scale-105 hover:shadow-2xl cursor-pointer relative bg-gradient-to-br from-[#00a479]/80 via-[#33ffb1]/60 to-[#00ffd0]/80 border-2 border-[#33ffb1] animate-subtle-pulse">
                      <h2 className="z-20 text-3xl font-extrabold duration-1000 lg:text-4xl font-display flex items-center gap-2 text-white drop-shadow-lg">
                        {product.title}
                        <span className="ml-2 text-3xl" style={{ color: '#fff' }}>🚀</span>
                      </h2>
                      <p className="z-20 mt-4 text-lg font-semibold duration-1000 text-white drop-shadow">
                        {product.description}
                      </p>
                      <div className="mt-8 flex justify-center">
                        <span className="inline-flex items-center px-6 py-3 text-lg font-bold rounded-full bg-[#00a479] hover:bg-[#33ffb1] text-black shadow-lg transition-colors duration-200 animate-glow">
                          Launch Demo
                          <span className="ml-2 text-2xl">→</span>
                        </span>
                      </div>
                    </article>
                  </Card>
                </a>
              );
            }
            // Default card
            return (
              <Card key={index}>
                <article className="p-4 md:p-8">
                  <div className="flex justify-between gap-2 items-center">
                  </div>
                  <h2 className="z-20 text-3xl font-bold duration-1000 lg:text-4xl font-display" style={{ color: '#00a479' }}>
                    {product.title}
                  </h2>
                  <p className="z-20 mt-4 text-lg duration-1000" style={{ color: '#33ffb1' }}>
                    {product.description}
                  </p>
                </article>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
} 