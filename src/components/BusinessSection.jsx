"use client";
import React, { useState, useMemo } from "react";
import { firstFloorBusinesses, secondFloorBusinesses } from "@/data/businessData";
import DirectoryListing from "@/components/DirectoryListing";

export default function BusinessSection() {
  // Sort businesses by suite number
  const sortedFirstFloor = useMemo(() => {
    return [...firstFloorBusinesses].sort((a, b) => {
      // Extract the numeric part of the suite number
      const numA = parseInt(a.suiteNumber.replace(/\D/g, ''), 10);
      const numB = parseInt(b.suiteNumber.replace(/\D/g, ''), 10);
      return numA - numB;
    });
  }, []);

  const sortedSecondFloor = useMemo(() => {
    return [...secondFloorBusinesses].sort((a, b) => {
      // Extract the numeric part of the suite number
      const numA = parseInt(a.suiteNumber.replace(/\D/g, ''), 10);
      const numB = parseInt(b.suiteNumber.replace(/\D/g, ''), 10);
      return numA - numB;
    });
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-24">
      <h2 className="text-4xl font-bold mb-16 fade-in-0">Our Businesses</h2>
      
      {/* First Floor */}
      <div className="mb-24 fade-in-200">
        <h3 className="text-2xl font-semibold mb-8">First Floor</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedFirstFloor.map((business, index) => (
            <div 
              key={index} 
              className={`fade-in-${Math.min(800, 400 + index * 100)}`}
            >
              <DirectoryListing business={business} />
            </div>
          ))}
        </div>
      </div>

      {/* Second Floor */}
      <div className="fade-in-400">
        <h3 className="text-2xl font-semibold mb-8">Second Floor</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedSecondFloor.map((business, index) => (
            <div 
              key={index} 
              className={`fade-in-${Math.min(800, 600 + index * 100)}`}
            >
              <DirectoryListing business={business} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}