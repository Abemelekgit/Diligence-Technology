import { motion } from 'framer-motion';
import { FiDollarSign, FiAward } from 'react-icons/fi';
import { content } from '../data/content';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white" aria-label="About Diligence Technologies">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6 text-center">
            {content.about.title}
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 mb-10 leading-relaxed">
            {content.about.description.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {content.about.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background border-2 border-primary/20 rounded-xl p-6 hover:border-primary/40 transition-all hover:shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                    {index === 0 ? (
                      <FiDollarSign className="text-2xl text-primary" />
                    ) : (
                      <FiAward className="text-2xl text-primary" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-700">{highlight.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
