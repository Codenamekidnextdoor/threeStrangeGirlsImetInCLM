import { Clipboard, Focus, Shield, Check, ArrowRight } from 'lucide-react';
import type { PageType } from '../../App';

interface NeedsProps {
  onNavigate: (page: PageType) => void;
}

export function Needs({ onNavigate }: NeedsProps) {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16 anim-fade-up">
          <h2 className="spaceGrotesk text-4xl md:text-5xl font-black grad-text mb-2">
            Needs Assessment
          </h2>
          <div className="h-1 w-20 grad-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8 anim-fade-up delay-2">
          <div className="bg-white rounded-2xl p-8 card-hover border border-[#FFB3D9]/20 backdrop-blur">
            <h3 className="spaceGrotesk text-xl font-black text-[#D35400] mb-4 flex items-center gap-2">
              <Clipboard className="w-6 h-6" />
              Methods
            </h3>
            <div className="space-y-3">
              <div className="bg-[#FBF7F3] rounded-xl p-4 border border-[#FFB3D9]/20">
                <div className="font-bold text-[#D35400] text-sm mb-1">📝 Interviews</div>
                <p className="text-xs text-[#4A4A4A]">
                  In-depth conversations with caregivers, nurses, and managers
                </p>
              </div>
              <div className="bg-[#FBF7F3] rounded-xl p-4 border border-[#FFB3D9]/20">
                <div className="font-bold text-[#D35400] text-sm mb-1">👁️ Observation</div>
                <p className="text-xs text-[#4A4A4A]">
                  Direct observation of environment, routines, and conditions
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 card-hover border border-[#D9B3FF]/20 backdrop-blur">
            <h3 className="spaceGrotesk text-xl font-black text-[#8B5BA7] mb-4 flex items-center gap-2">
              <Focus className="w-6 h-6" />
              Focus Areas
            </h3>
            <div className="flex flex-wrap gap-2 mb-5">
              <span className="bg-[#FFB3D9]/20 text-[#D35400] text-xs px-3 py-1.5 rounded-full font-bold border border-[#FFB3D9]/30">
                Environment
              </span>
              <span className="bg-[#D9B3FF]/20 text-[#8B5BA7] text-xs px-3 py-1.5 rounded-full font-bold border border-[#D9B3FF]/30">
                Hygiene
              </span>
              <span className="bg-[#B3FFD9]/20 text-[#3b4c3b] text-xs px-3 py-1.5 rounded-full font-bold border border-[#B3FFD9]/30">
                Development
              </span>
              <span className="bg-[#B3FFDB]/20 text-[#3b4c3b] text-xs px-3 py-1.5 rounded-full font-bold border border-[#B3FFDB]/30">
                Caregiver
              </span>
            </div>

            <h3 className="spaceGrotesk text-lg font-black text-[#3b4c3b] mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Ethics
            </h3>
            <ul className="space-y-2 text-sm text-[#4A4A4A]">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#3b4c3b]" />
                Informed consent from all participants
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#3b4c3b]" />
                Confidentiality maintained
              </li>
            </ul>
          </div>
        </div>

        {/* Key Needs */}
        <div className="bg-white rounded-2xl p-8 md:p-10 mb-8 anim-fade-up delay-3 border border-[#E6B3FF]/20 backdrop-blur">
          <h3 className="spaceGrotesk text-2xl font-black text-[#3b4c3b] mb-6 text-center">
            Key Needs & Their Impact
          </h3>
          <div className="space-y-4">
            <div className="bg-[#FBF7F3] rounded-xl p-5 border border-[#FFB3D9]/20 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg cursor-pointer">
              <div className="flex items-center justify-between mb-3">
                <span className="font-bold text-[#D35400] text-sm">
                  Poor Physical Environment
                </span>
                <span className="text-xs bg-[#FFB3D9]/20 text-[#D35400] px-2.5 py-1 rounded-full font-bold">
                  High Priority
                </span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '90%' }}></div>
              </div>
              <p className="text-xs text-[#4A4A4A] mt-2">
                Peeling paint, roof leaks affect children's health directly.
              </p>
            </div>

            <div className="bg-[#FBF7F3] rounded-xl p-5 border border-[#D9B3FF]/20 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg cursor-pointer">
              <div className="flex items-center justify-between mb-3">
                <span className="font-bold text-[#8B5BA7] text-sm">Mould & Health Risks</span>
                <span className="text-xs bg-[#D9B3FF]/20 text-[#8B5BA7] px-2.5 py-1 rounded-full font-bold">
                  High Priority
                </span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '85%' }}></div>
              </div>
              <p className="text-xs text-[#4A4A4A] mt-2">
                Respiratory and immune risks for vulnerable infants.
              </p>
            </div>

            <div className="bg-[#FBF7F3] rounded-xl p-5 border border-[#B3FFD9]/20 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg cursor-pointer">
              <div className="flex items-center justify-between mb-3">
                <span className="font-bold text-[#3b4c3b] text-sm">
                  Lack of Developmental Stimulation
                </span>
                <span className="text-xs bg-[#B3FFD9]/20 text-[#3b4c3b] px-2.5 py-1 rounded-full font-bold">
                  Medium-High
                </span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '75%' }}></div>
              </div>
              <p className="text-xs text-[#4A4A4A] mt-2">
                No formal programmes limit cognitive and social growth.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => onNavigate('strengths')}
            className="grad-secondary text-[#2D2D2D] px-8 py-4 rounded-full font-bold transition-all hover:scale-105 inline-flex items-center gap-2"
          >
            Next: Strengths
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}