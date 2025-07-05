import React, { useState } from 'react';
import { Gift } from 'lucide-react';

const MysteryGiftBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const poem = `In the code of this universe, 
We met in hevenly realm,
We laughed together, shared humor too.
Our ambitions align, our aspirations too,
You fear to dive in, as I fear flaws anew.
I know your love, your ambition, as I love you,
Your voice, my solace, helped me move through.
You inspire my poetry, let me write for you,
You wake me early, with dreams so true.
You keep me awake in sleepless nights,
You perfect my life, in all its lights.
Let me be the reason for your every delight,
My life devoted to you, in day and night.
I dream of you with desperation, every time,
Your voice, my melody, in every rhyme.
Proposing in paradox, my love so prime,
In the syntax of my heart, you are the line.
In this code of love, you are my choice,
Your laughter, my debug, your voice, my rejoice.
In the binary of dreams, you are the one,
Together, forever, under moon and sun.
I compile my thoughts, they lead to you,
In this algorithm of life, our love is true.
Your voice, the melody of my keyboard's song,
In this infinite loop, where we belong.
So here I propose, in this code so pure,
With you, my love, I am always sure.
A paradox of love, in every byte,
Together, forever, in the day and night.`;

  return (
    <div className="relative flex flex-col items-center justify-center">
      {!isOpen ? (
        <div 
          onClick={() => setIsOpen(true)}
          className="cursor-pointer transform transition-all duration-300 hover:scale-110 hover:rotate-3"
        >
          <div className="relative">
            {/* Gift box */}
            <p className="text-white/90 text-center mt-4 font-medium animate-bounce">
              Tap to open your special gift! 🎁
            </p>
            <div className="w-50 h-18 bg-gradient-to-br from-red-500 to-red-600 rounded-lg shadow-xl border-4 border-red-700 text-center flex items-center justify-center">
              <Gift className="w-18 h-18 text-white flex items-center justify-center" />
            </div>
          </div>
          
        </div>
      ) : (
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-8 max-w-2xl shadow-2xl border border-white/30 animate-fade-in">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-purple-800 mb-2">💝 A Special Poem For You 💝</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="text-purple-900 leading-relaxed font-medium whitespace-pre-line text-center text-sm md:text-base">
            {poem}
          </div>
          
          <div className="text-center mt-6">
            <button 
              onClick={() => setIsOpen(false)}
              className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg"
            >
              Close Gift 💖
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MysteryGiftBox;