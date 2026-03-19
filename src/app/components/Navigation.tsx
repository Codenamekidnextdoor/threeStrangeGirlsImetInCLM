import { useState } from 'react';
import { Menu } from 'lucide-react';
import type { PageType } from '../App';
import logoSvg from '../../imports/princess-alice-logo.svg';

const pageLabels: Record<PageType, string> = {
  home: 'Home',
  about: 'About',
  environment: 'Environment',
  resources: 'Resources',
  needs: 'Needs',
  strengths: 'Strengths',
  action: 'Action Plan',
  conclusion: 'Get Involved'
};

interface NavigationProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pages: PageType[] = ['home', 'about', 'environment', 'resources', 'needs', 'strengths', 'action', 'conclusion'];

  const handleNavigate = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl border-b-2 border-[#E1BEE7]/30 bg-[#FFFBF5]/95">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => handleNavigate('home')}
          className="flex items-center gap-3 group"
        >
          <img 
            src={logoSvg} 
            alt="Logo" 
            className="w-12 h-12 anim-float"
          />
          <span className="baloo text-xl font-black hidden sm:block grad-text">
            Princess Alice
          </span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => handleNavigate(page)}
              className={`nav-link text-sm px-4 py-2 rounded-full text-[#4A4A4A] hover:text-[#2D2D2D] hover:bg-[#F8BBD0]/20 ${
                currentPage === page ? 'active-link' : ''
              }`}
            >
              {pageLabels[page]}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-[#F8BBD0]/20"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="w-5 h-5 text-[#D35400]" />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden flex flex-col bg-[#FFFBF5]/98 backdrop-blur border-t-2 border-[#E1BEE7]/30 px-6 py-3">
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => handleNavigate(page)}
              className={`text-left py-2.5 px-4 rounded-full text-[#4A4A4A] hover:bg-[#F8BBD0]/20 text-sm ${
                currentPage === page ? 'font-bold text-[#D35400]' : ''
              }`}
            >
              {pageLabels[page]}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}