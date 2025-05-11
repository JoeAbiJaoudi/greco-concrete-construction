"use client";
import React from "react";
import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-sage-100">
      {/* Hero Section with Two Column Layout */}
      <section className="max-w-6xl mx-auto py-12 md:py-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left Column - Image */}
          <div className="fade-in-0">
            <div className="bg-white p-4 shadow-md">
              <img
                src="/images/BuildingSign.png"
                alt="The Pungo Collective Building"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          {/* Right Column - Text Content */}
          <div>
            <h1 className="fade-in-100 text-3xl md:text-4xl lg:text-5xl font-heading font-semibold mb-6 text-primary">
              WELCOME TO THE PUNGO COLLECTIVE
            </h1>
            
            <div className="fade-in-200 text-sage-800 space-y-4">
              <p className="text-base md:text-lg">
                Looking for a wellness experience that addresses your mind, body, and spirit? Need comprehensive health services all in one convenient location? The Pungo Collective brings together Virginia Beach's finest wellness practitioners under one roof.
              </p>
              
              <p className="text-base md:text-lg">
              Our building hosts a diverse community of wellness professionals dedicated to supporting your wellbeing journey. You'll find licensed therapists, physical therapists, acupuncturists, psychiatric services, yoga instruction, medical spa treatments, and skilled specialists in custom concrete and home renovations. This collaborative environment allows you to address all aspects of your health in one convenient location.
              </p>
              
              <p className="text-base md:text-lg">
                No need to travel to multiple locations for your wellness needs. At The Pungo Collective, you can find a range of complementary services in one convenient destination, allowing you to focus on what matters most—your health and wellbeing.
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="fade-in-300 mt-8">
              <Link
                href="/businesses"
                className="inline-block px-6 md:px-8 py-2 md:py-3 bg-accent text-white font-semibold rounded-full hover:bg-accent/90 transition-colors duration-300"
              >
                Explore Our Businesses
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Story Section */}
      {/* 
      <section className="bg-primary py-16 md:py-20 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="fade-in-0 text-3xl md:text-4xl font-heading font-semibold mb-8 uppercase tracking-wider">
            OUR STORY
          </h2>
          
          <div className="fade-in-100 space-y-6 text-base md:text-lg">
            <p>
              The Pungo Collective was founded in 2023 with a simple mission: to create a supportive environment where businesses can thrive through collaboration.
            </p>
            
            <p>
              We believe that success doesn't happen in isolation. By bringing together diverse businesses under one roof, we foster a community where ideas can be shared, partnerships can form, and growth can happen naturally.
            </p>
            
            <p>
              Our beautiful building in Virginia Beach has been carefully designed to provide the perfect blend of private workspaces and communal areas, creating opportunities for both focused work and meaningful connections.
            </p>
          </div>
        </div>
      </section>*/}
      
      {/* Our Values Section - Using the same style as the Building Value Section */}
      {/*
      <section className="bg-sage-800 py-8 md:py-12 pb-16 md:pb-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 
            className="fade-in-0 text-4xl md:text-5xl lg:text-6xl text-white text-center font-heading font-semibold mb-6 md:mb-8 uppercase tracking-wider"
          >
            OUR VALUES
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4 mb-12">
            <div className="fade-in-100 text-center px-2 md:px-4">
              <h3 className="text-xl md:text-2xl text-white font-heading font-medium mb-3 uppercase tracking-wide">
                COLLABORATION
              </h3>
              <p className="text-white text-sm md:text-base leading-relaxed">
                We believe that when businesses work together, everyone benefits. Our spaces are designed to encourage organic connections.
              </p>
            </div>
            
            <div className="fade-in-200 text-center px-2 md:px-4">
              <h3 className="text-xl md:text-2xl text-white font-heading font-medium mb-3 uppercase tracking-wide">
                WELLNESS
              </h3>
              <p className="text-white text-sm md:text-base leading-relaxed">
                Health and wellbeing are at the core of our community. We prioritize creating spaces that support both physical and mental wellness.
              </p>
            </div>
            
            <div className="fade-in-300 text-center px-2 md:px-4">
              <h3 className="text-xl md:text-2xl text-white font-heading font-medium mb-3 uppercase tracking-wide">
                GROWTH
              </h3>
              <p className="text-white text-sm md:text-base leading-relaxed">
                We're committed to helping each business reach its full potential through shared resources, knowledge, and opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>*/}
    </main>
  );
}