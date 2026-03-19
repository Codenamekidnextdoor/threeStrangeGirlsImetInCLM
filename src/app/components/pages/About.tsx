import { Users, BarChart3, ArrowRight } from 'lucide-react';
import type { PageType } from '../../App';

interface AboutProps {
  onNavigate: (page: PageType) => void;
}

export function About({ onNavigate }: AboutProps) {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16 anim-fade-up">
          <div className="text-5xl mb-4">🌿</div>
          <h2 className="spaceGrotesk text-4xl md:text-5xl font-black grad-text mb-2">
            About the Community
          </h2>
          <div className="h-1 w-20 grad-primary mx-auto rounded-full"></div>
        </div>

        {/* People Card */}
        <div className="bg-white rounded-2xl p-8 md:p-10 mb-8 card-hover anim-fade-up delay-2 border border-[#E6B3FF]/20 backdrop-blur">
          <h3 className="spaceGrotesk text-2xl font-black text-[#D35400] mb-6 flex items-center gap-3">
            <Users className="w-6 h-6" />
            People at the Heart
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-[#FBF7F3] rounded-xl p-5 text-center border border-[#FFB3D9]/20">
              <div className="text-3xl mb-3">👶</div>
              <div className="spaceGrotesk text-lg font-bold text-[#D35400]">
                ±28 Children
              </div>
              <p className="text-sm text-[#4A4A4A] mt-2">
                Vulnerable children aged 1 month to 4 years receiving care
              </p>
            </div>

            <div className="bg-[#FBF7F3] rounded-xl p-5 text-center border border-[#D9B3FF]/20">
              <div className="text-3xl mb-3">🩺</div>
              <div className="spaceGrotesk text-lg font-bold text-[#8B5BA7]">
                Sister Thembi
              </div>
              <p className="text-sm text-[#4A4A4A] mt-2">
                Dedicated nurse providing on-site healthcare & monitoring
              </p>
            </div>

            <div className="bg-[#FBF7F3] rounded-xl p-5 text-center border border-[#B3FFD9]/20">
              <div className="text-3xl mb-3">🤝</div>
              <div className="spaceGrotesk text-lg font-bold text-[#3b4c3b]">
                Sandile & Joanne
              </div>
              <p className="text-sm text-[#4A4A4A] mt-2">
                Managers overseeing daily operations and wellbeing
              </p>
            </div>
          </div>
        </div>

        {/* Demographics */}
        <div className="bg-white rounded-2xl p-8 md:p-10 anim-fade-up delay-3 border border-[#E6B3FF]/20 backdrop-blur">
          <h3 className="spaceGrotesk text-2xl font-black text-[#8B5BA7] mb-6 flex items-center gap-3">
            <BarChart3 className="w-6 h-6" />
            Demographic Snapshot
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="bg-[#FBF7F3] rounded-xl p-4 text-center border border-[#B3D9FF]/20">
              <div className="text-xs uppercase tracking-widest font-bold mb-2 text-[#3b4c3b]">
                Population
              </div>
              <div className="spaceGrotesk text-2xl font-black text-[#2D2D2D]">
                4.8M
              </div>
            </div>

            <div className="bg-[#FBF7F3] rounded-xl p-4 text-center border border-[#B3D9FF]/20">
              <div className="text-xs uppercase tracking-widest font-bold mb-2 text-[#3b4c3b]">
                Life Exp.
              </div>
              <div className="spaceGrotesk text-2xl font-black text-[#2D2D2D]">
                64/69.6
              </div>
            </div>

            <div className="bg-[#FBF7F3] rounded-xl p-4 text-center border border-[#FFCCA3]/20">
              <div className="text-xs uppercase tracking-widest font-bold mb-2 text-[#D35400]">
                Fertility
              </div>
              <div className="spaceGrotesk text-2xl font-black text-[#2D2D2D]">
                2.21
              </div>
            </div>

            <div className="bg-[#FBF7F3] rounded-xl p-4 text-center border border-[#FFCCA3]/20">
              <div className="text-xs uppercase tracking-widest font-bold mb-2 text-[#D35400]">
                Infant Mortality
              </div>
              <div className="spaceGrotesk text-2xl font-black text-[#2D2D2D]">
                23.1/1k
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => onNavigate('environment')}
            className="grad-primary text-[#2D2D2D] px-8 py-4 rounded-full font-bold transition-all hover:scale-105 inline-flex items-center gap-2"
          >
            Next: Environment
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}