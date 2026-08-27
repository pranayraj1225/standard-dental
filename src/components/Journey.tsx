import { motion } from 'motion/react';
import { Calendar, MessageSquare, HeartPulse } from 'lucide-react';

export default function Journey() {
  const steps = [
    {
      num: "01",
      title: "Book Your Visit",
      desc: "Call or message the clinic to schedule an appointment.",
      icon: <Calendar className="w-6 h-6 text-brand-blue" />
    },
    {
      num: "02",
      title: "Discuss Your Concerns",
      desc: "Talk with the dentist about your dental concerns and treatment options.",
      icon: <MessageSquare className="w-6 h-6 text-brand-blue" />
    },
    {
      num: "03",
      title: "Receive Personalized Care",
      desc: "Get treatment based on your individual dental needs.",
      icon: <HeartPulse className="w-6 h-6 text-brand-blue" />
    }
  ];

  return (
    <section className="py-20 bg-brand-navy text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue opacity-20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-teal opacity-10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative text-center md:text-left"
            >
              {idx < 2 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-[1px] bg-white/10" />
              )}
              
              <div className="w-16 h-16 mx-auto md:mx-0 bg-white/5 rounded-2xl flex items-center justify-center mb-6 relative z-10 backdrop-blur-sm border border-white/10 shadow-lg">
                {step.icon}
              </div>
              
              <div className="text-brand-teal  font-bold text-xl mb-2">{step.num}</div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
