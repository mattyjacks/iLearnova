"use client";

import Image from 'next/image';

export default function ToolsSection() {
  return (
    <div className="container mx-auto px-4 py-12 bg-gray-50 rounded-3xl my-12">
      <div className="flex flex-col sm:flex-row gap-8">
        <div className="my-auto sm:w-1/2">
          <div className="text-4xl max-md:max-w-full relative text-center font-bold leading-[64px] text-indigo-900 sm:mt-20">
            <span className="font-semibold text-teal-500">
              Tools For Teachers And Learners
            </span>
          </div>
          <div className="text-xl z-10 px-1 mt-6 tracking-wide text-gray-500 sm:ml-12">
            Class has a dynamic set of teaching tools built to be deployed and used during class. Teachers can{" "}
            <br className="hidden md:block" /> hand out assignments in real-time for students to complete and submit.
          </div>
        </div>
        <div className="max-md:ml-0 max-md:w-full flex flex-col sm:ml-5 sm:w-1/2">
          <Image
            loading="lazy"
            src="https://dimatech-lsm-frontend.vercel.app/group-122.svg"
            width={800}
            height={600}
            className="mt-5 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
            alt="Tools illustration"
          />
        </div>
      </div>
    </div>
  );
}
