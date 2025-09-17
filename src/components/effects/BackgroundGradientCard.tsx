"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";

export default function BackgroundGradientCard() {

  return (
    <>
      <div>
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
          <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
            title
          </p>

          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            desc
          </p>
          <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
            
            View Course
          </button>
        </BackgroundGradient>
      </div>
    </>
  );
}
