import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import ContactModal from '../components/ContactModal';

export default function FondulModernizareAutoconsum() {
  const { locale } = useRouter();
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContactModal = () => setIsContactOpen(true);
  const closeContactModal = () => setIsContactOpen(false);

  const greenGradient = 'bg-gradient-to-r from-[rgba(24,130,128,0.8)] to-[rgba(110,186,77,0.8)]';
  const outlineGreen = 'border border-[rgba(24,130,128,0.3)]';

  return (
    <>
      <Head>
        <title>
          {locale === 'ro'
            ? 'Fondul pentru Modernizare - Surse regenerabile și stocare pentru autoconsum'
            : 'Modernization Fund - Renewable Energy and Storage for Self-Consumption'}
        </title>
        <meta
          name="description"
          content={
            locale === 'ro'
              ? 'Sprijin pentru investiții în capacități noi de producere a energiei regenerabile și stocare pentru autoconsum, prin Fondul pentru Modernizare.'
              : 'Support for investments in new renewable energy and storage capacities for self-consumption through the Modernization Fund.'
          }
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="max-w-6xl mx-auto my-10">
        <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            src="/videos/video-modernizare.mp4"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 text-white px-6 text-center">
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 max-w-full break-words drop-shadow-md">
              {locale === 'ro'
                ? 'Sprijin pentru investiții în capacități noi de producere a energiei regenerabile și stocare pentru autoconsum, prin Fondul pentru Modernizare.'
                : 'Support for investments in new renewable energy and storage capacities for self-consumption through the Modernization Fund.'}
            </h2>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 py-8 text-center">
        <h1 className="bg-gradient-to-r from-[rgba(24,130,128,0.8)] to-[rgba(110,186,77,0.8)] bg-clip-text text-transparent text-3xl font-bold mb-4">
          {locale === 'ro'
            ? 'FONDUL PENTRU MODERNIZARE - PROGRAM CHEIE: SURSE REGENERABILE ȘI STOCAREA ENERGIEI'
            : 'MODERNIZATION FUND - KEY PROGRAM: RENEWABLE ENERGY AND STORAGE'}
        </h1>
        <p className="text-base text-gray-700">
          {locale === 'ro'
            ? 'Perioadă depunere proiecte: 22 mai 2025 – 22 august 2025'
            : 'Project submission period: May 22, 2025 – August 22, 2025'}
        </p>
      </div>
      <main className="max-w-6xl mx-auto px-6 py-10 font-inter text-gray-900 leading-relaxed">
        <section className={`${outlineGreen} p-6 rounded-md space-y-5 text-justify bg-white`}>
          <p>
            {locale === 'ro'
              ? `Ministerul Energiei a lansat apelul pentru finanțarea investițiilor în capacități noi de producere a energiei din surse regenerabile destinate autoconsumului, pe baza unei proceduri de ofertare concurențială. Programul se adresează operatorilor economici interesați să dezvolte proiecte durabile, cu impact direct în creșterea independenței energetice și reducerea emisiilor de carbon.`
              : `The Ministry of Energy has launched the call for funding investments in new renewable energy production capacities for self-consumption, based on a competitive tendering procedure. The program targets economic operators seeking to develop sustainable projects that directly support energy independence and carbon emission reduction.`}
          </p>
          <p className="mt-4">
            {locale === 'ro'
              ? (
                  <>
                    Extras din comunicatul oficial:{' '}
                    <a
                      href="https://energie.gov.ro/ministerul-energiei-anunta-deschiderea-unui-nou-program-de-sprijin-pentru-industria-romaneasca-310-milioane-de-euro-pentru-sprijinirea-investitiilor-in-capacitati-de-productie-a-energiei-din-surse-re/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      Comunicat Ministerul Energiei
                    </a>
                  </>
                )
              : (
                  <>
                    Extract from the official release:{' '}
                    <a
                      href="https://energie.gov.ro/ministerul-energiei-anunta-deschiderea-unui-nou-program-de-sprijin-pentru-industria-romaneasca-310-milioane-de-euro-pentru-sprijinirea-investitiilor-in-capacitati-de-productie-a-energiei-din-surse-re/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      Ministry of Energy statement
                    </a>
                  </>
                )}
          </p>
        </section>
        <section className={`${outlineGreen} p-6 rounded-md mt-3 bg-white`}>
          <h2 className={`${greenGradient} bg-clip-text text-transparent text-2xl font-semibold mb-4 text-center`}>
            {locale === 'ro' ? 'Valoarea și intensitatea finanțării' : 'Funding Amount and Intensity'}
          </h2>
          <ul className="list-disc list-inside max-w-xl mx-auto">
            <li>{locale === 'ro' ? 'Maxim 450.000 euro/MW pentru capacități de până la 5 MW inclusiv' : 'Maximum €450,000/MW for capacities up to and including 5 MW'}</li>
            <li>{locale === 'ro' ? 'Maxim 360.000 euro/MW pentru capacități peste 5 MW' : 'Maximum €360,000/MW for capacities over 5 MW'}</li>
            <li>{locale === 'ro' ? 'Tip ajutor: Procedura de ofertare concurențială' : 'Aid type: Competitive tendering procedure'}</li>
            <li><strong>{locale === 'ro' ? 'Intensitate finanțare: 100% din cheltuielile eligibile' : 'Funding intensity: 100% of eligible expenses'}</strong></li>
          </ul>
        </section>
        <section className={`${outlineGreen} p-6 rounded-md mt-3 bg-white`}>
          <h2 className={`${greenGradient} bg-clip-text text-transparent text-2xl font-semibold mb-4 text-center`}>
            {locale === 'ro' ? 'Solicitanți eligibili' : 'Eligible Applicants'}
          </h2>
          <ul className="list-disc list-inside max-w-xl mx-auto">
            <li>{locale === 'ro' ? 'Microîntreprinderi' : 'Microenterprises'}</li>
            <li>{locale === 'ro' ? 'Întreprinderi mici' : 'Small enterprises'}</li>
            <li>{locale === 'ro' ? 'Întreprinderi mijlocii' : 'Medium enterprises'}</li>
            <li>{locale === 'ro' ? 'Întreprinderi mari' : 'Large enterprises'}</li>
            <li>{locale === 'ro' ? 'Întreprinderi nou înființate cu capital social minim 100.000 lei' : 'Newly established enterprises with minimum share capital of 100,000 lei'}</li>
            <li>{locale === 'ro' ? 'Regii autonome' : 'Autonomous administrations'}</li>
          </ul>
        </section>
        <section className={`${outlineGreen} p-6 rounded-md mt-3 bg-white`}>
          <h2 className={`${greenGradient} bg-clip-text text-transparent text-2xl font-semibold mb-4 text-center`}>
            {locale === 'ro' ? 'Criterii și condiții de eligibilitate' : 'Eligibility Criteria and Conditions'}
          </h2>
          <ul className="list-disc list-inside max-w-xl mx-auto text-justify">
            <li>{locale === 'ro'
              ? <>Implementarea capacităților noi de producere energie din surse regenerabile (eolian, solar, hidro) pentru <strong>autoconsum</strong> – minimum <strong>70%</strong> din energia produsă anual trebuie consumată la locul de producție.</>
              : <>Implementation of new renewable energy capacities (wind, solar, hydro) for <strong>self-consumption</strong> – at least <strong>70%</strong> of annual production must be used on site.</>
            }</li>
            <li>{locale === 'ro' ? 'Întreprinderea nu trebuie să fie în dificultate financiară.' : 'Enterprise must not be in financial distress.'}</li>
            <li>{locale === 'ro' ? 'Lucrările nu pot începe înainte de depunerea cererii de finanțare.' : 'Works cannot start before submitting the funding application.'}</li>
            <li>{locale === 'ro' ? 'Proiectele care presupun înlocuirea sau extinderea capacităților existente nu sunt eligibile.' : 'Projects involving replacement or extension of existing capacities are not eligible.'}</li>
            <li>{locale === 'ro' ? 'Solicitantul trebuie să dețină sau să obțină aviz tehnic de racordare (ATR).' : 'Applicant must hold or obtain technical connection approval (ATR).'}</li>
            <li>{locale === 'ro' ? 'Dreptul de proprietate sau folosință asupra imobilului unde se realizează investiția.' : 'Ownership or usage rights over the property where the investment is implemented.'}</li>
            <li>{locale === 'ro' ? 'Demonstrarea capacității financiare și tehnice pentru implementarea proiectului.' : 'Demonstrate financial and technical capacity for project implementation.'}</li>
            <li>{locale === 'ro' ? 'Raportul Datorii totale/Capitaluri proprii trebuie să fie sub 7,5 în ultimul an financiar.' : 'Total Debt to Equity ratio must be below 7.5 in the last financial year.'}</li>
            <li>{locale === 'ro' ? 'Factorul minim de capacitate este 11,4% (echivalent minim 1.000 ore/an la putere maximă).' : 'Minimum capacity factor is 11.4% (at least 1,000 hours/year at full power).'}</li>
          </ul>
        </section>
        <section className={`${outlineGreen} p-6 rounded-md mt-3 bg-white`}>
          <h2 className={`${greenGradient} bg-clip-text text-transparent text-2xl font-semibold mb-6 text-center`}>
            {locale === 'ro' ? 'Activități eligibile și neeligibile' : 'Eligible and Non-eligible Activities'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto text-justify">
            <div>
              <h3 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-2">
                {locale === 'ro' ? 'Activități eligibile' : 'Eligible activities'}
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>{locale === 'ro' ? 'Construirea de sisteme fotovoltaice (pe acoperiș, sol, carport sau alte structuri)' : 'Construction of photovoltaic systems (rooftop, ground-mounted, carport, or other structures)'}</li>
                <li>{locale === 'ro' ? 'Achiziția de echipamente și instalații noi: panouri fotovoltaice, invertoare, sisteme de montaj, SCADA, tablouri electrice, echipamente de protecție etc.' : 'Procurement of new equipment and installations: PV panels, inverters, mounting systems, SCADA, electrical panels, protection equipment etc.'}</li>
                <li>{locale === 'ro' ? 'Lucrări de construcții: platforme, structuri metalice, sisteme de fixare, drumuri de acces, împrejmuiri etc.' : 'Construction works: platforms, metal structures, fixing systems, access roads, fencing etc.'}</li>
                <li>{locale === 'ro' ? 'Racordarea la infrastructura existentă (cu respectarea cerinței de autoconsum de minimum 70%)' : 'Connection to existing infrastructure (respecting the minimum 70% self-consumption requirement)'}</li>
                <li>{locale === 'ro' ? 'Amenajarea terenului și asigurarea utilităților necesare' : 'Land arrangement and providing necessary utilities'}</li>
                <li>{locale === 'ro' ? 'Plata diriginților de șantier' : 'Site supervisor expenses'}</li>
                <li>{locale === 'ro' ? 'Cheltuieli pentru construcții și instalații' : 'Construction and installation expenses'}</li>
                <li>{locale === 'ro' ? 'Achiziții de utilaje, echipamente tehnologice și montajul acestora' : 'Acquisition of machinery, technological equipment and their installation'}</li>
                <li>{locale === 'ro' ? 'Dotări și active necorporale' : 'Fittings and intangible assets'}</li>
                <li>{locale === 'ro' ? 'Organizarea de șantier' : 'Site organization'}</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-2">
                {locale === 'ro' ? 'Activități neeligibile' : 'Non-eligible activities'}
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>{locale === 'ro' ? 'Contribuții în natură' : 'In-kind contributions'}</li>
                <li>{locale === 'ro' ? 'Cheltuieli cu amortizarea' : 'Depreciation expenses'}</li>
                <li>{locale === 'ro' ? 'Achiziția terenurilor' : 'Land acquisition'}</li>
                <li>{locale === 'ro' ? 'Cheltuieli de leasing' : 'Leasing expenses'}</li>
                <li>{locale === 'ro' ? 'Cheltuieli de închiriere (exceptând cele de administrație generală)' : 'Rental expenses (except general administrative expenses)'}</li>
                <li>{locale === 'ro' ? 'Achiziția de mijloace de transport' : 'Acquisition of means of transport'}</li>
                <li>{locale === 'ro' ? 'Cheltuieli generale de administrație' : 'General administrative expenses'}</li>
                <li>{locale === 'ro' ? 'Comisioane, cote, taxe' : 'Commissions, fees, taxes'}</li>
                <li>{locale === 'ro' ? 'Taxa pe valoarea adăugată (TVA)' : 'Value added tax (VAT)'}</li>
                <li>{locale === 'ro' ? 'Branșament la stația de transformare' : 'Connection to transformer station'}</li>
                <li>{locale === 'ro' ? 'Informare și publicitate (cheltuială obligatorie, dar neeligibilă)' : 'Information and publicity (mandatory expense, but non-eligible)'}</li>
                <li>{locale === 'ro' ? 'Audit financiar (cheltuială obligatorie, dar neeligibilă)' : 'Financial audit (mandatory expense, but non-eligible)'}</li>
                <li>{locale === 'ro'
                  ? 'Cheltuielile pentru capacitate de stocare nu sunt obligatorii, dar aduc 10 puncte suplimentare la evaluare.'
                  : 'Expenses for storage capacity are not mandatory, but grant an extra 10 points in the evaluation.'}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Elegant card with bilingual content and Tailwind CSS, after Indicatori esențiali */}
        <section className="max-w-6xl mx-auto mt-3 p-6 bg-white rounded-lg shadow-lg border border-[rgba(24,130,128,0.3)]">
          <h2 className="text-2xl font-semibold text-center mb-6 bg-gradient-to-r from-[rgba(24,130,128,0.8)] to-[rgba(110,186,77,0.8)] bg-clip-text text-transparent">
            {locale === 'ro' ? 'Indicatori esențiali ai proiectului' : 'Key Project Indicators'}
          </h2>

          <p className="mb-4 text-justify max-w-4xl mx-auto">
            {locale === 'ro'
              ? 'Proiectele trebuie să demonstreze contribuția la următorii indicatori:'
              : 'Projects must demonstrate contribution to the following indicators:'}
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr>
                  <th className="border-b border-gray-300 p-2">ID</th>
                  <th className="border-b border-gray-300 p-2">{locale === 'ro' ? 'Indicator' : 'Indicator'}</th>
                  <th className="border-b border-gray-300 p-2">{locale === 'ro' ? 'Unitate' : 'Unit'}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-gray-200 p-2 font-semibold">I.1</td>
                  <td className="border-b border-gray-200 p-2">
                    {locale === 'ro'
                      ? 'Capacitate nou instalată pentru producerea energiei din surse regenerabile (eolian, solar, hidro)'
                      : 'New installed capacity for renewable energy production (wind, solar, hydro)'}
                  </td>
                  <td className="border-b border-gray-200 p-2">MW</td>
                </tr>
                <tr>
                  <td className="border-b border-gray-200 p-2 font-semibold">I.2</td>
                  <td className="border-b border-gray-200 p-2">
                    {locale === 'ro'
                      ? 'Reducerea anuală estimată a emisiilor de gaze cu efect de seră'
                      : 'Estimated annual reduction of greenhouse gas emissions'}
                  </td>
                  <td className="border-b border-gray-200 p-2">{locale === 'ro' ? 'tone CO₂ echiv./an' : 'tons CO₂ eq/year'}</td>
                </tr>
                <tr>
                  <td className="border-b border-gray-200 p-2 font-semibold">I.3</td>
                  <td className="border-b border-gray-200 p-2">
                    {locale === 'ro'
                      ? 'Producția medie anuală de energie din surse regenerabile'
                      : 'Average annual renewable energy production'}
                  </td>
                  <td className="border-b border-gray-200 p-2">MWh/an</td>
                </tr>
                <tr>
                  <td className="border-b border-gray-200 p-2 font-semibold">I.4</td>
                  <td className="border-b border-gray-200 p-2">
                    {locale === 'ro'
                      ? 'Producția totală de energie regenerabilă pe perioada de referință'
                      : 'Total renewable energy production for the reference period'}
                  </td>
                  <td className="border-b border-gray-200 p-2">MWh</td>
                </tr>
                <tr>
                  <td className="border-b border-gray-200 p-2 font-semibold">I.5</td>
                  <td className="border-b border-gray-200 p-2">
                    {locale === 'ro'
                      ? <>Ponderea estimată pentru autoconsum din producția totală<span className="text-red-500">*</span></>
                      : <>Estimated share for self-consumption from total production<span className="text-red-500">*</span></>}
                  </td>
                  <td className="border-b border-gray-200 p-2">%</td>
                </tr>
                <tr>
                  <td className="p-2 font-semibold">I.6</td>
                  <td className="p-2">
                    {locale === 'ro'
                      ? 'Factorul de capacitate al instalației'
                      : 'Plant capacity factor'}
                  </td>
                  <td className="p-2">%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="max-w-4xl mx-auto mb-6">
            <p className="text-xs text-gray-600 mt-2">
              {locale === 'ro'
                ? "(*) Consumul propriu trebuie să reprezinte minimum 70% din producția capacității finanțate."
                : "(*) Self-consumption must represent at least 70% of the production of the funded capacity."
              }
            </p>
          </div>

          <h3 className="text-xl font-semibold mb-3 text-center">
            {locale === 'ro' ? 'Procesul de evaluare și selecție' : 'Evaluation and Selection Process'}
          </h3>
          <ul className="list-disc list-inside max-w-3xl mx-auto mb-8 text-justify space-y-1">
            <li>{locale === 'ro' ? 'Cererile sunt evaluate tehnico-economic, cu punctaj maxim de 100:' : 'Applications are technically and economically evaluated with a maximum score of 100:'}</li>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>{locale === 'ro' ? 'Cuantum ajutor stat solicitat per MW instalat (maxim 90 puncte)' : 'Requested state aid amount per installed MW (max 90 points)'}</li>
              <li>{locale === 'ro' ? 'Predictibilitatea producției pentru Sistemul Energetic Național prin capacități de stocare (maxim 10 puncte)' : 'Production predictability for the National Energy System through storage capacity (max 10 points)'}</li>
            </ul>
            <li>{locale === 'ro' ? 'Cererile sunt verificate administrativ și pentru eligibilitate.' : 'Applications are administratively and eligibility-checked.'}</li>
            <li>{locale === 'ro' ? 'Se întocmește lista provizorie și lista finală, proiectele fiind aprobate în limita bugetului.' : 'Preliminary and final lists are prepared, projects approved within budget limits.'}</li>
            <li>{locale === 'ro' ? 'Contestarea rezultatelor este posibilă în termen de 15 zile.' : 'Appeals on results are allowed within 15 days.'}</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 text-center">
            {locale === 'ro' ? 'Timeline estimativ pentru proiecte' : 'Estimated Project Timeline'}
          </h3>
          <ul className="list-disc list-inside max-w-3xl mx-auto mb-8 text-justify space-y-1">
            <li>
              {locale === 'ro'
                ? 'Scrierea, pregătirea si depunerea proiectelor: pana la data limita - 22 August 2025'
                : 'Project drafting, preparation and submission: up to the deadline - August 22, 2025'}
            </li>
            <li>{locale === 'ro' ? 'Evaluarea proiectelor: august - septembrie 2025' : 'Project evaluation: August - September 2025'}</li>
            <li>{locale === 'ro' ? 'Notificarea rezultatului și contractarea: octombrie - noiembrie 2025' : 'Notification of results and contracting: October - November 2025'}</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 text-center">
            {locale === 'ro' ? 'Contractarea și implementarea proiectelor' : 'Project Contracting and Implementation'}
          </h3>
          <ul className="list-disc list-inside max-w-3xl mx-auto mb-8 text-justify space-y-1">
            <li>{locale === 'ro' ? 'Documentele precontractuale se transmit în termen de 60 zile de la notificarea beneficiarului.' : 'Pre-contractual documents are issued within 60 days of beneficiary notification.'}</li>
            <li>{locale === 'ro' ? 'Contractul de finanțare este un act juridic obligatoriu, cu termene și obligații clare.' : 'The funding contract is a legally binding document with clear deadlines and obligations.'}</li>
            <li>{locale === 'ro' ? 'Beneficiarul trebuie să mențină investiția și să păstreze documentele timp de 10 ani de la finalizare.' : 'The beneficiary must maintain the investment and keep documents for 10 years after completion.'}</li>
            <li>{locale === 'ro' ? 'Monitorizarea proiectului se face prin rapoarte și vizite periodice.' : 'Project monitoring is conducted through reports and site visits.'}</li>
            <li>{locale === 'ro' ? 'Modificările proiectului trebuie notificate autorității finanțatoare.' : 'Project modifications must be notified to the funding authority.'}</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 text-center">
            {locale === 'ro' ? 'Excluderi și note importante' : 'Exclusions and Important Notes'}
          </h3>
          <ul className="list-disc list-inside max-w-3xl mx-auto text-justify space-y-1">
            <li>
              {locale === 'ro'
                ? 'Sunt excluși operatorii din sectorul pescuitului și acvaculturii (CAEN 03).'
                : 'Operators from the fisheries and aquaculture sector (NACE 03) are excluded.'}
            </li>
            <li>
              {locale === 'ro'
                ? 'Operatorii care desfășoară activități principale sau secundare, sau care sunt înregistrați în statutul societății conform codurilor CAEN 01, 10 sau 11, nu sunt eligibili.'
                : 'Operators whose main or secondary activities, or those registered in the company charter under NACE codes 01, 10, or 11, are not eligible.'}
            </li>
            <li>
              {locale === 'ro'
                ? 'Operatorii economici care se încadrează în definiția clientului angro conform Legii nr.123/2012 actualizate sunt de asemenea excluși.'
                : 'Economic operators classified as wholesale clients under the updated Law no.123/2012 are also excluded.'}
            </li>
          </ul>
        </section>
        <section className="mt-3 space-y-6 text-center text-gray-600">
          <p>
            {locale === 'ro'
              ? 'Notă: Pentru detalii complete și documente oficiale, accesați site-ul Ministerului Energiei și platforma MySMIS2021.'
              : 'Note: For full details and official documents, visit the Ministry of Energy website and the MySMIS2021 platform.'}
          </p>
        </section>
        
        <div className="max-w-6xl mx-auto mt-6 flex justify-center">
          <button
            onClick={openContactModal}
            className="inline-block font-semibold px-6 py-3 rounded-full border border-green-700 transition-colors duration-300 bg-white text-green-700 group hover:bg-[linear-gradient(90deg,_rgba(24,130,128,0.9)_0%,_rgba(24,130,128,0.9)_40%,_rgba(110,186,77,0.6)_100%)] hover:text-white"
          >
            {locale === 'ro' ? 'Întreabă-ne despre Fondul pentru Modernizare' : 'Ask us about the Modernization Fund'}
          </button>
          <ContactModal isOpen={isContactOpen} onClose={closeContactModal} defaultInterest="modernization_fund" />
        </div>
        <section className="mt-12 text-center">
        </section>
        <section className="mt-16 py-10 border-t border-gray-200 text-center">
          <h2 className="text-2xl font-semibold mb-3">
            {locale === 'ro' ? 'Calculator rentabilitate (în curând)' : 'Profitability Calculator (coming soon)'}
          </h2>
          <p className="text-gray-500">{locale === 'ro' ? 'Un instrument interactiv pentru estimarea rentabilității proiectului va fi disponibil aici.' : 'An interactive tool to estimate project profitability will be available here.'}</p>
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