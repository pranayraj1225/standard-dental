import { motion } from 'motion/react';

export default function Doctor() {
  return (
    <section id="doctor" className="py-20 lg:py-28 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Meet Your Dentist</h2>
          <div className="w-16 h-1 bg-brand-blue mx-auto rounded-full" />
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden"
        >
          <div className="md:flex">
            <div className="md:flex-shrink-0 md:w-[40%] bg-slate-100 relative min-h-[300px] md:min-h-full">
              <img 
                src="https://images.unsplash.com/photo-1594824436998-058a23ceb618?auto=format&fit=crop&q=80&w=800" 
                alt="Dr. Arthi, Dentist" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:p-12 md:w-[60%] flex flex-col justify-center">
              <div className="uppercase tracking-widest text-xs text-brand-blue font-bold mb-2">Dentist</div>
              <h3 className=" text-3xl md:text-4xl font-bold text-brand-navy mb-4">Dr. Arthi</h3>
              
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Dr. Arthi is appreciated by patients for her patient, polite and caring approach. Reviews highlight her ability to listen carefully, communicate comfortably and make patients feel at ease during treatment.
              </p>

              {/* Editable placeholder for clinic owner */}
              <div className="grid grid-cols-2 gap-y-6 gap-x-4 text-sm pt-6 border-t border-slate-100">
                <div>
                  <div className="text-slate-400 mb-1 uppercase tracking-wide text-xs font-semibold">Qualification</div>
                  <div className="font-medium text-slate-800">[Add Qualification]</div>
                </div>
                <div>
                  <div className="text-slate-400 mb-1 uppercase tracking-wide text-xs font-semibold">Experience</div>
                  <div className="font-medium text-slate-800">[Add Experience]</div>
                </div>
                <div className="col-span-2">
                  <div className="text-slate-400 mb-1 uppercase tracking-wide text-xs font-semibold">Registration</div>
                  <div className="font-medium text-slate-800">[Add Reg. Number]</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
