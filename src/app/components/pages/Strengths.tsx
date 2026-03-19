import { ArrowRight } from 'lucide-react';
import type { PageType } from '../../App';

interface StrengthsProps {
  onNavigate: (page: PageType) => void;
}

export function Strengths({ onNavigate }: StrengthsProps) {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16 anim-fade-up">
          <h2 className="spaceGrotesk text-4xl md:text-5xl font-black grad-text mb-2">
            Strengths
          </h2>
          <div className="h-1 w-20 grad-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 anim-fade-up delay-2">
          <div className="bg-white rounded-2xl p-6 text-center card-hover border border-[#FFB3D9]/20 backdrop-blur">
            <div className="w-16 h-16 grad-primary rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
              ❤️
            </div>
            <h3 className="spaceGrotesk font-black mb-2 text-[#D35400]">
              Dedicated Staff
            </h3>
            <p className="text-sm text-[#4A4A4A]">
              Caregivers deeply committed despite limited resources.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center card-hover border border-[#D9B3FF]/20 backdrop-blur">
            <div className="w-16 h-16 grad-secondary rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
              🏠
            </div>
            <h3 className="spaceGrotesk font-black mb-2 text-[#8B5BA7]">
              Strong Care Environment
            </h3>
            <p className="text-sm text-[#4A4A4A]">
              Warm, familial atmosphere where children thrive.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center card-hover border border-[#B3FFD9]/20 backdrop-blur">
            <div className="w-16 h-16 grad-accent rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
              🤝
            </div>
            <h3 className="spaceGrotesk font-black mb-2 text-[#3b4c3b]">
              Willingness to Collaborate
            </h3>
            <p className="text-sm text-[#4A4A4A]">
              Staff eager to work with external support.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center card-hover border border-[#B3FFDB]/20 backdrop-blur">
            <div className="w-16 h-16 bg-[#B3FFDB]/20 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
              🏗️
            </div>
            <h3 className="spaceGrotesk font-black mb-2 text-[#3b4c3b]">
              Existing Infrastructure
            </h3>
            <p className="text-sm text-[#4A4A4A]">
              Solid building foundation ready for improvement.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 text-center card-hover border border-[#FFB3D9]/20 backdrop-blur">
            <div className="w-16 h-16 grad-primary rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
              🚗
            </div>
            <h3 className="spaceGrotesk font-black text-[#D35400] mb-2">
              Transport Access
            </h3>
            <p className="text-sm text-[#4A4A4A]">
              Two vehicles for medical emergencies and transport.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => onNavigate('action')}
            className="grad-primary text-[#2D2D2D] px-8 py-4 rounded-full font-bold transition-all hover:scale-105 inline-flex items-center gap-2"
          >
            Next: Action Plan
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}