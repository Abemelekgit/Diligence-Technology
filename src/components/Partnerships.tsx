import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';
import { content } from '../data/content';

export default function Partnerships() {
  return (
    <section id="partnerships" className="py-16 md:py-24 bg-white" aria-label="Strategic Partnerships">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            {content.partnerships.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Authorized partnerships with industry-leading technology vendors worldwide
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-10">
          {content.partnerships.categories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-background rounded-xl p-6 md:p-8"
            >
              <h3 className="text-xl md:text-2xl font-bold text-navy mb-6 flex items-center">
                <FiAward className="text-primary mr-3" />
                {category.name}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {category.partners.map((partner, partnerIndex) => (
                  <a
                    key={partnerIndex}
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-primary/50 transition-all hover:shadow-md group cursor-pointer"
                  >
                    <div className="text-center">
                      <p className="font-semibold text-navy group-hover:text-primary transition-colors">
                        {partner.name}
                      </p>
                      {partner.badge && (
                        <span className="inline-block mt-2 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">
                          {partner.badge}
                        </span>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
