import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Footer() {
  const { locale } = useRouter();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  return (
    <footer className="relative bg-[#142828] text-gray-300 py-10 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-white/10 pointer-events-none" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        
        <div className="flex flex-col items-start text-left">
          <a href="/">
            <Image
              src="/favicon-white.webp"
              alt="Sewcels Icon"
              width={120}
              height={120}
              className="mb-4"
            />
          </a>
          <span className="text-gray-200 italic text-sm">
            {locale === 'ro' ? 'Your business partner' : 'Your business partner'}
          </span>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">
            {locale === 'ro' ? 'Meniu scurt' : 'Quick Menu'}
          </h4>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-green-400 transition">{locale === 'ro' ? 'Despre Noi' : 'About Us'}</a></li>
            <li><a href="/services" className="hover:text-green-400 transition">{locale === 'ro' ? 'Servicii' : 'Services'}</a></li>
            <li><a href="/granturi-green" className="hover:text-green-400 transition">{locale === 'ro' ? 'Oportunități de Finanțare' : 'Funding Opportunities'}</a></li>
            <li><a href="/contact" className="hover:text-green-400 transition">{locale === 'ro' ? 'Contact' : 'Contact'}</a></li>
            <li><a href="/politica-confidentialitate" className="hover:text-green-400 transition">{locale === 'ro' ? 'Politica de Confidențialitate' : 'Privacy Policy'}</a></li>
          </ul>
        </div>

        {/* Coloana 3 - Contact */}
        <div>
          <h4 className="text-white font-semibold mb-3">
            {locale === 'ro' ? 'Contact' : 'Contact'}
          </h4>
          <p className="mb-1">{locale === 'ro' ? 'SEWCELS S.R.L.' : 'SEWCELS Ltd.'}</p>
          <p className="mb-1">Oradea, Bihor</p>
          <p className="mb-1">CUI: RO4042319</p>
          <p className="mb-1">
            <a href="mailto:office@sewcels.ro" className="hover:text-green-400 transition">office@sewcels.ro</a>
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">
            {locale === 'ro' ? 'Newsletter' : 'Newsletter'}
          </h4>
          <p className="mb-3">{locale === 'ro' ? 'Abonează-te la newsletter și te ținem la curent cu noutățile despre noi.' : 'Subscribe to our newsletter and stay updated with our latest news.'}</p>
          <form
            className="flex flex-col space-y-2"
            onSubmit={async (e) => {
              e.preventDefault();
              if (!email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
                alert(locale === 'ro' ? 'Introduceți un email valid.' : 'Please enter a valid email.');
                return;
              }
              try {
                const response = await fetch('/api/newsletter', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ email }),
                });

                if (response.ok) {
                  setSubmitted(true);
                  setEmail('');
                } else {
                  alert(locale === 'ro' ? 'A apărut o eroare la trimitere.' : 'An error occurred while submitting.');
                }
              } catch (error) {
                console.error('Newsletter error:', error);
                alert(locale === 'ro' ? 'Eroare de rețea.' : 'Network error.');
              }
            }}
          >
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-3 py-2 rounded bg-white text-black placeholder-gray-500 text-sm"
            />
            <button type="submit" className="bg-green-600 text-white text-sm px-4 py-2 rounded hover:bg-green-700 transition">
              {locale === 'ro' ? 'Abonează-te' : 'Subscribe'}
            </button>
            {submitted && (
              <p className="text-green-400 text-sm">
                {locale === 'ro'
                  ? 'Mulțumim pentru abonare!'
                  : 'Thank you for subscribing!'}
              </p>
            )}
          </form>
        </div>

      </div>
      <div className="text-center text-xs text-gray-500 mt-10">
        &copy; {new Date().getFullYear()} SEWCELS S.R.L. – {locale === 'ro' ? 'Toate drepturile rezervate.' : 'All rights reserved.'}
      </div>
    </footer>
  );
}