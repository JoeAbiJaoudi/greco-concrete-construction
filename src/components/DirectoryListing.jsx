"use client";
import React, { useState } from "react";
// SVG for Facebook icon
const FacebookIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className="h-4 w-4 inline-block mr-2 text-accent" 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
  </svg>
);

export default function DirectoryListing({ business }) {
  const [showDetails, setShowDetails] = useState(false);

  // Function to handle card click for expanding/collapsing details
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="border border-sage-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      {/* Image section - Clickable to website/facebook when URL is available */}
      {business.image && (
        <div className="h-48 sm:h-52 md:h-56 w-full relative flex items-center justify-center bg-white p-4">
          {/* Greco-Concrete gets Facebook link */}
          {business.name === "Greco-Concrete Construction" || business.name === "Greco-Concrete Solutions" ? (
            <a 
              href="https://www.facebook.com/profile.php?id=61552422857317"
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full h-full cursor-pointer hover:opacity-80 transition-opacity"
            >
              <img 
                src={business.image} 
                alt={business.name} 
                className="max-w-full max-h-full object-contain"
              />
              <div className="absolute inset-0 bg-sage-800 bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                <span className="opacity-0 hover:opacity-100 text-white bg-sage-800 bg-opacity-70 px-3 py-1 rounded text-xs transition-opacity duration-300">
                  Visit Facebook Page
                </span>
              </div>
            </a>
          ) : 
          /* Business with URL gets link to their website */
          (business.url && business.url !== '#') || (business.contact?.website) ? (
            <a 
              href={business.contact?.website ? `https://${business.contact.website}` : business.url}
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full h-full cursor-pointer hover:opacity-80 transition-opacity"
            >
              <img 
                src={business.image} 
                alt={business.name} 
                className="max-w-full max-h-full object-contain"
              />
              <div className="absolute inset-0 bg-sage-800 bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                <span className="opacity-0 hover:opacity-100 text-white bg-sage-800 bg-opacity-70 px-3 py-1 rounded text-xs transition-opacity duration-300">
                  Visit Website
                </span>
              </div>
            </a>
          ) : 
          /* No URL available - just show the image */
          (
            <div className="flex items-center justify-center w-full h-full">
              <img 
                src={business.image} 
                alt={business.name} 
                className="max-w-full max-h-full object-contain"
              />
            </div>
          )}
        </div>
      )}
      
      <div className="p-3 sm:p-4 bg-white">
        {/* Business Header - Always visible */}
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-base sm:text-lg font-heading font-medium text-sage-800">{business.name}</h3>
            <p className="text-xs sm:text-sm text-sage-600">Suite #{business.suiteNumber}</p>
          </div>
          <button 
            onClick={toggleDetails}
            className="text-xs bg-sage-100 hover:bg-sage-200 text-sage-800 px-2 py-1 rounded"
          >
            {showDetails ? "Less" : "More"}
          </button>
        </div>

        {/* Provider Names */}
        {business.providers && (
          <div className="mt-2">
            {business.providers.map((provider, index) => (
              <p key={index} className="text-xs sm:text-sm text-sage-800 font-medium">
                {provider}
              </p>
            ))}
          </div>
        )}

        {/* Services */}
        {business.services && (
          <p className="mt-2 text-xs sm:text-sm text-sage-700 line-clamp-2">
            {business.services}
          </p>
        )}

        {/* Expanded Details */}
        {showDetails && (
          <div className="mt-3 pt-2 border-t border-sage-100 animate-fadeIn">
            {/* Bio */}
            {business.bio && (
              <p className="text-xs sm:text-sm text-sage-700 mb-3">
                {business.bio}
              </p>
            )}

            {/* Contact Information */}
            <div className="mt-2 space-y-1">
              {business.contact?.email && (
                <p className="text-xs sm:text-sm text-sage-800">
                  <a href={`mailto:${business.contact.email}`} className="hover:underline">
                    {business.contact.email}
                  </a>
                </p>
              )}
              {business.contact?.instagram && (
                <p className="text-xs sm:text-sm text-sage-800">
                  {business.contact.instagram}
                </p>
              )}
              {(business.name === "Greco-Concrete Construction" || business.name === "Greco-Concrete Solutions") ? (
                <p className="text-xs sm:text-sm text-sage-800">
                  <a 
                    href="https://www.facebook.com/profile.php?id=61552422857317" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-accent transition-colors duration-200 flex items-center"
                  >
                    <FacebookIcon /> Find us on Facebook
                  </a>
                </p>
              ) : business.contact?.facebook && (
                <p className="text-xs sm:text-sm text-sage-800">
                  <a 
                    href={business.contact.facebook} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-accent transition-colors duration-200 flex items-center"
                  >
                    <FacebookIcon /> Find us on Facebook
                  </a>
                </p>
              )}
              {business.contact?.phone && (
                <p className="text-xs sm:text-sm text-sage-800">
                  <a href={`tel:${business.contact.phone.replace(/[^0-9]/g, '')}`} className="hover:underline">
                    {business.contact.phone}
                  </a>
                </p>
              )}
            </div>
            
            {/* Website button if website exists */}
            {(business.contact?.website || (business.url && business.url !== '#')) && (
              <a 
                href={business.contact?.website ? `https://${business.contact.website}` : business.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="mt-3 inline-block px-3 py-1 bg-accent text-white text-xs sm:text-sm rounded hover:bg-secondary transition-colors"
              >
                Visit Website
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}