"use client";

import { useState } from "react";
import Link from "next/link";

export default function TravelSignup() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      location: "Explore the Maldives",
      title: "Adventure awaits beyond the horizon",
      description:
        "Join us today and discover unforgettable destinations and experiences.",
      image: "/bg.png",
      slideNumber: "02/04",
    },
  ];

  const currentSlideData = slides[currentSlide];

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Outer White Container */}
      <div className="w-full h-full max-w-[1600px] rounded-none lg:rounded-3xl overflow-hidden flex flex-col lg:flex-row shadow-[0_0_40px_rgba(0,0,0,0.15)] mx-auto">
        
        {/* Left Panel - Hero Section */}
        <div className="relative lg:w-[880px] h-[400px] lg:h-screen flex-shrink-0">
          {/* Background Image */}
          <img
            src={currentSlideData.image}
            alt={currentSlideData.location}
            className="w-full h-full object-cover rounded-none lg:rounded-3xl"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-none lg:rounded-3xl" />

          {/* Hero Content Inside the Image */}
          <div className="absolute inset-0 flex flex-col justify-center px-10 lg:px-16 text-left text-white">
            <div className="max-w-md space-y-4">
              <p className="text-cyan-300 text-sm font-medium uppercase tracking-wider">
                {currentSlideData.location}
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                {currentSlideData.title}
              </h2>
              <p className="text-white/90 text-base leading-relaxed">
                {currentSlideData.description}
              </p>
              <button className="mt-4 bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-semibold px-8 py-3 rounded-lg shadow-md transition">
                Explore
              </button>
            </div>

            {/* Slide Number Top Right */}
            <span className="absolute top-6 right-8 text-white text-lg font-light">
              {currentSlideData.slideNumber}
            </span>
          </div>

          {/* Carousel Dots */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-white w-8"
                    : "bg-white/50 w-2"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right Panel - Signup Form */}
        <div className="flex-1 flex items-center justify-center p-10 bg-white">
          <div className="w-full max-w-sm">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Create your Account
            </h3>

            <form className="space-y-4">
              {/* Full Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-base font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-lg border text-black border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-base font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-lg border text-black border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-base font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 block w-full rounded-lg border text-black border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Create a password"
                  required
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-base font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="mt-1 block w-full rounded-lg border text-black placeholder:text-[#838383] border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Confirm your password"
                  required
                />
              </div>

              {/* Submit */}
              <Link href={"/login"}>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Sign Up
              </button>
              </Link>

              {/* Switch to Login */}
              <p className="text-base text-gray-600 text-center">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Log in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
