// pages/granturi-green.js

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Link from 'next/link';

export default function GranturiGreen() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>SEWCELS - Granturi Green</title>
        <meta name="description" content="Informații despre granturi nerambursabile și ajutoare de stat pentru investiții sustenabile. Consultanță și sprijin profesional oferit de SEWCELS." />
        <link rel="canonical" href="https://sewcels.ro/granturi-green" />
        <meta name="googlebot" content="index,follow" />
        <meta property="og:url" content="https://sewcels.ro/granturi-green" />
        <meta name="lastmod" content="2025-05-23" />
      </Head>
      <div className="bg-white text-gray-800 py-12 px-6 md:px-16">
        <h1 className="text-4xl font-bold text-blue-900 text-center mb-6">
          Granturi Green
        </h1>
        <p className="max-w-3xl mx-auto text-center text-lg text-gray-700 text-justify">
          Pagina dedicată programelor active de finanțare nerambursabilă și scheme de ajutor de stat pentru investiții sustenabile.
        </p>
        <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg flex flex-col items-center gap-6">
          {/* Card 1 */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              Fondul pentru Modernizare - Autoconsum
            </h2>
            <p className="text-gray-700 mb-4 text-justify">
              A fost lansat al doilea apel dedicat sprijinirii dezvoltării capacităților noi de generare a energiei electrice din surse regenerabile, destinate autoconsumului.
            </p>
          </div>
          <div>
            <Link
              href="/fondul-modernizare-autoconsum"
              className="inline-block font-semibold px-6 py-3 rounded-full border border-green-700 bg-gradient-to-r from-[#188282] to-[#6eba4d] text-white shadow-lg transition-colors duration-300 ease-in-out hover:from-[#166f6e] hover:to-[#5a9d38]"
            >
              Vezi detalii
            </Link>
          </div>
          {/* Card 2 */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Programul Electric-Up 2</h2>
            <p className="text-gray-700 mb-4 text-justify">
              A doua etapă a programului Electric-Up, care sprijină IMM-urile și sectorul HORECA să instaleze sisteme fotovoltaice și stații de încărcare pentru vehicule electrice.
            </p>
          </div>
          <div>
            <Link
              href="/electric-up2"
              className="inline-block font-semibold px-6 py-3 rounded-full border border-green-700 bg-gradient-to-r from-[#188282] to-[#6eba4d] text-white shadow-lg transition-colors duration-300 ease-in-out hover:from-[#166f6e] hover:to-[#5a9d38]"
            >
              Vezi detalii
            </Link>
          </div>
        </div>
        {/* Urmează să completăm cu conținut structurat */}
      </div>
    </>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}