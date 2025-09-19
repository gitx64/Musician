"use client";
import Link from "next/link";
import CourseData from "@/data/music_courses.json";
import { BackgroundGradient } from "./ui/background-gradient";

export default function FeaturedCard() {
  interface Course {
    id: number;
    title: string;
    slug: string;
    description: string;
    price: number;
    instructor: string;
    isFeatured: boolean;
  }

  const featuredCourses = CourseData.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className="text-center items-center justify-center relative bg-gray-900">
      <h3 className="text-teal-500 font-bold text-2xl pt-4">
        Featured Courses
      </h3>
      <h1 className="text-5xl font-extrabold pb-3">
        Learn with best teachings and resources
      </h1>

      <div className="mt-10 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourses.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-800 overflow-hidden h-full max-w-sm ">
                <div className="bg-zinc-900 p-4 mx-1 w-full h-full">
                  <p className="text-2xl font-bold mt-2">{course.title}</p>
                  <p className="text-[14px] mt-4 relative text-center justify-center">
                    {course.description}
                  </p>
                </div>
                <div className="bg-zinc-900">
                  <Link href={""}>
                    <button className="rounded-md p-2 bg-teal-500 mb-5 font-bold">
                      Learn More
                    </button>
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center justify-center mt-20">
        <Link href="/courses">
          <button className="bg-white text-black px-4 py-3 rounded-[6px] mb-5">
            View All Courses
          </button>
        </Link>
      </div>
    </div>
  );
}
