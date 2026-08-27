import { motion } from 'motion/react';
import { Star, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-brand-light to-brand-teal/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20 lg:pt-24 lg:pb-28">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 text-center lg:text-left z-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal/70 text-[10px] font-bold tracking-widest text-brand-blue uppercase mb-6">
              STANDARD DENTAL CLINIC • ALWAL
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1] text-brand-navy">
              Comfortable Dental Care for Healthier, Confident Smiles
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Personalized dental care in Alwal with a patient-first approach, clear communication and a comfortable treatment experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a href="#book-appointment" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-xl text-white bg-brand-blue hover:bg-blue-700 transition-colors shadow-lg shadow-brand-blue/20">
                Book an Appointment
              </a>
              <a href="tel:+919948322667" className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-100 text-base font-bold rounded-xl text-brand-navy bg-white hover:border-brand-blue/30 transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                Call 099483 22667
              </a>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-6">
              <div className="flex flex-col items-center sm:items-start">
                <div className="flex text-yellow-400 text-sm mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-bold text-brand-navy">5.0 Google Rating</span>
              </div>
              <div className="h-8 w-[1px] bg-slate-200 hidden sm:block"></div>
              <div className="flex flex-col items-center sm:items-start hidden sm:flex">
                <span className="text-sm font-bold text-brand-navy">6+ Patient Reviews</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-tight font-semibold">Highly Recommended Locally</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 mt-12 lg:mt-0 relative z-10"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-[3/4] xl:aspect-[4/5] bg-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800" 
                alt="Professional dentist consulting with patient" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 sm:bottom-8 sm:-left-12 bg-white p-5 rounded-2xl shadow-xl border border-slate-100 max-w-xs hidden sm:block"
            >
              <div className="flex items-center gap-3 mb-1">
                <div className="w-10 h-10 rounded-full bg-brand-teal flex items-center justify-center">
                  <Star className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <div className="font-bold text-brand-navy text-base leading-tight">Patient-first care</div>
                  <div className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">Friendly • Clean • Comfortable</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
}
