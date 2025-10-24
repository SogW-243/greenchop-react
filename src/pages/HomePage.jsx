// src/pages/HomePage.jsx

import React from "react";
import { Link } from "react-router-dom";

// Import các component con cho từng section
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import HomeProductsSection from "@/components/home/HomeProductsSection";
import HomeNewsSection from "@/components/home/HomeNewsSection";
import ProtectsSection from "@/components/home/ProtectsSection";
import BenefitsSection from "@/components/BenefitsSection"; // Tái sử dụng
import HomeContactSection from "@/components/home/HomeContactSection";

const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <StatsSection />
      <HomeProductsSection />
      <HomeNewsSection />
      <ProtectsSection />
      <BenefitsSection />
      <HomeContactSection />
    </main>
  );
};

export default HomePage;
