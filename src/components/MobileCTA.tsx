import { FiPhone, FiMail, FiDownload } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { useCallback } from 'react';
import { content } from '../data/content';

const PDF_FILE = '/EXPRESSION OF INTEREST FOR COLLABORATION1.pdf';

export default function MobileCTA() {
  const handleDownload = useCallback(() => {
    const link = document.createElement('a');
    link.href = PDF_FILE;
    link.download = 'EXPRESSION OF INTEREST FOR COLLABORATION1.pdf';
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    link.remove();
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t-2 border-gray-200 shadow-2xl">
      <div className="grid grid-cols-4 gap-1 p-2">
        {/* Call */}
        <a
          href={`tel:${content.company.contact.phone}`}
          className="flex flex-col items-center justify-center py-3 px-2 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors"
        >
          <FiPhone className="text-primary text-xl mb-1" />
          <span className="text-xs font-medium text-navy">Call</span>
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${content.company.contact.whatsapp.replace(/\+|\s/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-3 px-2 bg-[#25D366]/10 hover:bg-[#25D366]/20 rounded-lg transition-colors"
        >
          <FaWhatsapp className="text-[#25D366] text-xl mb-1" />
          <span className="text-xs font-medium text-navy">WhatsApp</span>
        </a>

        {/* Email */}
        <a
          href={`mailto:${content.company.contact.email}`}
          className="flex flex-col items-center justify-center py-3 px-2 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors"
        >
          <FiMail className="text-primary text-xl mb-1" />
          <span className="text-xs font-medium text-navy">Email</span>
        </a>

        {/* Download */}
        <button
          onClick={handleDownload}
          className="flex flex-col items-center justify-center py-3 px-2 bg-navy/10 hover:bg-navy/20 rounded-lg transition-colors"
        >
          <FiDownload className="text-navy text-xl mb-1" />
          <span className="text-xs font-medium text-navy">Portfolio</span>
        </button>
      </div>
    </div>
  );
}
