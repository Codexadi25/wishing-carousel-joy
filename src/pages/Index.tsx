
import BirthdayCarousel from "@/components/BirthdayCarousel";
import MysteryGiftBox from "@/components/MysteryGiftBox";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 relative overflow-hidden">
      {/* Custom CSS animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes sparkle-fall {
            0% {
              transform: translateY(-100vh) rotate(0deg);
              opacity: 1;
            }
            100% {
              transform: translateY(100vh) rotate(360deg);
              opacity: 0;
            }
          }

          @keyframes balloon-float {
            0% {
              transform: translateY(0) translateX(0) rotate(-5deg);
            }
            25% {
              transform: translateY(-20vh) translateX(10px) rotate(5deg);
            }
            50% {
              transform: translateY(-50vh) translateX(-15px) rotate(-3deg);
            }
            75% {
              transform: translateY(-80vh) translateX(20px) rotate(7deg);
            }
            100% {
              transform: translateY(-120vh) translateX(-10px) rotate(-2deg);
              opacity: 0;
            }
          }
        `
      }} />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-yellow-300/20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-pink-300/20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-white/10 animate-pulse delay-500"></div>
      </div>

      {/* Floating confetti elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          >
            <span className="text-2xl">
              {['🎈', '🎉', '🎂', '🎁', '⭐', '🌟', '💖', '🎊'][Math.floor(Math.random() * 8)]}
            </span>
          </div>
        ))}
      </div>

      {/* Animated dropping sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className="absolute text-yellow-300 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animation: `sparkle-fall ${3 + Math.random() * 2}s linear infinite`
            }}
          >
            ✨
          </div>
        ))}
      </div>

      {/* Flying balloons */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={`balloon-${i}`}
            className="absolute text-3xl"
            style={{
              bottom: '-50px',
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animation: `balloon-float ${8 + Math.random() * 4}s ease-in-out infinite`
            }}
          >
            🎈
          </div>
        ))}
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl center font-bold text-white mb-4 animate-fade-in">
            🥳🥳<p>Happy Birthday! pie of 💖heart!</p>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-pink-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl md:text-2xl text-white/90 font-light">
            I asked Mahadev for strength, and He sent me your name wrapped in a smile I can’t forget!
          </p>
        </div>


        {/* Birthday Carousel */}
        <div className="bg-white/10 backdrop-blur-s rounded-l p-8 md:p-12 shadow-2xl border border-white/20">
          <BirthdayCarousel />
        </div>

        {/* Footer message */}
        <div className="text-center mt-12">
          <p className="text-lg md:text-xl text-white/80 font-light bg-white/10 backdrop-blur-s">
            💖 Stay divine, Stay amazing, always. – Someone who secretly thinks the world of you. 💕
          </p>
          <p className="text-lg md:text-xl text-white/80 font-light bg-white/10 backdrop-blur-s">
            ❤️Love you x3000❤️
          </p>
        </div>
        
        {/* Mystery Gift Box */}
        <div className="flex justify-center mb-12">
          <MysteryGiftBox />
        </div>
      </div>
    </div>
  );
};

export default Index;
