"use client";

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import Image from 'next/image';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Parent",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      content: "iLearnova has transformed how my children learn. The interactive lessons and real-time progress tracking give me peace of mind. The teachers are exceptional and truly care about student success.",
      rating: 5
    },
    {
      name: "Dr. Michael Chen",
      role: "Teacher",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      content: "As an educator for 15 years, this is the best platform I've used. The classroom management tools are intuitive, and my students are more engaged than ever. Highly recommend!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Student",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
      content: "I love how easy it is to access my coursework and communicate with teachers. The platform makes learning fun and interactive. My grades have improved significantly!",
      rating: 5
    },
    {
      name: "James Williams",
      role: "School Administrator",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
      content: "Managing our entire school system has never been easier. From attendance to billing, everything is streamlined. The ROI has been incredible for our institution.",
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="container mx-auto px-4 py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          What Our Users Say
        </h2>
        <p className="text-xl text-gray-300">
          Join thousands of satisfied students, teachers, and parents
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Testimonial Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
          <Quote className="w-12 h-12 text-yellow-400 mb-6 opacity-50" />
          
          <div className="mb-8">
            <p className="text-xl md:text-2xl text-white leading-relaxed italic">
              &quot;{testimonials[currentIndex].content}&quot;
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden ring-4 ring-yellow-400/50">
                <Image
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-gray-400">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>

            <div className="flex space-x-1">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white/10 backdrop-blur-lg p-3 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white/10 backdrop-blur-lg p-3 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 bg-yellow-400'
                  : 'w-2 bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
