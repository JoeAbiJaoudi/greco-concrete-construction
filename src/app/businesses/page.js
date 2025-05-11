"use client";
import React, { useState, useEffect, useMemo } from "react";
import { firstFloorBusinesses, secondFloorBusinesses } from "@/data/businessData";
import DirectoryListing from "@/components/DirectoryListing";
import BusinessSearch from "@/components/BusinessSearch";

export default function BusinessesPage() {
  const [selectedFloor, setSelectedFloor] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredFirstFloor, setFilteredFirstFloor] = useState([]);
  const [filteredSecondFloor, setFilteredSecondFloor] = useState([]);
  // New state to track if this is the initial page load
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  // Sort businesses by suite number
  const sortedFirstFloor = useMemo(() => {
    return [...firstFloorBusinesses].sort((a, b) => {
      const numA = parseInt(a.suiteNumber.replace(/\D/g, ''), 10);
      const numB = parseInt(b.suiteNumber.replace(/\D/g, ''), 10);
      return numA - numB;
    });
  }, []);

  const sortedSecondFloor = useMemo(() => {
    return [...secondFloorBusinesses].sort((a, b) => {
      const numA = parseInt(a.suiteNumber.replace(/\D/g, ''), 10);
      const numB = parseInt(b.suiteNumber.replace(/\D/g, ''), 10);
      return numA - numB;
    });
  }, []);

  // When user changes floor, mark as not initial load
  const handleFloorChange = (floor) => {
    setSelectedFloor(floor);
    setIsInitialLoad(false);
  };

  // Filter businesses based on search term
  useEffect(() => {
    if (searchTerm === "") {
      setFilteredFirstFloor(sortedFirstFloor);
      setFilteredSecondFloor(sortedSecondFloor);
    } else {
      const term = searchTerm.toLowerCase();
      
      setFilteredFirstFloor(
        sortedFirstFloor.filter((business) => {
          return (
            business.name.toLowerCase().includes(term) ||
            (business.services && business.services.toLowerCase().includes(term)) ||
            (business.providers && 
              business.providers.some(provider => 
                provider.toLowerCase().includes(term)
              )
            ) ||
            (business.bio && business.bio.toLowerCase().includes(term))
          );
        })
      );
      
      setFilteredSecondFloor(
        sortedSecondFloor.filter((business) => {
          return (
            business.name.toLowerCase().includes(term) ||
            (business.services && business.services.toLowerCase().includes(term)) ||
            (business.providers && 
              business.providers.some(provider => 
                provider.toLowerCase().includes(term)
              )
            ) ||
            (business.bio && business.bio.toLowerCase().includes(term))
          );
        })
      );
    }
  }, [searchTerm, sortedFirstFloor, sortedSecondFloor]);

  // Handle search submission
  const handleSearch = (term) => {
    setSearchTerm(term);
    setIsInitialLoad(false); // Disable animations when searching
  };

  // Helper function to get animation class based on current state
  const getAnimationClass = (baseClass) => {
    return isInitialLoad ? baseClass : '';
  };

  return (
    <main className="min-h-screen bg-sage-100 text-sage-800">
      <div className="max-w-6xl mx-auto py-8 md:py-12 px-4">
        <h1 className={getAnimationClass("fade-in-0") + " text-2xl md:text-3xl lg:text-4xl font-heading font-semibold text-center mb-2 md:mb-4"}>The Pungo Collective Directory</h1>
        <p className={getAnimationClass("fade-in-200") + " text-center text-sage-700 mb-6 md:mb-8 text-sm md:text-base"}>
          Explore our diverse community of businesses and wellness practitioners
        </p>
        
        {/* Search bar */}
        <div className={getAnimationClass("fade-in-300")}>
          <BusinessSearch onSearch={handleSearch} />
        </div>
        
        {/* Floor selector - Scrollable on mobile */}
        <div className={getAnimationClass("fade-in-400") + " flex justify-center mb-6 md:mb-8 overflow-x-auto pb-2"}>
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => handleFloorChange("all")}
              className={`px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm font-medium rounded-l-lg ${
                selectedFloor === "all"
                  ? "bg-primary text-white"
                  : "bg-white text-sage-800 hover:bg-sage-50"
              }`}
            >
              All Floors
            </button>
            <button
              onClick={() => handleFloorChange("first")}
              className={`px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm font-medium ${
                selectedFloor === "first"
                  ? "bg-primary text-white"
                  : "bg-white text-sage-800 hover:bg-sage-50"
              }`}
            >
              1st Floor
            </button>
            <button
              onClick={() => handleFloorChange("second")}
              className={`px-3 md:px-4 py-1 md:py-2 text-xs md:text-sm font-medium rounded-r-lg ${
                selectedFloor === "second"
                  ? "bg-primary text-white"
                  : "bg-white text-sage-800 hover:bg-sage-50"
              }`}
            >
              2nd Floor
            </button>
          </div>
        </div>

        {/* Directory grid */}
        <div className={getAnimationClass("fade-in-500") + " grid grid-cols-1 gap-6 md:gap-8"}>
          {/* Search results summary */}
          {searchTerm && (
            <div className="bg-white p-3 md:p-4 rounded-lg mb-3 md:mb-4 text-center">
              <p className="text-sm md:text-base text-sage-700">
                Showing results for "{searchTerm}" - 
                {filteredFirstFloor.length + filteredSecondFloor.length} businesses found
              </p>
            </div>
          )}
          
          {/* 1st Floor Section */}
          {(selectedFloor === "all" || selectedFloor === "first") && filteredFirstFloor.length > 0 && (
            <section>
              <div className="flex items-center mb-4 md:mb-6">
                <h2 className="text-xl md:text-2xl font-heading font-medium text-primary">First Floor</h2>
                <div className="ml-4 flex-grow h-1 bg-accent opacity-30 rounded"></div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 mb-6 md:mb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {filteredFirstFloor.map((business, index) => (
                    <div 
                      key={index} 
                      className={isInitialLoad ? `fade-in-${Math.min(800, 600 + index * 50)}` : ""}
                    >
                      <DirectoryListing business={business} />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* 2nd Floor Section */}
          {(selectedFloor === "all" || selectedFloor === "second") && filteredSecondFloor.length > 0 && (
            <section>
              <div className="flex items-center mb-4 md:mb-6">
                <h2 className="text-xl md:text-2xl font-heading font-medium text-primary">Second Floor</h2>
                <div className="ml-4 flex-grow h-1 bg-accent opacity-30 rounded"></div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {filteredSecondFloor.map((business, index) => (
                    <div 
                      key={index} 
                      className={isInitialLoad ? `fade-in-${Math.min(800, 700 + index * 50)}` : ""}
                    >
                      <DirectoryListing business={business} />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
          
          {/* No results message */}
          {filteredFirstFloor.length === 0 && filteredSecondFloor.length === 0 && (
            <div className="bg-white p-6 md:p-8 rounded-lg text-center">
              <p className="text-lg md:text-xl text-sage-700 mb-2">No businesses found matching "{searchTerm}"</p>
              <p className="text-sm md:text-base text-sage-600">Try a different search term or browse by floor.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}