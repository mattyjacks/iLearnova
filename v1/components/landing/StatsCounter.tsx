"use client";

import { useState, useEffect, useRef } from 'react';
import { Users, BookOpen, Award, TrendingUp } from 'lucide-react';

export default function StatsCounter() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { icon: <Users className="w-8 h-8" />, number: 50000, suffix: '+', label: 'Active Students', color: 'from-blue-400 to-cyan-500' },
    { icon: <BookOpen className="w-8 h-8" />, number: 10000, suffix: '+', label: 'Courses Available', color: 'from-purple-400 to-pink-500' },
    { icon: <Award className="w-8 h-8" />, number: 98, suffix: '%', label: 'Success Rate', color: 'from-green-400 to-emerald-500' },
    { icon: <TrendingUp className="w-8 h-8" />, number: 500, suffix: '+', label: 'Expert Teachers', color: 'from-yellow-400 to-orange-500' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const AnimatedNumber = ({ target, suffix }: { target: number; suffix: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [target]);

    return (
      <span>
        {count.toLocaleString()}{suffix}
      </span>
    );
  };

  return (
    <div ref={sectionRef} className="container mx-auto px-4 py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="relative group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="relative bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${stat.color} text-white mb-4 transform group-hover:rotate-12 transition-transform duration-300`}>
                {stat.icon}
              </div>
              
              {/* Number */}
              <div className="text-4xl md:text-5xl font-black text-white mb-2">
                <AnimatedNumber target={stat.number} suffix={stat.suffix} />
              </div>
              
              {/* Label */}
              <div className="text-gray-300 text-lg font-medium">
                {stat.label}
              </div>

              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-300 -z-10`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
