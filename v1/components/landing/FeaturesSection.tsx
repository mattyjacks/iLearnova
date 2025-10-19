"use client";

import Image from 'next/image';

export default function FeaturesSection() {
  const features = [
    {
      icon: "https://dimatech-lsm-frontend.vercel.app/group-80.svg",
      title: "Online Billing, Invoicing, & Contracts",
      description: "Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts"
    },
    {
      icon: "https://dimatech-lsm-frontend.vercel.app/group-81.svg",
      title: "Easy Scheduling & Attendance Tracking",
      description: "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance"
    },
    {
      icon: "https://dimatech-lsm-frontend.vercel.app/group-79.svg",
      title: "Customer Tracking",
      description: "Automate and track emails to individuals or groups. Skillline's built-in system helps organize your organization"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="mt-8 text-[24px] font-bold sm:text-[26px] lg:text-[40px] text-center">
        <span className="font-bold text-white">All-In-One </span>
        <span className="font-bold text-white">Cloud Software.</span>
      </div>
      <div className="text-xl max-md:max-w-full mt-4 text-center leading-7 text-white px-4">
        Ilearnova is one powerful online software suite that combines all the tools needed to run a successful school or office.
      </div>

      {/* Features Grid */}
      <div className="max-md:mt-10 max-md:max-w-full mt-16 w-full max-w-[1470px] px-4 mx-auto">
        <div className="max-md:flex-col max-md:gap-0 flex w-full flex-col gap-5 sm:flex-row">
          {features.map((feature, index) => (
            <div key={index} className="max-md:ml-0 max-md:w-full relative flex flex-col items-center sm:w-[33%] mb-16 sm:mb-0">
              <Image
                className="absolute top-[-24px] m-auto h-[100px] w-[100px] hover:scale-110 hover:rotate-5 transition-transform duration-300"
                alt={feature.title}
                src={feature.icon}
                width={100}
                height={100}
              />
              <div className="max-md:mt-10 max-md:max-w-full flex h-full w-full grow flex-col rounded-3xl bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 px-2 py-12 text-center shadow-2xl lg:px-14">
                <div className="mt-5 font-medium text-white text-[20px] lg:text-[26px]">
                  {feature.title}
                </div>
                <div className="mt-5 text-white lg:text-xl lg:leading-9">
                  {feature.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
