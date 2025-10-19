"use client";

import Image from 'next/image';

export default function OneOnOneSection() {
  return (
    <div className="container mx-auto px-4 py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 mb-16">
      <div className="left-0 flex flex-col px-5 md:flex-row gap-8">
        <div className="flex flex-col sm:flex-row sm:w-1/2">
          <Image
            loading="lazy"
            src="https://dimatech-lsm-frontend.vercel.app/group106.png"
            width={800}
            height={600}
            className="w-full rounded-2xl object-contain shadow-2xl hover:scale-105 transition-transform duration-300"
            alt="One-on-One discussions"
          />
        </div>
        <div className="mt-5 flex flex-col px-2 sm:my-auto sm:pl-5 sm:w-1/2">
          <div className="text-[30px] text-center font-bold text-teal-500">
            <span className="font-semibold">One-on-One Discussions</span>
          </div>
          <div className="text-[18px] sm:text-[20px] lg:text-[24px] mt-4 text-center leading-6 sm:leading-10 tracking-wide text-white sm:px-32">
            Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.
          </div>
        </div>
      </div>
    </div>
  );
}
