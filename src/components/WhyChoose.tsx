import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';
import { content } from '../data/content';

export default function WhyChoose() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-navy/5" aria-label="Why Choose Us">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            {content.whyChoose.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Experience, reliability, and excellence in every project
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-4 md:gap-6">
          {content.whyChoose.reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex items-start space-x-4 bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-all border border-transparent hover:border-primary/30"
            >
              <FiCheckCircle className="text-primary text-2xl flex-shrink-0 mt-1" />
              <p className="text-gray-700 leading-relaxed">{reason}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
