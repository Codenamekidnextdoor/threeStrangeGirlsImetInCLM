import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import type { PageType } from '../../App';

interface ResourcesProps {
  onNavigate: (page: PageType) => void;
}

export function Resources({ onNavigate }: ResourcesProps) {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16 anim-fade-up">
          <h2 className="spaceGrotesk text-4xl md:text-5xl font-black grad-text mb-2">
            Available Resources
          </h2>
          <div className="h-1 w-20 grad-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 anim-fade-up delay-2">
          <div className="bg-white rounded-2xl p-8 card-hover border border-[#FFB3D9]/20 backdrop-blur">
            <h3 className="spaceGrotesk text-xl font-black text-[#D35400] mb-5">
              What's Available
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#3b4c3b] flex-shrink-0" />
                <span className="text-[#4A4A4A]">On-site nursing care (Sister Thembi)</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#3b4c3b] flex-shrink-0" />
                <span className="text-[#4A4A4A]">2 transport vehicles for emergencies</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#3b4c3b] flex-shrink-0" />
                <span className="text-[#4A4A4A]">Outdoor equipment (currently unusable)</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-[#3b4c3b] flex-shrink-0" />
                <span className="text-[#4A4A4A]">Committed caregiving team</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 card-hover border border-[#D9B3FF]/20 backdrop-blur">
            <h3 className="spaceGrotesk text-xl font-black text-[#8B5BA7] mb-5">
              What's Missing
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <XCircle className="w-5 h-5 text-[#D35400] flex-shrink-0" />
                <span className="text-[#4A4A4A]">No formal education programmes</span>
              </li>
              <li className="flex items-center gap-3">
                <XCircle className="w-5 h-5 text-[#D35400] flex-shrink-0" />
                <span className="text-[#4A4A4A]">Limited hygiene products</span>
              </li>
              <li className="flex items-center gap-3">
                <XCircle className="w-5 h-5 text-[#D35400] flex-shrink-0" />
                <span className="text-[#4A4A4A]">Insufficient maintenance budget</span>
              </li>
              <li className="flex items-center gap-3">
                <XCircle className="w-5 h-5 text-[#D35400] flex-shrink-0" />
                <span className="text-[#4A4A4A]">No developmental stimulation tools</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => onNavigate('needs')}
            className="grad-primary text-[#2D2D2D] px-8 py-4 rounded-full font-bold transition-all hover:scale-105 inline-flex items-center gap-2"
          >
            Next: Needs Assessment
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}