import type { PageType } from '../../App';

interface ConclusionProps {
  onNavigate: (page: PageType) => void;
}

export function Conclusion({ onNavigate }: ConclusionProps) {
  return (
    <section>
      <div className="max-w-5xl mx-auto px-6 py-28">
        <div className="text-center mb-12 anim-fade-up">
          <h2 className="spaceGrotesk text-5xl md:text-6xl font-black grad-text mb-4">
            Make a Difference
          </h2>
          <div className="h-1 w-20 grad-primary mx-auto rounded-full"></div>
        </div>

        <div className="bg-white rounded-2xl p-10 md:p-12 text-center anim-fade-up delay-2 card-hover border border-[#E6B3FF]/20 backdrop-blur">
          <blockquote className="text-3xl md:text-4xl font-black anim-fade-up delay-3 mb-8 italic">
            <span className="grad-text">
              "Small acts of kindness, when multiplied, can transform a child's world."
            </span>
          </blockquote>

          <p className="text-lg text-[#4A4A4A] leading-relaxed max-w-2xl mx-auto mb-8">
            The Princess Alice Adoption Home has been a haven for nearly a century. With targeted improvements—fresh paint, repaired roofs, clean spaces, books, and caregiver support—we can profoundly impact{' '}
            <span className="text-[#3b4c3b] font-bold">28 vulnerable children</span>.
          </p>

          <h3 className="spaceGrotesk text-2xl font-black text-[#D35400] mb-8">
            How You Can Help
          </h3>

          <div className="grid sm:grid-cols-3 gap-5 max-w-xl mx-auto mb-10">
            <div className="bg-[#FBF7F3] rounded-xl p-6 text-center card-hover border border-[#FFB3D9]/20">
              <div className="text-4xl mb-3">💝</div>
              <div className="spaceGrotesk font-black text-[#D35400]">Donate</div>
              <p className="text-xs text-[#4A4A4A] mt-2">Supplies, funds, or time</p>
            </div>

            <div className="bg-[#FBF7F3] rounded-xl p-6 text-center card-hover border border-[#D9B3FF]/20">
              <div className="text-4xl mb-3">📢</div>
              <div className="spaceGrotesk font-black text-[#8B5BA7]">Share</div>
              <p className="text-xs text-[#4A4A4A] mt-2">Spread this story</p>
            </div>

            <div className="bg-[#FBF7F3] rounded-xl p-6 text-center card-hover border border-[#B3FFD9]/20">
              <div className="text-4xl mb-3">🤲</div>
              <div className="spaceGrotesk font-black text-[#3b4c3b]">Volunteer</div>
              <p className="text-xs text-[#4A4A4A] mt-2">Share your skills</p>
            </div>
          </div>

          <p className="spaceGrotesk text-3xl md:text-4xl font-black grad-text mb-4">
            Together, we can build a brighter future. 🌟
          </p>

          <p className="text-[#4A4A4A] text-sm">
            Community Profile & Needs Analysis — University Project
          </p>
        </div>
      </div>
    </section>
  );
}