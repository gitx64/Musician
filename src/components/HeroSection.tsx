"use client";
import Link from "next/link";
import { div } from "motion/react-client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { Spotlight } from "@/components/ui/spotlight-new";
import { Button } from "./ui/moving-border";
import React from "react";
import { GridSmallBackgroundDemo } from "./effects/BackgroundGrid";

export default function HeroSection() {
  const paragraph: string =
    "Dive into our comprehensive music courses and transform your musical journey today.";

  const words = paragraph.split(" ").map((word) => ({
    text: word + " ",
  }));

  return (
    <div className="h-auto md:h-[55rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight />
      <div className="p-4 relative z-10 w-full text-center ">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500 ">
          Master The Art of Music
        </h1>

        <div className="mt-11">
          <TypewriterEffectSmooth
            className="text-sm text-center justify-center"
            cursorClassName="w-[3px] h-7"
            words={words}
          />
        </div>
        <div className="mt-8">
          <Link href="/courses">
            <Button
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 "
            >
              Explore Courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
