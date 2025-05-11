// src/components/MinimalistHeader.jsx
import React from "react";

export default function MinimalistHeader() {
  return (
    <header className="bg-white text-gray-800 border-b border-gray-200 p-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">The Pungo Collective</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:text-teal-600 transition-colors duration-200">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-600 transition-colors duration-200">
                Businesses
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-600 transition-colors duration-200">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-teal-600 transition-colors duration-200">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
