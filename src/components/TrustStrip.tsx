import { Star, CheckCircle2, Shield, Heart } from 'lucide-react';

export default function TrustStrip() {
  return (
    <div className="bg-white border-y border-slate-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-x-0 md:divide-x divide-slate-100 text-brand-navy">
          
          <div className="flex flex-col items-center text-center px-4 mb-8 md:mb-0">
            <div className="flex text-yellow-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <div className="font-bold text-2xl">5.0</div>
            <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mt-1">6 Google Reviews</div>
          </div>

          <div className="flex flex-col items-center text-center px-4 mb-8 md:mb-0">
            <Shield className="w-6 h-6 text-brand-blue mb-2 hidden md:block opacity-0 h-0" />
            <div className="font-bold text-2xl">Dr. Arthi</div>
            <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mt-1">Highly Recommended</div>
          </div>

          <div className="flex flex-col items-center text-center px-4">
            <Heart className="w-6 h-6 text-brand-blue mb-2 hidden md:block opacity-0 h-0" />
            <div className="font-bold text-2xl">Painless</div>
            <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mt-1">Thoughtful Care</div>
          </div>

          <div className="flex flex-col items-center text-center px-4">
            <CheckCircle2 className="w-6 h-6 text-brand-blue mb-2 hidden md:block opacity-0 h-0" />
            <div className="font-bold text-2xl">Alwal</div>
            <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mt-1">Prime Location</div>
          </div>

        </div>
      </div>
    </div>
  );
}
