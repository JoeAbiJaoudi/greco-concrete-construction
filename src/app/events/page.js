"use client";
import React from "react";
import EventsCalendar from "@/components/EventsCalendar";

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-sage-100 text-sage-800">
      <div className="max-w-6xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Event Calendar</h1>
        <p className="text-center text-sage-700 mb-8">
          Stay updated with the latest events at The Pungo Collective
        </p>
        
        <EventsCalendar />
      </div>
    </main>
  );
}