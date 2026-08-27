import React, { useState } from 'react';
import { CalendarDays, Phone, User, Clock, CheckCircle2, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

export default function BookAppointment() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <section id="book-appointment" className="py-20 lg:py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
          
          {/* Left Column - Information */}
          <div className="mb-12 lg:mb-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-teal text-[10px] font-bold tracking-widest text-brand-blue uppercase mb-6">
              <CalendarDays className="w-3.5 h-3.5" />
              Easy Scheduling
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-brand-navy leading-tight">
              Request Your Appointment
            </h2>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
              Take the first step towards a healthier, more confident smile. Fill out the form, and our team will get back to you promptly to confirm your visit.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: <Phone className="w-5 h-5" />,
                  title: "Quick Confirmation",
                  desc: "We will call you back within 24 hours to confirm."
                },
                {
                  icon: <Clock className="w-5 h-5" />,
                  title: "Flexible Timings",
                  desc: "Evening and weekend slots available upon request."
                },
                {
                  icon: <CheckCircle2 className="w-5 h-5" />,
                  title: "Painless Experience",
                  desc: "Comfortable, modern treatments with Dr. Arthi."
                }
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-brand-teal flex items-center justify-center text-brand-blue mr-4 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-brand-navy mb-1">{feature.title}</h4>
                    <p className="text-sm text-slate-500">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-brand-light p-8 lg:p-10 rounded-3xl shadow-xl shadow-brand-navy/5 border border-slate-100">
            {formStatus === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-brand-teal rounded-full flex items-center justify-center text-brand-blue mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4">Request Sent successfully!</h3>
                <p className="text-slate-600 mb-8">
                  Thank you for reaching out. Our team will contact you shortly to confirm your appointment time.
                </p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="bg-brand-navy text-white px-8 py-3.5 rounded-xl font-bold hover:bg-[#003d66] transition-colors"
                >
                  Book Another Visit
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-brand-navy mb-2">Full Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <User className="w-5 h-5" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      required
                      className="block w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl text-slate-800 focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all outline-none font-medium"
                      placeholder="Jane Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-brand-navy mb-2">Phone Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      required
                      className="block w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl text-slate-800 focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all outline-none font-medium"
                      placeholder="099483 22667"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="service" className="block text-sm font-bold text-brand-navy mb-2">Service Needed</label>
                    <div className="relative">
                      <select
                        id="service"
                        className="block w-full pl-4 pr-10 py-3.5 bg-white border border-slate-200 rounded-xl text-slate-800 focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all outline-none font-medium appearance-none cursor-pointer"
                      >
                        <option value="general">General Checkup</option>
                        <option value="cleaning">Teeth Cleaning</option>
                        <option value="whitening">Teeth Whitening</option>
                        <option value="pain">Tooth Pain / Root Canal</option>
                        <option value="implants">Implants / Crowns</option>
                        <option value="other">Other / Not Sure</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-slate-400">
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="date" className="block text-sm font-bold text-brand-navy mb-2">Preferred Date</label>
                    <div className="relative">
                      <input
                        type="date"
                        id="date"
                        required
                        className="block w-full pl-4 pr-4 py-3.5 bg-white border border-slate-200 rounded-xl text-slate-800 focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all outline-none font-medium"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-brand-navy mb-2">Message (Optional)</label>
                  <textarea
                    id="message"
                    rows={3}
                    className="block w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-slate-800 focus:ring-2 focus:ring-brand-blue focus:border-transparent transition-all outline-none font-medium resize-none"
                    placeholder="Briefly describe any specific issues or requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-brand-blue text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-brand-blue/20 hover:bg-blue-700 transition-colors flex items-center justify-center disabled:opacity-70"
                >
                  {formStatus === 'submitting' ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    'Request Appointment'
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
