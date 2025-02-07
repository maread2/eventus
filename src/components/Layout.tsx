import { useTranslation } from 'react-i18next';
import i18n from '../i18n/config';
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import logo from '../assets/logos/Лого Света_2160x3840.png';

const Layout = () => {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const { t } = useTranslation();

  const socialLinks = [
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@EventusTV',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/eventus.netanya',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/eventus.netanya',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: 'Telegram',
      url: 'https://t.me/eventusnetanya',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.51 3.67-.52.36-.99.53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.37-.49 1.02-.75 3.99-1.73 6.65-2.87 7.97-3.44 3.78-1.62 4.57-1.9 5.08-1.91.12 0 .37.03.54.17.14.12.18.28.2.45-.02.07-.02.13-.02.18z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-64 flex items-center justify-between relative">
          {/* Logo container with fixed position */}
          <div className="absolute left-8">
            <Link to="/" className="h-64 flex items-center bg-white px-4">
              <img src={logo} alt="Eventus Logo" className="h-full w-auto object-contain" />
            </Link>
          </div>
          
          {/* Navigation links centered */}
          <div className="flex-1 flex justify-center">
            <div className="hidden md:flex gap-16">
              <Link to="/" className="text-gray-700 hover:text-primary text-xl font-semibold" style={{ direction: i18n.language === 'he' ? 'rtl' : 'ltr' }}>
                {t('nav.home')}
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-primary text-xl font-semibold" style={{ direction: i18n.language === 'he' ? 'rtl' : 'ltr' }}>
                {t('nav.about')}
              </Link>
              <Link to="/events" className="text-gray-700 hover:text-primary text-xl font-semibold" style={{ direction: i18n.language === 'he' ? 'rtl' : 'ltr' }}>
                {t('nav.events')}
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-primary text-xl font-semibold" style={{ direction: i18n.language === 'he' ? 'rtl' : 'ltr' }}>
                {t('nav.contact')}
              </Link>
            </div>
          </div>

          {/* Language switcher with fixed position */}
          <div className="absolute right-8">
            <LanguageSwitcher />
          </div>
        </nav>
      </header>

      <main className="flex-grow">
        <div style={{ direction: i18n.language === 'he' ? 'rtl' : 'ltr' }}>
          <Outlet />
        </div>
      </main>

      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <p className="text-gray-400 text-lg" style={{ direction: i18n.language === 'he' ? 'rtl' : 'ltr' }}>
                {t('footer.address')}<br />
                <span className="text-gray-500">{t('footer.zip')}</span>
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-4" style={{ direction: i18n.language === 'he' ? 'rtl' : 'ltr' }}>{t('contact.follow')}</h3>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Privacy Policy Modal */}
          {isPrivacyOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
              <div className="bg-white text-gray-900 rounded-lg w-11/12 max-w-4xl max-h-[90vh] flex flex-col">
                <div className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-start">
                  <h2 className="text-2xl font-bold" style={{ direction: i18n.language === 'he' ? 'rtl' : 'ltr' }}>{t('privacy.title')}</h2>
                  <button
                    onClick={() => setIsPrivacyOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="overflow-y-auto bg-gray-50">
                  <div className="px-8 py-6 space-y-8" style={{ direction: i18n.language === 'he' ? 'rtl' : 'ltr' }}>
                    <p className="text-lg mb-6">{t('privacy.date')}</p>
                    <p className="mb-8 text-gray-700">{t('privacy.content.intro')}</p>
                    
                    {/* Data Collection */}
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4">{t('privacy.content.sections.collection.title')}</h3>
                      <p className="text-gray-700">{t('privacy.content.sections.collection.text')}</p>
                    </div>

                    {/* Data Use */}
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4">{t('privacy.content.sections.use.title')}</h3>
                      <p className="text-gray-700">{t('privacy.content.sections.use.text')}</p>
                    </div>

                    {/* Data Protection */}
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4">{t('privacy.content.sections.protection.title')}</h3>
                      <p className="text-gray-700">{t('privacy.content.sections.protection.text')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm" style={{ direction: i18n.language === 'he' ? 'rtl' : 'ltr' }}>
                {t('footer.copyright')}
              </p>
              <button
                onClick={() => setIsPrivacyOpen(true)}
                className="text-gray-400 hover:text-white text-sm mt-4 md:mt-0"
                style={{ direction: i18n.language === 'he' ? 'rtl' : 'ltr' }}
              >
                {t('privacy.title')}
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
