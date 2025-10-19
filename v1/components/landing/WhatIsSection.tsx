"use client";

export default function WhatIsSection() {
  return (
    <div className="container mx-auto px-4 py-12 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl my-12">
      <div className="mt-10 text-center text-[30px] sm:text-[34px] lg:text-[40px] font-bold text-teal-500">
        What is <span className="text-white">Ilearnova?</span>
      </div>
      <div className="text-[18px] sm:text-[20px] lg:text-[24px] mt-4 text-center leading-6 sm:leading-10 tracking-wide text-white sm:px-32">
        Ilearnova is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
      </div>
    </div>
  );
}
