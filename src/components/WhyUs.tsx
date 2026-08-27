import { motion } from 'motion/react';
import { HeartHandshake, ShieldCheck, Ear, Sparkles, Users } from 'lucide-react';

export default function WhyUs() {
  const cards = [
    {
      title: "Caring & Patient-Focused",
      description: "Patients appreciate the warm, caring approach and personal attention they receive.",
      icon: <HeartHandshake className="w-6 h-6 text-brand-blue" />
    },
    {
      title: "Comfort Comes First",
      description: "Reviews highlight comfortable and painless treatment experiences.",
      icon: <ShieldCheck className="w-6 h-6 text-brand-blue" />
    },
    {
      title: "Patient Listening",
      description: "Dr. Arthi is appreciated for patiently listening to patients and understanding their concerns.",
      icon: <Ear className="w-6 h-6 text-brand-blue" />
    },
    {
      title: "Clean Environment",
      description: "Patients specifically mention the clinic's clean and well-maintained environment.",
      icon: <Sparkles className="w-6 h-6 text-brand-blue" />
    },
    {
      title: "Friendly Team",
      description: "Patients describe the clinic staff as friendly and welcoming.",
      icon: <Users className="w-6 h-6 text-brand-blue" />
    }
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Patients Choose Standard Dental Clinic</h2>
          <div className="w-16 h-1 bg-brand-blue mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`bg-brand-light p-8 rounded-2xl hover:shadow-md transition-shadow border border-slate-50`}
            >
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold  mb-3">{card.title}</h3>
              <p className="text-slate-600 leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
