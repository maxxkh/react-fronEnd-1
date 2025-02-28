import { useState, useEffect } from 'react';

const NewsCarousel = ({ items, autoPlay = true, interval = 5000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (autoPlay && !paused) {
      const intervalId = setInterval(() => {
        setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
      }, interval);
      return () => clearInterval(intervalId);
    }
  }, [autoPlay, paused, interval, items.length]);

  const goToPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  if (items.length === 0) return null;

  return (
    <div 
      className="relative max-w-6xl mx-auto overflow-hidden rounded-2xl shadow-xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative h-96 md:h-[500px]">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-all duration-500 ease-in-out ${
              index === activeIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
            aria-hidden={index !== activeIndex}
          >
            <div 
              className="absolute inset-0 bg-cover bg-center brightness-75"
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/80 to-transparent">
              <div className={`transform transition-all duration-300 ease-out ${
                index === activeIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
              }`}>
                <h3 className="text-xl md:text-3xl font-bold text-white mb-3 md:mb-4">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-gray-200 max-w-2xl">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
        aria-label="Previous"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
        aria-label="Next"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {items.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeIndex ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to news ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsCarousel;