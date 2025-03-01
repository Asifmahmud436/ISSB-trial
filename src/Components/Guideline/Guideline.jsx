import React, { useState, useRef } from "react";
import m1 from "./images/m1.png";
import m2 from "./images/m2.png";
import m3 from "./images/m3.png";
import m4 from "./images/m4.png";
import m5 from "./images/m5.png";

const MilitaryCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const videoRef = useRef(null);

  const carouselItems = [
    {
      id: 1,
      image: m1,
      title: "SPECIAL FORCES TRAINING",
      subtitle: "ELITE UNITS - ADVANCED TACTICS",
    },
    {
      id: 2,
      image: m2,
      title: "PERMANENT COMMISSION IN BANGLADESH NAVY",
      subtitle: "PCN - CADET ENTRY",
      hasVideo: true,
    },
    {
      id: 3,
      image: m3,
      title: "TACTICAL RESPONSE TEAM",
      subtitle: "RAPID DEPLOYMENT - FIELD OPERATIONS",
    },
    {
      id: 4,
      image: m4,
      title: "ADVANCED COMBAT TRAINING",
      subtitle: "SPECIALIZED WARFARE TECHNIQUES",
    },
    {
      id: 5,
      image: m5,
      title: "MILITARY INTELLIGENCE",
      subtitle: "STRATEGIC RECONNAISSANCE",
    },
  ];

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? carouselItems.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === carouselItems.length - 1 ? 0 : prev + 1
    );
  };

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <div className="relative w-full max-w-6xl overflow-hidden mx-auto text-center mt-22">
      <h1 className="text-4xl pb-3 text-[#1F4941] font-bold">
        Preparatory Guideline
      </h1>
      <p className="text-sm pb-4 text-[#939293]">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum,
        quisquam!
      </p>
      <div className="flex justify-center gap-x-4">
        <button className="bg-[#F3EDE8] py-2 px-4 text-[#1F4941] font-semibold hover:text-white hover:bg-red-600">
          Day 1
        </button>
        <button className="bg-[#F3EDE8] py-2 px-4 text-[#1F4941] font-semibold hover:text-white hover:bg-red-600">
          Day 2
        </button>
        <button className="bg-[#F3EDE8] py-2 px-4 text-[#1F4941] font-semibold hover:text-white hover:bg-red-600">
          Day 3
        </button>
        <button className="bg-[#F3EDE8] py-2 px-4 text-[#1F4941] font-semibold hover:text-white hover:bg-red-600">
          Day 4
        </button>
      </div>

      <video
        ref={videoRef}
        className="hidden"
        controls
        src=""
        poster={carouselItems[1].image}
      />

      <div className="relative flex h-[600px] items-center justify-center">
        {" "}
        {carouselItems.map((item, index) => {
          const position =
            ((index - activeIndex + carouselItems.length) %
              carouselItems.length) -
            2;

          return (
            <div
              key={item.id}
              className={classNames(
                "absolute transition-all duration-500 ease-in-out",
                position === 0
                  ? "z-30 opacity-100"
                  : Math.abs(position) === 1
                  ? "z-20 opacity-80"
                  : Math.abs(position) === 2
                  ? "z-10 opacity-60"
                  : "z-0 opacity-40"
              )}
              style={{
                transform: `translateX(${position * 25}%) scale(${
                  position === 0 ? 1 : Math.abs(position) === 1 ? 0.9 : 0.8
                })`,
              }}
            >
              <div
                className={classNames(
                  "relative h-[450px] w-[350px] overflow-hidden", // Increased height and width
                  position === 0 && "border-2 border-red-500"
                )}
              >
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="h-full w-full object-cover brightness-75"
                />

                {position === 0 && item.hasVideo && (
                  <button
                    onClick={handlePlayVideo}
                    className="absolute left-1/2 top-1/2 z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition-all hover:bg-black/70"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </button>
                )}

                {position === 0 && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4 text-center text-white">
                    <h3 className="text-sm font-bold">{item.title}</h3>
                    <p className="text-xs">{item.subtitle}</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 z-40 -translate-y-1/2 rounded-full bg-gray-800/50 p-2 text-white transition-all hover:bg-gray-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 z-40 -translate-y-1/2 rounded-full bg-gray-800/50 p-2 text-white transition-all hover:bg-gray-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
  );
};

export default MilitaryCarousel;
