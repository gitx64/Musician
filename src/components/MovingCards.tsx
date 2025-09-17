"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function MovingCards() {
  const testimonials = [
    {
      quote:
        "This platform completely transformed how I understand music. The lessons are structured and super easy to follow!",
      name: "Emily Carter",
      title: "Beginner Pianist",
    },
    {
      quote:
        "As a guitarist, I always struggled with music theory. These courses made it simple and practical to apply.",
      name: "David Mitchell",
      title: "Guitar Enthusiast",
    },
    {
      quote:
        "The production module helped me release my first track online. Highly recommend for aspiring producers.",
      name: "Sophia Lee",
      title: "Independent Music Producer",
    },
    {
      quote:
        "From rhythm to songwriting, every course feels like it was made just for me. Absolutely worth it!",
      name: "Rajesh Kumar",
      title: "Singer-Songwriter",
    },
    {
      quote:
        "The performance tips gave me the confidence to play live without fear. Amazing experience!",
      name: "Lucas Brown",
      title: "Live Performer",
    },
    {
      quote:
        "The best part is the balance between theory and practice. It keeps me motivated to learn every day.",
      name: "Isabella Martinez",
      title: "Music Student",
    },
  ]

  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

