"use client";

import Image from 'next/image';

export default function ClassroomSection() {
  return (
    <div className="container mx-auto w-full px-4 sm:px-20 py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-md:gap-0 flex flex-col gap-5 md:flex-row">
        <div className="max-md:w-full flex flex-col sm:w-1/2">
          <div className="my-auto flex flex-col px-5 text-white">
            <span className="mt-10 text-center text-[25px] font-bold">
              Everything you can do in a physical classroom, you can do with Ilearnova
            </span>
            <div className="mt-4 text-center text-white text-[18px] sm:text-[20px] lg:text-[22px] leading-7 sm:leading-8 tracking-wide px-4 sm:px-6 md:px-8 max-w-3xl mx-auto">
              Ilearnova&apos;s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.
            </div>
          </div>
        </div>
        <div className="flex flex-col p-1 sm:w-1/2 mt-10 sm:mt-0">
          <Image
            loading="lazy"
            src="https://dimatech-lsm-frontend.vercel.app/group-17.svg"
            width={800}
            height={600}
            className="max-md:mt-10 max-md:max-w-full aspect-auto w-full grow rounded-2xl hover:scale-105 transition-transform duration-300"
            alt="Classroom illustration"
          />
        </div>
      </div>
    </div>
  );
}
