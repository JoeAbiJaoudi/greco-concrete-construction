"use client";
import React, { useState } from "react";
import { CalendarIcon, MapPinIcon, UserIcon } from "@heroicons/react/24/outline";

// Sample events data
const eventsData = [
  {
    id: 1,
    title: "Art Walk",
    date: "April 12, 2025",
    time: "6:00 PM - 9:00 PM",
    location: "Throughout the building",
    description: "A building-wide art walk with local artists, food trucks, and live music.",
    host: "The Pungo Collective",
  },
  {
    id: 2,
    title: "Wellness Fair",
    date: "May 5, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Second Floor",
    description: "Explore wellness-focused offerings from our tenants including free classes and demos.",
    host: "Sage Wellness Suites",
  },
  {
    id: 3,
    title: "Summer Kickoff",
    date: "June 1, 2025",
    time: "12:00 PM - 5:00 PM",
    location: "Outdoor Plaza",
    description: "Outdoor block party with activities, pop-up shops, and more!",
    host: "The Pungo Collective",
  },
  {
    id: 4,
    title: "Yoga in the Garden",
    date: "June 15, 2025",
    time: "9:00 AM - 10:30 AM",
    location: "Rear Garden",
    description: "Open-air yoga session for all levels, followed by light refreshments.",
    host: "Lotus River Wellness",
  },
  {
    id: 5,
    title: "Health & Nutrition Workshop",
    date: "July 10, 2025",
    time: "6:30 PM - 8:00 PM",
    location: "The Healing Loft, Suite #230",
    description: "Learn about building healthy habits and meal planning for the summer.",
    host: "Tune-in 2 Wellness",
  },
];

export default function EventsCalendar() {
  const [selectedMonth, setSelectedMonth] = useState("All");
  const months = ["All", "April", "May", "June", "July", "August", "September"];

  const filteredEvents = selectedMonth === "All" 
    ? eventsData 
    : eventsData.filter(event => event.date.includes(selectedMonth));

  return (
    <section className="max-w-6xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-4">Upcoming Events</h2>
      <p className="text-center text-sage-700 mb-8">
        Join us for these special events hosted by businesses in our building
      </p>
      
      {/* Month selector */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-md shadow-sm">
          {months.map((month) => (
            <button
              key={month}
              onClick={() => setSelectedMonth(month)}
              className={`px-4 py-2 text-sm font-medium ${
                month === "All" ? "rounded-l-lg" : ""
              } ${
                month === "September" ? "rounded-r-lg" : ""
              } ${
                selectedMonth === month
                  ? "bg-primary text-white"
                  : "bg-white text-sage-800 hover:bg-sage-50"
              }`}
            >
              {month}
            </button>
          ))}
        </div>
      </div>

      {/* Events list */}
      <div className="space-y-6">
        {filteredEvents.map((event) => (
          <div 
            key={event.id}
            className="bg-white rounded-lg shadow-md overflow-hidden border border-sage-200 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="p-6">
              <h3 className="text-xl font-bold text-sage-800 mb-2">{event.title}</h3>
              <div className="flex flex-col space-y-2 text-sage-700 mb-4">
                <div className="flex items-center">
                  <CalendarIcon className="h-5 w-5 mr-2 text-accent" />
                  <span>{event.date} • {event.time}</span>
                </div>
                <div className="flex items-center">
                  <MapPinIcon className="h-5 w-5 mr-2 text-accent" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center">
                  <UserIcon className="h-5 w-5 mr-2 text-accent" />
                  <span>Hosted by: {event.host}</span>
                </div>
              </div>
              <p className="text-sage-600">{event.description}</p>
            </div>
          </div>
        ))}
        
        {filteredEvents.length === 0 && (
          <div className="text-center py-8 text-sage-600">
            No events scheduled for {selectedMonth} yet. Check back later!
          </div>
        )}
      </div>
    </section>
  );
}