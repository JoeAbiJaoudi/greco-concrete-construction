// src/app/layout.js
"use client";
import "./globals.css";
import Navigation from "@/components/Navigation";
import useTypographySetup from "@/utils/setupTypography";
import { AnimationProvider } from "@/components/AnimationProvider";

export default function RootLayout({ children }) {
  // Setup typography and theme CSS variables
  useTypographySetup();

  return (
    <html lang="en">
      <head>
        <title>The Pungo Collective</title>
        <meta
          name="description"
          content="Showcasing our building full of individual businesses."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
        />
      </head>
      <body className="bg-primary text-white font-body">
        <AnimationProvider>
          <div className="bg-primary">
            <Navigation />
          </div>
          <main>{children}</main>
          <footer className="bg-primary text-white py-6 mt-12">
            <div className="max-w-6xl mx-auto px-4 text-center">
              <p className="mb-2 text-sm md:text-base">
                <strong>2380 Liberty Way</strong>
                <br />
                Virginia Beach, Virginia
              </p>
              <p className="text-sm md:text-base">
                &copy; {new Date().getFullYear()} The Pungo Collective. All
                rights reserved.
              </p>
            </div>
          </footer>
        </AnimationProvider>
      </body>
    </html>
  );
}
