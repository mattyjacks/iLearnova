"use client";

import Image from 'next/image';

export default function OurFeaturesSection() {
  return (
    <div className="container mx-auto px-4 py-12 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-4xl mt-4 font-bold leading-[64.8px] text-center text-teal-500 sm:text-6xl">
        <span>Our </span>
        <span className="text-teal-500">Features</span>
      </div>
      <div className="text-xl text-center leading-10 text-white mt-4">
        This very extraordinary feature, can make learning activities more efficient
      </div>

      <div className="mt-12 w-full px-5">
        <div className="flex flex-col justify-center gap-10 sm:flex-row">
          {/* Left Image */}
          <div className="relative flex sm:w-1/2">
            <Image
              loading="lazy"
              src="https://dimatech-lsm-frontend.vercel.app/group-17.svg"
              width={800}
              height={600}
              className="inset-0 w-[100%] object-contain sm:h-96 rounded-2xl hover:scale-105 transition-transform duration-300"
              alt="Features illustration"
            />
            <div className="max-md:mt-10 absolute right-[-2px] mt-20 hidden gap-0 self-end sm:flex">
              <div className="max-md:mt-10 mt-52 h-[30px] w-[30px] self-end rounded-full bg-red-400 animate-pulse" />
              <div className="h-[264px] w-[264px] max-w-full rounded-full bg-indigo-500 bg-opacity-30 animate-pulse" />
            </div>
          </div>

          {/* Right Content */}
          <div className="my-auto flex max-w-full flex-col self-start sm:self-end sm:w-1/2">
            <p className="text-center font-bold text-2xl text-teal-500 mb-6">
              Perfect user interface for a classroom
            </p>
            
            <div className="my-4 flex gap-4 tracking-wide items-center hover:translate-x-2 transition-transform duration-300">
              <Image
                loading="lazy"
                src="https://dimatech-lsm-frontend.vercel.app/group-86@2x.png"
                width={60}
                height={50}
                className="bg-zinc-50 aspect-square h-[50px] w-[60px] self-start rounded-full object-cover shadow-md"
                alt="Feature icon"
              />
              <div className="self-center text-lg text-white">
                Teachers don&apos;t get lost in the grid view and have a dedicated Podium space.
              </div>
            </div>
            
            <div className="my-4 flex gap-4 tracking-wide items-center hover:translate-x-2 transition-transform duration-300">
              <Image
                loading="lazy"
                src="https://dimatech-lsm-frontend.vercel.app/group-88@2x.png"
                width={60}
                height={50}
                className="bg-zinc-50 aspect-square h-[50px] w-[60px] self-start rounded-full object-cover shadow-md"
                alt="Feature icon"
              />
              <div className="self-center text-lg text-white">
                TA&apos;s and presenters can be moved to the front of the class.
              </div>
            </div>
            
            <div className="my-4 flex gap-4 tracking-wide items-center hover:translate-x-2 transition-transform duration-300">
              <Image
                loading="lazy"
                src="https://dimatech-lsm-frontend.vercel.app/group-86@2x.png"
                width={60}
                height={50}
                className="bg-zinc-50 aspect-square h-[50px] w-[60px] rounded-full object-cover shadow-md"
                alt="Feature icon"
              />
              <div className="self-center text-lg text-white">
                Teachers can easily see all students and class data at one time.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
