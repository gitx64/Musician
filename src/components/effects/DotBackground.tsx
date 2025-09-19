import { cn } from "@/lib/utils";
import React from "react";
import { MovingCards } from "../MovingCards";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function DotBackground() {
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
  ];
  return (
    <div className="relative flex h-[30rem] w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />
      <InfiniteMovingCards items={testimonials} direction="right" speed="normal" className="w-full"/>
    </div>
  );
}
