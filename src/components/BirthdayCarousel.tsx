
import React, { useState, useEffect } from 'react';

const BirthdayCarousel = () => {
  const birthdayWishes = [
    "🎉 Happy Birthday to the one who makes ordinary days feel a little more magical! ✨",
    "I asked Mahadev for strength, and He sent me your name wrapped in a smile I can't forget.",
    "I hope your day is as beautiful, bright, and full of possibility as your smile. You have this effortless way of making everything around you better—your presence, your laughter, your energy.",
    "May this year bring you everything that makes your heart happiest—and maybe a little surprise or two along the way. Where smiles😊, little adventures, and beautiful moments… and maybe a few shared ones too 💫",
    "Sending love wrapped in lines of code, because just like my code— you're crafted with purpose and close to my heart, some codes are written to solve problems… But there's one I've been debugging for a while now— the one where your name compiles perfectly with mine.💙",
    "Stay divine, Stay amazing, always. – Someone who secretly thinks the world of you.",
    "🌟 May your birthday be the start of a year filled with good luck, good health, and much happiness! ✨",
    "🎈 Another adventure filled year awaits you. Welcome it by celebrating your birthday with pomp and splendor! 🎊"
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
    }, 6000); // Increased timing to allow reading longer messages

    return () => clearInterval(interval);
  }, [birthdayWishes.length]);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div 
        className={`text-center transition-opacity duration-300 ${
          fade ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <p className="text-lg md:text-xl lg:text-2xl font-medium text-white leading-relaxed px-4 min-h-[120px] flex items-center justify-center">
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
