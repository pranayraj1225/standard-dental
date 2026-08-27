import { motion } from 'motion/react';
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <>
      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-brand-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800')] mix-blend-overlay opacity-10 object-cover" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl sm:text-5xl  font-bold text-white mb-6">Let's Take Care of Your Smile</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Have a dental concern? Talk to the team at Standard Dental Clinic and schedule your visit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#book-appointment" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-xl text-brand-navy bg-white hover:bg-slate-50 transition-colors shadow-lg">
              Book an Appointment
            </a>
            <a href="tel:+919948322667" className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-base font-bold rounded-xl text-white hover:bg-white/10 transition-colors">
              <Phone className="w-5 h-5 mr-2" />
              Call 099483 22667
            </a>
            <a href="https://wa.me/919948322667?text=Hello%20Standard%20Dental%20Clinic,%20I%20would%20like%20to%20book%20a%20dental%20appointment." target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-base font-bold rounded-xl text-white hover:bg-white/10 transition-colors">
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact Information & Map */}
      <section id="contact" className="py-20 lg:py-28 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Visit Standard Dental Clinic</h2>
            <div className="w-16 h-1 bg-brand-blue mx-auto rounded-full" />
          </div>

          <div className="lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16">
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-12 lg:mb-0 space-y-8"
            >
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <h3 className=" font-bold text-2xl text-brand-navy mb-6">Contact Details</h3>
                
                <div className="flex items-start gap-4 mb-6">
                  <MapPin className="w-6 h-6 text-brand-blue flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-slate-800 mb-1">Standard Dental Clinic</div>
                    <p className="text-slate-600 leading-relaxed">
                      240, Plot No. 24, H.No. 2-128,<br />
                      Gopal Nagar - Kompally Road,<br />
                      Machabollaram, Alwal,<br />
                      Hyderabad, Secunderabad,<br />
                      Telangana 500010
                    </p>
                    <div className="mt-3 text-sm text-brand-blue font-medium bg-blue-50 inline-block px-3 py-1 rounded-full">Conveniently located in Alwal, Hyderabad.</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 mb-8">
                  <Phone className="w-6 h-6 text-brand-blue flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-bold text-slate-800 mb-1">Phone</div>
                    <p className="text-slate-600 text-lg">099483 22667</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <a href="tel:+919948322667" className="flex items-center justify-center gap-2 px-4 py-3 bg-brand-navy text-white rounded-xl font-medium hover:bg-slate-800 transition-colors">
                    <Phone className="w-4 h-4" /> Call Now
                  </a>
                  <a href="https://wa.me/919948322667" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-4 py-3 bg-[#25D366] text-white rounded-xl font-medium hover:bg-[#128C7E] transition-colors">
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                  </a>
                  <a href="https://www.google.com/maps/search/?api=1&query=Standard+Dental+Clinic+Alwal+Hyderabad" target="_blank" rel="noreferrer" className="col-span-2 flex items-center justify-center gap-2 px-4 py-3 bg-brand-blue text-white rounded-xl font-medium hover:bg-blue-700 transition-colors">
                    <MapPin className="w-4 h-4" /> Get Directions
                  </a>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-6 h-6 text-brand-blue" />
                  <h3 className=" font-bold text-2xl text-brand-navy">Business Hours</h3>
                </div>
                
                <div className="space-y-3 text-slate-600">
                  <div className="flex justify-between pb-3 border-b border-slate-100">
                    <span className="font-medium text-slate-800">Monday</span>
                    <span>[Add Hours]</span>
                  </div>
                  <div className="flex justify-between pb-3 border-b border-slate-100">
                    <span className="font-medium text-slate-800">Tuesday</span>
                    <span>[Add Hours]</span>
                  </div>
                  <div className="flex justify-between pb-3 border-b border-slate-100">
                    <span className="font-medium text-slate-800">Wednesday</span>
                    <span>[Add Hours]</span>
                  </div>
                  <div className="flex justify-between pb-3 border-b border-slate-100">
                    <span className="font-medium text-slate-800">Thursday</span>
                    <span>[Add Hours]</span>
                  </div>
                  <div className="flex justify-between pb-3 border-b border-slate-100">
                    <span className="font-medium text-slate-800">Friday</span>
                    <span>[Add Hours]</span>
                  </div>
                  <div className="flex justify-between pb-3 border-b border-slate-100">
                    <span className="font-medium text-slate-800">Saturday</span>
                    <span>[Add Hours]</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-slate-800">Sunday</span>
                    <span>[Add Hours]</span>
                  </div>
                </div>
                <div className="mt-4 text-sm text-slate-500 italic flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  The clinic closes at 8 PM.
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-full min-h-[400px] bg-slate-200 rounded-2xl overflow-hidden relative border border-slate-100 shadow-sm"
            >
              {/* Replace src with real Google Maps embed if provided later */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m2!1s0x3bcb90c8a66a3dfb%3A0xb3280cb03597818e!2sStandard%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, position: 'absolute', inset: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Standard Dental Clinic Location Map"
              ></iframe>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
