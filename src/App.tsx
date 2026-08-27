import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import About from './components/About';
import Doctor from './components/Doctor';
import WhyUs from './components/WhyUs';
import Treatments from './components/Treatments';
import Reviews from './components/Reviews';
import Journey from './components/Journey';
import BookAppointment from './components/BookAppointment';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileBottomBar from './components/MobileBottomBar';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-light font-sans text-slate-800">
      <Navbar />
      
      {/* 
        The MobileBottomBar is fixed at the bottom.
        We add pb-16 (4rem) padding on mobile to ensure the final content 
        (like footer links or copyright) is not hidden behind the bar.
      */}
      <main className="pb-16 lg:pb-0">
        <Hero />
        <TrustStrip />
        <About />
        <Doctor />
        <WhyUs />
        <Treatments />
        <Reviews />
        <Journey />
        <BookAppointment />
        <Contact />
        <Footer />
      </main>

      <MobileBottomBar />
    </div>
  );
}
