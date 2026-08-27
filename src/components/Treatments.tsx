import { motion } from 'motion/react';
import { Sparkles, Syringe, Stethoscope, Activity, Smile } from 'lucide-react';

export default function Treatments() {
  const treatments = [
    { name: "Teeth Cleaning", description: "Professional cleaning to maintain gum health and oral hygiene." },
    { name: "General Dentistry", description: "Comprehensive dental care for your everyday oral health needs." },
    { name: "Preventive Dentistry", description: "Proactive care to prevent cavities, enamel wear, and gum disease." },
    { name: "Tooth Extraction", description: "Safe and comfortable removal of problematic or damaged teeth." },
    { name: "Root Canal Treatment", description: "Treatment to save and restore severely infected or decayed teeth." },
    { name: "Restorative Dentistry", description: "Repairing and restoring the function and appearance of your teeth." },
    { name: "Cosmetic Dentistry", description: "Enhancing the visual appearance of your smile." },
    { name: "Family Dental Care", description: "Welcoming dental care for patients of all ages." }
  ];

  return (
    <section id="treatments" className="py-20 lg:py-28 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Dental Care for Your Everyday Needs</h2>
          <div className="w-16 h-1 bg-brand-blue mx-auto rounded-full" />
        </div>

        {/* Featured Treatment */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 bg-brand-navy text-white rounded-3xl overflow-hidden shadow-lg"
        >
          <div className="md:grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12 lg:p-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-[10px] font-bold tracking-widest uppercase mb-6">
                <Sparkles className="w-4 h-4" />
                Featured Treatment
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold mb-4 text-white">Refresh Your Smile</h3>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                One patient specifically mentioned having teeth whitening done and described the procedure as painless. Ask our team about teeth whitening and find out whether it is suitable for your dental needs.
              </p>
              <a href="#book-appointment" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-xl text-brand-navy bg-white hover:bg-slate-50 transition-colors">
                Enquire About Teeth Whitening
              </a>
            </div>
            <div className="hidden md:block h-full bg-slate-800 relative">
              <img 
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800" 
                alt="Smiling patient" 
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
            </div>
          </div>
        </motion.div>

        {/* Grid of Other Treatments */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatments.map((treatment, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow flex flex-col h-full"
            >
              <div className="w-10 h-10 bg-brand-light rounded-lg flex items-center justify-center mb-4">
                <Smile className="w-5 h-5 text-brand-blue" />
              </div>
              <h4 className="text-lg font-bold mb-2 text-brand-navy">{treatment.name}</h4>
              <p className="text-sm text-slate-600 mb-6 flex-grow">{treatment.description}</p>
              <a href="#book-appointment" className="text-brand-blue text-sm font-semibold hover:text-blue-800 flex items-center mt-auto">
                Enquire Now
                <span aria-hidden="true" className="ml-1">&rarr;</span>
              </a>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
