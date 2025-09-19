"use client";
import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebiners() {
  
  const featuredWebiners = [
    {
      title: "Beginner Guitar Lessons",
      description:
        "Step-by-step lessons to help beginners learn chords, strumming, and their first songs.",
      slug: "beginner-guitar-lessons",
      isFeatured: true,
    },
    {
      title: "Advanced Piano Techniques",
      description:
        "Master advanced scales, arpeggios, and improvisation techniques for professional piano playing.",
      slug: "advanced-piano-techniques",
      isFeatured: false,
    },
    {
      title: "Music Theory Essentials",
      description:
        "Understand scales, chords, harmony, and rhythm to strengthen your musical foundation.",
      slug: "music-theory-essentials",
      isFeatured: true,
    },
    {
      title: "Vocal Training for Singers",
      description:
        "Improve your vocal range, control, and confidence with structured vocal exercises.",
      slug: "vocal-training-for-singers",
      isFeatured: false,
    },
    {
      title: "Electronic Music Production",
      description:
        "Learn how to create EDM, hip-hop, and lo-fi beats using digital audio workstations.",
      slug: "electronic-music-production",
      isFeatured: true,
    },
    {
      title: "Drumming Basics",
      description:
        "Get started with drum patterns, rhythm exercises, and coordination skills.",
      slug: "drumming-basics",
      isFeatured: false,
    },
    {
      title: "Songwriting Workshop",
      description:
        "Learn how to write lyrics, compose melodies, and structure complete songs.",
      slug: "songwriting-workshop",
      isFeatured: true,
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-teal-300 font-bold">Featured Webiners</h2>
          <p className="font-bold text-3xl ">Enhance your musical journey</p>
        </div>
        <div className="mt-10">
          <HoverEffect
            items={featuredWebiners.map((webiner) => ({
              title: webiner.title,
              description: webiner.description,
              link: webiner.slug,
            }))}
          />
        </div>
        <div className="items-center justify-center relative text-center">
          <Link href={"/"}>
            <button className=" px-4 py-2 rounded-md border border-black bg-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgba(0,0,0)] transition duration-200">
              View All Webiners
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebiners;
