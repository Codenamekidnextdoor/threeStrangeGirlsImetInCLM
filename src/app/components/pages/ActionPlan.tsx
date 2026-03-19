import { Package, ArrowRight } from 'lucide-react';
import type { PageType } from '../../App';

interface ActionPlanProps {
  onNavigate: (page: PageType) => void;
}

export function ActionPlan({ onNavigate }: ActionPlanProps) {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16 anim-fade-up">
          <h2 className="spaceGrotesk text-4xl md:text-5xl font-black grad-text mb-2">
            Action Plan
          </h2>
          <div className="h-1 w-20 grad-secondary mx-auto rounded-full"></div>
        </div>

        {/* Goals */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 anim-fade-up delay-2">
          <div className="grad-primary rounded-2xl p-6 text-center card-hover text-[#2D2D2D]">
            <div className="text-3xl mb-3">🏠</div>
            <div className="spaceGrotesk font-black">Improve Environment</div>
          </div>

          <div className="grad-secondary rounded-2xl p-6 text-center card-hover text-[#2D2D2D]">
            <div className="text-3xl mb-3">📚</div>
            <div className="spaceGrotesk font-black">Support Development</div>
          </div>

          <div className="grad-accent rounded-2xl p-6 text-center card-hover text-[#2D2D2D]">
            <div className="text-3xl mb-3">🧴</div>
            <div className="spaceGrotesk font-black">Improve Hygiene</div>
          </div>

          <div className="grad-primary rounded-2xl p-6 text-center card-hover text-[#2D2D2D]">
            <div className="text-3xl mb-3">💚</div>
            <div className="spaceGrotesk font-black">Support Caregivers</div>
          </div>
        </div>

        {/* Activities */}
        <div className="bg-white rounded-2xl p-8 md:p-10 mb-8 anim-fade-up delay-3 border border-[#E6B3FF]/20 backdrop-blur">
          <h3 className="spaceGrotesk text-2xl font-black text-[#3b4c3b] mb-6">
            Planned Activities
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 bg-[#FBF7F3] rounded-xl p-4 border border-[#FFB3D9]/20">
              <div className="w-10 h-10 grad-primary rounded-lg flex items-center justify-center flex-shrink-0 text-lg">
                🎨
              </div>
              <div>
                <div className="font-bold text-[#D35400] text-sm">Paint Rooms</div>
                <p className="text-xs text-[#4A4A4A]">
                  Freshen walls with safe, child-friendly paint
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-[#FBF7F3] rounded-xl p-4 border border-[#D9B3FF]/20">
              <div className="w-10 h-10 grad-secondary rounded-lg flex items-center justify-center flex-shrink-0 text-lg">
                🔧
              </div>
              <div>
                <div className="font-bold text-[#8B5BA7] text-sm">Fix Roof</div>
                <p className="text-xs text-[#4A4A4A]">
                  Repair leaks to eliminate mould source
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-[#FBF7F3] rounded-xl p-4 border border-[#B3FFD9]/20">
              <div className="w-10 h-10 grad-accent rounded-lg flex items-center justify-center flex-shrink-0 text-lg">
                📚
              </div>
              <div>
                <div className="font-bold text-[#3b4c3b] text-sm">Educational Space</div>
                <p className="text-xs text-[#4A4A4A]">
                  Create stimulating visual learning areas
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-[#FBF7F3] rounded-xl p-4 border border-[#B3FFDB]/20">
              <div className="w-10 h-10 bg-[#B3FFDB]/20 rounded-lg flex items-center justify-center flex-shrink-0 text-lg">
                🌱
              </div>
              <div>
                <div className="font-bold text-[#3b4c3b] text-sm">Clean Garden</div>
                <p className="text-xs text-[#4A4A4A]">
                  Restore outdoor play areas for children
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-[#FBF7F3] rounded-xl p-4 border border-[#FFB3D9]/20">
              <div className="w-10 h-10 grad-primary rounded-lg flex items-center justify-center flex-shrink-0 text-lg">
                📖
              </div>
              <div>
                <div className="font-bold text-[#D35400] text-sm">Reading Corner</div>
                <p className="text-xs text-[#4A4A4A]">
                  Set up cosy space with age-appropriate books
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-[#FBF7F3] rounded-xl p-4 border border-[#D9B3FF]/20">
              <div className="w-10 h-10 grad-secondary rounded-lg flex items-center justify-center flex-shrink-0 text-lg">
                ☕
              </div>
              <div>
                <div className="font-bold text-[#8B5BA7] text-sm">Break Space</div>
                <p className="text-xs text-[#4A4A4A]">
                  Dedicated rest area for staff wellbeing
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-[#FBF7F3] rounded-xl p-4 border border-[#B3FFD9]/20">
              <div className="w-10 h-10 grad-accent rounded-lg flex items-center justify-center flex-shrink-0 text-lg">
                🪟
              </div>
              <div>
                <div className="font-bold text-[#3b4c3b] text-sm">Install Curtains</div>
                <p className="text-xs text-[#4A4A4A]">
                  Privacy and better sleep for children
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-[#FBF7F3] rounded-xl p-4 border border-[#B3FFDB]/20">
              <div className="w-10 h-10 bg-[#B3FFDB]/20 rounded-lg flex items-center justify-center flex-shrink-0 text-lg">
                🧹
              </div>
              <div>
                <div className="font-bold text-[#3b4c3b] text-sm">Deep Clean</div>
                <p className="text-xs text-[#4A4A4A]">
                  Thorough hygiene and facility cleaning
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="bg-white rounded-2xl p-8 md:p-10 anim-fade-up delay-4 border border-[#E6B3FF]/20 backdrop-blur">
          <h3 className="spaceGrotesk text-2xl font-black text-[#3b4c3b] mb-5 flex items-center gap-3">
            <Package className="w-6 h-6" />
            Resources Needed
          </h3>
          <div className="flex flex-wrap gap-3">
            <span className="grad-primary text-[#2D2D2D] px-4 py-2 rounded-full text-sm font-bold">
              🎨 Paint
            </span>
            <span className="grad-secondary text-[#2D2D2D] px-4 py-2 rounded-full text-sm font-bold">
              🌿 Gardening
            </span>
            <span className="grad-accent text-[#2D2D2D] px-4 py-2 rounded-full text-sm font-bold">
              📚 Books
            </span>
            <span className="grad-primary text-[#2D2D2D] px-4 py-2 rounded-full text-sm font-bold">
              🪟 Curtains
            </span>
            <span className="grad-secondary text-[#2D2D2D] px-4 py-2 rounded-full text-sm font-bold">
              🧹 Supplies
            </span>
            <span className="grad-accent text-[#2D2D2D] px-4 py-2 rounded-full text-sm font-bold">
              🧴 Hygiene
            </span>
            <span className="grad-primary text-[#2D2D2D] px-4 py-2 rounded-full text-sm font-bold">
              💝 Donations
            </span>
          </div>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => onNavigate('conclusion')}
            className="grad-accent text-[#2D2D2D] px-8 py-4 rounded-full font-bold transition-all hover:scale-105 inline-flex items-center gap-2"
          >
            Next: Get Involved
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}