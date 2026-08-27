import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[72px]">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img 
              src="/images.png" 
              alt="Standard Dental Clinic Logo" 
              className="h-12 w-auto object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.nextElementSibling?.classList.remove('hidden');
                target.nextElementSibling?.classList.add('flex');
              }}
            />
            <div className="hidden flex-col ml-2">
              <span className="font-bold text-brand-navy uppercase leading-tight tracking-tight text-lg">Standard</span>
              <span className="text-[10px] font-semibold text-brand-blue tracking-[0.2em] uppercase leading-none mt-0.5">Dental Clinic</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-8">
            <a href="#" className="text-[13px] font-medium text-slate-500 uppercase tracking-wider hover:text-brand-navy transition-colors border-b-2 border-transparent hover:border-brand-blue py-1">Home</a>
            <a href="#about" className="text-[13px] font-medium text-slate-500 uppercase tracking-wider hover:text-brand-navy transition-colors border-b-2 border-transparent hover:border-brand-blue py-1">About</a>
            <a href="#treatments" className="text-[13px] font-medium text-slate-500 uppercase tracking-wider hover:text-brand-navy transition-colors border-b-2 border-transparent hover:border-brand-blue py-1">Treatments</a>
            <a href="#why-us" className="text-[13px] font-medium text-slate-500 uppercase tracking-wider hover:text-brand-navy transition-colors border-b-2 border-transparent hover:border-brand-blue py-1">Why Us</a>
            <a href="#reviews" className="text-[13px] font-medium text-slate-500 uppercase tracking-wider hover:text-brand-navy transition-colors border-b-2 border-transparent hover:border-brand-blue py-1">Reviews</a>
            <a href="#contact" className="text-[13px] font-medium text-slate-500 uppercase tracking-wider hover:text-brand-navy transition-colors border-b-2 border-transparent hover:border-brand-blue py-1">Contact</a>
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center">
            <a href="#book-appointment" className="inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-semibold tracking-wide rounded-full text-white bg-brand-navy hover:bg-[#003d66] transition-colors">
              Book Appointment
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none"
              aria-label="Main menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <a href="#" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-brand-blue hover:bg-slate-50">Home</a>
            <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-brand-blue hover:bg-slate-50">About</a>
            <a href="#treatments" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-brand-blue hover:bg-slate-50">Treatments</a>
            <a href="#why-us" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-brand-blue hover:bg-slate-50">Why Us</a>
            <a href="#reviews" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-brand-blue hover:bg-slate-50">Reviews</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-brand-blue hover:bg-slate-50">Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}
