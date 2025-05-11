// src/components/MinimalistHero.jsx
import React from "react";

export default function MinimalistHero() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto p-12 text-center">
        <h2 className="text-4xl font-bold text-gray-800">
          Welcome to The Pungo Collective
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          A curated community of innovative businesses.
        </p>
        <button className="mt-8 px-6 py-3 bg-teal-600 text-white rounded hover:bg-teal-700 transition-colors duration-200">
          Learn More
        </button>
      </div>
    </section>
  );
}
