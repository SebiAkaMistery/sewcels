import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';

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
        <meta name="robots" content={typeof window !== 'undefined' && window.location.hostname.includes('vercel.app') ? 'noindex, nofollow' : 'index, follow'} />
        <link
          rel="canonical"
          href={
            typeof window !== 'undefined' && window.location.hostname.includes('vercel.app')
              ? 'https://sewcels.ro/'
              : window?.location?.origin || 'https://sewcels.ro/'
          }
        />
      </Head>
      <motion.div
        className="w-full px-4 sm:px-6 lg:px-8"
        initial={{ y: -80, opacity: 0 }}
        animate={showContent ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        <Navbar />
      </motion.div>
      <div className="relative min-h-[600px] h-screen sm:h-[90vh] overflow-hidden">
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
          <img
            src="/favicon-white.png"
            alt="SEWCELS logo"
            className="w-[50vw] max-w-[200px] h-auto mb-24 sm:mb-48 lg:mb-64 object-contain"
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
              className="inline-block px-6 py-3 text-white font-semibold rounded-full transition duration-300 transform hover:scale-105"
              style={{
                background: 'linear-gradient(90deg, rgb(24, 130, 128) 0%, rgb(110, 186, 77) 100%)'
              }}
            >
              {t('homepage_services_cta', { defaultValue: 'Descoperă serviciile noastre' })}
            </Link>
          </motion.div>
        </motion.div>
      </div>
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