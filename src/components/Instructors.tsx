"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";

function Instructors() {
  const people = [
    {
      id: 1,
      name: "Liam Carter",
      designation: "Guitarist",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
      id: 2,
      name: "Ava Martinez",
      designation: "Vocalist",
      image: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      id: 3,
      name: "Noah Kim",
      designation: "Drummer",
      image: "https://randomuser.me/api/portraits/men/13.jpg",
    },
    {
      id: 4,
      name: "Sophia Rossi",
      designation: "Pianist",
      image: "https://randomuser.me/api/portraits/women/14.jpg",
    },
    {
      id: 5,
      name: "Ethan Walker",
      designation: "Music Producer",
      image: "https://randomuser.me/api/portraits/men/15.jpg",
    },
  ];

  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-7xl mx-auto flex items-center justify-center h-full flex-col mt-6">
        <h1 className="text-7xl font-bold">Meet our professional Instructors</h1>
        <p className="font-bold mt-4">Dive into the mesmerizing journey </p>
        <div className="flex flex-row items-center justify-center mb-10 mt-4 w-full"><AnimatedTooltip items={people}/></div>
        
      </WavyBackground>
    </div>
  );
}

export default Instructors;
