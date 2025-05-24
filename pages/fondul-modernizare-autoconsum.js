import Head from 'next/head';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function FondulModernizareAutoconsum() {
  const { locale } = useRouter();

  return (
    <>
      <Head>
        <title>
          {locale === 'ro'
            ? 'Fondul pentru Modernizare - Surse regenerabile și stocarea energiei'
            : 'Modernization Fund - Renewable Sources and Energy Storage'}
        </title>
        <meta
          name="description"
          content={
            locale === 'ro'
              ? 'Sprijinirea investițiilor în capacități noi de producere a energiei electrice din surse regenerabile pentru autoconsum prin Fondul pentru Modernizare.'
              : 'Supporting investments in new capacities for electricity production from renewable sources for self-consumption through the Modernization Fund.'
          }
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className="max-w-4xl mx-auto px-6 py-12 font-sans text-gray-900 leading-relaxed font-inter">
        <h1 className="text-3xl font-semibold mb-4 text-center">
          {locale === 'ro'
            ? 'FONDUL PENTRU MODERNIZARE - PROGRAMUL-CHEIE 1: SURSE REGENERABILE DE ENERGIE ȘI STOCAREA ENERGIEI'
            : 'MODERNIZATION FUND - KEY PROGRAM 1: RENEWABLE ENERGY SOURCES AND ENERGY STORAGE'}
        </h1>

        <h2 className="text-xl font-medium mb-2 text-center">
          {locale === 'ro'
            ? 'Sprijinirea investițiilor în noi capacități de producere a energiei electrice produsă din surse regenerabile pentru AUTOCONSUM'
            : 'Supporting investments in new capacities for electricity production from renewable sources for SELF-CONSUMPTION'}
        </h2>

        <h3 className="text-lg font-normal mb-6 text-center text-gray-700">
          {locale === 'ro'
            ? 'Perioada de depunere a proiectelor este 22 mai 2025 – 22 august 2025'
            : 'Project submission period is May 22, 2025 – August 22, 2025'}
        </h3>

        <section className="space-y-6 text-justify">
          <p>
            {locale === 'ro'
              ? `Ministerul Energiei anunță lansarea celui de-al doilea apel de proiecte prin Fondul pentru Modernizare, destinat sprijinirii investițiilor în capacități noi de producere a energiei electrice din surse regenerabile pentru autoconsum. Apelul, bazat pe ofertare concurențială, se adresează operatorilor economici care doresc să dezvolte proiecte sustenabile cu impact asupra independenței energetice și reducerii emisiilor de carbon.`
              : `The Ministry of Energy announces the launch of the second project call through the Modernization Fund, aimed at supporting investments in new capacities for electricity production from renewable sources for self-consumption. The call, based on competitive tendering, targets economic operators wishing to develop sustainable projects impacting energy independence and carbon emission reduction.`}
          </p>
          <p className="mt-4">
            {locale === 'ro'
              ? (
                  <>
                    Extras din comunicatul oficial al Ministerului Energiei:{" "}
                    <a
                      href="https://energie.gov.ro/ministerul-energiei-anunta-deschiderea-unui-nou-program-de-sprijin-pentru-industria-romaneasca-310-milioane-de-euro-pentru-sprijinirea-investitiilor-in-capacitati-de-productie-a-energiei-din-surse-re/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      Comunicatul oficial
                    </a>
                  </>
                )
              : (
                  <>
                    Extract from the official communication of the Ministry of Energy:{" "}
                    <a
                      href="https://energie.gov.ro/ministerul-energiei-anunta-deschiderea-unui-nou-program-de-sprijin-pentru-industria-romaneasca-310-milioane-de-euro-pentru-sprijinirea-investitiilor-in-capacitati-de-productie-a-energiei-din-surse-re/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      Official Communication
                    </a>
                  </>
                )}
          </p>
        </section>
        <section className="mt-10 space-y-4 text-justify">
          <h2 className="text-2xl font-semibold">{locale === 'ro' ? 'Valoarea finanțării nerambursabile' : 'Non-reimbursable Funding Amount'}</h2>
          <ul className="list-disc list-inside">
            <li>{locale === 'ro' ? 'Maxim 450.000 euro/MW pentru capacități de producție de până la 5MW inclusiv' : 'Maximum €450,000/MW for production capacities up to and including 5MW'}</li>
            <li>{locale === 'ro' ? 'Maxim 360.000 euro/MW pentru capacități de producție de peste 5MW' : 'Maximum €360,000/MW for production capacities above 5MW'}</li>
            <li>{locale === 'ro' ? 'Tip ajutor: Procedura de ofertare concurențială' : 'Aid type: Competitive tendering procedure'}</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">{locale === 'ro' ? 'Cine poate accesa finanțarea' : 'Who can access the funding'}</h2>
          <ul className="list-disc list-inside">
            <li>{locale === 'ro' ? 'Microîntreprinderile' : 'Microenterprises'}</li>
            <li>{locale === 'ro' ? 'Întreprinderile mici' : 'Small enterprises'}</li>
            <li>{locale === 'ro' ? 'Întreprinderile mijlocii' : 'Medium enterprises'}</li>
            <li>{locale === 'ro' ? 'Întreprinderile mari' : 'Large enterprises'}</li>
            <li>{locale === 'ro' ? 'Întreprinderi nou înființate – acestea trebuie să aibă capitalul social subscris vărsat de minimum 100.000 lei' : 'Newly established enterprises – must have subscribed and paid-up share capital of at least 100,000 lei'}</li>
            <li>{locale === 'ro' ? 'Regiile autonome' : 'Autonomous administrations'}</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">{locale === 'ro' ? 'Condiții de eligibilitate AUTOCONSUM' : 'SELF-CONSUMPTION Eligibility Conditions'}</h2>
          <ul className="list-disc list-inside">
            <li><strong>{locale === 'ro' ? '70% din totalul energiei propuse este pentru autoconsum' : '70% of the total proposed energy is for self-consumption'}</strong></li>
            <li>{locale === 'ro' ? 'Întreprinderea nu trebuie să fie în dificultate' : 'The enterprise must not be in difficulty'}</li>
            <li>{locale === 'ro' ? 'Au efect stimulativ şi respectă principiul demarării lucrărilor, și anume lucrările nu trebuie să fie demarate înainte de depunerea cererii de finanțare' : 'They have a stimulating effect and comply with the principle of work commencement, meaning works must not start before submitting the funding application'}</li>
            <li>{locale === 'ro' ? 'NU sunt eligibile proiectele care propun înlocuirea capacităților de producție mai vechi, care vizează extinderi ale capacităților existente, proiectele mixte fără un autoconsum de minimum 70% din energia produsă.' : 'Projects proposing replacement of older production capacities, expansions of existing capacities, or mixed projects without minimum 70% self-consumption are NOT eligible.'}</li>
            <li>{locale === 'ro' ? 'Proiectul trebuie să aibă avizul tehnic de racordare (ATR) sau să-l obțină.' : 'The project must have or obtain the technical connection approval (ATR).'}</li>
            <li>{locale === 'ro' ? 'Firma trebuie să dețină drepturi asupra imobilului pentru realizarea investiției.' : 'The company must have rights over the property to carry out the investment.'}</li>
            <li>{locale === 'ro' ? 'Firma are capacitatea financiară și tehnică de a asigura cheltuielile neeligibile și de a implementa proiectul.' : 'The company has the financial and technical capacity to cover non-eligible expenses and implement the project.'}</li>
          </ul>
        </section>
        <section className="mt-10 space-y-6 text-justify">
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            {locale === 'ro' ? 'Activități' : 'Activities'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto text-justify">
            <div>
              <h3 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-2">
                {locale === 'ro' ? 'Eligibile' : 'Eligible'}
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>{locale === 'ro' ? 'Construirea de sisteme fotovoltaice (pe rooftop, greenfield, carport sau alte structuri)' : 'Construction of photovoltaic systems (rooftop, greenfield, carport, or other structures)'}</li>
                <li>{locale === 'ro' ? 'Achiziția de echipamente și instalații noi: panouri fotovoltaice, invertoare, sisteme de montaj, sisteme de monitorizare și control (SCADA), tablouri electrice, echipamente de protecție, etc.' : 'Acquisition of new equipment and installations: photovoltaic panels, inverters, mounting systems, monitoring and control systems (SCADA), electrical panels, protective equipment, etc.'}</li>
                <li>{locale === 'ro' ? 'Lucrări de construcții necesare: platforme, structuri metalice, sisteme de fixare, drumuri de acces, împrejmuiri, etc.' : 'Necessary construction works: platforms, metal structures, fixing systems, access roads, fences, etc.'}</li>
                <li>{locale === 'ro' ? 'Racordarea sistemului final la infrastructura existentă (cu respectarea cerinței de autoconsum de minimum 70%!)' : 'Connection of the final system to existing infrastructure (respecting the minimum 70% self-consumption requirement!)'}</li>
                <li>{locale === 'ro' ? 'Cheltuieli pentru amenajarea terenului' : 'Expenses for land arrangement'}</li>
                <li>{locale === 'ro' ? 'Cheltuieli pentru asigurarea utilităților necesare obiectivului de investiții' : 'Expenses for ensuring utilities necessary for the investment objective'}</li>
                <li>{locale === 'ro' ? 'Cheltuieli pentru plata diriginților de șantier' : 'Expenses for site supervisors'}</li>
                <li>{locale === 'ro' ? 'Cheltuieli pentru construcții și instalații' : 'Expenses for constructions and installations'}</li>
                <li>{locale === 'ro' ? 'Cheltuieli pentru utilaje, echipamente tehnologice şi funcţionale care necesită montaj și montajul acestora' : 'Expenses for machinery, technological and functional equipment requiring installation and their installation'}</li>
                <li>{locale === 'ro' ? 'Cheltuieli cu dotările și cu activele necorporale' : 'Expenses for fittings and intangible assets'}</li>
                <li>{locale === 'ro' ? 'Cheltuieli cu organizarea de șantier' : 'Expenses for site organization'}</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-2">
                {locale === 'ro' ? 'Neeligibile' : 'Non-eligible'}
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>{locale === 'ro' ? 'Cheltuieli aferente contribuției în natură' : 'Expenses related to in-kind contribution'}</li>
                <li>{locale === 'ro' ? 'Cheltuieli cu amortizarea' : 'Depreciation expenses'}</li>
                <li>{locale === 'ro' ? 'Cheltuieli cu obținerea terenurilor' : 'Expenses for land acquisition'}</li>
                <li>{locale === 'ro' ? 'Cheltuieli de leasing' : 'Leasing expenses'}</li>
                <li>{locale === 'ro' ? 'Cheltuieli cu închirierea, altele decât cele prevăzute la cheltuielile generale de administrație' : 'Rental expenses, except those provided for general administrative expenses'}</li>
                <li>{locale === 'ro' ? 'Cheltuieli cu achiziția de mijloace de transport' : 'Expenses for acquisition of means of transport'}</li>
                <li>{locale === 'ro' ? 'Cheltuieli generale de administrație' : 'General administrative expenses'}</li>
                <li>{locale === 'ro' ? 'Cheltuieli pentru comisioane, cote, taxe' : 'Expenses for commissions, fees, taxes'}</li>
                <li>{locale === 'ro' ? 'Taxa pe valoarea adăugată (TVA)' : 'Value added tax (VAT)'}</li>
                <li>{locale === 'ro' ? 'Cheltuieli cu branșamentul (conectarea la stația de transformare)' : 'Expenses related to the connection (to the transformer station)'}</li>
                <li>{locale === 'ro' ? 'Cheltuieli de informare si publicitate - neeligibil dar OBLIGATORIU' : 'Information and advertising expenses - non-eligible but MANDATORY'}</li>
                <li>{locale === 'ro' ? 'Audit financiar - neeligibil dar OBLIGATORIU' : 'Financial audit - non-eligible but MANDATORY'}</li>
                <li>{locale === 'ro' ? 'Cheltuieli pentru capacitate de stocare- nu sunt obligatorii dar ofera 10 puncte la grila de evaluare !' : 'Expenses for storage capacity - not mandatory but offer 10 points in the evaluation grid!'}</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
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