"use client"
import BoxReveal from '@/components/magicui/box-reveal';
import { useState, useEffect } from 'react';

function Carousel() {
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

  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div className="relative overflow-hidden">
      <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
            <>
                <div key={index} className="relative flex-shrink-0 w-full h-[400px] md:h-[500px] md:w-full">
                    <img src={slide.image} alt={slide.title} className="w-full h-full object-cover"/>
                </div>
                <div className="absolute ml-4 top-44 z-15 flex items-center justify-start h-40 w-full opacity-50 hover:opacity-100">
                    <div className='flex h-40 md:h-80 w-full flex-col justify-center lg:px-32 mt-10'>
                        <BoxReveal boxColor={"#31B65D"} duration={0.5}>
                            <h1 className="text-2xl font-extrabold sm:text-5xl text-neutral-900">
                                Zewd-Sport
                                <strong className="block font-extrabold text-green-500">
                                new mastery.
                                </strong>
                            </h1>
                        </BoxReveal>
                    </div>
                </div>
            </>
        
        ))}
      </div>
    </div>
  );
}

export default Carousel;