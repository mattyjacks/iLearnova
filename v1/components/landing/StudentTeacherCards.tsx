"use client";

import { GraduationCap, Users } from 'lucide-react';

export default function StudentTeacherCards() {
  return (
    <div className="container mx-auto px-4 my-8 w-full sm:px-5">
      <div className="flex w-full flex-col gap-6 sm:flex-row">
        {/* Students Card */}
        <div className="relative w-full flex-col sm:w-1/2 overflow-hidden rounded-3xl group hover:scale-105 transition-transform duration-300">
          <div className="w-full flex-col items-center justify-center px-4 text-center text-white sm:py-12 sm:px-16">
            <div className="relative h-72 sm:h-96 w-full">
              <div className="w-full rounded-3xl h-72 sm:h-96 bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-700 relative overflow-hidden">
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-25 rounded-3xl">
                  <div className="mb-4 animate-bounce">
                    <GraduationCap className="w-16 h-16 text-yellow-300" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold mb-2">Students</div>
                  <div className="text-lg mb-8 opacity-90 max-w-xs px-4">
                    Discover, learn, and grow with our engaging curriculum
                  </div>
                  <button className="text-lg sm:text-xl bg-white text-blue-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
                    Join Our School
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Teachers Card */}
        <div className="relative w-full flex-col sm:w-1/2 overflow-hidden rounded-3xl group mt-5 sm:mt-0 hover:scale-105 transition-transform duration-300">
          <div className="flex flex-col items-center justify-center px-4 text-center text-white sm:py-12 sm:px-16">
            <div className="relative h-72 sm:h-96 w-full">
              <div className="w-full rounded-3xl h-72 sm:h-96 bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-700 relative overflow-hidden">
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-25 rounded-3xl">
                  <div className="mb-4 animate-bounce">
                    <Users className="w-16 h-16 text-yellow-300" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold mb-2">Teachers</div>
                  <div className="text-lg mb-8 opacity-90 max-w-xs px-4">
                    Shape minds and inspire the next generation
                  </div>
                  <button className="text-lg sm:text-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
                    Start Teaching
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
