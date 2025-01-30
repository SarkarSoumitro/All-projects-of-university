import React, { useState, useEffect } from "react";
import "./testimonials.css";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of testimonial objects
  const testimonials = [
    {
      quote:
        "Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
      author: "Micheal Gough",
      position: "at Google",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
    },
    {
      quote:
        "The carousel is a slideshow for cycling through a series of content, built with CSS 3D transforms and a bit of JavaScript. It works with a series of images",
      author: "Sonjoy Dey",
      position: "Web Developer at Microsoft",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
    },
    {
      quote:
        "Why do we use carousel A carousel is a multi-content format used on various visual social media platforms to display images and videos consecutively. ",
      author: "Reyad ",
      position: "at Google",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
    },
  ];

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 4000);

    return () => clearInterval(interval);
  }, []);

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="testi">
      <h1>What our customers say</h1>
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
          <figure className="max-w-screen-md mx-auto">
            <svg
              className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            <blockquote>
              <p className="text-2xl font-medium text-gray-900 dark:text-white">
                {testimonials[currentIndex].quote}
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              <img
                className="w-6 h-6 rounded-full"
                src={testimonials[currentIndex].image}
                alt="profile picture"
              />
              <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <div className="pr-3 font-medium text-gray-900 dark:text-white">
                  {testimonials[currentIndex].author}
                </div>
                <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                  {testimonials[currentIndex].position}
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
        <div className="btn">
         <button onClick={prevTestimonial}><FaArrowLeft/></button>
         <button onClick={nextTestimonial}><FaArrowRight/></button>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
