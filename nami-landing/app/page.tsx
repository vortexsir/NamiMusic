"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BackgroundGradientAnimation } from "@/components/background-gradient-animation";
import { BackgroundLines } from "@/components/background-lines";
import HeroSection from "@/components/Hero";
import FeaturesSection from "@/components/Features";

export default function Home() {
  return (
    <div className="w-full h-screen bg-black">
      <div className="bg-black pb-5 px-3">
        <Navbar />
        <BackgroundLines className="bg-black flex flex-col gap-2">
          <HeroSection />
          <FeaturesSection />
        </BackgroundLines>
        <Footer />
      </div>
    </div>
  );
}
