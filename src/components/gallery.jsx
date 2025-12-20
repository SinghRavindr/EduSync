"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

export function ThreeDMarqueeDemo() {
  const images = [
    "/gallery/1.jpg",
    "/gallery/2.jpg",
    // "/gallery/3.jpg",
    // "/gallery/4.jpeg",
    // "/gallery/5.jpg",
    "/gallery/6.jpg",
    "/gallery/7.jpeg",
    // "/gallery/8.jpeg",
    "/gallery/9.jpeg",
    "/gallery/10.jpeg",
    "/gallery/11.jpeg",
    "/gallery/12.jpeg",
    "/gallery/13.jpeg",
    "/gallery/14.jpeg",
    "/gallery/15.jpeg",
    "/gallery/16.jpeg",
    "/gallery/17.jpeg",
    "/gallery/18.png",
    "/gallery/19.png",
  ];

  return (
    <div className="py-10">
      <div className="max-w-[75rem] mx-auto text-center mb-10 py-5">
        <h2 className="text-5xl font-bold text-white mb-6 text-center">
          Something More..
        </h2>
        <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
        Lectura ⁠is an AI-powered adaptive learning platform that transforms educational videos into structured notes, flashcards, and practice tests.
        </p>
      </div>

      <div className="mx-auto my-10 max-w-7xl rounded-3xl bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
        <ThreeDMarquee images={images} />
      </div>
    </div>
  );
}
