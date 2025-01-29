import React, { useState, useEffect } from "react";
import testimonialData from "../utils/testimonialData";
import snow from "../assets/snowflake.svg";

const Testimonial = () => {
  const [curr, setCurr] = useState(0);
  const length = testimonialData.length;

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurr((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 3000); // Slide interval in milliseconds

    return () => clearInterval(autoSlide);
  }, []);

  // Function to handle dot click
  const handleDotClick = (index) => {
    setCurr(index);
  };

  return (
    <section id="testimonials" className="mt-20 lg:mt-28">
        {/* Heading */}
        <div className="flex justify-center">
          <ul className="flex gap-4 text-[14px] md:text-[15px] mb-[15px] md:mb-[30px] uppercase">
            <li>03</li>
            <li>
              <hr className="w-10 h-[1px] bg-gray-100 border-0 rounded my-3 dark:bg-gray-700" />
            </li>
            <li>Testimonials</li>
          </ul>
        </div>
      <div className="relative overflow-hidden w-full py-8">
        <div
          className="flex transition-transform ease-out duration-1000"
          style={{ transform: `translateX(-${curr * 100}vw)` }}
        >
          {testimonialData.map((value, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center gap-6 w-full h-full flex-shrink-0 px-8"
            >
              <div className="flex h-12 w-12 justify-center items-center">
                <img src={snow} alt="Snowflake Icon" className="object-contain" />
              </div>
              <h1 className="text-2xl md:text-4xl italic text-center">
                "{value.quote}"
              </h1>

              <div className="flex gap-1 flex-col items-center justify-center">
                <h2 className="text-lg md:text-xl">{value.name}</h2>
                <h3 className="text-lg md:text-xl font-thin text-gray-400">
                  {value.kaam}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Indicator Dots */}
        <div className="flex items-center justify-center gap-2 pt-6">
          {testimonialData.map((value, index) => (
            <div
              key={index}
              className={`
                transition-all w-2 h-2 bg-black rounded-full cursor-pointer
                ${curr === index ? "p-[5px]" : "bg-opacity-50"}
              `}
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
