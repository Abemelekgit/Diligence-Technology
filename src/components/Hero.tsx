import { motion } from 'framer-motion';
import { useCallback } from 'react';
import { FiDownload, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import { content } from '../data/content';

const PDF_FILE = '/EXPRESSION OF INTEREST FOR COLLABORATION1.pdf';

export default function Hero() {
  const handleGetQuote = useCallback(() => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleDownload = useCallback(() => {
    const link = document.createElement('a');
    link.href = PDF_FILE;
    link.download = 'EXPRESSION OF INTEREST FOR COLLABORATION1.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-navy via-navy to-primary min-h-[85vh] flex items-center pt-20 pb-12 overflow-hidden">
      {/* Subtle animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            {content.company.metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full"
              >
                <span className="text-white/80 text-sm">{metric.label}: </span>
                <span className="text-white font-semibold text-sm">{metric.value}</span>
              </div>
            ))}
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
          >
            {content.hero.headline}
          </motion.h1>

          {/* Motto */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-primary text-lg sm:text-xl font-semibold mb-6 tracking-wide"
            style={{ color: '#87CEEB' }}
          >
            {content.company.motto}
          </motion.p>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-white/90 text-base sm:text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            {content.hero.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={handleGetQuote}
              aria-label="Get a quote from Diligence Technologies"
              className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-white text-navy px-8 py-4 rounded-lg hover:bg-gray-100 transition-all font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <span>{content.hero.primaryCTA}</span>
              <FiArrowRight className="text-xl" />
            </button>
            <button
              onClick={handleDownload}
              aria-label="Download portfolio PDF"
              className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary/90 transition-all font-semibold text-lg border-2 border-white/30 hover:border-white/50"
            >
              <FiDownload className="text-xl" />
              <span>{content.hero.secondaryCTA}</span>
            </button>
          </motion.div>

          {/* Quick trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-white/80 text-sm"
          >
            <div className="flex items-center space-x-2">
              <FiCheckCircle className="text-green-400" />
              <span>Government Trusted</span>
            </div>
            <div className="flex items-center space-x-2">
              <FiCheckCircle className="text-green-400" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <FiCheckCircle className="text-green-400" />
              <span>Global Partnerships</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
