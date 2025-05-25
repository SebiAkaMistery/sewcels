import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ContactModal from '../components/ContactModal'; // Assuming this path is correct
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

export default function FondulModernizareAutoconsum() {
  const { locale } = useRouter();
  const [isContactOpen, setIsContactOpen] = useState(false);

  // --- State and recalculate logic for dynamic calculator ---
  const [monthlyData, setMonthlyData] = useState([]);
  const [monthlyConsumption, setMonthlyConsumption] = useState(10000);
  const [selfConsumptionPercent, setSelfConsumptionPercent] = useState(75);
  const [buyPrice, setBuyPrice] = useState(1);
  const [sellPrice, setSellPrice] = useState(0.5);
  const [pvSystem, setPvSystem] = useState(100);
  const [recommendedPvSystem, setRecommendedPvSystem] = useState(100);

  // --- State for results ---
  const [pvCostEurState, setPvCostEurState] = useState(0);
  const [pvCostRonState, setPvCostRonState] = useState(0);
  const [storageCostEurState, setStorageCostEurState] = useState(0);
  const [storageCostRonState, setStorageCostRonState] = useState(0);
  const [annualProductionState, setAnnualProductionState] = useState(0);
  const [selfConsumedState, setSelfConsumedState] = useState(0);
  const [surplusEnergyState, setSurplusEnergyState] = useState(0);
  const [selfSavingState, setSelfSavingState] = useState(0);
  const [injectedIncomeState, setInjectedIncomeState] = useState(0);
  const [paybackPvState, setPaybackPvState] = useState(0);
  const [paybackBessState, setPaybackBessState] = useState('0'); // Initialize as string, consistent with '—' later
  const [annualStorageIncomeState, setAnnualStorageIncomeState] = useState(0);
  const [annualPVIncomeState, setAnnualPVIncomeState] = useState(0);

  // State for "Valoarea ajutorului de stat solicitat pe MW" slider
  const [stateAidPerMW, setStateAidPerMW] = useState(200000);

  // Calcul valoare ajutor de stat total în RON
  const stateAidTotalRON = useMemo(() => {
    return stateAidPerMW * 5 * (pvSystem / 1000);
  }, [stateAidPerMW, pvSystem]);

  // Helper: custom storage roundup
  function customStorageRoundup(value) {
    if (value <= 30) return 30;
    if (value <= 60) return 60;
    if (value <= 90) return 90;
    if (value <= 120) return 120;
    if (value <= 150) return 150;
    if (value <= 180) return 180;
    if (value <= 210) return 210;
    if (value <= 240) return 240;
    if (value <= 270) return 270;
    if (value <= 300) return 300;
    return Math.ceil(value / 100) * 100;
  }
  const roundup = (num, step) => Math.ceil(num / step) * step;

  // Snapping for PV values
  const snapPvValue = (val) => {
    if (val === 1000) return 1000; // Permite fix 1000
    if (val <= 500) return roundup(val, 10);
    if (val <= 1000) return roundup(val, 25);
    if (val <= 3000) return roundup(val, 50);
    return roundup(val, 100);
  };

  const [pvSystemInput, setPvSystemInput] = useState('100');

  // Handler pentru input manual numeric
  const onPvInputChange = (e) => {
    const val = e.target.value;
    const numericVal = val.replace(/\D/g, '');
    setPvSystemInput(val); // afișăm ce tastează utilizatorul
    if (numericVal === '') {
      setPvSystem(undefined);
    } else {
      let num = Number(numericVal);
      if (num > 15000) num = 15000;
      setPvSystem(num);
    }
  };

  // Blur: validează și corectează inputul dacă e invalid
  const onPvInputBlur = () => {
    let num = Number(pvSystemInput.replace(/\D/g, ''));
    if (isNaN(num) || num < 100) num = 100;
    if (num > 15000) num = 15000;
    setPvSystem(num);
    setPvSystemInput(num.toString());
  };

  // KeyDown: permite tastare normală, Enter confirmă
  const onPvInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      let num = Number(pvSystemInput.replace(/\D/g, ''));
      if (isNaN(num) || num < 100) num = 100;
      if (num > 15000) num = 15000;
      setPvSystem(num);
      setPvSystemInput(num.toString());
    }
    // Permite orice tastă, nu blocăm tastele pentru editare
  };

  // Handler pentru slider
  const onPvSliderChange = (e) => {
    const val = Number(e.target.value);
    setPvSystem(val);
    setPvSystemInput(val.toString());
  };

  // Sync input când pvSystem se schimbă din alte cauze
  useEffect(() => {
    if (pvSystem !== undefined) {
      setPvSystemInput(pvSystem.toString());
    }
  }, [pvSystem]);

  // Calculation function
  const recalculate = (currentMonthlyConsumption, currentSelfConsumptionPercent, currentBuyPrice, currentSellPrice, currentPvSystem) => {
    const monthlyValue = currentMonthlyConsumption;
    const selfValue = currentSelfConsumptionPercent / 100;
    
    // Recommended PV system based on consumption and self-consumption percentage
    const pvValueRaw = Math.min(Math.round(monthlyValue * 12 / (selfValue * 1100)), 15000);
    const recommendedPv = snapPvValue(pvValueRaw);
    setRecommendedPvSystem(recommendedPv);

    const pv = currentPvSystem; // Use the actual currentPvSystem for calculations
    const annualProduction = pv * 1100;
    const monthPcts = [4.16, 5.67, 8.85, 9.87, 10.77, 10.55, 10.98, 10.10, 8.18, 6.42, 4.29, 3.12];
    const updatedData = monthPcts.map((pct) => Math.round(annualProduction * (pct / 100)));
    setMonthlyData(updatedData);

    const selfConsumption = Math.round(annualProduction * selfValue);
    const surplus = annualProduction - selfConsumption;
    const saving = Math.round(selfConsumption * currentBuyPrice);
    const income = Math.round(surplus * currentSellPrice);
    const totalPvIncome = saving + income;
    const storageIncome = Math.round(annualProduction * currentBuyPrice); // Simplified: assumes all production can be self-consumed with storage

    let pvCostEur = 0;
    if (pv <= 1000) {
      pvCostEur = pv * 550;
    } else {
      pvCostEur = 1000 * 550 + (pv - 1000) * 500;
    }

    const storageCapacity = customStorageRoundup(pv / 60 * 12); // pvSystem is currentPvSystem
    const storageCostPerKwh = 250;
    const individualStorageCostEur = storageCapacity * storageCostPerKwh;
    const totalStorageCostEur = pvCostEur + individualStorageCostEur;
    const totalStorageCostRon = totalStorageCostEur * 5;

    // Payback in RON (amortizare pe baza valorilor în RON)
    // Folosim valorile deja definite în state pentru costuri și venituri în RON
    // (vor fi setate mai jos înainte de acest calcul)
    // Calculăm payback pentru PV și pentru PV+Stocare
    // (cost PV în RON / venit anual PV), (cost total în RON / venit anual cu stocare)

    // Setăm state-urile pentru costuri și venituri înainte de calculul amortizării
    setPvCostEurState(pvCostEur);
    setPvCostRonState(pvCostEur * 5);
    setStorageCostEurState(totalStorageCostEur); // This is PV cost + Storage cost
    setStorageCostRonState(totalStorageCostRon);
    setAnnualProductionState(annualProduction);
    setSelfConsumedState(selfConsumption);
    setSurplusEnergyState(surplus);
    setSelfSavingState(saving);
    setInjectedIncomeState(income);
    setAnnualStorageIncomeState(storageIncome);
    setAnnualPVIncomeState(totalPvIncome);

    // Calcul corect amortizare pe baza valorilor în RON
    // (folosim valorile din state, care au fost tocmai setate)
    // Pentru a evita race condition cu setState (care e async), folosim direct valorile calculate aici
    const pvCostRon = pvCostEur * 5;
    const paybackPvRon = totalPvIncome > 0 ? pvCostRon / totalPvIncome : 0;
    const paybackBessRon = storageIncome > 0 ? totalStorageCostRon / storageIncome : 0;

    setPaybackPvState(totalPvIncome > 0 ? parseFloat(paybackPvRon.toFixed(1)) : 0);
    setPaybackBessState(storageIncome > 0 ? paybackBessRon.toFixed(1) : '—');
  };

  // Initial calculation and recalculation when primary inputs change
  useEffect(() => {
    const pvValueRaw = Math.min(Math.round(monthlyConsumption * 12 / ((selfConsumptionPercent / 100) * 1100)), 15000);
    const snappedPv = snapPvValue(pvValueRaw);
    setPvSystem(snappedPv); // This will set the slider to the recommended value initially
    setRecommendedPvSystem(snappedPv); // Also set the recommendation reference
    // `recalculate` will be called by the next useEffect dependent on pvSystem
  }, [monthlyConsumption, selfConsumptionPercent]);

  // Recalculate when pvSystem (slider) or other financial params change
  useEffect(() => {
    recalculate(monthlyConsumption, selfConsumptionPercent, buyPrice, sellPrice, pvSystem);
  }, [monthlyConsumption, selfConsumptionPercent, buyPrice, sellPrice, pvSystem]);


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
            playsInline // playsinline for iOS
            className="w-full h-full object-cover"
            src="/videos/video-modernizare.mp4" // Ensure this path is correct in your public folder
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
        {/* Combined card for Valoarea și intensitatea finanțării + Solicitanți eligibili */}
        <section className={`${outlineGreen} p-6 rounded-md mt-6 bg-white`}> 
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-16">
            <div>
              <h2 className={`${greenGradient} bg-clip-text text-transparent text-2xl font-semibold mb-4 text-center md:text-left`}>Valoarea și intensitatea finanțării</h2>
              <ul className="list-disc list-inside text-justify max-w-md mx-auto md:mx-0 space-y-2">
                <li>Maxim 450.000 euro/MW pentru capacități de până la 5 MW inclusiv</li>
                <li>Maxim 360.000 euro/MW pentru capacități peste 5 MW</li>
                <li>Tip ajutor: Procedura de ofertare concurențială</li>
                <li><strong>Intensitate finanțare: 100% din cheltuielile eligibile</strong></li>
              </ul>
            </div>
            <div>
              <h2 className={`${greenGradient} bg-clip-text text-transparent text-2xl font-semibold mb-4 text-center md:text-left`}>Solicitanți eligibili</h2>
              <ul className="list-disc list-inside text-justify max-w-md mx-auto md:mx-0 space-y-2">
                <li>Microîntreprinderi</li>
                <li>Întreprinderi mici, mijlocii sau mari</li>
                <li>Întreprinderi nou înființate cu capital social minim 100.000 lei</li>
                <li>Regii autonome</li>
              </ul>
            </div>
          </div>
        </section>
        <section className={`${outlineGreen} p-6 rounded-md mt-6 bg-white`}>
          <h2 className={`${greenGradient} bg-clip-text text-transparent text-2xl font-semibold mb-4 text-center`}>
            {locale === 'ro' ? 'Criterii și condiții de eligibilitate' : 'Eligibility Criteria and Conditions'}
          </h2>
          <ul className="list-disc list-inside max-w-full px-6 text-justify">
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
        <section className={`${outlineGreen} p-6 rounded-md mt-6 bg-white`}>
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

        <section className="mt-6 space-y-6 text-center text-gray-600">
          <p>
            {locale === 'ro'
              ? 'Notă: Pentru detalii complete și documente oficiale, accesați site-ul Ministerului Energiei și platforma MySMIS2021.'
              : 'Note: For full details and official documents, visit the Ministry of Energy website and the MySMIS2021 platform.'}
          </p>
        </section>
        
        <div className="max-w-6xl mx-auto mt-6 mb-6 flex justify-center">
          <button
            onClick={openContactModal}
            className="inline-block font-semibold px-6 py-3 rounded-full border border-green-700 transition-colors duration-300 bg-white text-green-700 group hover:bg-[linear-gradient(90deg,_rgba(24,130,128,0.9)_0%,_rgba(24,130,128,0.9)_40%,_rgba(110,186,77,0.6)_100%)] hover:text-white"
          >
            {locale === 'ro' ? 'Întreabă-ne despre Fondul pentru Modernizare' : 'Ask us about the Modernization Fund'}
          </button>
          <ContactModal isOpen={isContactOpen} onClose={closeContactModal} defaultInterest="modernization_fund" />
        </div>
        
        <div className="w-full flex flex-col items-stretch group bg-white rounded-[10px] border border-[rgb(87,179,62)] text-[rgb(34,38,37)] font-[DM_Sans] text-[16px] leading-[27.2px] transition-all duration-400 ease overflow-hidden px-4 py-4 mt-6 hover:bg-[linear-gradient(90deg,_rgba(24,130,128,0.9)_0%,_rgba(24,130,128,0.9)_40%,_rgba(110,186,77,0.6)_100%)] hover:bg-cover hover:bg-no-repeat hover:bg-center">
          <div className="flex-1">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-semibold text-center text-blue-900 mb-4 transition-colors duration-0 group-hover:text-white">
                {locale === 'ro' ? 'Calculul rentabilității sistemului fotovoltaic estimat' : 'Estimated Photovoltaic System Profitability'}
              </h2>
              <h3 className="text-lg font-medium text-center text-gray-700 mb-4 transition-colors duration-0 group-hover:text-white">
                {locale === 'ro' ? 'Detaliile consumului energetic ale beneficiarului' : 'Beneficiary Energy Consumption Details'}
              </h3>
              <form className="grid gap-6 grid-cols-1 md:grid-cols-2 bg-gray-50 p-4 rounded-lg shadow w-full">
              <div>
                <div className="block text-sm font-medium text-gray-700 mb-1 flex justify-between items-center">
                  <span>{locale === 'ro' ? 'Consum lunar (kWh)' : 'Monthly consumption (kWh)'}</span>
                  <span className="inline-block bg-white border border-gray-300 rounded px-2 py-0.5 text-sm font-semibold text-gray-800">
                    {monthlyConsumption.toLocaleString()} kWh
                  </span>
                </div>
                <input
                  type="range"
                  name="monthly"
                  min="10000"
                  max="1000000"
                  step="1000" // Consider dynamic step for larger values if needed
                  value={monthlyConsumption}
                  onChange={e => {
                    let value = Number(e.target.value);
                    // Optional: more granular stepping for larger values if 1000 is too coarse
                    if (value > 100000 && value <= 500000) {
                      value = Math.round(value / 5000) * 5000;
                    } else if (value > 500000) {
                        value = Math.round(value / 10000) * 10000;
                    }
                    setMonthlyConsumption(value);
                  }}
                  className="w-full h-2 bg-gray-300 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:bg-green-700 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:bg-green-700 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:shadow [&::-moz-range-thumb]:cursor-pointer"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 flex justify-between items-center">
                  <span>{locale === 'ro' ? 'Autoconsum (%)' : 'Self-consumption (%)'}</span>
                  <span
                    id="selfValue" // id not strictly necessary unless used by external JS/CSS
                    className="inline-block bg-white border border-gray-300 rounded px-2 py-0.5 text-sm font-semibold text-gray-800"
                  >{selfConsumptionPercent}%</span>
                </label>
                <input
                  type="range"
                  name="autoconsum"
                  min="70" // As per program rules
                  max="100"
                  value={selfConsumptionPercent}
                  onChange={e => setSelfConsumptionPercent(Number(e.target.value))}
                  className="w-full h-2 bg-gray-300 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:bg-green-700 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:bg-green-700 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:shadow [&::-moz-range-thumb]:cursor-pointer"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 flex justify-between items-center">
                  <span>{locale === 'ro' ? 'Preț energie furnizor (RON/kWh)' : 'Purchased electricity price (RON/kWh)'}</span>
                  <span
                    id="buyPriceDisplay" // id changed to avoid conflict if any, not strictly necessary
                    className="inline-block bg-white border border-gray-300 rounded px-2 py-0.5 text-sm font-semibold text-gray-800"
                  >{buyPrice.toFixed(2)} RON/kWh</span>
                </label>
                <input
                  type="range"
                  name="buyPrice"
                  min="0.7"
                  max="3"
                  step="0.01" // Finer step for price
                  value={buyPrice}
                  onChange={e => setBuyPrice(Number(e.target.value))}
                  className="w-full h-2 bg-gray-300 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:bg-green-700 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:bg-green-700 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:shadow [&::-moz-range-thumb]:cursor-pointer"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 flex justify-between items-center">
                  <span>{locale === 'ro' ? 'Preț energie injectată (RON/kWh)' : 'Injected electricity price (RON/kWh)'}</span>
                  <span
                    id="sellPriceDisplay" // id changed, not strictly necessary
                    className="inline-block bg-white border border-gray-300 rounded px-2 py-0.5 text-sm font-semibold text-gray-800"
                  >{sellPrice.toFixed(2)} RON/kWh</span>
                </label>
                <input
                  type="range"
                  name="sellPrice"
                  min="0.1" // Adjusted min based on typical values, can be 0.5
                  max="3"   // Adjusted max based on typical values
                  step="0.01" // Finer step for price
                  value={sellPrice}
                  onChange={e => setSellPrice(Number(e.target.value))}
                  className="w-full h-2 bg-gray-300 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:bg-green-700 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:bg-green-700 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:shadow [&::-moz-range-thumb]:cursor-pointer"
                />
              </div>
              <div>
                <div>
                  <div className="block text-sm font-medium text-gray-700 mb-1 flex justify-between items-center">
                    <span>{locale === 'ro' ? 'Sistem Fotovoltaic (kWp)' : 'Photovoltaic System (kWp)'}</span>
                    <input
                      type="text"
                      value={pvSystemInput}
                      onChange={onPvInputChange}
                      onBlur={onPvInputBlur}
                      onKeyDown={onPvInputKeyDown}
                      placeholder="Introdu valoarea aici..."
                      className="w-40 border border-gray-400 rounded px-3 py-2 text-sm text-gray-900 text-right font-mono bg-gray-50 focus:bg-white focus:border-green-700 transition-colors duration-200"
                      inputMode="numeric"
                      pattern="[0-9]*"
                    />
                  </div>
                  <input
                    type="range"
                    min={100}
                    max={15000}
                    step={1}
                    value={pvSystem ?? 100}
                    onChange={onPvSliderChange}
                    className="w-full h-2 bg-gray-300 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:bg-green-700 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:bg-green-700 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:shadow [&::-moz-range-thumb]:cursor-pointer"
                  />
                  {pvSystem !== recommendedPvSystem && (
                    <div className="border border-dotted border-green-700 rounded-md p-3 mt-3 text-green-800 bg-green-50 text-center">
                      {locale === 'ro'
                        ? <>Recomandat pentru autoconsum selectat: <span className="font-semibold">{recommendedPvSystem.toLocaleString()}</span> kWp</>
                        : <>Recommended for selected self-consumption: <span className="font-semibold">{recommendedPvSystem.toLocaleString()}</span> kWp</>
                      }
                    </div>
                  )}
                </div>
              </div>
              <div className="block text-sm font-medium text-gray-700 mb-1 flex justify-between items-center md:col-span-1"> {/* Span across one column or adjust as needed */}
                <span>{locale === 'ro' ? 'Capacitate de stocare minim recomandată' : 'Minimum Recommended Storage Capacity'}</span>
                <span className="inline-block bg-white border border-gray-300 rounded px-2 py-0.5 text-sm font-semibold text-gray-800">
                  {customStorageRoundup((pvSystem ?? 0) / 60 * 12).toLocaleString()} kWh
                </span>
              </div>
            </form>
            <div className="space-y-4">
              <div className="max-w-6xl mx-auto mt-4 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4"> {/* Changed mt-0 to mt-4, added responsiveness */}
                  <div className="flex-1 w-full bg-white border border-green-700 rounded-lg p-6 shadow flex flex-col items-center justify-center text-center">
                    <div className="text-gray-600 text-sm mb-2 font-medium uppercase tracking-wide">
                      {locale === 'ro' ? 'Cost estimat sistem fotovoltaic' : 'Estimated PV System Cost'}
                    </div>
                    <div className="text-2xl font-bold text-green-700 mb-1">
                      {pvCostEurState.toLocaleString()} <span className="text-base font-semibold text-gray-700">EUR</span>
                    </div>
                    <div className="text-base font-semibold text-gray-700">
                      {pvCostRonState.toLocaleString()} <span className="text-sm font-normal">RON</span>
                    </div>
                  </div>
                  <div className="flex-1 w-full bg-white border border-green-700 rounded-lg p-6 shadow flex flex-col items-center justify-center text-center">
                    <div className="text-gray-600 text-sm mb-2 font-medium uppercase tracking-wide">
                      {locale === 'ro' ? 'COST ESTIMAT TOTAL FOTOVOLTAIC + STOCARE' : 'Total PV + Storage Cost'}
                    </div>
                    <div className="text-2xl font-bold text-green-700 mb-1">
                      {storageCostEurState.toLocaleString()} <span className="text-base font-semibold text-gray-700">EUR</span>
                    </div>
                    <div className="text-base font-semibold text-gray-700">
                      {storageCostRonState.toLocaleString()} <span className="text-sm font-normal">RON</span>
                    </div>
                  </div>
                </div>
                <div className="max-w-3xl mx-auto mt-6"> {/* Card producție anuală estimată */}
                  <div className="bg-white p-4 rounded-lg shadow text-center text-gray-800 mt-0">
                    <h4 className="text-lg font-semibold mb-2">
                      {locale === 'ro' ? 'Producție anuală estimată ' : 'Estimated Annual Production '}
                    </h4>
                    <div className="block text-sm font-medium text-gray-700 mb-1 flex justify-center items-center gap-2">
                      <span>{locale === 'ro' ? 'Producție totală estimată (la 1.100 ore/an)' : 'Estimated total production (at 1,100 hours/year)'}</span>
                      <span className="inline-block bg-white border border-gray-300 rounded px-2 py-0.5 text-sm font-semibold text-gray-800">
                        {annualProductionState.toLocaleString()} kWh
                      </span>
                    </div>
                    <div className="mt-4 w-full h-[300px] md:h-[400px]">
                      <Bar
                        data={{
                          labels: [
                            'Ian', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun',
                            'Iul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
                          ],
                          datasets: [
                            {
                              label: locale === 'ro' ? 'Producție lunară estimată (kWh)' : 'Monthly Estimated Production (kWh)',
                              data: monthlyData,
                              backgroundColor: 'rgba(24,130,128,0.8)',
                              borderRadius: 4,
                            },
                          ],
                        }}
                        options={{
                          responsive: true,
                          maintainAspectRatio: false,
                          plugins: {
                            legend: { display: false },
                            datalabels: {
                              color: 'white',
                              anchor: 'center',
                              align: 'center',
                              rotation: 90,
                              font: {
                                weight: 'bold',
                                size: 12,
                              },
                              formatter: (value) => value.toLocaleString(),
                            },
                          },
                          scales: {
                            x: {
                              barPercentage: 0.5,
                              categoryPercentage: 0.6,
                              ticks: {
                                maxRotation: 45,
                                minRotation: 45,
                                autoSkip: false,
                              },
                            },
                            y: {
                              beginAtZero: true,
                              ticks: {
                                stepSize: 1000,
                                callback: (value) => value.toLocaleString(),
                              },
                            },
                          },
                        }}
                      />
                    </div>
                    <div className="max-w-4xl mx-auto mt-4">
                      <table className="w-full border-collapse">
                        <tbody>
                          <tr className="border-b border-gray-300">
                            <td className="text-left py-2 pl-8">
                              <div className="flex items-center min-h-[2.5rem]">
                                {locale === 'ro' ? 'Producție autoconsumată estimată' : 'Estimated Self-Consumed Production'}
                              </div>
                            </td>
                            <td className="text-right py-2 w-36 font-semibold pl-8">
                              <div className="flex items-center justify-end min-h-[2.5rem]">
                                {selfConsumedState.toLocaleString()} kWh
                              </div>
                            </td>
                            <td className="text-left py-2 pl-8">
                              <div className="flex items-center min-h-[2.5rem]">
                                {locale === 'ro' ? 'Surplus energetic estimat' : 'Estimated Energy Surplus'}
                              </div>
                            </td>
                            <td className="text-right py-2 w-36 font-semibold pl-8">
                              <div className="flex items-center justify-end min-h-[2.5rem]">
                                {surplusEnergyState.toLocaleString()} kWh
                              </div>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-300">
                            <td className="text-left py-2 pl-8">
                              <div className="flex items-center min-h-[2.5rem]">
                                {locale === 'ro' ? 'Economie din autoconsum' : 'Savings from Self-Consumption'}
                              </div>
                            </td>
                            <td className="text-right py-2 w-36 font-semibold pl-8">
                              <div className="flex items-center justify-end min-h-[2.5rem]">
                                {selfSavingState.toLocaleString()} RON
                              </div>
                            </td>
                            <td className="text-left py-2 pl-8">
                              <div className="flex items-center min-h-[2.5rem]">
                                {locale === 'ro' ? 'Venit din energia injectată' : 'Revenue from Injected Energy'}
                              </div>
                            </td>
                            <td className="text-right py-2 w-36 font-semibold pl-8">
                              <div className="flex items-center justify-end min-h-[2.5rem]">
                                {injectedIncomeState.toLocaleString()} RON
                              </div>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-300">
                            <td className="text-left py-2 pl-8">
                              <div className="flex items-center min-h-[2.5rem]">
                                {locale === 'ro' ? 'Venituri anuale estimate din sistemul Fotovoltaic' : 'Estimated Annual Revenue from PV System'}
                              </div>
                            </td>
                            <td className="text-right py-2 w-36 font-semibold pl-8">
                              <div className="flex items-center justify-end min-h-[2.5rem]">
                                {annualPVIncomeState.toLocaleString()} RON
                              </div>
                            </td>
                            <td className="text-left py-2 pl-8">
                              <div className="flex items-center min-h-[2.5rem]">
                                {locale === 'ro' ? 'Venituri anuale estimate cu sistem de stocare' : 'Estimated Annual Revenue with Storage'}
                              </div>
                            </td>
                            <td className="text-right py-2 w-36 font-semibold pl-8">
                              <div className="flex items-center justify-end min-h-[2.5rem]">
                                {annualStorageIncomeState.toLocaleString()} RON
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className="text-left py-2 pl-8">
                              <div className="flex items-center min-h-[2.5rem]">
                                {locale === 'ro' ? 'Amortizare Sistem fotovoltaic (fara GRANT)' : 'Payback Period (PV only)'}
                              </div>
                            </td>
                            <td className="text-right py-2 w-36 font-semibold pl-8">
                              <div className="flex items-center justify-end min-h-[2.5rem]">
                                {paybackPvState} {locale === 'ro' ? 'ani' : 'years'}
                              </div>
                            </td>
                            <td className="text-left py-2 pl-8">
                              <div className="flex items-center min-h-[2.5rem]">
                                {locale === 'ro' ? 'Amortizare Sistem Fotovoltaic + Stocare (fara GRANT)' : 'Payback Period (PV + Storage)'}
                              </div>
                            </td>
                            <td className="text-right py-2 w-36 font-semibold pl-8">
                              <div className="flex items-center justify-end min-h-[2.5rem]">
                                {paybackBessState} {locale === 'ro' ? 'ani' : 'years'}
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Card indicatori esențiali ai proiectului */}
                <div className="max-w-6xl mx-auto mt-6 p-6 bg-white rounded-lg shadow border border-[rgba(24,130,128,0.3)]">
                  <h2 className="text-xl font-semibold text-center mb-4 bg-gradient-to-r from-[rgba(24,130,128,0.8)] to-[rgba(110,186,77,0.8)] bg-clip-text text-transparent">
                    {locale === 'ro' ? 'Indicatori esențiali ai proiectului' : 'Key Project Indicators'}
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 rounded-lg">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-2 text-left font-semibold">ID</th>
                          <th className="border border-gray-300 p-2 text-left font-semibold">{locale === 'ro' ? 'Indicator' : 'Indicator'}</th>
                          <th className="border border-gray-300 p-2 text-left font-semibold">{locale === 'ro' ? 'Unitate' : 'Unit'}</th>
                          <th className="border border-gray-300 p-2 text-left font-semibold">{locale === 'ro' ? 'Valoare estimată' : 'Estimated Value'}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-2 font-semibold">I.1</td>
                          <td className="border border-gray-300 p-2">
                            <div className="flex justify-between items-center min-h-[3rem]">
                              <span className="text-justify">
                                {locale === 'ro'
                                  ? 'Capacitate nou instalată pentru producerea energiei din surse regenerabile (eolian, solar, hidro)'
                                  : 'New installed capacity for renewable energy production (wind, solar, hydro)'}
                              </span>
                              <span className="inline-block w-28 text-right">
                                {Number(((pvSystem ?? 0) / 1000).toFixed(2)).toLocaleString()}
                              </span>
                            </div>
                          </td>
                          <td className="border border-gray-300 p-2">MW</td>
                          <td className="border border-gray-300 p-2">
                            <span className="inline-block w-28 text-right">
                              {Number(((pvSystem ?? 0) / 1000).toFixed(2)).toLocaleString()}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2 font-semibold">I.2</td>
                          <td className="border border-gray-300 p-2">
                            <div className="flex justify-between items-center min-h-[3rem]">
                              <span className="text-justify">
                                {locale === 'ro'
                                  ? 'Reducerea anuală estimată a emisiilor de gaze cu efect de seră'
                                  : 'Estimated annual reduction of greenhouse gas emissions'}
                              </span>
                              <span className="inline-block w-28 text-right">
                                {Number((annualProductionState * 0.6119).toFixed(1)).toLocaleString()}
                              </span>
                            </div>
                          </td>
                          <td className="border border-gray-300 p-2">{locale === 'ro' ? 'tone CO₂ echiv./an' : 'tons CO₂ eq/year'}</td>
                          <td className="border border-gray-300 p-2">
                            <span className="inline-block w-28 text-right">
                              {Number((annualProductionState * 0.6119).toFixed(1)).toLocaleString()}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2 font-semibold">I.3</td>
                          <td className="border border-gray-300 p-2">
                            <div className="flex justify-between items-center min-h-[3rem]">
                              <span className="text-justify">
                                {locale === 'ro'
                                  ? 'Producția medie anuală de energie din surse regenerabile'
                                  : 'Average annual renewable energy production'}
                              </span>
                              <span className="inline-block w-28 text-right">
                                {annualProductionState.toLocaleString()}
                              </span>
                            </div>
                          </td>
                          <td className="border border-gray-300 p-2">MWh/an</td>
                          <td className="border border-gray-300 p-2">
                            <span className="inline-block w-28 text-right">
                              {annualProductionState.toLocaleString()}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2 font-semibold">I.4</td>
                          <td className="border border-gray-300 p-2">
                            <div className="flex justify-between items-center min-h-[3rem]">
                              <span className="text-justify">
                                {locale === 'ro'
                                  ? 'Producția totală de energie regenerabilă pe perioada de referință'
                                  : 'Total renewable energy production for the reference period'}
                              </span>
                              <span className="inline-block w-28 text-right">
                                {
                                  (() => {
                                    const years = 20;
                                    const degradation = 0.005; // 0.5%
                                    let totalProduction = 0;
                                    for (let i = 0; i < years; i++) {
                                      totalProduction += annualProductionState * Math.pow(1 - degradation, i);
                                    }
                                    return totalProduction.toLocaleString(undefined, {maximumFractionDigits: 0});
                                  })()
                                }
                              </span>
                            </div>
                          </td>
                          <td className="border border-gray-300 p-2">MWh</td>
                          <td className="border border-gray-300 p-2">
                            <span className="inline-block w-28 text-right">
                              {
                                (() => {
                                  const years = 20;
                                  const degradation = 0.005; // 0.5%
                                  let totalProduction = 0;
                                  for (let i = 0; i < years; i++) {
                                    totalProduction += annualProductionState * Math.pow(1 - degradation, i);
                                  }
                                  return totalProduction.toLocaleString(undefined, {maximumFractionDigits: 0});
                                })()
                              }
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2 font-semibold">I.5</td>
                          <td className="border border-gray-300 p-2">
                            <div className="flex justify-between items-center min-h-[3rem]">
                              <span className="text-justify">
                                {locale === 'ro'
                                  ? <>Ponderea estimată pentru autoconsum din producția totală<span className="text-red-500">*</span></>
                                  : <>Estimated share for self-consumption from total production<span className="text-red-500">*</span></>}
                              </span>
                              <span className="inline-block w-28 text-right">
                                {annualProductionState > 0
                                  ? Number(((selfConsumedState / annualProductionState) * 100).toFixed(1)).toLocaleString()
                                  : '0.0'}
                              </span>
                            </div>
                          </td>
                          <td className="border border-gray-300 p-2">%</td>
                          <td className="border border-gray-300 p-2">
                            <span className="inline-block w-28 text-right">
                              {annualProductionState > 0
                                ? Number(((selfConsumedState / annualProductionState) * 100).toFixed(1)).toLocaleString()
                                : '0.0'}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2 font-semibold">I.6</td>
                          <td className="border border-gray-300 p-2">
                            <div className="flex justify-between items-center min-h-[3rem]">
                              <span className="text-justify">
                                {locale === 'ro'
                                  ? 'Factorul de capacitate al instalației'
                                  : 'Plant capacity factor'}
                              </span>
                              <span className="inline-block w-28 text-right">
                                {annualProductionState > 0 && pvSystem > 0
                                  ? Number(((annualProductionState / (pvSystem * 8760)) * 100).toFixed(2)).toLocaleString()
                                  : '0.00'}
                              </span>
                            </div>
                          </td>
                          <td className="border border-gray-300 p-2">%</td>
                          <td className="border border-gray-300 p-2">
                            <span className="inline-block w-28 text-right">
                              {annualProductionState > 0 && pvSystem > 0
                                ? Number(((annualProductionState / (pvSystem * 8760)) * 100).toFixed(2)).toLocaleString()
                                : '0.00'}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-gray-600 mt-2 max-w-4xl mx-auto">
                    {locale === 'ro'
                      ? '(*) Consumul propriu trebuie să reprezinte minimum 70% din producția capacității finanțate.'
                      : '(*) Self-consumption must represent at least 70% of the production of the funded capacity.'}
                  </p>
                </div>

                {/* Card BUGETUL PROIECTULUI */}
                <div className="max-w-6xl mx-auto mt-6 p-6 bg-white rounded-lg shadow border border-[rgba(24,130,128,0.3)]">
                  <h2 className="text-xl font-semibold text-center mb-4 bg-gradient-to-r from-[rgba(24,130,128,0.8)] to-[rgba(110,186,77,0.8)] bg-clip-text text-transparent">
                    {locale === 'ro' ? 'BUGETUL PROIECTULUI' : 'PROJECT BUDGET'}
                  </h2>
                  {/* Slider și input pentru Valoarea ajutorului de stat solicitat pe MW */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {locale === 'ro'
                        ? 'Valoarea ajutorului de stat solicitat pe MW'
                        : 'Requested state aid value per MW'}
                      <span className="ml-2 font-semibold text-green-700">
                        {stateAidPerMW.toLocaleString()} EUR
                      </span>
                    </label>
                    <input
                      type="number"
                      min={1}
                      max={450000}
                      step={1}
                      value={stateAidPerMW}
                      onChange={e => {
                        let val = Number(e.target.value);
                        if (val < 1) val = 1;
                        if (val > 450000) val = 450000;
                        setStateAidPerMW(val);
                      }}
                      className="mb-2 w-full border border-gray-300 rounded px-2 py-1 text-sm text-gray-900 bg-gray-100 focus:bg-white"
                    />
                    <input
                      type="range"
                      min={1}
                      max={450000}
                      step={1}
                      value={stateAidPerMW}
                      onChange={e => setStateAidPerMW(Number(e.target.value))}
                      className="w-full h-2 bg-gray-300 rounded-full appearance-none cursor-pointer
                        [&::-webkit-slider-thumb]:appearance-none
                        [&::-webkit-slider-thumb]:h-5
                        [&::-webkit-slider-thumb]:w-5
                        [&::-webkit-slider-thumb]:bg-green-700
                        [&::-webkit-slider-thumb]:rounded-full
                        [&::-webkit-slider-thumb]:border
                        [&::-webkit-slider-thumb]:border-white
                        [&::-webkit-slider-thumb]:shadow
                        [&::-webkit-slider-thumb]:cursor-pointer
                        [&::-moz-range-thumb]:appearance-none
                        [&::-moz-range-thumb]:h-5
                        [&::-moz-range-thumb]:w-5
                        [&::-moz-range-thumb]:bg-green-700
                        [&::-moz-range-thumb]:rounded-full
                        [&::-moz-range-thumb]:border
                        [&::-moz-range-thumb]:border-white
                        [&::-moz-range-thumb]:shadow
                        [&::-moz-range-thumb]:cursor-pointer"
                    />
                  </div>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 rounded-lg">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2 text-left font-semibold">Nr. Crt.</th>
                        <th className="border border-gray-300 p-2 text-left font-semibold">{locale === 'ro' ? 'Surse de finanţare' : 'Sources of Funding'}</th>
                        <th className="border border-gray-300 p-2 text-left font-semibold">{locale === 'ro' ? 'Valoare (RON)' : 'Value (RON)'}</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-2 font-semibold">I</td>
                        <td className="border border-gray-300 p-2">
                          {locale === 'ro'
                            ? 'COST ESTIMAT TOTAL FOTOVOLTAIC + STOCARE (RON)'
                            : 'Estimated Total Photovoltaic + Storage Cost (RON)'}
                        </td>
                        <td className="border border-gray-300 p-2 font-semibold text-right">{storageCostRonState.toLocaleString()}</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 font-semibold">II</td>
                        <td className="border border-gray-300 p-2">{locale === 'ro' ? 'Valoarea neeligibilă a investiţiei (Sistemul de stocare)' : 'Non-eligible investment value (Storage system)'}</td>
                        <td className="border border-gray-300 p-2 font-semibold text-right">
                          {(storageCostRonState && pvCostRonState && storageCostRonState > pvCostRonState
                            ? (storageCostRonState - pvCostRonState)
                            : 0
                          ).toLocaleString()}
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 font-semibold">III</td>
                        <td className="border border-gray-300 p-2">{locale === 'ro' ? 'Valoarea eligibilă a investiţiei (Sistemul fotovoltaic)' : 'Eligible investment value (Photovoltaic system)'}</td>
                        <td className="border border-gray-300 p-2 font-semibold text-right">{pvCostRonState.toLocaleString()}</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 font-semibold">1</td>
                        <td className="border border-gray-300 p-2">{locale === 'ro' ? 'Valoarea ajutorului de stat solicitat' : 'Requested state aid value'}</td>
                        <td className="border border-gray-300 p-2 font-semibold text-right">
                          {stateAidTotalRON.toLocaleString(undefined, {maximumFractionDigits: 0})}
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 font-semibold">2</td>
                        <td className="border border-gray-300 p-2">{locale === 'ro' ? 'Contribuţia proprie a solicitantului (2=I-1)' : "Applicant's own contribution (2=I-1)"}</td>
                        <td className="border border-gray-300 p-2 font-semibold text-right">
                          {(Math.max(0, storageCostRonState - stateAidTotalRON)).toLocaleString(undefined, {maximumFractionDigits: 0})}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* Amortizare investitie section */}
                <div className="mt-6 max-w-md mx-auto bg-white border border-green-700 rounded-lg shadow p-6 text-center">
                  <h3 className="text-xl font-semibold mb-4 text-green-700">
                    {locale === 'ro' ? 'Amortizare investiție (ani)' : 'Investment Payback Period (years)'}
                  </h3>
                  <p className="text-4xl font-bold text-gray-900">
                    {(() => {
                      const contributie = Math.max(0, storageCostRonState - stateAidTotalRON);
                      const venituriAnuale = annualStorageIncomeState;
                      if (venituriAnuale > 0) {
                        const amortizare = contributie / venituriAnuale;
                        return amortizare.toFixed(1).toLocaleString();
                      } else {
                        return '—';
                      }
                    })()}
                  </p>
                </div>
                </div>
            </div>
            </div>
          </div>
        </div>
        {/* Contact Us card with background image */}
        <div
          className="relative max-w-4xl mx-auto h-[280px] text-green-200 rounded-xl shadow-lg overflow-hidden mt-6 px-6"
        >
          <div className="absolute inset-0 z-0 h-[280px]">
            <Image
              src="/images/contact-us.webp"
              alt="Contact background"
              layout="fill"
              objectFit="cover"
              objectPosition="center bottom"
              quality={60}
              className="rounded-xl"
              priority={false}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent" />
          </div>
          <div className="relative z-10 pt-3 px-4 text-center">
            <h2 className="text-base md:text-lg font-medium mb-1 max-w-3xl mx-auto text-green-200">
              {locale === 'ro'
                ? '„Transformă-ți consumul de energie și economisește cu sprijinul nostru. Contactează-ne pentru mai multe informatii despre cum poti accesa fondurile prin programul Fondului pentru Modernizare.”'
                : 'Transform your energy consumption and save with our support. Contact us for more information about how to access funds through the Modernization Fund program.'}
            </h2>
          </div>
          <div className="absolute bottom-6 w-full flex justify-center">
            <button
              onClick={() => setIsContactOpen(true)}
              className="inline-block font-semibold px-6 py-3 rounded-full border border-green-700 transition-colors duration-300 bg-white text-green-700 group hover:bg-[linear-gradient(90deg,_rgba(24,130,128,0.9)_0%,_rgba(24,130,128,0.9)_40%,_rgba(110,186,77,0.6)_100%)] hover:text-white"
            >
              {locale === 'ro' ? 'Contactează-ne' : 'Contact Us'}
            </button>
            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} defaultInterest="modernization_fund" />
          </div>
        </div>
      </main>
    </>
  );
}