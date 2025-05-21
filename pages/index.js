import { useTranslation } from 'next-i18next';
import Link from 'next/link';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <>
      <div className="relative h-[90vh] overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('home_title')}</h1>
          <p className="text-lg md:text-xl mb-6 max-w-3xl">{t('home_subtitle')}</p>
          <Link href="/contact">
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded text-white font-semibold transition">
              {t('contact_title')}
            </button>
          </Link>
        </div>
      </div>

      {/* Secțiune informativă despre energie verde */}
      <section className="bg-white py-20 px-6 text-gray-900">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">Economii pe termen lung</h3>
            <p>Beneficiezi de o scădere semnificativă a costurilor pentru energie electrică.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Un mediu mai sănătos</h3>
            <p>Mai puțină poluare înseamnă un mediu mai curat, mai sigur pentru generațiile viitoare.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Resurse nelimitate</h3>
            <p>Natura oferă resursele necesare pentru a ne bucura în continuare de confort.</p>
          </div>
        </div>
      </section>

      {/* Secțiune servicii și soluții */}
      <section className="bg-gray-100 py-20 px-6 text-gray-900">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold">Descoperă serviciile noastre!</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto text-center">
          <div className="p-6 bg-white shadow-md rounded">
            <h3 className="text-xl font-semibold mb-2">Soluții de finanțare</h3>
            <p>Identificăm programe de finanțare adecvate fiecărei soluții de eficientizare energetică și oferim întregul suport necesar.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded">
            <h3 className="text-xl font-semibold mb-2">Proiectare, Execuție, Implementare</h3>
            <p>Oferim un portofoliu complet: analiză, finanțare, implementare și mentenanță.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded">
            <h3 className="text-xl font-semibold mb-2">Soluții optime pentru energie verde</h3>
            <p>Ne ocupăm activ și depunem toate diligențele pentru găsirea și implementarea celor mai bune soluții.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps({ locale }) {
  const { serverSideTranslations } = await import('next-i18next/serverSideTranslations');
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}