"use client";
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function EventsSection({ events }) {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      slides: { perView: 1, spacing: 15 },
    },
    [
      (slider) => {
        let timeout;
        const clearNextTimeout = () => clearTimeout(timeout);
        const nextTimeout = () => {
          clearTimeout(timeout);
          timeout = setTimeout(() => {
            slider.next();
          }, 3000);
        };
        slider.on("created", nextTimeout);
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <section className="bg-primary py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-8 text-center">
          Upcoming Events
        </h2>
        <div className="relative flex items-center justify-center">
          <div ref={sliderRef} className="keen-slider w-full max-w-2xl">
            {events.map((event, index) => (
              <div
                key={index}
                className="keen-slider__slide bg-white rounded-xl p-6 shadow-md max-h-[250px] overflow-y-auto"
              >
                <h3 className="text-xl font-semibold mb-2 text-primary">
                  {event.title}
                </h3>
                <p className="text-gray-800">{event.description}</p>
              </div>
            ))}
          </div>
          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full bg-white p-2 rounded-full shadow transition transform duration-200 hover:scale-110 z-10"
          >
            <ChevronLeftIcon className="h-6 w-6 text-primary" />
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full bg-white p-2 rounded-full shadow transition transform duration-200 hover:scale-110 z-10"
          >
            <ChevronRightIcon className="h-6 w-6 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
}
