"use client";

import { useState, useEffect, useRef, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  GraduationCap, 
  Users, 
  Award,
  BookOpen, 
  CheckCircle, 
  Star,
  Play,
  ChevronRight
} from 'lucide-react';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const heroRef = useRef<HTMLDivElement>(null);

  const heroSlides = useMemo(() => [
    {
      subtitle: "Students",
      title: "Discover, Learn, and Grow",
      description: "Engage with our interactive curriculum designed to help you excel in your studies and reach your full potential.",
      color: "from-blue-400 to-indigo-600",
      bgColor: "bg-gradient-to-br from-blue-500/10 to-purple-500/10",
      icon: <GraduationCap className="w-6 h-6" />,
      goto: "/student"
    },
    {
      subtitle: "Teachers",
      title: "Shape Minds, Inspire Greatness",
      description: "Empower your teaching with tools that make classroom management seamless and student engagement effortless.",
      color: "from-emerald-400 to-teal-600",
      bgColor: "bg-gradient-to-br from-emerald-500/10 to-teal-500/10",
      icon: <Users className="w-6 h-6" />,
      goto: "/teacher"
    },
    {
      subtitle: "Parents",
      title: "Stay Connected, Stay Informed",
      description: "Monitor your child's progress and stay involved in their educational journey with real-time updates and insights.",
      color: "from-purple-400 to-pink-600",
      bgColor: "bg-gradient-to-br from-purple-500/10 to-pink-500/10",
      icon: <Award className="w-6 h-6" />,
      goto: "/parent"
    },
  ], []);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 w-full pt-16"
    >
      {/* Animated Background */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)`
        }}
      />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px"
          }}
        />
      </div>

      {/* Floating Icons */}
      <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-2xl flex items-center justify-center animate-bounce">
        <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
      </div>
      <div className="absolute top-32 sm:top-40 right-10 sm:right-20 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl shadow-2xl flex items-center justify-center rotate-12 animate-pulse">
        <Star className="w-6 h-6 text-white" />
      </div>
      <div className="absolute bottom-32 sm:bottom-40 left-10 sm:left-20 w-18 h-18 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-3xl shadow-2xl flex items-center justify-center -rotate-12 animate-bounce">
        <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
      </div>
      <div className="absolute bottom-16 sm:bottom-20 right-32 sm:right-40 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full shadow-2xl flex items-center justify-center animate-pulse">
        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center w-full">
          {/* Left Content */}
          <div className={`space-y-6 sm:space-y-8 text-center lg:text-left transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Logo */}
            <div className="flex items-center justify-center lg:justify-start space-x-3 mb-6 sm:mb-8">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-2 sm:p-3 rounded-xl shadow-2xl transform hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-white animate-pulse" />
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-white tracking-wider">
                ILEARNOVA
              </h1>
            </div>

            {/* Dynamic Content */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <div className={`bg-gradient-to-r ${heroSlides[currentSlide].color} p-2 rounded-lg text-white transition-all duration-500 shadow-xl transform hover:scale-110`}>
                  {heroSlides[currentSlide].icon}
                </div>
                <span className="text-yellow-400 font-semibold text-base sm:text-lg">
                  For {heroSlides[currentSlide].subtitle}
                </span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight">
                {heroSlides[currentSlide].title}
              </h2>
              
              <p className="text-gray-200 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {heroSlides[currentSlide].description}
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <Link href="/demo">
                <button className="group bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-full font-bold text-lg shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                  <div className="flex items-center justify-center space-x-2">
                    <Play className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform" />
                    <span>Try Instant Demo</span>
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              </Link>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center lg:justify-start space-x-2 pt-4">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 sm:h-3 rounded-full transition-all duration-300 transform hover:scale-110 ${
                    index === currentSlide
                      ? "bg-yellow-400 w-6 sm:w-8 shadow-lg"
                      : "bg-white/30 w-2 sm:w-3 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative mt-8 lg:mt-0 transform hover:scale-105 transition-transform duration-700 ease-out">
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/20 shadow-2xl">
              <Image
                src="https://dimatech-lsm-frontend.vercel.app/group1.png"
                alt="Students learning together"
                width={800}
                height={600}
                className="w-full h-auto object-contain rounded-xl sm:rounded-2xl"
              />
              
              {/* Stats Badge */}
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-gradient-to-r from-emerald-400 via-green-500 to-blue-500 text-white p-2 sm:p-4 rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-110">
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300 animate-pulse" />
                  <div className="text-center">
                    <div className="text-xs sm:text-sm font-bold">98%</div>
                    <div className="text-xs">Success</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white p-2 sm:p-4 rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-110">
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
                  <div className="text-center">
                    <div className="text-xs sm:text-sm font-bold">50K+</div>
                    <div className="text-xs">Users</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-1/2 -right-2 sm:-right-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-2 sm:p-3 rounded-full shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 transform hover:scale-110 animate-bounce">
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </div>
            
            {/* Glow Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-purple-600/30 to-pink-600/30 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl -z-10 animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-2xl sm:rounded-3xl blur-xl -z-10 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
