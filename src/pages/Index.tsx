
import BirthdayCarousel from "@/components/BirthdayCarousel";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 relative overflow-hidden">
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

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in">
            🥳 Happy Birthday! 🥳
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-pink-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl md:text-2xl text-white/90 font-light">
            Celebrating another wonderful year of your amazing life!
          </p>
        </div>

        {/* Birthday Carousel */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
          <BirthdayCarousel />
        </div>

        {/* Footer message */}
        <div className="text-center mt-12">
          <p className="text-lg md:text-xl text-white/80 font-light">
            May this special day be filled with love, laughter, and unforgettable moments! 💕
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
