import { BarChart, Github } from "lucide-react";
import React from "react";

type Props = {};

export default function Hero({}: Props) {
  return (
    <>
      <div className="md:my-7 my-3 flex flex-wrap text-center items-center gap-2 justify-center md:text-xl text-sm">
        <BarChart />
        <span>levels.fyi 🎉 assignment by</span>
        <a
          className="text-transparent font-bold bg-clip-text bg-gradient-to-br from-[#ba83f1c8] to-[#fb47a1ca]"
          href="https://github.com/manishbisht777"
        >
          Manish Bisht
        </a>
      </div>
      <div className="text-2xl md:text-4xl lg:text-8xl font-extrabold">
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#007cf0] to-[#00dfd8] animate-gradient">
          Search.
        </span>
        <span className="text-white  animate-gradient">View.</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#ff4d4d] to-[#f9cb28] animate-gradient">
          Explore.
        </span>
      </div>
      <p className="max-w-3xl md:text-xl text-sm text-slate-300 text-center my-7">
        Vercel's frontend cloud gives developers the frameworks, workflows, and
        infrastructure to build a faster, more personalized Web.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        <button className="rounded-md p-[1px] bg-white text-black">
          <div className="flex items-center gap-1 px-10 py-2 rounded-md">
            <BarChart className="w-6 h-6" />
            Demo
          </div>
        </button>
        <button className=" text-white  rounded-md bg-gradient-to-br from-[#ba83f1c8] to-[#fb47a1ca] p-[1px]">
          <div className="bg-black flex items-center rounded-md gap-1 px-10 py-2">
            <Github className="w-6 h-6" />
            Github
          </div>
        </button>
      </div>
    </>
  );
}
