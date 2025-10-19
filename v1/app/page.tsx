import type { Metadata } from "next";
import Navigation from "@/components/landing/Navigation";
import HeroSection from "@/components/landing/HeroSection";
import StudentTeacherCards from "@/components/landing/StudentTeacherCards";
import SuccessSection from "@/components/landing/SuccessSection";
import StatsCounter from "@/components/landing/StatsCounter";
import FeaturesSection from "@/components/landing/FeaturesSection";
import WhatIsSection from "@/components/landing/WhatIsSection";
import ClassroomSection from "@/components/landing/ClassroomSection";
import OurFeaturesSection from "@/components/landing/OurFeaturesSection";
import ToolsSection from "@/components/landing/ToolsSection";
import ClassManagementSection from "@/components/landing/ClassManagementSection";
import OneOnOneSection from "@/components/landing/OneOnOneSection";
import Testimonials from "@/components/landing/Testimonials";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import CTASection from "@/components/landing/CTASection";
import Newsletter from "@/components/landing/Newsletter";
import Footer from "@/components/landing/Footer";
import BackToTop from "@/components/landing/BackToTop";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

export const metadata: Metadata = {
  title: "iLearnova - Transform Your Learning Experience | Online Education Platform",
  description: "Join thousands of students and educators on iLearnova. Comprehensive learning management platform with interactive lessons, real-time progress tracking, and expert teachers. Start your 14-day free trial today!",
  keywords: ["online learning", "education platform", "LMS", "virtual classroom", "e-learning", "student management", "teacher tools"],
  authors: [{ name: "iLearnova Team" }],
  openGraph: {
    title: "iLearnova - Transform Your Learning Experience",
    description: "The all-in-one platform for students, teachers, and parents. Interactive lessons, real-time tracking, and exceptional support.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "iLearnova - Online Education Platform",
    description: "Transform your learning experience with iLearnova's comprehensive platform",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <StudentTeacherCards />
      <StatsCounter />
      <SuccessSection />
      <FeaturesSection />
      <WhatIsSection />
      <ClassroomSection />
      <OurFeaturesSection />
      <ToolsSection />
      <ClassManagementSection />
      <OneOnOneSection />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTASection />
      <Newsletter />
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </div>
  );
}
