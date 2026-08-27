import { Phone, MessageCircle, Calendar } from 'lucide-react';

export default function MobileBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] lg:hidden">
      <div className="flex items-center justify-around h-16 px-1">
        <a href="tel:+919948322667" className="flex flex-col items-center justify-center w-full h-full text-brand-navy hover:text-brand-blue transition-colors">
          <Phone className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-bold uppercase tracking-wide">Call</span>
        </a>
        
        <div className="w-[1px] h-8 bg-slate-200" />
        
        <a href="https://wa.me/919948322667?text=Hello%20Standard%20Dental%20Clinic,%20I%20would%20like%20to%20book%20a%20dental%20appointment." target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center w-full h-full text-[#25D366] hover:text-[#128C7E] transition-colors">
          <MessageCircle className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-bold uppercase tracking-wide">WhatsApp</span>
        </a>
        
        <div className="w-[1px] h-8 bg-slate-200" />
        
        <a href="#book-appointment" className="flex flex-col items-center justify-center w-full h-full text-brand-blue hover:text-blue-700 transition-colors">
          <Calendar className="w-5 h-5 mb-1" />
          <span className="text-[10px] font-bold uppercase tracking-wide">Book</span>
        </a>
      </div>
    </div>
  );
}
