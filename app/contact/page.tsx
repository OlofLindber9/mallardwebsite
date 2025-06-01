"use client";
import { Github, Mail, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
	{
		icon: <Mail size={20} />,
		href: "mailto:ololin0725@gmail.com",
		label: "Email",
		handle: "ololin0725@gmail.com",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/OlofLindber9",
		label: "Github",
		handle: "OlofLindber9",
	},
	{
		icon: <Linkedin size={20} />,
		href: "https://www.linkedin.com/in/olof-lindberg-a05a561bb/",
		label: "Linkedin",
		handle: "Olof Lindberg",
	},
];

export default function Example() {
	return (
		<div className=" bg-gradient-to-tl from-black via-[#00a479]/20 to-black">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto sm:grid-cols-3 lg:gap-16">
					{socials.map((s) => (
						<Card>
							<Link
								href={s.href}
								target="_blank"
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-[#00a479] via-[#00a479]/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-[#00a479] group-hover:text-[#00a479] group-hover:bg-zinc-900 border-[#00a479] bg-zinc-900 group-hover:border-[#00a479] drop-shadow-orange">
									{s.icon}
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									<span className="lg:text-xl font-medium duration-150 xl:text-3xl text-[#00a479] group-hover:text-[#00a479] font-display">
										{s.handle}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-[#00a479] group-hover:text-[#00a479]">
										{s.label}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
