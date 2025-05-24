import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function ContactModal({ isOpen, onClose, defaultInterest = '', static: isStatic = false }) {
  const { locale } = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [interest, setInterest] = useState(defaultInterest);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === 'Escape') onClose();
    }
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }
    setInterest(defaultInterest);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isOpen, onClose, defaultInterest]);

  if (!isOpen && !isStatic) return null;

  const interestLabels = {
    efficiency: locale === 'ro' ? 'Consultanță pentru Eficiență Energetică' : 'Energy Efficiency Consulting',
    pv: locale === 'ro' ? 'Proiecte fotovoltaice' : 'Photovoltaic Projects',
    bess: locale === 'ro' ? 'Sisteme de stocare (BESS) și integrare hibridă' : 'BESS & Hybrid Integration',
    atr: locale === 'ro' ? 'Consultanță pentru obținere ATR' : 'Grid Access Permit (ATR) Consulting',
    anre: locale === 'ro' ? 'Avize și licențiere ANRE' : 'ANRE Licensing & Approvals',
    ppa: locale === 'ro' ? 'Proiecte PPA (Power Purchase Agreements)' : 'PPA (Power Purchase Agreements) Projects',
    funding: locale === 'ro' ? 'Fonduri Nerambursabile & Ajutoare de Stat' : 'Grants & State Aid',
    procurement: locale === 'ro' ? 'Consultanță pentru Achiziții Publice & Licitații' : 'Public Procurement & Tender Consulting',
    investors: locale === 'ro' ? 'Investitori & Intermediere Bancară' : 'Investors & Banking Intermediation',
    modernization_fund: locale === 'ro' ? 'Fondul pentru modernizare - autoconsum' : 'Modernization Fund - Self-consumption',
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    data.interest = interestLabels[data.interest] || data.interest;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        alert(locale === 'ro' ? 'Mesaj trimis cu succes!' : 'Message sent successfully!');
        e.target.reset();
        onClose();
      } else {
        alert(locale === 'ro' ? 'A apărut o eroare. Încearcă din nou.' : 'An error occurred. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert(locale === 'ro' ? 'A apărut o eroare.' : 'Something went wrong.');
    } finally {
      setSubmitting(false);
    }
  }

  const form = (
    <>
      <button
        aria-label="Close modal"
        onClick={onClose}
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
      >
        ✕
      </button>
      <h3 className="text-xl font-bold mb-4 text-blue-900">
        {locale === 'ro' ? 'Formular de Contact' : 'Contact Form'}
      </h3>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder={locale === 'ro' ? 'Nume complet' : 'Full name'}
          className="border border-gray-300 px-4 py-2 rounded"
          required
          disabled={submitting}
        />
        <input
          type="text"
          name="company"
          placeholder={locale === 'ro' ? 'Compania' : 'Company'}
          className="border border-gray-300 px-4 py-2 rounded"
          required
          disabled={submitting}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="border border-gray-300 px-4 py-2 rounded"
          required
          disabled={submitting}
        />
        <input
          type="tel"
          name="phone"
          placeholder={locale === 'ro' ? 'Număr de telefon' : 'Phone number'}
          className="border border-gray-300 px-4 py-2 rounded"
          required
          disabled={submitting}
        />
        <select
          name="interest"
          className="border border-gray-300 px-4 py-2 rounded bg-white text-gray-700"
          required
          disabled={submitting}
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
        >
          <option value="">{locale === 'ro' ? 'Selectează obiectul interesului' : 'Select area of interest'}</option>
          {Object.entries(interestLabels).map(([key, label]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>
        <textarea
          name="message"
          rows="4"
          placeholder={locale === 'ro' ? 'Mesajul tău...' : 'Your message...'}
          className="border border-gray-300 px-4 py-2 rounded"
          required
          disabled={submitting}
        />
        <label className="text-[15px] text-gray-700 flex items-start gap-2">
          <input type="checkbox" required className="mt-1" name="privacy" disabled={submitting} />
          <span>
            {locale === 'ro' ? (
              <>Sunteți de acord cu{' '}
                <a
                  href="/politica-confidentialitate"
                  className="underline text-blue-700 hover:text-blue-900 ml-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  politica noastră de confidențialitate
                </a>.
              </>
            ) : (
              <>You agree with our{' '}
                <a
                  href="/politica-confidentialitate"
                  className="underline text-blue-700 hover:text-blue-900 ml-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  privacy policy
                </a>.
              </>
            )}
          </span>
        </label>
        <button
          type="submit"
          disabled={submitting}
          className="inline-block font-semibold px-6 py-3 rounded-full border border-green-700 transition-colors duration-300 bg-gradient-to-r from-[#188282] to-[#6eba4d] text-white shadow-lg hover:from-[#166f6e] hover:to-[#5a9d38] focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {locale === 'ro' ? 'Trimite' : 'Send'}
        </button>
      </form>
    </>
  );

  if (isStatic) {
    return (
      <div className="bg-white rounded-lg max-w-lg w-full p-6 relative">
        {form}
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg max-w-lg w-full p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {form}
      </div>
    </div>
  );
}