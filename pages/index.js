import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import Footer from '../components/footer';

export default function Home() {
  const { t, i18n } = useTranslation('common');
  const [showContent, setShowContent] = useState(false);
  const { locale } = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 1000);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    }, [i18n.language]);

  return (
    <>
      <Head>
        <title>
          {locale === 'ro'
            ? 'SEWCELS - Soluții inovatoare pentru un viitor sustenabil'
            : 'SEWCELS - Innovative Solutions for a Sustainable Future'}
        </title>
        <meta
          name="description"
          content={
            locale === 'ro'
              ? 'Soluții inovatoare în domeniul energiei, cercetării și dezvoltării pentru a sprijini tranziția către un viitor sustenabil.'
              : 'Innovative solutions in energy, research and development to support the transition to a sustainable future.'
          }
        />
        <meta property="og:title" content="SEWCELS" />
        <meta
          property="og:description"
          content={
            locale === 'ro'
              ? 'Consultanță, execuție și soluții inteligente pentru energie și cercetare în România.'
              : 'Consulting, execution and smart solutions for energy and research in Romania.'
          }
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sewcels.ro/" />
      </Head>
      <motion.div
        className="w-full px-4 sm:px-6 lg:px-8"
        initial={{ y: -80, opacity: 0 }}
        animate={showContent ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        <Navbar />
      </motion.div>
      <div className="relative h-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-100"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 z-0" />
        <motion.div
          className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={showContent ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Image
            src="/favicon-white.webp"
            alt="SEWCELS logo"
            width={200}
            height={200}
            className="w-[50vw] max-w-[200px] h-auto mb-24 sm:mb-48 lg:mb-64 object-contain"
            priority
          />
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-white max-w-xl">
            {t('home_title')}
          </h1>
          <hr className="w-[60%] max-w-xl border-t border-white opacity-50 mb-4 mx-auto" />
          <p className="text-base md:text-lg max-w-xl text-white">
            {t('home_description')}
          </p>
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={showContent ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <Link
              href="/services"
              className="inline-block font-semibold px-6 py-3 rounded-full border border-green-700 transition-colors duration-100 bg-white text-green-700 group hover:bg-[linear-gradient(90deg,_rgba(24,130,128,0.9)_0%,_rgba(24,130,128,0.9)_40%,_rgba(110,186,77,0.6)_100%)] hover:text-white"
            >
              {t('homepage_services_cta', { defaultValue: 'Descoperă serviciile noastre' })}
            </Link>
          </motion.div>
        </motion.div>
      </div>
      {/* Oportunități de finanțare section */}
      <div className="max-w-6xl mx-auto mt-12 px-4 py-12">
        <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
          Noi oportunități de finanțare
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Card for Fondul Modernizare Autoconsum */}
          <div
            className="bg-white rounded-lg shadow border border-green-700 p-16 flex flex-col justify-between relative overflow-hidden"
            style={{
              backgroundImage: 'url(/images/modernizare.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 z-0 rounded-lg" />
            <div className="relative z-10 flex flex-col justify-between h-full">
              <h3 className="text-3xl font-semibold text-white mb-3">{locale === 'ro' ? 'Fondul pentru Modernizare Autoconsum' : 'Self-Consumption Modernization Fund'}</h3>
              <p className="text-white text-justify mb-6">
                {locale === 'ro'
                  ? 'Sprijinirea investiţiilor în noi capacităţi de producere a energiei electrice produsă din surse regenerabile pentru autoconsum, aferent celui de-al II-lea apel bazat pe procedură de ofertare concurențială'
                  : 'Key instrument for the development and implementation of photovoltaic self-consumption systems.'}
              </p>
              <Link
                href="/fondul-modernizare-autoconsum"
                className="mb-2 inline-block font-semibold px-10 py-5 rounded-full border border-green-700 text-white bg-transparent hover:bg-gradient-to-r hover:from-[rgba(24,130,128,0.9)] hover:to-[rgba(110,186,77,0.6)] hover:text-white transition-colors duration-300 text-xl"
              >
                {locale === 'ro' ? 'Vezi detalii' : 'View details'}
              </Link>
            </div>
          </div>
          {/* Card for Grant Electric Up */}
          <div
            className="rounded-lg shadow border border-green-700 p-16 flex flex-col justify-between relative overflow-hidden"
            style={{
              backgroundImage: 'url(/images/e-up2.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-30 z-0 rounded-lg" />
            <div className="relative z-10 flex flex-col justify-between h-full">
              <h3 className="text-white text-3xl font-semibold mb-3">
                {locale === 'ro' ? 'Programul Electric Up 2' : 'Electric Up 2 Program'}
              </h3>
              <p className="text-white text-justify mb-6">
                Creşterea capacităţii de producere și stocare a energiei electrice din surse regenerabile cu o putere instalată
                cuprinsă între 27 kWp - 150 kWp pentru asigurarea consumului propriu și dezvoltarea electro-mobilității reale la
                nivel național prin creșterea numărului staţiilor de reîncărcare pentru vehicule electrice şi electrice hibrid plug-in,
                precum și dezvoltarea gradului de utitlizare a energiei din surse regenerabile în încălzire și răcire
              </p>
              <Link
                href="/electric-up2"
                className="mb-2 inline-block font-semibold px-10 py-5 rounded-full border border-green-700 text-white bg-transparent hover:bg-gradient-to-r hover:from-[rgba(24,130,128,0.9)] hover:to-[rgba(110,186,77,0.6)] hover:text-white transition-colors duration-300 text-xl"
              >
                {locale === 'ro' ? 'Vezi detalii' : 'View details'}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    },
  };
}