import Head from 'next/head';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import ContactModal from '../components/ContactModal';

export default function Contact() {
  const { t } = useTranslation('common');
  const { locale } = useRouter();

  // SEO meta tags
  // Place near the top of returned JSX
  const seoHead = (
    <Head>
      <title>{locale === 'ro' ? 'Contact SEWCELS - Hai să discutăm' : 'Contact SEWCELS - Let’s Connect'}</title>
      <meta
        name="description"
        content={
          locale === 'ro'
            ? 'Contactează echipa SEWCELS pentru detalii despre proiectele tale, colaborări sau consultanță. Îți răspundem rapid și eficient.'
            : 'Get in touch with SEWCELS for project details, collaboration or consulting. We’ll get back to you promptly and efficiently.'
        }
      />
      <meta property="og:title" content="SEWCELS - Contact" />
      <meta
        property="og:description"
        content={
          locale === 'ro'
            ? 'Scrie-ne pentru consultanță în energie, fonduri nerambursabile și soluții sustenabile. Suntem aici să ajutăm!'
            : 'Write us for energy consulting, grants and sustainable solutions. We’re here to help!'
        }
      />
      <meta property="og:image" content="/og-image.jpg" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://sewcels.ro/contact" />
      <meta name="googlebot" content="noindex" />
    </Head>
  );

  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [interest, setInterest] = useState('');
  const [message, setMessage] = useState('');
  const [privacy, setPrivacy] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!privacy) {
      alert('Trebuie să fiți de acord cu politica de confidențialitate.');
      return;
    }
    const interestText = e.target.interest.options[e.target.interest.selectedIndex].text;
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, company, phone: e.target.phone.value, interest: interestText, message }),
    });
    const result = await res.json();
    alert(result.message);
  };

  return (
    <>
      {seoHead}
      <div className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact-banner.webp"
            alt="Contact banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <h1 className="relative z-10 text-4xl md:text-5xl text-white font-bold text-center">
          {locale === 'ro' ? 'Hai să discutăm!' : 'Let’s Connect!'}
        </h1>
      </div>
      <div className="relative min-h-screen p-8 flex items-center justify-center backdrop-blur-sm">
        {/* Optimized background image for illustration */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/contact-illustration.webp"
            alt="Contact illustration"
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>
        <div className="bg-[linear-gradient(90deg,_rgba(24,130,128,0.9),_rgba(110,186,77,0.6))] p-[1.5px] rounded-[16px] transition-all duration-300 ease-in-out hover:shadow-md z-10">
          <div className="bg-white max-w-6xl w-full flex overflow-hidden rounded-[13px]">
          <div className="w-1/2 p-10 flex flex-col justify-center items-center space-y-6 bg-transparent rounded-l-xl">
            <div className="space-y-4 text-sm text-gray-700 font-sans text-left">
              <h2 className="text-3xl font-bold text-blue-900">
                {locale === 'ro' ? 'Suntem aici pentru orice întrebare' : 'We are here for any question'}
              </h2>
              <p className="text-lg text-gray-700 whitespace-pre-line">
                {locale === 'ro'
                  ? 'Vrei să afli mai multe despre activitatea noastră și cum serviciile noastre pot deveni soluții eficiente pentru tine?\nLasă-ne un mesaj și promitem că îți răspundem în maximum 48 de ore – prietenos, clar și punctual.'
                  : 'Want to learn more about our work and how our services can become efficient solutions for you?\nLeave us a message and we promise to get back to you within 48 hours – friendly, clear, and to the point.'}
              </p>
              <div className="my-4 h-[2px] w-full bg-gradient-to-r from-[rgba(24,130,128,0.9)] to-[rgba(110,186,77,0.6)]" />
              <div>
                <h3 className="text-blue-900 font-semibold text-base">{locale === 'ro' ? 'Contact' : 'Contact'}</h3>
                <p>SEWCELS S.R.L.<br />Oradea, Str. Bicazului, Nr. 6, Bihor</p>
                <p>
                  <a href="tel:+40743634236" className="text-blue-700 hover:underline hover:text-blue-900 transition">Mob. +40743.634.236</a><br />
                  <a href="mailto:office@sewcels.ro" className="text-blue-700 hover:underline hover:text-blue-900 transition">office@sewcels.ro</a>
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/2 p-10 rounded-r-xl shadow-lg bg-white text-[rgb(34,38,37)] font-[DM Sans] text-[16px] leading-[27.2px] transition-all duration-300 ease overflow-hidden">
            <ContactModal static={true} />
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

// import DOAR aici jos
export async function getServerSideProps({ locale }) {
  const { serverSideTranslations } = await import('next-i18next/serverSideTranslations');
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}