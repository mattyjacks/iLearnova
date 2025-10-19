import Navigation from "@/components/landing/Navigation";
import HeroSection from "@/components/landing/HeroSection";
import StudentTeacherCards from "@/components/landing/StudentTeacherCards";
import SuccessSection from "@/components/landing/SuccessSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import WhatIsSection from "@/components/landing/WhatIsSection";
import ClassroomSection from "@/components/landing/ClassroomSection";
import OurFeaturesSection from "@/components/landing/OurFeaturesSection";
import ToolsSection from "@/components/landing/ToolsSection";
import ClassManagementSection from "@/components/landing/ClassManagementSection";
import OneOnOneSection from "@/components/landing/OneOnOneSection";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <StudentTeacherCards />
      <SuccessSection />
      <FeaturesSection />
      <WhatIsSection />
      <ClassroomSection />
      <OurFeaturesSection />
      <ToolsSection />
      <ClassManagementSection />
      <OneOnOneSection />
      <Footer />
    </div>
  );
}
