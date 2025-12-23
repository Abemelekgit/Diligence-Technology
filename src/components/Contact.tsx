import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  FiMail,
  FiPhone,
  FiMessageSquare,
  FiCheckCircle,
  FiDownload,
  FiCopy,
  FiLinkedin,
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { content } from '../data/content';
import { getStoredUTMParams } from '../lib/utm';
import { PDF_FILE, PDF_FILENAME, CLIPBOARD_NOTIFICATION_DURATION } from '../constants';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 characters'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    // Get stored UTM params
    const utmParams = getStoredUTMParams();

    // Prepare submission payload
    const payload = {
      ...data,
      utm: utmParams,
      timestamp: new Date().toISOString(),
    };

    // Log the payload (in production, this would be sent to your backend)
    console.log('Form Submission:', payload);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitted(true);
    reset();

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleCopyEmail = useCallback(() => {
    navigator.clipboard.writeText(content.company.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), CLIPBOARD_NOTIFICATION_DURATION);
  }, []);

  const handleCopyPhone = useCallback(() => {
    navigator.clipboard.writeText(content.company.contact.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), CLIPBOARD_NOTIFICATION_DURATION);
  }, []);

  const handleDownload = useCallback(() => {
    const link = document.createElement('a');
    link.href = PDF_FILE;
    link.download = PDF_FILENAME;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <section id="contact" className="py-16 md:py-24 bg-white" aria-label="Contact Us">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            {content.contact.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {content.contact.subtitle}
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">
                  Full Name *
                </label>
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
                  Email Address *
                </label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
                  placeholder="john@company.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-2">
                  Phone Number *
                </label>
                <input
                  {...register('phone')}
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
                  placeholder="+251 911 234 567"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-navy mb-2">
                  Company Name
                </label>
                <input
                  {...register('company')}
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2">
                  Your Message *
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <FiMessageSquare />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 border-2 border-green-500 rounded-lg p-4 flex items-center space-x-3"
                >
                  <FiCheckCircle className="text-green-500 text-2xl flex-shrink-0" />
                  <p className="text-green-700 font-medium">
                    Thank you! We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="bg-background rounded-xl p-8 space-y-6">
              <h3 className="text-2xl font-bold text-navy mb-6">Quick Contact</h3>

              {/* Copy Email */}
              <div>
                <p className="text-sm text-gray-600 mb-2">Email</p>
                <div className="flex items-center space-x-2">
                  <a
                    href={`mailto:${content.company.contact.email}`}
                    className="flex-1 flex items-center space-x-3 bg-white p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200"
                  >
                    <FiMail className="text-primary text-xl" />
                    <span className="text-navy font-medium">{content.company.contact.email}</span>
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="bg-white p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200"
                    title="Copy email"
                  >
                    {copiedEmail ? (
                      <FiCheckCircle className="text-green-500 text-xl" />
                    ) : (
                      <FiCopy className="text-gray-600 text-xl" />
                    )}
                  </button>
                </div>
              </div>

              {/* Copy Phone */}
              <div>
                <p className="text-sm text-gray-600 mb-2">Phone</p>
                <div className="flex items-center space-x-2">
                  <a
                    href={`tel:${content.company.contact.phone}`}
                    className="flex-1 flex items-center space-x-3 bg-white p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200"
                  >
                    <FiPhone className="text-primary text-xl" />
                    <span className="text-navy font-medium">{content.company.contact.phone}</span>
                  </a>
                  <button
                    onClick={handleCopyPhone}
                    className="bg-white p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-200"
                    title="Copy phone"
                  >
                    {copiedPhone ? (
                      <FiCheckCircle className="text-green-500 text-xl" />
                    ) : (
                      <FiCopy className="text-gray-600 text-xl" />
                    )}
                  </button>
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${content.company.contact.whatsapp.replace(/\+|\s/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-[#25D366] text-white p-4 rounded-lg hover:bg-[#20BA5A] transition-colors"
              >
                <FaWhatsapp className="text-2xl" />
                <span className="font-medium">Chat on WhatsApp</span>
              </a>

              {/* LinkedIn */}
              <a
                href={content.company.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-[#0077B5] text-white p-4 rounded-lg hover:bg-[#006399] transition-colors"
              >
                <FiLinkedin className="text-2xl" />
                <span className="font-medium">Connect on LinkedIn</span>
              </a>

              {/* Download Portfolio */}
              <button
                onClick={handleDownload}
                className="w-full flex items-center justify-center space-x-3 bg-navy text-white p-4 rounded-lg hover:bg-navy/90 transition-colors"
              >
                <FiDownload className="text-xl" />
                <span className="font-medium">Download Company Portfolio</span>
              </button>
            </div>

            {/* Address */}
            <div className="bg-primary/10 rounded-xl p-6">
              <h4 className="font-semibold text-navy mb-2">Our Office</h4>
              <p className="text-gray-700">{content.company.contact.address}</p>
              <p className="text-gray-600 text-sm mt-2">{content.company.contact.website}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
