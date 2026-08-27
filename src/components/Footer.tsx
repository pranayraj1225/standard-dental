export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="lg:col-span-1">
            <div className=" font-bold text-2xl mb-4 text-white">
              STANDARD<br />
              <span className="text-sm tracking-widest text-brand-teal uppercase font-sans">Dental Clinic</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Thoughtful dental care with a patient-first approach.
            </p>
            <a href="#book-appointment" className="inline-flex items-center justify-center px-6 py-2.5 border border-brand-teal text-sm font-medium rounded-full text-brand-teal hover:bg-brand-teal hover:text-brand-navy transition-colors">
              Book Appointment
            </a>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-white tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-slate-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#treatments" className="text-slate-400 hover:text-white transition-colors">Treatments</a></li>
              <li><a href="#reviews" className="text-slate-400 hover:text-white transition-colors">Reviews</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold text-lg mb-6 text-white tracking-wide">Contact Information</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex gap-2">
                <strong className="text-white min-w-[70px]">Phone:</strong>
                <a href="tel:09948322667" className="hover:text-white transition-colors">099483 22667</a>
              </li>
              <li className="flex gap-2">
                <strong className="text-white min-w-[70px]">Address:</strong>
                <span className="leading-relaxed">
                  240, Plot No. 24, H.No. 2-128,<br />
                  Gopal Nagar - Kompally Road,<br />
                  Machabollaram, Alwal,<br />
                  Hyderabad, Telangana 500010
                </span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 text-center text-slate-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; 2026 Standard Dental Clinic. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
