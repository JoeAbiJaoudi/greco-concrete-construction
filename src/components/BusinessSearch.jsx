"use client";
import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export default function BusinessSearch({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="w-full max-w-sm sm:max-w-md mx-auto mb-6 md:mb-8">
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          placeholder="Search by business name or service..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-3 sm:px-4 py-2 text-sm md:text-base pr-10 text-sage-800 bg-white border border-sage-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sage-500 hover:text-sage-700"
        >
          <MagnifyingGlassIcon className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </form>
    </div>
  );
}