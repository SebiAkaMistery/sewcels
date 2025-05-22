import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const { locale, asPath, push } = useRouter();
  const switchLocale = locale === 'ro' ? 'en' : 'ro';
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isHomepage = asPath === '/' || asPath === '/ro' || asPath === '/en';
      if (isHomepage) {
        const referenceElement = document.querySelector('.video-section') || document.querySelector('video');
        if (referenceElement) {
          const rect = referenceElement.getBoundingClientRect();
          setScrolled(rect.bottom <= 80);
        } else {
          setScrolled(window.scrollY > 150);
        }
      } else {
        setScrolled(window.scrollY > 50);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [asPath]);

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={
          scrolled
            ? { y: 0, opacity: 1, backgroundColor: 'rgba(31, 41, 55, 0.9)' }
            : { y: 0, opacity: 1, backgroundColor: '#ffffff' }
        }
        transition={{ duration: 1 }}
        className="py-3 px-4 md:px-8 flex items-center justify-between fixed top-0 left-0 right-0 z-50"
      >
      <div className="max-w-7xl w-full mx-auto flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="shrink-0 mr-10">
          <img
            src={scrolled ? '/logo-sewcels-white.png' : '/logo-sewcels.png'}
            alt="Sewcels Logo"
            className="h-10 w-auto"
          />
        </Link>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-700 focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <div className={`hidden md:flex items-center justify-between ${menuOpen ? 'hidden' : 'flex'}`}>
          {/* MENIU */}
          <div className="flex-1 flex justify-center items-center">
            <ul
              className={`flex justify-center w-full gap-10 items-center font-medium text-[18px] tracking-wide ${
                scrolled ? 'text-white' : 'text-gray-800'
              }`}
              style={{ fontFamily: '"Google Sans", "Helvetica Neue", sans-serif' }}
            >
              <li className="group">
                <Link href="/about">
                  <span className={`relative transition-transform ease-in-out duration-300 hover:scale-[1.5] hover:-translate-y-[2px] ${scrolled ? 'hover:text-lime-300' : 'hover:text-green-700'}`}>
                    <span className="relative z-10">{locale === 'ro' ? 'Despre Noi' : 'About Us'}</span>
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-green-700 via-green-500 to-lime-400 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
              <li className="group">
                <Link href="/services">
                  <span className={`relative transition-transform ease-in-out duration-300 hover:scale-[1.5] hover:-translate-y-[2px] ${scrolled ? 'hover:text-lime-300' : 'hover:text-green-700'}`}>
                    <span className="relative z-10">{locale === 'ro' ? 'Servicii' : 'Services'}</span>
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-green-700 via-green-500 to-lime-400 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
              <li className="group">
                <Link href="/granturi-green">
                  <span className={`relative transition-transform ease-in-out duration-300 hover:scale-[1.5] hover:-translate-y-[2px] ${scrolled ? 'hover:text-lime-300' : 'hover:text-green-700'}`}>
                    <span className="relative z-10">{locale === 'ro' ? 'Oportunități de Finanțare Green' : 'Green Funding Opportunities'}</span>
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-green-700 via-green-500 to-lime-400 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
              <li className="group">
                <Link href="/contact">
                  <span className={`relative transition-transform ease-in-out duration-300 hover:scale-[1.5] hover:-translate-y-[2px] ${scrolled ? 'hover:text-lime-300' : 'hover:text-green-700'}`}>
                    <span className="relative z-10">{locale === 'ro' ? 'Contact' : 'Contact'}</span>
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-green-700 via-green-500 to-lime-400 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden md:flex items-center justify-end ml-10">
            <button
              onClick={() => push(asPath, asPath, { locale: switchLocale })}
              className="text-sm"
            >
              <img
                src={switchLocale === 'ro' ? '/icons/flag-ro.svg' : '/icons/flag-en.svg'}
                alt={switchLocale === 'ro' ? 'Română' : 'English'}
                className="h-5 w-7"
              />
            </button>
          </div>
        </div>
      </div>
        {menuOpen && (
          <div className="fixed inset-0 z-40">
            <div
              className="absolute inset-0 bg-black bg-opacity-40"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="absolute top-0 left-0 h-full w-[70vw] max-w-sm bg-white shadow-xl p-6 flex flex-col space-y-6 text-gray-800 text-lg rounded-r-2xl"
            >
              <button
                onClick={() => setMenuOpen(false)}
                className="self-end text-gray-600 hover:text-black"
              >
                ✕
              </button>
              <Link href="/about"><div onClick={() => setMenuOpen(false)}>{locale === 'ro' ? 'Despre Noi' : 'About Us'}</div></Link>
              <Link href="/services"><div onClick={() => setMenuOpen(false)}>{locale === 'ro' ? 'Servicii' : 'Services'}</div></Link>
              <Link href="/granturi-green"><div onClick={() => setMenuOpen(false)}>{locale === 'ro' ? 'Oportunități de Finanțare Green' : 'Green Funding Opportunities'}</div></Link>
              <Link href="/contact"><div onClick={() => setMenuOpen(false)}>{locale === 'ro' ? 'Contact' : 'Contact'}</div></Link>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  push(asPath, asPath, { locale: switchLocale });
                }}
              >
                <img
                  src={switchLocale === 'ro' ? '/icons/flag-ro.svg' : '/icons/flag-en.svg'}
                  alt={switchLocale === 'ro' ? 'Română' : 'English'}
                  className="h-5 w-7"
                />
              </button>
            </motion.div>
          </div>
        )}
      </motion.nav>
      {/* Spacer to prevent navbar overlapping page content */}
      <div className="h-[72px] md:h-[72px]" />
    </>
  );
}


export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#1f2937] text-white py-8 px-4 mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-sm gap-4">
        <div className="text-center md:text-left">
          <p className="font-medium">SEWCELS S.R.L.</p>
          <p>&copy; {year} Toate drepturile rezervate.</p>
        </div>
        <div className="flex space-x-4">
          <a href="/about" className="hover:text-green-400 transition">Despre Noi</a>
          <a href="/services" className="hover:text-green-400 transition">Servicii</a>
          <a href="/granturi-green" className="hover:text-green-400 transition">Oportunități de Finanțare</a>
          <a href="/contact" className="hover:text-green-400 transition">Contact</a>
        </div>
      </div>
    </footer>
  );
}