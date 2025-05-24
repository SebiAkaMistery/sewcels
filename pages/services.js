import ContactModal from '../components/ContactModal';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Head from 'next/head';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, ChartDataLabels);

export default function Services() {
  const { locale } = useRouter();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isContactOpen, setContactOpen] = useState(false);
  const [monthlyData, setMonthlyData] = useState(new Array(12).fill(0));

  useEffect(() => {
    const defaultMonthly = 10000;
    const pv = Math.round(defaultMonthly / 100);
    const annualProduction = pv * 1250;
    const monthPcts = [4.16, 5.67, 8.85, 9.87, 10.77, 10.55, 10.98, 10.10, 8.18, 6.42, 4.29, 3.12];
    const updatedData = monthPcts.map((pct) => Math.round(annualProduction * (pct / 100)));
    setMonthlyData(updatedData);

    // --- Also update all calculated values on initial load ---
    // Only run if DOM is available (client-side)
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const selfPercent = 50;
      const buyPrice = 1;
      const sellPrice = 0.5;
      const selfConsumption = Math.round(annualProduction * selfPercent / 100);
      const surplus = annualProduction - selfConsumption;
      const saving = Math.round(selfConsumption * buyPrice);
      const income = Math.round(surplus * sellPrice);
      const totalPvIncome = saving + income;
      const storageIncome = Math.round(annualProduction * buyPrice);

      // Payback period calculation
      const paybackPv = totalPvIncome > 0 ? (pv * 700 * 5 / totalPvIncome).toFixed(1) : 0;
      const paybackBess = storageIncome > 0 ? (pv * 1100 * 5 / storageIncome).toFixed(1) : 0;

      // Defensive: Only set if elements exist
      const setText = (id, value) => {
        const el = document.getElementById(id);
        if (el) el.textContent = value;
      };
      setText('annualPVIncome', totalPvIncome.toLocaleString());
      setText('annualStorageIncome', storageIncome.toLocaleString());
      setText('selfConsumed', selfConsumption.toLocaleString());
      setText('surplusEnergy', surplus.toLocaleString());
      setText('annualProduction', annualProduction.toLocaleString());
      setText('pvCostEur', (pv * 700).toLocaleString());
      setText('pvCostRon', (pv * 700 * 5).toLocaleString());
      setText('pvBessCostEur', (pv * 1100).toLocaleString());
      setText('pvBessCostRon', (pv * 1100 * 5).toLocaleString());
      setText('selfSaving', saving.toLocaleString());
      setText('injectedIncome', income.toLocaleString());
      setText('paybackPv', paybackPv);
      setText('paybackBess', paybackBess);
    }
  }, []);

  const services = [
    {
      key: 'efficiency',
      title: {
        ro: 'Servicii de Eficiență Energetică',
        en: 'Energy Efficiency Services',
      },
      image: '/icons/eficienta-energetica.svg',
      content: {
        ro: "Consultanță completă pentru optimizarea consumului energetic, soluții de producție regenerabilă (PV + BESS), intermediere de proiecte și avizare ANRE.\n\n• Proiecte fotovoltaice on-grid / off-grid\n• Sisteme de stocare (BESS) și integrare hibridă\n• Documentații de specialitate în relația cu Operatorii de Distribuție\n• Documentație și obținere atestate ANRE operatori economici\n• Structurare și negociere PPA (Power Purchase Agreements)\n• Consultanță pentru prosumatori (clienți casnici sau industriali)\n• Audit energetic și simulări de eficiență energetică\n• Intermediere vânzare/cumpărare parcuri operaționale, proiecte ready-to-build și greenfield\n\nSEWCELS oferă o abordare personalizată, adaptată fiecărui profil de investitor — local sau internațional.",
        en: "Complete consulting for energy optimization, renewable generation (PV + BESS), project brokerage, and ANRE licensing.\n\n• On-grid / off-grid PV project support\n• BESS storage systems and hybrid integration\n• Specialized documentation for Distribution Operators\n• Documentation and acquisition of ANRE certifications for economic operators\n• Structuring and negotiation of PPA contracts\n• Prosumers advisory (residential & industrial clients)\n• Energy audits and efficiency simulations\n• Intermediation of operational parks, ready-to-build and greenfield projects\n\nSEWCELS provides a tailored approach adapted to each investor profile — local or international."
      }
    },
    {
      key: 'funding_stateaid',
      title: {
        ro: 'Fonduri Nerambursabile & Ajutoare de Stat',
        en: 'Non-reimbursable Funds & State Aid',
},
      image: '/icons/fonduri-nerambursabile.svg',
      content: {
        ro: "Consultanță completă pentru PNRR, Electric-Up, Fondul de Modernizare, Digitalizare IMM, HG 807/2014 și alte scheme de ajutor de stat.\n\n• Monitorizare apeluri, eligibilitate, punctaj\n• Redactare documentații complete (planuri, devize, SF/DALI)\n• Depunere proiecte și relaționare cu autoritățile\n• Managementul integral al proiectului și execuției\n\nLucrăm pe bază de abonament sau comision de succes, cu accent pe sustenabilitate și impact economic.",
        en: "Full consulting for PNRR, Electric-Up, Modernization Fund, SME Digitization, HG 807/2014, and other state aid schemes.\n\n• Monitoring calls, eligibility, scoring\n• Drafting full applications (plans, budgets, feasibility)\n• Submissions and authority interface\n• Full implementation and execution management\n\nWe work on a retainer or success-fee basis, with focus on sustainability and measurable economic impact."
      }
    },
    {
      key: 'procurement',
      title: {
        ro: 'Achiziții Publice & Licitații',
        en: 'Public Procurement & Tenders'
      },
      image: '/icons/achizitii-publice.svg',
      content: {
        ro: "Servicii integrate pentru participarea la achiziții publice – inclusiv licitații SEAP/SICAP, studii și documentații tehnice.\n\n• Dosare de licitație pentru SEAP/SICAP\n• Studii de fezabilitate, devize, documentații DALI\n• Consultanță pentru IMM-uri, ONG-uri și instituții publice\n\nAvem o experiență semnificativă și recunoscută în acest domeniu, atât în sectorul public, cât și în cel privat.",
        en: "Integrated services for public procurement – including SEAP/SICAP tenders, studies and technical documentation.\n\n• Tender file preparation (SEAP/SICAP)\n• Feasibility studies, budgeting, DALI documentation\n• Consulting for SMEs, NGOs, and public authorities\n\nProven and recognized experience in both public and private tender projects."
      }
    },
    {
      key: 'capital',
      title: {
        ro: 'Investitori & Intermediere Bancară',
        en: 'Investors & Banking Intermediation'
      },
      image: '/icons/business-angels.svg',
      content: {
        ro: "Acces la surse de finanțare private și bancare pentru co-finanțare, contribuție proprie sau investiții strategice.\n\n• Conectare cu Business Angels și fonduri active în România și Europa\n• Întocmire planuri, prezentări, cash-flow, asistență la negociere\n• Consultanță pentru atragerea de capital și optimizarea relației bancare\n\nParteneriate solide cu instituții financiare și rețele de investitori.",
        en: "Access to private and banking funding for co-financing, equity contributions, or strategic investments.\n\n• Matching with Business Angels and funds across Romania and Europe\n• Preparation of business plans, decks, cash flow projections, and negotiation support\n• Consulting on capital attraction and banking relationship optimization\n\nStrong partnerships with financial institutions and investor networks."
      }
    }
  ];

  // Steps and layout remain unchanged from previous version...
  // (pentru eficiență, păstrăm tot ce ai deja funcțional pentru pași și CTA)

  // Recalculation function for profitability calculator
  function recalculate() {
    // Use displayed value, not slider value, for monthly
    const value = document.getElementById('monthlyValue').textContent.replace(/\D/g, '');
    const pv = Math.round(value / 100);
    const storage = pv * 2;

    document.getElementById('recommendedPv').textContent = pv;
    document.getElementById('recommendedStorage').textContent = storage;

    // Continuous pricing model
    let eurPerKwp, eurPerKwpBess;

    if (pv <= 50) {
      eurPerKwp = 700;
      eurPerKwpBess = 1100;
    } else if (pv >= 100) {
      eurPerKwp = 500;
      eurPerKwpBess = 800;
    } else {
      eurPerKwp = 700 - ((pv - 50) * 4);      // Linearly decrease from 700 to 500
      eurPerKwpBess = 1100 - ((pv - 50) * 6); // Linearly decrease from 1100 to 800
    }

    const pvCostEUR = pv * eurPerKwp;
    const bessCostEUR = pv * eurPerKwpBess;
    const annualProduction = pv * 1250;
    const selfPercent = parseFloat(document.getElementById('selfValue').textContent) || 0;
    const selfConsumption = Math.round(annualProduction * selfPercent / 100);
    const surplus = annualProduction - selfConsumption;
    const buyPrice = parseFloat(document.getElementById('buyPrice').textContent) || 0;
    const sellPrice = parseFloat(document.getElementById('sellPrice').textContent) || 0;
    const saving = Math.round(selfConsumption * buyPrice);
    const income = Math.round(surplus * sellPrice);
    const totalPvIncome = saving + income;
    const storageIncome = Math.round(annualProduction * buyPrice);
    const paybackPv = totalPvIncome > 0 ? (pvCostEUR * 5 / totalPvIncome).toFixed(1) : 0;
    const paybackBess = storageIncome > 0 ? (bessCostEUR * 5 / storageIncome).toFixed(1) : 0;

    document.getElementById('paybackPv').textContent = paybackPv;
    document.getElementById('paybackBess').textContent = paybackBess;
    document.getElementById('annualPVIncome').textContent = totalPvIncome.toLocaleString();
    document.getElementById('annualStorageIncome').textContent = storageIncome.toLocaleString();
    document.getElementById('selfConsumed').textContent = selfConsumption.toLocaleString();
    document.getElementById('surplusEnergy').textContent = surplus.toLocaleString();
    document.getElementById('annualProduction').textContent = annualProduction.toLocaleString();
    document.getElementById('pvCostEur').textContent = pvCostEUR.toLocaleString();
    document.getElementById('pvCostRon').textContent = (pvCostEUR * 5).toLocaleString();
    document.getElementById('pvBessCostEur').textContent = bessCostEUR.toLocaleString();
    document.getElementById('pvBessCostRon').textContent = (bessCostEUR * 5).toLocaleString();
    document.getElementById('selfSaving').textContent = saving.toLocaleString();
    document.getElementById('injectedIncome').textContent = income.toLocaleString();
    
    // Dynamically populate each month with its share of the annual production
    const monthPcts = [4.16, 5.67, 8.85, 9.87, 10.77, 10.55, 10.98, 10.10, 8.18, 6.42, 4.29, 3.12];
    const updatedData = monthPcts.map((pct) => Math.round(annualProduction * (pct / 100)));
    setMonthlyData(updatedData);
  }

  return (
    <div className="bg-white text-gray-800 py-12 px-6 md:px-16">
      <Head>
        <title>{locale === 'ro' ? 'Servicii SEWCELS - Consultanță, energie și finanțare' : 'SEWCELS Services - Consulting, Energy & Funding'}</title>
        <meta
          name="description"
          content={
            locale === 'ro'
              ? 'Gama completă de servicii SEWCELS: eficiență energetică, fonduri nerambursabile, achiziții publice și intermediere financiară.'
              : 'SEWCELS full service offering: energy efficiency, grants, public procurement and financial intermediation.'
          }
        />
        <meta property="og:title" content="SEWCELS - Servicii" />
        <meta
          property="og:description"
          content={
            locale === 'ro'
              ? 'Soluții personalizate pentru proiecte verzi și sustenabile, adaptate nevoilor fiecărui client.'
              : 'Tailored solutions for green and sustainable projects, adapted to each client’s needs.'
          }
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href={`https://sewcels.ro/${locale === 'ro' ? 'ro' : 'en'}/services`}
        />
      </Head>
      <h1 className="text-4xl font-bold text-blue-900 text-center mb-4">
        {locale === 'ro' ? 'Serviciile Noastre' : 'Our Services'}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {services.map(({ key, title, image, content }, idx) => (
          <div
            key={key}
            className={`flex flex-row items-start group rounded-[10px] border border-[rgb(87,179,62)] text-[rgb(34,38,37)] font-[DM Sans] text-[16px] leading-[27.2px] transition-all duration-400 ease w-full overflow-hidden px-4 py-4 hover:bg-[linear-gradient(90deg,_rgba(24,130,128,0.9)_0%,_rgba(24,130,128,0.9)_40%,_rgba(110,186,77,0.6)_100%)] hover:bg-cover hover:bg-no-repeat hover:bg-center ${idx % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}
          >
            <div className="w-[80px] h-[80px] relative mr-4 flex-shrink-0">
              <Image
                src={image}
                alt={title[locale]}
                layout="fill"
                objectFit="contain"
                className="rounded-md"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-800 mb-2 transition-colors duration-0 group-hover:text-white">{title[locale]}</h2>
              <p className="text-gray-700 text-[15px] leading-relaxed whitespace-pre-line transition-colors duration-0 group-hover:text-white">
                {content[locale]}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full flex flex-col items-stretch group bg-white rounded-[10px] border border-[rgb(87,179,62)] text-[rgb(34,38,37)] font-[DM Sans] text-[16px] leading-[27.2px] transition-all duration-400 ease overflow-hidden px-4 py-4 hover:bg-[linear-gradient(90deg,_rgba(24,130,128,0.9)_0%,_rgba(24,130,128,0.9)_40%,_rgba(110,186,77,0.6)_100%)] hover:bg-cover hover:bg-no-repeat hover:bg-center">
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
                <label className="block text-sm font-medium text-gray-700 mb-1 flex justify-between items-center">
                  <span>{locale === 'ro' ? 'Consum lunar (kWh)' : 'Monthly consumption (kWh)'}</span>
                  <span
                    id="monthlyValue"
                    className="inline-block bg-white border border-gray-300 rounded px-2 py-0.5 text-sm font-semibold text-gray-800"
                  >10000 kWh</span>
                </label>
                <input
                  type="range"
                  name="monthly"
                  min="1000"
                  max="100000"
                  step="1000"
                  defaultValue="10000"
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
                  onInput={(e) => {
                    const value = e.target.value;
                    document.getElementById('monthlyValue').textContent = `${Number(value).toLocaleString()} kWh`;
                    recalculate();
                  }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 flex justify-between items-center">
                  <span>{locale === 'ro' ? 'Autoconsum (%)' : 'Self-consumption (%)'}</span>
                  <span
                    id="selfValue"
                    className="inline-block bg-white border border-gray-300 rounded px-2 py-0.5 text-sm font-semibold text-gray-800"
                  >50%</span>
                </label>
                <input
                  type="range"
                  name="autoconsum"
                  min="0"
                  max="100"
                  defaultValue="50"
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
                  onInput={(e) => {
                    document.getElementById('selfValue').textContent = `${e.target.value}%`;
                    recalculate();
                  }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 flex justify-between items-center">
                  <span>{locale === 'ro' ? 'Preț energie achiziționată (RON/kWh)' : 'Purchased electricity price (RON/kWh)'}</span>
                  <span
                    id="buyPrice"
                    className="inline-block bg-white border border-gray-300 rounded px-2 py-0.5 text-sm font-semibold text-gray-800"
                  >1 RON/kWh</span>
                </label>
                <input
                  type="range"
                  name="buyPrice"
                  min="1"
                  max="3"
                  step="0.1"
                  defaultValue="1"
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
                  onInput={(e) => {
                    document.getElementById('buyPrice').textContent = `${e.target.value} RON/kWh`;
                    recalculate();
                  }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 flex justify-between items-center">
                  <span>{locale === 'ro' ? 'Preț energie injectată (RON/kWh)' : 'Injected electricity price (RON/kWh)'}</span>
                  <span
                    id="sellPrice"
                    className="inline-block bg-white border border-gray-300 rounded px-2 py-0.5 text-sm font-semibold text-gray-800"
                  >0.5 RON/kWh</span>
                </label>
                <input
                  type="range"
                  name="sellPrice"
                  min="0.5"
                  max="3"
                  step="0.1"
                  defaultValue="0.5"
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
                  onInput={(e) => {
                    document.getElementById('sellPrice').textContent = `${e.target.value} RON/kWh`;
                    recalculate();
                  }}
                />
              </div>
            </form>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white p-4 rounded-lg shadow text-center text-gray-800">
                <h4 className="text-lg font-semibold mb-2">
                  {locale === 'ro' ? 'Recomandări preliminare' : 'Preliminary Recommendations'}
                </h4>
                <p>
                  {locale === 'ro' ? 'Sistem fotovoltaic recomandat:' : 'Recommended PV system:'} <span id="recommendedPv">100</span> kWp
                </p>
                <p>
                  {locale === 'ro' ? 'Capacitate ideală sistem stocare BESS:' : 'Ideal BESS storage system capacity:'} <span id="recommendedStorage">200</span> kWh
                </p>
              </div>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white p-4 rounded-lg shadow text-center text-gray-800">
                <h4 className="text-lg font-semibold mb-2">
                  {locale === 'ro' ? 'Cheltuieli estimate' : 'Estimated Expenses'}
                </h4>
                <p>
                  {locale === 'ro' ? 'Cost estimat sistem fotovoltaic: ' : 'Estimated PV system cost: '}
                  <span id="pvCostEur">50,000</span> EUR / <span id="pvCostRon">250,000</span> RON
                </p>
                <p>
                  {locale === 'ro' ? 'Cost estimat PV + stocare BESS: ' : 'Estimated PV + BESS cost: '}
                  <span id="pvBessCostEur">80,000</span> EUR / <span id="pvBessCostRon">400,000</span> RON
                </p>
              </div>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white p-4 rounded-lg shadow text-center text-gray-800">
                <h4 className="text-lg font-semibold mb-2">
                  {locale === 'ro' ? 'Producție anuală estimată ' : 'Estimated Annual Production '}
                </h4>
                <p>
                  {locale === 'ro' ? 'Producție totală estimată: ' : 'Estimated total production: '}
                  <span id="annualProduction">125,000</span> kWh
                </p>
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
                        legend: {
                          display: false,
                        },
                        datalabels: {
                          anchor: 'center',
                          align: 'center',
                          color: '#fff',
                          font: {
                            weight: 'bold',
                            size: 12,
                          },
                          rotation: -90,
                          formatter: (value) => value.toLocaleString(),
                        },
                      },
                      scales: {
                        y: {
                          beginAtZero: true,
                          ticks: {
                            stepSize: 1000,
                          },
                        },
                      },
                    }}
                  />
                </div>
                <div className="max-w-3xl mx-auto mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0 text-center text-gray-800 bg-white rounded-lg shadow overflow-hidden">
                    <div className="p-4">
                      <p className="font-medium">
                        {locale === 'ro' ? 'Producție autoconsumată estimată:' : 'Estimated Self-Consumed Production:'}
                      </p>
                      <p className="text-lg font-semibold"><span id="selfConsumed">62,500</span> kWh</p>
                    </div>
                    <div className="p-4 border-t md:border-t-0 md:border-l">
                      <p className="font-medium">
                        {locale === 'ro' ? 'Surplus energetic estimat:' : 'Estimated Energy Surplus:'}
                      </p>
                      <p className="text-lg font-semibold"><span id="surplusEnergy">62,500</span> kWh</p>
                    </div>
                  </div>
                </div>
                {/* End of previous 2-column block */}
      {/* Standalone block for Economie din autoconsum / Venit din energia injectată */}
                <div className="max-w-3xl mx-auto mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0 text-center text-gray-800 bg-gray-50 rounded-lg shadow overflow-hidden">
                    <div className="p-4">
                      <p className="font-medium">
                        {locale === 'ro' ? 'Economie din autoconsum:' : 'Savings from Self-Consumption:'}
                      </p>
                      <p className="text-lg font-semibold"><span id="selfSaving">62,500</span> RON</p>
                    </div>
                    <div className="p-4 border-t md:border-t-0 md:border-l">
                      <p className="font-medium">
                        {locale === 'ro' ? 'Venit din energia injectată:' : 'Revenue from Injected Energy:'}
                      </p>
                      <p className="text-lg font-semibold"><span id="injectedIncome">62,500</span> RON</p>
                    </div>
                  </div>
                </div>
                <div className="max-w-3xl mx-auto mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0 text-center text-gray-800 bg-white rounded-lg shadow overflow-hidden">
                    <div className="p-4">
                      <p className="font-medium">
                        {locale === 'ro' ? 'Venituri anuale estimate din sistemul Fotovoltaic:' : 'Estimated Annual Revenue from PV System:'}
                      </p>
                      <p className="text-lg font-semibold"><span id="annualPVIncome">125,000</span> RON</p>
                    </div>
                    <div className="p-4 border-t md:border-t-0 md:border-l">
                      <p className="font-medium">
                        {locale === 'ro' ? 'Venituri anuale estimate cu sistem de stocare:' : 'Estimated Annual Revenue with Storage:'}
                      </p>
                      <p className="text-lg font-semibold"><span id="annualStorageIncome">125,000</span> RON</p>
                    </div>
                  </div>
                </div>
                <div className="max-w-3xl mx-auto mt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0 text-center text-gray-800 bg-gray-50 rounded-lg shadow overflow-hidden">
                    <div className="p-4">
                      <p className="font-medium">
                        {locale === 'ro' ? 'Amortizare investiție doar cu PV:' : 'Payback Period (PV only):'}
                      </p>
                      <p className="text-lg font-semibold"><span id="paybackPv">0</span> {locale === 'ro' ? 'ani' : 'years'}</p>
                    </div>
                    <div className="p-4 border-t md:border-t-0 md:border-l">
                      <p className="font-medium">
                        {locale === 'ro' ? 'Amortizare investiție cu sistem de stocare:' : 'Payback Period (PV + Storage):'}
                      </p>
                      <p className="text-lg font-semibold"><span id="paybackBess">0</span> {locale === 'ro' ? 'ani' : 'years'}</p>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
    </div>

      </div> {/* close main wrapper div */}

      <div
        className="relative max-w-4xl mx-auto h-[280px] text-white rounded-xl shadow-lg overflow-hidden mt-6 px-6"
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
        <div className="relative z-10 pt-4 px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            {locale === 'ro' ? 'Suntem aici pentru orice întrebare' : 'We’re here for any questions'}
          </h2>
        </div>
        <div className="absolute bottom-6 w-full flex justify-center">
          <button
            onClick={() => setContactOpen(true)}
            className="inline-block font-semibold px-6 py-3 rounded-full border border-green-700 transition-colors duration-300 bg-white text-green-700 group hover:bg-[linear-gradient(90deg,_rgba(24,130,128,0.9)_0%,_rgba(24,130,128,0.9)_40%,_rgba(110,186,77,0.6)_100%)] hover:text-white"
          >
            {locale === 'ro' ? 'Contactează-ne' : 'Contact Us'}
          </button>
          <ContactModal isOpen={isContactOpen} onClose={() => setContactOpen(false)} />
        </div>
      </div>
      {/* ContactModal is now handled above, modal JSX removed */}
    </div>
  );
} // End of Services component

export async function getServerSideProps({ locale }) {
  const { serverSideTranslations } = await import('next-i18next/serverSideTranslations');
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}