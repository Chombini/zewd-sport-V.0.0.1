"use client"
import BoxReveal from "@/components/magicui/box-reveal"
import { useState, useEffect } from 'react';

const HomeSlider1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
        image: '/4Slider.jpg',
        title: 'Slide 1',
        description: 'Description for Slide 1',
    },{
        image: '/2Slider.jpg',
        title: 'Slide 1',
        description: 'Description for Slide 1',
    },{
        image: '/3Slider.jpg',
        title: 'Slide 1',
        description: 'Description for Slide 1',
    },{
        image: '/1Slider.jpg',
        title: 'Slide 1',
        description: 'Description for Slide 1',
    },
    // ... more slides
  ];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // Adjust the interval as needed

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='max-w-full h-[400px] md:h-[500px] md:w-full overflow-hidden'>
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {slides.map((slide, index) => (
                      <div key={index} className="relative flex-shrink-0 w-full h-[400px] md:h-[500px] md:w-full">
                          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover"/>
                      </div>
              ))}
            </div>
        <div className="absolute w-full h-full top-0 flex flex-col justify-center pl-10 sm:pl-16">
            <BoxReveal boxColor={"#31B65D"} duration={0.5}>
              <h1 className="text-2xl font-extrabold sm:text-5xl text-green-500">
                  Zewd-Sport
                <strong className="block font-extrabold text-green-100">
                  new mastery. ሁለም ድል!!
                </strong>
              </h1>
            </BoxReveal>
        </div>
    </div>
  )
}

export default HomeSlider1