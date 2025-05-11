"use client";
import Link from "next/link";
import React from "react";
import { useAnimation } from "@/components/AnimationProvider";

export default function HeroSection() {
  const { classes } = useAnimation();
  
  // CONFIGURATION OPTIONS:
  // Adjust these values to change the image position within its container
  // Positive values move the image down, negative values move it up
  const imagePositionY = "25%"; // Try values like "-10%", "0%", "10%", "20%", etc.
  
  return (
    <section className="bg-primary py-10 md:py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h1 className={`${classes.fadeIn0} text-4xl md:text-5xl lg:text-7xl text-white uppercase-wide tracking-widest font-heading font-semibold mb-4`}>
          The Pungo Collective
        </h1>
        <p className={`${classes.fadeIn200} text-lg md:text-xl lg:text-2xl text-sage-200 mb-6 md:mb-10 font-body`}>
          A curated community of innovative businesses
        </p>
        <h2 className={`${classes.fadeIn400} text-xl md:text-2xl lg:text-3xl text-white sub-heading mb-6 md:mb-8`}>
          Your wellness destination in Virginia Beach
        </h2>
        <div className={classes.fadeIn600}>
          <Link
            href="/businesses"
            className="inline-block px-6 md:px-8 py-2 md:py-3 bg-accent text-white font-semibold rounded-full hover:bg-secondary transition-colors"
          >
            Explore Our Businesses
          </Link>
        </div>
      </div>
      
      {/* Image container - margin remains fixed */}
      <div className={`${classes.fadeIn800} mt-4 md:mt-6 mb-6 w-full px-4 md:px-12`}>
        <div className="transform transition-all duration-300 hover:scale-[1.01] hover:-translate-y-1 overflow-hidden rounded-lg md:rounded-2xl shadow-lg md:shadow-xl hover:shadow-2xl">
          {/* Image wrapper with fixed aspect ratio */}
          <div className="w-full aspect-[16/7] md:aspect-[16/6] relative overflow-hidden">
            {/* Image with adjustable position */}
            <img
              src="/images/PungoBuilding9.png"
              alt="Hero Background"
              className="w-full h-full object-cover absolute inset-0"
              style={{ 
                objectPosition: `center ${imagePositionY}` 
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}