import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";

export default function UserExperience() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [itemsToShow, setItemsToShow] = useState(2); // Default to 2 items for medium screens

  const testimonials = [
    {
      id: 1,
      name: "H. M. Hafizur Rahman",
      title: "Accounts Manager",
      text: "Before Bangladesh Blacklist, I lost money on a fake electronics website. Their deals seemed too good to be true, and they were. This platform is a game-changer! I check every online store before I buy. It’s saved me time, money, and a lot of hassle. It’s a life saver!",
      rating: 5,
      image: "https://via.placeholder.com/48", // Replace with actual image URL
    },
    {
      id: 2,
      name: "M. Rasel",
      title: "Marketing Executive",
      text: "F-commerce fraud is a threat in Bangladesh, jeopardizing both consumers and businesses. As a victim, I’ve witnessed the devastating consequences firsthand. Bangladesh Blacklist is helping people from getting mugged in social media.",
      rating: 5,
      image: "https://via.placeholder.com/48", // Replace with actual image URL
    },
    {
      id: 3,
      name: "MD. Alim",
      title: "hello Manager",
      text: "Physical shop fraud damages consumer trust in Bangladesh's retail sector. Bangladesh Blacklist serves as a crucial tool, spotlighting deceptive practices and protecting businesses from such threats.",
      rating: 5,
      image: "https://via.placeholder.com/48", // Replace with actual image URL
    },
    {
      id: 4,
      name: "MD. Alim",
      title: "fdsfdss",
      text: "Physical shop fraud damages consumer trust in Bangladesh's retail sector. Bangladesh Blacklist serves as a crucial tool, spotlighting deceptive practices and protecting businesses from such threats.",
      rating: 3,
      image: "https://via.placeholder.com/48", // Replace with actual image URL
    },
    {
      id: 5,
      name: "MD. Alim",
      title: "hi",
      text: "Physical shop fraud damages consumer trust in Bangladesh's retail sector. Bangladesh Blacklist serves as a crucial tool, spotlighting deceptive practices and protecting businesses from such threats.",
      rating: 4,
      image: "https://via.placeholder.com/48", // Replace with actual image URL
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Determine how many items to show based on the screen size
    if (windowWidth >= 1024) {
      setItemsToShow(2); // 2 items for large screens
    } else {
      setItemsToShow(1); // 2 items for medium screens
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - itemsToShow : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsToShow >= testimonials.length ? 0 : prevIndex + 1
    );
  };

  const getVisibleTestimonials = () => {
    const endIndex = currentIndex + itemsToShow;
    if (endIndex <= testimonials.length) {
      return testimonials.slice(currentIndex, endIndex);
    } else {
      return [
        ...testimonials.slice(currentIndex, testimonials.length),
        ...testimonials.slice(0, endIndex - testimonials.length),
      ];
    }
  };

  return (
    <div className="py-16">
      <div className="grid grid-cols-12">
        <div className="md:col-span-4 col-span-12 md:mb-0 mb-5">
          <div className="flex md:justify-normal justify-center">
            <h2 className="text-center py-1 bg-[#537cd9] w-fit text-white px-4 text-md rounded-lg mb-2">
              What our users say
            </h2>
          </div>
          <h1 className="text-4xl font-semibold mb-4 md:text-start text-center">
            Users Experiences
          </h1>
          <h6 className="mt-2 text-gray-500 mb-5 md:text-start text-center">
            We can't resolve your individual report, but we use reports to
            investigate and bring cases against fraud, scams, and bad business
            practices.
          </h6>
          <div className="md:block hidden">
            <div className="flex gap-x-4 ">
              <button
                onClick={prevSlide}
                className="p-4 bg-yellow-500 rounded-lg"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={nextSlide}
                className="p-4 bg-yellow-500 rounded-lg"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>

        <div className="md:col-span-8 col-span-12 flex items-center justify-center">
          <div className="relative w-full overflow-hidden">
            <div className="flex space-x-4 transition-transform duration-300">
              {getVisibleTestimonials().map((testimonial) => (
                <div key={testimonial.id} className="w-full px-4">
                  <div className="p-8 bg-white rounded-lg border-2 h-[400px] flex flex-col w-full">
                    <div className="flex items-center justify-start mb-4">
                      {Array.from({ length: 5 }, (_, i) => (
                        <FaStar
                          key={i}
                          className={`w-5 h-5 ${
                            i < testimonial.rating
                              ? "text-yellow-500"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6">{testimonial.text}</p>
                    <div className="flex items-center mt-auto">
                      <img
                        src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?cs=srgb&dl=pexels-emmy-e-1252107-2381069.jpg&fm=jpg"
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <p className="font-bold text-gray-800">
                          {testimonial.name}
                        </p>
                        <p className="text-gray-600">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="md:hidden block col-span-12 mt-8">
          <div className="flex gap-x-4 justify-center">
            <button
              onClick={prevSlide}
              className="p-4 bg-yellow-500 rounded-lg"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={nextSlide}
              className="p-4 bg-yellow-500 rounded-lg"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
