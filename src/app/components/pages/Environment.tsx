import { AlertTriangle, ArrowRight } from 'lucide-react';
import type { PageType } from '../../App';

interface EnvironmentProps {
  onNavigate: (page: PageType) => void;
}

export function Environment({ onNavigate }: EnvironmentProps) {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16 anim-fade-up">
          
          <h2 className="spaceGrotesk text-4xl md:text-5xl font-black grad-text mb-2">
            Environment & Living Conditions
          </h2>
          <div className="h-1 w-20 grad-secondary mx-auto rounded-full"></div>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-10 mb-8 border border-[#E6B3FF]/20 backdrop-blur anim-fade-up delay-2">
          <p className="text-lg text-[#4A4A4A] leading-relaxed mb-8">
            The Princess Alice Adoption Home has served the community for{' '}
            <span className="text-[#3b4c3b] font-bold">96 years</span>. The facility includes bedrooms, kitchens, and outdoor spaces designed for care and comfort. However, years of limited maintenance have taken a toll.
          </p>

          <h3 className="spaceGrotesk text-2xl font-black text-[#D35400] mb-6 flex items-center gap-3">
            <AlertTriangle className="w-6 h-6" />
            Key Challenges
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-[#FBF7F3] rounded-xl p-6 flex items-start gap-4 card-hover border border-[#FFB3D9]/30">
              <div className="need-icon-box grad-accent flex-shrink-0 text-2xl">
                🎨
              </div>
              <div>
                <div className="font-bold text-[#D35400] mb-1">Peeling Paint</div>
                <p className="text-sm text-[#4A4A4A]">
                  Deteriorating walls throughout create an unwelcoming environment.
                </p>
              </div>
            </div>

            <div className="bg-[#FBF7F3] rounded-xl p-6 flex items-start gap-4 card-hover border border-[#D9B3FF]/30">
              <div className="need-icon-box grad-secondary flex-shrink-0 text-2xl">
                🌧️
              </div>
              <div>
                <div className="font-bold text-[#8B5BA7] mb-1">Roof Leaks → Mould</div>
                <p className="text-sm text-[#4A4A4A]">
                  Water ingress has led to mould growth, posing health risks.
                </p>
              </div>
            </div>

            <div className="bg-[#FBF7F3] rounded-xl p-6 flex items-start gap-4 card-hover border border-[#B3FFDB]/30">
              <div className="need-icon-box grad-primary flex-shrink-0 text-2xl">
                🌿
              </div>
              <div>
                <div className="font-bold text-[#3b4c3b] mb-1">Overgrown Garden</div>
                <p className="text-sm text-[#4A4A4A]">
                  Outdoor spaces are unusable, limiting children's play access.
                </p>
              </div>
            </div>

            <div className="bg-[#FBF7F3] rounded-xl p-6 flex items-start gap-4 card-hover border border-[#B3FFD9]/30">
              <div className="need-icon-box grad-accent flex-shrink-0 text-2xl">
                🪟
              </div>
              <div>
                <div className="font-bold text-[#3b4c3b] mb-1">Missing Curtains</div>
                <p className="text-sm text-[#4A4A4A]">
                  Lack of window coverings affects privacy and sleep quality.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => onNavigate('resources')}
            className="grad-secondary text-[#2D2D2D] px-8 py-4 rounded-full font-bold transition-all hover:scale-105 inline-flex items-center gap-2"
          >
            Next: Resources
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}