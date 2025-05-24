import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const { locale, asPath, push } = useRouter();
  const switchLocale = locale === 'ro' ? 'en' : 'ro';
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);

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
          <Image
            src={scrolled ? '/logo-sewcels-white.webp' : '/logo-sewcels.webp'}
            alt="Sewcels Logo"
            width={120}
            height={40}
            priority
          />
        </Link>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`focus:outline-none ${menuOpen || scrolled ? 'text-white' : 'text-gray-700'}`}
          >
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
              <li className="group relative cursor-pointer">
                <Link href="/granturi-green">
                  <span className="flex items-center gap-1">
                    {locale === 'ro' ? 'Oportunități de Finanțare Green' : 'Green Funding Opportunities'}
                    <svg
                      className="w-3 h-3 mt-1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </Link>
                <ul className="absolute left-0 top-full mt-1 w-max bg-white opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300 z-20 px-0 py-2 flex flex-col gap-2 rounded-md shadow-md">
                  <li>
                    <motion.div whileHover={{ scale: 1.05 }} className="group">
                      <Link
                        href="/fondul-modernizare-autoconsum"
                        className="group inline-flex items-center gap-2 font-semibold px-6 py-1.5 rounded-full border border-green-700 text-black text-sm transition-colors duration-300 bg-transparent hover:bg-gradient-to-r hover:from-[#188282] hover:to-[#6eba4d] hover:text-white focus:outline-none outline-none shadow-none"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 transition-transform duration-300 ease-in-out transform scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M9 18l6-6-6-6" />
                        </svg>
                        {locale === 'ro' ? 'Fondul pentru Modernizare - Autoconsum' : 'Modernization Fund - Self-consumption'}
                      </Link>
                    </motion.div>
                  </li>
                  <li>
                    <motion.div whileHover={{ scale: 1.05 }} className="group">
                      <Link
                        href="/electric-up2"
                        className="group inline-flex items-center gap-2 font-semibold px-6 py-1.5 rounded-full border border-green-700 text-black text-sm transition-colors duration-300 bg-transparent hover:bg-gradient-to-r hover:from-[#188282] hover:to-[#6eba4d] hover:text-white focus:outline-none outline-none shadow-none"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 transition-transform duration-300 ease-in-out transform scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M9 18l6-6-6-6" />
                        </svg>
                        Electric Up 2
                      </Link>
                    </motion.div>
                  </li>
                </ul>
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
              <div>
                <div
                  onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
                  className="flex justify-between items-center cursor-pointer"
                >
                  <Link href="/granturi-green">
                    <div onClick={() => setMenuOpen(false)}>
                      {locale === 'ro' ? 'Oportunități de Finanțare Green' : 'Green Funding Opportunities'}
                    </div>
                  </Link>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileSubmenuOpen(!mobileSubmenuOpen);
                    }}
                    aria-label="Toggle submenu"
                    className="ml-2 text-gray-600 hover:text-black"
                  >
                    {mobileSubmenuOpen ? '−' : '+'}
                  </button>
                </div>
                {mobileSubmenuOpen && (
                  <div className="pl-4 mt-2">
                    <Link
                      href="/fondul-modernizare-autoconsum"
                      className="block px-4 py-2 text-gray-700 hover:bg-green-100"
                      onClick={() => setMenuOpen(false)}
                    >
                      {locale === 'ro' ? 'Fondul pentru Modernizare - Autoconsum' : 'Modernization Fund - Self-consumption'}
                    </Link>
                  </div>
                )}
              </div>
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