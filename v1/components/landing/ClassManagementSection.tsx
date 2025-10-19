"use client";

import Image from 'next/image';

export default function ClassManagementSection() {
  return (
    <div className="container mx-auto px-4 py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="left-0 flex flex-col px-5 md:flex-row gap-8">
        <div className="mt-5 flex flex-col px-2 sm:my-auto sm:pl-5 sm:w-1/2">
          <div className="text-3xl text-center font-bold text-teal-500">
            <span className="font-semibold text-teal-500">Class Management</span>{" "}
            <span className="font-semibold">Tools for Educators</span>
          </div>
          <div className="mt-5 text-center text-white text-[18px] sm:text-[20px] lg:text-[22px] leading-7 sm:leading-8 tracking-wide px-4 sm:px-6 md:px-8 max-w-3xl mx-auto">
            Class provides tools to help run and manage the class such as Class Roster, 
            <br className="hidden md:block" />
            Attendance, and more. With the Gradebook, teachers can review and grade tests and 
            <br className="hidden md:block" /> quizzes in real-time.
          </div>
        </div>
        <div className="flex flex-col sm:w-1/2">
          <div className="relative">
            <div className="absolute -top-4 left-4 h-[23px] w-[23px] rounded-full bg-orange-500 animate-pulse" />
            <Image
              loading="lazy"
              src="https://dimatech-lsm-frontend.vercel.app/group124.png"
              width={800}
              height={600}
              className="w-full rounded-2xl object-contain shadow-2xl hover:scale-105 transition-transform duration-300"
              alt="Class management"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
