import React, { useState, useEffect } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const HeaderSlider = () => {
 const sliderData = [
   {
     id: 1,
     title: "Step Up Your Style, Walk with Confidence!",
     offer: "Limited Time 30% Off!",
     buttonText1: "Shop Now",
     buttonText2: "View Collection",
     imgSrc: assets.header1,
   },
   {
     id: 2,
     title: "Run Faster, Look Sharper!",
     offer: "Limited Stock, Grab Yours Now!",
     buttonText1: "Get Yours",
     buttonText2: "Explore Shoes",
     imgSrc: assets.header2,
   },
   {
     id: 3,
     title: "Comfort, Style & Ready for Anything!",
     offer: "Special 40% Off Today!",
     buttonText1: "Order Now",
     buttonText2: "Learn More",
     imgSrc: assets.header3,
   },
   {
     id: 4,
     title: "Unleash Your Performance - The Ultimate Running Shoes Await!",
     offer: "Hurry up! Only a few left!",
     buttonText1: "Get Yours Now",
     buttonText2: "Explore Collection",
     imgSrc: assets.header1,
   },
 ];


  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [sliderData.length]);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="overflow-hidden relative w-full">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {sliderData.map((slide, index) => (
          <div
            key={slide.id}
            className="flex flex-col-reverse md:flex-row items-center justify-between bg-[#E6E9F2] py-8 md:px-14 px-5 mt-6 rounded-xl min-w-full"
          >
            <div className="md:pl-8 mt-10 md:mt-0">
              <p className="md:text-base text-blue-600 pb-1">{slide.offer}</p>
              <h1 className="max-w-lg md:text-[40px] md:leading-[48px] text-2xl font-semibold">
                {slide.title}
              </h1>
              <div className="flex items-center mt-4 md:mt-6 ">
                <button className="md:px-10 px-7 md:py-2.5 py-2 bg-blue-600 rounded-full text-white font-medium">
                  {slide.buttonText1}
                </button>
                <button className="group flex items-center gap-2 px-6 py-2.5 font-medium">
                  {slide.buttonText2}
                  <Image className="group-hover:translate-x-1 transition" src={assets.arrow_icon} alt="arrow_icon" />
                </button>
              </div>
            </div>
            <div className="flex items-center flex-1 justify-center">
              <Image
                className="md:w-72 w-48"
                src={slide.imgSrc}
                alt={`Slide ${index + 1}`}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 mt-8">
        {sliderData.map((_, index) => (
          <div
            key={index}
            onClick={() => handleSlideChange(index)}
            className={`h-2 w-2 rounded-full cursor-pointer ${
              currentSlide === index ? "bg-blue-600" : "bg-gray-500/30"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HeaderSlider;
