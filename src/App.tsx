import { useEffect, memo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Partnerships from './components/Partnerships';
import WhyChoose from './components/WhyChoose';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileCTA from './components/MobileCTA';
import { captureUTMParams } from './lib/utm';

function App() {
  useEffect(() => {
    // Capture UTM parameters on page load
    captureUTMParams();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Partnerships />
        <WhyChoose />
        <Contact />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}

export default memo(App);
