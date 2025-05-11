"use client";
import React, { useState } from "react";
import { firstFloorBusinesses, secondFloorBusinesses } from "@/data/businessData";
import DirectoryListing from "@/components/DirectoryListing";

export default function BuildingTour() {
  const [selectedBusiness, setSelectedBusiness] = useState(null);
  const [activeFloor, setActiveFloor] = useState("first");
  
  // Get the businesses for the active floor
  const floorBusinesses = activeFloor === "first" ? firstFloorBusinesses : secondFloorBusinesses;
  
  return (
    <div className="w-full">
      {/* Floor selector */}
      <div className="flex justify-center mb-6">
        <div className="inline-flex rounded-md shadow-sm">
          <button
            onClick={() => setActiveFloor("first")}
            className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
              activeFloor === "first"
                ? "bg-primary text-white"
                : "bg-white text-sage-800 hover:bg-sage-50"
            }`}
          >
            1st Floor
          </button>
          <button
            onClick={() => setActiveFloor("second")}
            className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
              activeFloor === "second"
                ? "bg-primary text-white"
                : "bg-white text-sage-800 hover:bg-sage-50"
            }`}
          >
            2nd Floor
          </button>
        </div>
      </div>
      
      {/* Interactive floor plan */}
      <div className="relative bg-sage-100 rounded-lg shadow-md overflow-hidden mb-6">
        {/* Building outline */}
        <div className="w-full h-96 bg-white border-4 border-sage-300 rounded-lg relative">
          {/* Floor label */}
          <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-md font-bold">
            {activeFloor === "first" ? "First Floor" : "Second Floor"}
          </div>
          
          {/* Main entrance */}
          {activeFloor === "first" && (
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-sage-500 text-white px-4 py-1 font-bold rounded-t-md">
              ENTRANCE
            </div>
          )}
          
          {/* Business markers - with improved positioning */}
          {floorBusinesses.map((business, index) => {
            // Get position from business data, or use predefined positions
            const position = business.floorPlanPosition || business.position || {};
            
            return (
              <button
                key={index}
                className={`absolute rounded-lg px-2 py-1 text-white text-xs md:text-sm font-medium shadow-md transition-all duration-300 hover:scale-105 transform ${
                  selectedBusiness?.name === business.name
                    ? "bg-accent z-20"
                    : "bg-primary hover:bg-primary/90 z-10"
                }`}
                style={{
                  top: position.top || "50%",
                  left: position.left || "50%",
                  transform: "translate(-50%, -50%)",
                  maxWidth: "120px",
                }}
                onClick={() => setSelectedBusiness(business)}
              >
                <span className="whitespace-nowrap overflow-hidden text-ellipsis block">
                  {business.name.length > 15 ? business.name.substring(0, 15) + "..." : business.name}
                </span>
                <span className="text-xs block">{business.suiteNumber}</span>
              </button>
            );
          })}
          
          {/* Interior elements - hallways, common areas */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-sage-300"></div>
          <div className="absolute top-0 left-1/2 w-1 h-full bg-sage-300 transform -translate-x-1/2"></div>
          
          {/* Common areas */}
          {activeFloor === "first" && (
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 bg-sage-200 w-32 h-20 rounded-lg flex items-center justify-center text-sage-800 text-xs text-center font-medium">
              Reception &<br />Waiting Area
            </div>
          )}
          
          {activeFloor === "second" && (
            <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-sage-200 w-32 h-20 rounded-lg flex items-center justify-center text-sage-800 text-xs text-center font-medium">
              Common Area
            </div>
          )}
        </div>
      </div>
      
      {/* Selected business details */}
      {selectedBusiness && (
        <div className="bg-white rounded-lg shadow-lg p-6 animate-fadeIn">
          <DirectoryListing business={selectedBusiness} />
        </div>
      )}
      
      {!selectedBusiness && (
        <div className="text-center text-sage-700 bg-white p-6 rounded-lg shadow">
          <p>Click on a business marker to view details.</p>
        </div>
      )}
    </div>
  );
}