import { useRouter } from 'next/router';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Footer from '../components/footer';
import ContactModal from '../components/ContactModal';

export default function About() {
  const { locale } = useRouter();
  const [isContactOpen, setContactOpen] = useState(false);

  return (
    <div className="bg-white text-gray-800 py-12 px-6 md:px-20">
      <Head>
        <title>{locale === 'ro' ? 'Despre SEWCELS - Expertiză în energie și consultanță' : 'About SEWCELS - Expertise in Energy and Consulting'}</title>
        <meta
          name="description"
          content={
            locale === 'ro'
              ? 'Află cine suntem și cum oferim soluții strategice pentru tranziția verde și digitală. SEWCELS – partenerul tău în proiecte sustenabile.'
              : 'Discover who we are and how we deliver strategic solutions for the green and digital transition. SEWCELS – your partner in sustainable projects.'
          }
        />
        <meta property="og:title" content="SEWCELS - Despre noi" />
        <meta
          property="og:description"
          content={
            locale === 'ro'
              ? 'Consultanță, energie regenerabilă, fonduri nerambursabile, achiziții publice și mai mult – află valorile care ne ghidează.'
              : 'Consulting, renewable energy, funding, procurement and more – discover the values that guide us.'
          }
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta name="robots" content="index, follow" />
        {/* Canonical and robots meta for Vercel preview */}
        <link rel="canonical" href={`https://sewcels.ro${locale === 'en' ? '/en/about' : '/ro/about'}`} />
        {typeof window !== 'undefined' && window.location.hostname.includes('vercel.app') && (
          <meta name="robots" content="noindex, nofollow" />
        )}
      </Head>
           {/* Secțiune compactă – Prezentare SEWCELS pe imagine cu gradient */}
      <div className="relative mb-4 h-[380px] rounded-xl overflow-hidden shadow-lg">
        <Image
          src="/images/about-top.webp"
          alt={locale === 'ro' ? 'Consultanță și energie sustenabilă' : 'Consulting and sustainable energy'}
          layout="fill"
          objectFit="cover"
          objectPosition="center 60%"
          priority
        />
        <div
          className="absolute inset-0 backdrop-blur-[1.5px] px-6 py-8 sm:px-8 flex flex-col justify-start items-start h-full max-w-full overflow-hidden"
          style={{
            backgroundImage:
              'linear-gradient(90deg, rgba(24,130,128,0.9) 0%, rgba(24,130,128,0.9) 40%, rgba(110,186,77,0.6) 60%, rgba(255,255,255,0) 100%)',
          }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow max-w-full break-words text-center w-full">
            {locale === 'ro'
              ? 'SEWCELS - Consultanță strategică pentru o economie sustenabilă'
              : 'SEWCELS - Strategic Consulting for a Sustainable Economy'}
          </h2>
          <div className="text-white w-full max-w-full sm:max-w-[90%] lg:max-w-[60%] xl:max-w-[45%] break-words">
            <p className="text-xs sm:text-sm md:text-base leading-relaxed text-justify drop-shadow max-w-full break-words">
              {locale === 'ro'
                ? 'Suntem o companie de consultanță fondată din dorința de a aduce claritate, eficiență și rezultate concrete în domenii esențiale pentru tranziția verde și digitală a economiei. Ne adresăm atât sectorului public, cât și investitorilor privați care doresc să construiască proiecte durabile și bine finanțate. Oferim servicii integrate pentru energie regenerabilă, fonduri nerambursabile, achiziții publice și intermediere financiară. Echipa noastră combină expertiza practică cu înțelegerea profundă a cadrului instituțional și a cerințelor legislative, acționând ca un partener de încredere în toate etapele proiectelor.'
                : 'We are a consultancy firm founded out of the desire to bring clarity, efficiency and concrete results in key sectors for the green and digital economic transition. We serve both public institutions and private investors seeking to develop sustainable, well-financed projects. We provide integrated services in renewable energy, non-reimbursable funds, public procurement and financial intermediation. Our team combines hands-on experience with deep institutional and legislative knowledge, acting as a trusted partner throughout all project phases.'}
            </p>
          </div>
        </div>
      </div>

      {/* Secțiunea – Call to Action */}
      <section className="bg-white py-16 px-6 mb-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 flex items-center justify-center gap-3">
            💬 {locale === 'ro' ? 'Hai să discutăm despre proiectul tău!' : 'Let’s talk about your project!'}
          </h2>
          <p className="text-md md:text-lg mb-8 max-w-3xl mx-auto leading-relaxed text-gray-800 text-justify">
            {locale === 'ro'
              ? 'Ai o idee, o inițiativă sau un proiect în fază incipientă? Echipa noastră te poate ghida de la concept la implementare, cu soluții strategice și surse de finanțare potrivite. Hai să vedem împreună ce putem construi.'
              : 'Do you have an idea, an initiative or a project in early stages? Our team can guide you from concept to implementation, with strategic solutions and the right funding sources. Let’s discover together what we can build.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => setContactOpen(true)}
              className="inline-block font-semibold px-6 py-3 rounded-full border border-green-700 transition-colors duration-100 bg-white text-green-700 group hover:bg-[linear-gradient(90deg,_rgba(24,130,128,0.9)_0%,_rgba(24,130,128,0.9)_40%,_rgba(110,186,77,0.6)_100%)] hover:text-white"
              type="button"
            >
              <span
                className="btn-icon transform transition-transform duration-300 translate-x-0 group-hover:-translate-x-3 group-hover:opacity-100 opacity-0 absolute left-4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </span>
              <span className="btn-txt transition-colors duration-75 mx-2" data-text={locale === 'ro' ? 'Solicită o discuție' : 'Request a Call'}>
                {locale === 'ro' ? 'Solicită o discuție' : 'Request a Call'}
              </span>
            </button>
            <Link href="/services" passHref legacyBehavior>
              <a
                className="inline-block font-semibold px-6 py-3 rounded-full border border-green-700 transition-colors duration-100 bg-white text-green-700 group hover:bg-[linear-gradient(90deg,_rgba(24,130,128,0.9)_0%,_rgba(24,130,128,0.9)_40%,_rgba(110,186,77,0.6)_100%)] hover:text-white"
              >
                <span
                  className="btn-icon transform transition-transform duration-300 translate-x-0 group-hover:-translate-x-3 group-hover:opacity-100 opacity-0 absolute left-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                <span className="btn-txt transition-colors duration-75 mx-2" data-text={locale === 'ro' ? 'Descoperă serviciile' : 'Discover Services'}>
                  {locale === 'ro' ? 'Descoperă serviciile' : 'Discover Services'}
                </span>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Secțiunea – Valorile Noastre */}
      <section className="mb-4 py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-12">
            {locale === 'ro' ? 'Valorile Noastre' : 'Our Core Values'}
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {/* Card 1 */}
            <div
              className="p-6 rounded-xl shadow hover:shadow-lg transition duration-300 ease-in-out flex flex-row gap-4 items-start border border-gray-100 group hover:border-green-600"
              style={{
                backgroundImage: 'linear-gradient(90deg, rgba(24,130,128,0.3) 0%, rgba(24,130,128,0.3) 40%, rgba(110,186,77,0.2) 100%)'
              }}
            >
              <div className="text-green-600 text-4xl mt-1 transition-transform duration-300 ease-in-out group-hover:scale-110">
                ⚡
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  {locale === 'ro' ? 'Evaluare Energetică' : 'Energy Assessment'}
                </h3>
                <p className="text-gray-700 text-sm text-justify leading-[1.6] font-['DM Sans',sans-serif]">
                  {locale === 'ro'
                    ? 'Identificarea oportunităților de eficientizare energetică printr-o analiză detaliată a consumului și propunerea de soluții personalizate.'
                    : 'Identifying energy efficiency opportunities through detailed consumption analysis and proposing tailored solutions.'}
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className="p-6 rounded-xl shadow hover:shadow-lg transition duration-300 ease-in-out flex flex-row gap-4 items-start border border-gray-100 group hover:border-green-600"
              style={{
                backgroundImage: 'linear-gradient(90deg, rgba(24,130,128,0.3) 0%, rgba(24,130,128,0.3) 40%, rgba(110,186,77,0.2) 100%)'
              }}
            >
              <div className="text-4xl mt-1">🌱</div>
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  {locale === 'ro' ? 'Impact sustenabil și responsabilitate ESG' : 'Sustainable Impact and ESG Responsibility'}
                </h3>
                <p className="text-gray-700 text-sm text-justify">
                  {locale === 'ro'
                    ? 'Ne implicăm în inițiative care aduc valoare reală: proiecte verzi, digitalizare, investiții cu efect pozitiv asupra comunităților și mediului.'
                    : 'We are engaged in meaningful initiatives: green projects, digitalization, and investments with positive impact on communities and the environment.'}
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className="p-6 rounded-xl shadow hover:shadow-lg transition duration-300 ease-in-out flex flex-row gap-4 items-start border border-gray-100 group hover:border-green-600"
              style={{
                backgroundImage: 'linear-gradient(90deg, rgba(24,130,128,0.3) 0%, rgba(24,130,128,0.3) 40%, rgba(110,186,77,0.2) 100%)'
              }}
            >
              <div className="text-4xl mt-1">📈</div>
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">
                  {locale === 'ro' ? 'Profesionalism și excelență' : 'Professionalism & Excellence'}
                </h3>
                <p className="text-gray-700 text-sm text-justify">
                  {locale === 'ro'
                    ? 'Aplicăm cele mai bune practici, livrăm la standarde ridicate și construim soluții durabile pentru fiecare partener.'
                    : 'We apply best practices, deliver at high standards, and build lasting solutions for every partner.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secțiunea – Domenii de Expertiză */}
      <section className="mb-4 py-16 px-6 rounded-xl shadow-inner relative overflow-hidden bg-blue-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-illustration.webp"
            alt={locale === 'ro' ? 'Fundal SEWCELS' : 'SEWCELS background'}
            layout="responsive"
            width={1200}
            height={800}
            sizes="(max-width: 768px) 100vw, 1200px"
            className="opacity-90"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-blue-900/30 z-10"></div>
        <div className="max-w-6xl mx-auto text-center relative z-20 p-6 rounded-lg text-white">
          <div className="bg-white/80 backdrop-blur-sm border border-white/20 rounded-lg p-6 max-w-3xl mx-auto shadow-sm mb-12">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              {locale === 'ro' ? 'Domenii de Expertiză' : 'Fields of Expertise'}
            </h2>
            <p className="text-gray-900 text-justify text-sm leading-relaxed">
              {locale === 'ro'
                ? 'Activăm în domenii strategice ce susțin tranziția către o economie verde, digitală și sustenabilă. Combinăm expertiza tehnică, juridică și financiară pentru a genera rezultate măsurabile.'
                : 'We operate in strategic sectors that support the transition to a green, digital and sustainable economy. We combine technical, legal and financial expertise to deliver measurable outcomes.'}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left text-gray-800">
            {/* Domeniile */}
            {/* Domeniu 1 */}
            <div className="bg-white px-5 py-4 rounded-xl shadow hover:shadow-md transition flex flex-col gap-3">
              <div className="flex items-center gap-3 mb-2">
                <div className="text-2xl">☀️</div>
                <h3 className="font-semibold text-blue-800 text-lg">
                  {locale === 'ro' ? 'Energie regenerabilă' : 'Renewable Energy'}
                </h3>
              </div>
              <p className="text-sm text-justify leading-relaxed text-gray-700">
                {locale === 'ro'
                  ? 'Proiecte solare, BESS, avize tehnice, dimensionare, execuție, monitorizare.'
                  : 'Solar projects, BESS, permitting, sizing, implementation, monitoring.'}
              </p>
            </div>

            {/* Domeniu 2 */}
            <div className="bg-white px-5 py-4 rounded-xl shadow hover:shadow-md transition flex flex-col gap-3">
              <div className="flex items-center gap-3 mb-2">
                <div className="text-2xl">💰</div>
                <h3 className="font-semibold text-blue-800 text-lg">
                  {locale === 'ro' ? 'Finanțări nerambursabile' : 'Non-reimbursable Funding'}
                </h3>
              </div>
              <p className="text-sm text-justify leading-relaxed text-gray-700">
                {locale === 'ro'
                  ? 'PNRR, Electric-Up, Fondul de Modernizare, Start-Up Nation, granturi IMM.'
                  : 'PNRR, Electric-Up, Modernization Fund, Start-Up Nation, SME grants.'}
              </p>
            </div>

            {/* Domeniu 3 */}
            <div className="bg-white px-5 py-4 rounded-xl shadow hover:shadow-md transition flex flex-col gap-3">
              <div className="flex items-center gap-3 mb-2">
                <div className="text-2xl">📄</div>
                <h3 className="font-semibold text-blue-800 text-lg">
                  {locale === 'ro' ? 'Achiziții publice' : 'Public Procurement'}
                </h3>
              </div>
              <p className="text-sm text-justify leading-relaxed text-gray-700">
                {locale === 'ro'
                  ? 'Consultanță pentru licitații, documentații SEAP/SICAP, studii de fezabilitate.'
                  : 'Tender consulting, SEAP/SICAP documentation, feasibility studies.'}
              </p>
            </div>

            {/* Domeniu 4 */}
            <div className="bg-white px-5 py-4 rounded-xl shadow hover:shadow-md transition flex flex-col gap-3">
              <div className="flex items-center gap-3 mb-2">
                <div className="text-2xl">🏭</div>
                <h3 className="font-semibold text-blue-800 text-lg">
                  {locale === 'ro' ? 'Industrie și digitalizare' : 'Industry & Digitalization'}
                </h3>
              </div>
              <p className="text-sm text-justify leading-relaxed text-gray-700">
                {locale === 'ro'
                  ? 'Proiecte tehnologice și automatizări în producție și servicii.'
                  : 'Technology and automation projects in production and services.'}
              </p>
            </div>

            {/* Domeniu 5 */}
            <div className="bg-white px-5 py-4 rounded-xl shadow hover:shadow-md transition flex flex-col gap-3">
              <div className="flex items-center gap-3 mb-2">
                <div className="text-2xl">🤝</div>
                <h3 className="font-semibold text-blue-800 text-lg">
                  {locale === 'ro' ? 'Parteneriate & Investiții' : 'Partnerships & Investment'}
                </h3>
              </div>
              <p className="text-sm text-justify leading-relaxed text-gray-700">
                {locale === 'ro'
                  ? 'Business Angels, intermediere bancară, fonduri de investiții, PPA.'
                  : 'Business Angels, banking intermediation, investment funds, PPAs.'}
              </p>
            </div>

            {/* Domeniu 6 */}
            <div className="bg-white px-5 py-4 rounded-xl shadow hover:shadow-md transition flex flex-col gap-3">
              <div className="flex items-center gap-3 mb-2">
                <div className="text-2xl">🏛️</div>
                <h3 className="font-semibold text-blue-800 text-lg">
                  {locale === 'ro' ? 'Consultanță instituțională' : 'Institutional Consulting'}
                </h3>
              </div>
              <p className="text-sm text-justify leading-relaxed text-gray-700">
                {locale === 'ro'
                  ? 'Sprijin pentru UAT, școli, spitale, companii municipale în accesarea de fonduri și implementare.'
                  : 'Support for local governments, schools, hospitals, and utilities in funding and implementation.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactModal isOpen={isContactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}