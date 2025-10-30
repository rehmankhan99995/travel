"use client";

import { useState } from "react";
import Link from "next/link";

export default function TravelLogin() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      location: "Wonderful Mauritius",
      title: "Just Living is not enough, one must have sunshine",
      description:
        "Discover the most unique places, experiences and amazing homes around the world.",
      image: "/bg.png",
      slideNumber: "01/04",
    },
  ];

  const currentSlideData = slides[currentSlide];

  return (
    <div className="min-h-screen bg-gradient-to-b flex items-center justify-center p-6">
      {/* Outer White Container */}
      <div className="h-screen rounded-3xl overflow-hidden flex flex-col lg:flex-row w-full max-w-[1360px] mx-auto">
        {/* Left Panel - Hero Section */}
        <div className="relative lg:w-[880px] h-[900px] lg:h-auto">
          <div className="relative">
            <img
              src={currentSlideData.image}
              alt={currentSlideData.location}
              className="w-full object-cover rounded-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl" />
          </div>

          {/* Hero Content */}
          <div className="absolute inset-0 flex flex-col justify-between p-8">
            <div className="flex justify-between items-start">
              <h1 className="text-white text-2xl font-bold">
                Travel <span className="font-light">Explore</span>
              </h1>
              <span className="text-white text-lg font-light">
                {currentSlideData.slideNumber}
              </span>
            </div>

            <div className="space-y-4">
              <p className="text-cyan-300 text-sm font-medium">
                {currentSlideData.location}
              </p>
              <h2 className="text-white text-3xl font-bold leading-tight">
                {currentSlideData.title}
              </h2>
              <p className="text-white/90 text-sm max-w-md">
                {currentSlideData.description}
              </p>
              <button className="bg-cyan-400 hover:bg-cyan-500 text-gray-900 font-semibold px-6 py-2 rounded-lg">
                Explore
              </button>
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
        </div>

        {/* Right Panel - Login Form */}
        <div className="flex-1 flex items-center justify-center p-10">
          <div className="w-full max-w-sm">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Login to Continue
            </h3>

            <form className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-lg font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 block w-full rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Log In
              </button>

              <p className="text-base text-gray-600 text-center">
                Don’t have an account?{" "}
                <Link
                  href="/signup"
                  className="text-blue-600 font-medium hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
