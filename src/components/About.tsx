import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export default function About() {
  const features = [
    "Patient-focused approach",
    "Friendly and caring communication",
    "Clean clinical environment",
    "Comfortable treatment experience",
    "Clear attention to patient concerns"
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-12 lg:mb-0"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800" 
                alt="Modern, clean dental clinic interior" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Care That Starts With Listening</h2>
            
            <div className="space-y-4 text-lg text-slate-600 mb-8 leading-relaxed">
              <p>
                At Standard Dental Clinic, we believe good dental care begins with listening. Our approach focuses on understanding each patient's concerns, explaining treatment clearly and creating a comfortable environment throughout the visit.
              </p>
              <p>
                Patients appreciate the clinic for its friendly atmosphere, attentive care and thoughtful approach to treatment.
              </p>
            </div>

            <ul className="space-y-4 mb-10">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-center text-slate-700">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-teal flex items-center justify-center mr-3">
                    <Check className="w-4 h-4 text-brand-blue" />
                  </div>
                  <span className="font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <a href="#doctor" className="inline-flex items-center justify-center px-8 py-3.5 border border-slate-200 text-base font-bold rounded-xl text-brand-navy hover:bg-slate-50 transition-colors shadow-sm">
              Meet Our Doctor
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
