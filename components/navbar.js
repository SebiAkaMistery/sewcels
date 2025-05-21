import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const { locale, asPath, push } = useRouter();
  const switchLocale = locale === 'ro' ? 'en' : 'ro';

  return (
    <nav className="bg-white py-3 px-4 md:px-8 flex items-center justify-between">
      <div className="max-w-7xl w-full mx-auto flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="shrink-0">
          <img src="/logo-sewcels.png" alt="Sewcels Logo" className="h-10 w-auto" />
        </Link>

        {/* MENIU */}
        <div className="flex-1 flex justify-center items-center">
          <ul
            className="flex gap-10 items-center text-gray-800 font-medium text-[18px] tracking-wide"
            style={{ fontFamily: '"Google Sans", "Helvetica Neue", sans-serif' }}
          >
            <li className="group">
              <Link href="/about">
                <span className="relative text-gray-800 transition-transform ease-in-out duration-300 hover:scale-[1.5] hover:-translate-y-[2px] hover:text-green-700">
                  <span className="relative z-10">{locale === 'ro' ? 'Despre Noi' : 'About Us'}</span>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-green-700 via-green-500 to-lime-400 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            </li>
            <li className="group">
              <Link href="/services">
                <span className="relative text-gray-800 transition-transform ease-in-out duration-300 hover:scale-[1.5] hover:-translate-y-[2px] hover:text-green-700">
                  <span className="relative z-10">{locale === 'ro' ? 'Servicii' : 'Services'}</span>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-green-700 via-green-500 to-lime-400 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            </li>
            <li className="group">
              <Link href="/granturi-green">
                <span className="relative text-gray-800 transition-transform ease-in-out duration-300 hover:scale-[1.5] hover:-translate-y-[2px] hover:text-green-700">
                  <span className="relative z-10">{locale === 'ro' ? 'Oportunități de Finanțare Green' : 'Green Funding Opportunities'}</span>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-green-700 via-green-500 to-lime-400 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            </li>
            <li className="group">
              <Link href="/contact">
                <span className="relative text-gray-800 transition-transform ease-in-out duration-300 hover:scale-[1.5] hover:-translate-y-[2px] hover:text-green-700">
                  <span className="relative z-10">{locale === 'ro' ? 'Contact' : 'Contact'}</span>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-green-700 via-green-500 to-lime-400 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            </li>
          </ul>
        </div>

        {/* LIMBĂ */}
        <div className="shrink-0">
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
    </nav>
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