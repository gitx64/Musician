"use client";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

export default function WhyChooseUs() {

  const content = [
    {
      title: "Introduction to Music Theory",
      description:
        "Learn the basics of notes, scales, chords, and rhythm to build a solid foundation for your musical journey.",
    },
    {
      title: "Mastering Your Instrument",
      description:
        "Step-by-step guidance to improve your skills on guitar, piano, or vocals with practice routines and techniques.",
    },
    {
      title: "Understanding Rhythm & Timing",
      description:
        "Explore beats, time signatures, and advanced rhythm exercises to sharpen your timing and groove.",
    },
    {
      title: "Songwriting & Composition",
      description:
        "Discover how to write powerful lyrics, compose melodies, and structure songs across different genres.",
    },
    {
      title: "Music Production Essentials",
      description:
        "Hands-on training with DAWs, recording techniques, and sound design to produce professional-quality tracks.",
    },
    {
      title: "Mixing & Mastering",
      description:
        "Learn the art of balancing levels, applying EQ, compression, and effects to polish your final track.",
    },
    {
      title: "Stage Performance & Confidence",
      description:
        "Tips and exercises to overcome stage fear, connect with your audience, and deliver unforgettable performances.",
    },
  ];

  return (
    <div>
        <StickyScroll content={content} contentClassName="pt-8 gap-8"/>
    </div>
  );
}
