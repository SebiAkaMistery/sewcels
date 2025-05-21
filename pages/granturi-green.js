// pages/granturi-green.js

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function GranturiGreen() {
  const { t } = useTranslation();

  return (
    <div className="bg-white text-gray-800 py-12 px-6 md:px-16">
      <h1 className="text-4xl font-bold text-blue-900 text-center mb-6">
        Granturi Green
      </h1>
      <p className="max-w-3xl mx-auto text-center text-lg text-gray-700">
        Pagina dedicată programelor active de finanțare nerambursabilă și scheme de ajutor de stat pentru investiții sustenabile.
      </p>
      {/* Urmează să completăm cu conținut structurat */}
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