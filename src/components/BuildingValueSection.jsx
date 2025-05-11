"use client";
import React from "react";
import Link from "next/link";

export default function BuildingValueSection() {
  return (
    <section className="bg-primary py-8 md:py-12 pb-16 md:pb-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main heading */}
        <h2 
          className="fade-in-0 text-4xl md:text-5xl lg:text-6xl text-white text-center font-heading font-semibold mb-6 md:mb-8 uppercase tracking-wider"
        >
          THE VALUE WE BRING
        </h2>
        
        {/* Three columns layout with reduced gap */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4 mb-12">
          {/* Column 1 */}
          <div className="fade-in-100 text-center px-2 md:px-4">
            <h3 className="text-xl md:text-2xl text-white font-heading font-medium mb-3 uppercase tracking-wide">
              COMMUNITY-CENTRIC
            </h3>
            <p className="text-white text-sm md:text-base leading-relaxed">
              A thriving network where businesses collaborate and support each other in a welcoming environment.
            </p>
          </div>
          
          {/* Column 2 */}
          <div className="fade-in-200 text-center px-2 md:px-4">
            <h3 className="text-xl md:text-2xl text-white font-heading font-medium mb-3 uppercase tracking-wide">
              INNOVATIVE SPACES
            </h3>
            <p className="text-white text-sm md:text-base leading-relaxed">
              Modern, creative environments designed for growth and inspiration on your own schedule.
            </p>
          </div>
          
          {/* Column 3 */}
          <div className="fade-in-300 text-center px-2 md:px-4">
            <h3 className="text-xl md:text-2xl text-white font-heading font-medium mb-3 uppercase tracking-wide">
              PRIME LOCATION
            </h3>
            <p className="text-white text-sm md:text-base leading-relaxed">
              Begin your wellness journey with full access to our conveniently located space with excellent connectivity.
            </p>
          </div>
        </div>
        
        {/* Learn More Button - now below the columns, updated text and href */}
        <div className="flex justify-center fade-in-400">
          <Link
            href="/about"
            className="inline-block px-6 md:px-8 py-2 md:py-3 bg-accent text-white font-semibold rounded-full hover:bg-accent/90 transition-colors duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}