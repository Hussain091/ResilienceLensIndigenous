import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pages = [
    { id: 'home', label: 'Home' },
    { id: 'resilience', label: 'What is Resilience?' },
    { id: 'stories', label: 'Stories & Examples' },
    { id: 'barriers', label: 'Barriers & Challenges' },
    { id: 'support', label: 'How to Support' },
    { id: 'resources', label: 'Resources' },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-amber-900 text-amber-50 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => handleNavClick('home')}
            className="text-xl font-bold tracking-wide hover:text-amber-200 transition-colors"
          >
            Indigenous Resilience
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-amber-800 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className="hidden md:flex space-x-1">
            {pages.map((page) => (
              <button
                key={page.id}
                onClick={() => handleNavClick(page.id)}
                className={`px-4 py-2 rounded-lg transition-all font-medium ${
                  currentPage === page.id
                    ? 'bg-amber-700 text-amber-50'
                    : 'text-amber-100 hover:bg-amber-800 hover:text-amber-50'
                }`}
              >
                {page.label}
              </button>
            ))}
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {pages.map((page) => (
              <button
                key={page.id}
                onClick={() => handleNavClick(page.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all font-medium ${
                  currentPage === page.id
                    ? 'bg-amber-700 text-amber-50'
                    : 'text-amber-100 hover:bg-amber-800 hover:text-amber-50'
                }`}
              >
                {page.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
