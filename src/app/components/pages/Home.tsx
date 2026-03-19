import { BookOpen, Heart } from 'lucide-react';
import type { PageType } from '../../App';

interface HomeProps {
  onNavigate: (page: PageType) => void;
}

export function Home({ onNavigate }: HomeProps) {
  return (
    <section>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 grad-primary opacity-10"></div>
        <div className="absolute top-20 right-10 w-72 h-72 grad-secondary opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-20 w-96 h-96 grad-accent opacity-15 rounded-full blur-3xl"></div>

        <div className="relative max-w-5xl mx-auto px-6 py-28 md:py-40 text-center bg-[#00000000]">
          

          <h1 className="text-5xl md:text-7xl font-black leading-tight anim-fade-up delay-2 grad-text mb-6" style={{ fontFamily: "'Fredoka One', cursive" }}>
            Princess Alice<br />Adoption Home
          </h1>

          <p className="text-lg md:text-xl text-[#4A4A4A] max-w-2xl mx-auto leading-relaxed anim-fade-up delay-3 mb-8">
            A residential care facility serving vulnerable children aged 1 month to 4 years in Johannesburg. Transforming lives through compassion and community support.
          </p>

          <blockquote className="text-2xl md:text-3xl font-bold anim-fade-up delay-4 mb-10 italic bg-[#00000000]"><span className="grad-text">"Every child deserves a safe, nurturing environment to grow and thrive."</span></blockquote>

          <div className="flex flex-wrap justify-center gap-4 anim-fade-up delay-5">
            <button
              onClick={() => onNavigate('about')}
              className="grad-primary text-[#2D2D2D] px-8 py-4 rounded-full font-bold transition-all hover:scale-105 flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              <BookOpen className="w-5 h-5" />
              Learn More
            </button>
            <button
              onClick={() => onNavigate('action')}
              className="grad-accent text-[#2D2D2D] px-8 py-4 rounded-full font-bold transition-all hover:scale-105 flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              <Heart className="w-5 h-5" />
              Get Involved
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="stat-card rounded-3xl p-6 text-center card-hover anim-fade-up delay-3 backdrop-blur">
            <div className="text-4xl mb-3">👶</div>
            <div className="baloo text-3xl font-black text-[#D35400]">±28</div>
            <div className="text-sm text-[#4A4A4A] mt-2">Children in care</div>
          </div>

          <div className="stat-card rounded-3xl p-6 text-center card-hover anim-fade-up delay-4 backdrop-blur">
            <div className="text-4xl mb-3">💛</div>
            <div className="baloo text-3xl font-black text-[#3b4c3b]">96</div>
            <div className="text-sm text-[#4A4A4A] mt-2">Years of service</div>
          </div>

          <div className="stat-card rounded-3xl p-6 text-center card-hover anim-fade-up delay-5 backdrop-blur">
            <div className="text-4xl mb-3">🏠</div>
            <div className="baloo text-3xl font-black text-[#3b4c3b]">1–4</div>
            <div className="text-sm text-[#4A4A4A] mt-2">Age range (years)</div>
          </div>

          <div className="stat-card rounded-3xl p-6 text-center card-hover anim-fade-up delay-6 backdrop-blur">
            <div className="text-4xl mb-3">📍</div>
            <div className="baloo text-3xl font-black text-[#8B5BA7]">Westcliff</div>
            <div className="text-sm text-[#4A4A4A] mt-2">Johannesburg, SA</div>
          </div>
        </div>
      </div>
    </section>
  );
}