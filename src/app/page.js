"use client";
import React from "react";
import HeroSection from "@/components/HeroSection";
import BuildingValueSection from "@/components/BuildingValueSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <BuildingValueSection />
    </main>
  );
}