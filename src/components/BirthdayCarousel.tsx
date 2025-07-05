
import React, { useState, useEffect } from 'react';

const BirthdayCarousel = () => {
  const birthdayWishes = [
    "🎉 Wishing you a day filled with happiness and a year filled with joy! 🎂",
    "🌟 May your birthday be the start of a year filled with good luck, good health, and much happiness! ✨",
    "🎈 Another adventure filled year awaits you. Welcome it by celebrating your birthday with pomp and splendor! 🎊",
    "🎁 May this special day bring you endless joy and tons of precious memories! 🥳",
    "🌈 Count your life by smiles, not tears. Count your age by friends, not years! 💖",
    "🎂 Hope your special day brings you all that your heart desires! Here's wishing you a day full of pleasant surprises! 🎉",
    "⭐ May your birthday and every day be filled with the warmth of sunshine, the happiness of smiles! 🌞",
    "🎵 Birthdays are a new start, a fresh beginning and a time to pursue new endeavors with new goals! 🎯"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === birthdayWishes.length - 1 ? 0 : prevIndex + 1
        );
        setFade(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, [birthdayWishes.length]);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div 
        className={`text-center transition-opacity duration-300 ${
          fade ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <p className="text-xl md:text-2xl lg:text-3xl font-medium text-white leading-relaxed px-4">
          {birthdayWishes[currentIndex]}
        </p>
      </div>
      
      {/* Carousel indicators */}
      <div className="flex justify-center mt-8 space-x-2">
        {birthdayWishes.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BirthdayCarousel;
