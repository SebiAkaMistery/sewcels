

import { useState } from 'react';
import ContactModal from '../components/ContactModal';

export default function ElectricUp2() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <main className="max-w-7xl mx-auto p-6 space-y-8 text-justify">
      <h1 className="text-3xl font-bold text-gray-800">Finanțare Electric-Up 2</h1>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1: Descriere Program */}
        <div className="border rounded-lg shadow-sm p-6 bg-white">
          <h2 className="text-xl font-semibold mb-4">Descrierea programului</h2>
          <p className="text-gray-700">
            „Electric-Up 2” este a doua etapă a programului „Electric-Up” din România, care are ca scop sprijinirea întreprinderilor mici și mijlocii (IMM) și a operatorilor economici din domeniul HORECA pentru a-și instala sisteme de panouri fotovoltaice și stații de încărcare pentru vehicule electrice.
          </p>
        </div>

        {/* Card 2: Obiective */}
        <div className="border rounded-lg shadow-sm p-6 bg-white">
          <h2 className="text-xl font-semibold mb-4">Obiectivele programului</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Instalarea sistemelor fotovoltaice între 27 kWp și 150 kWp pentru consum propriu și livrare surplus în rețea.</li>
            <li>Montarea a cel puțin unei stații de încărcare de minimum 22 kW, cu minim două prize (2x11kW).</li>
            <li>Implementarea unui sistem de stocare a energiei, cu capacitate minimă 30% din energia produsă de panouri.</li>
          </ul>
        </div>

        {/* Card 3: Finanțare */}
        <div className="border rounded-lg shadow-sm p-6 bg-white">
          <h2 className="text-xl font-semibold mb-4">Condiții de finanțare</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Valoare maximă finanțare: 150.000 Euro.</li>
            <li>Ajutor financiar nerambursabil: 75%.</li>
            <li>Contribuție proprie: 25%.</li>
            <li>Minim 600 proiecte finanțate.</li>
            <li>Perioada depunere: Aprilie – Mai 2024.</li>
          </ul>
        </div>

        {/* Card 4: Beneficiari eligibili */}
        <div className="border rounded-lg shadow-sm p-6 bg-white">
          <h2 className="text-xl font-semibold mb-4">Beneficiari eligibili</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Microîntreprinderi și IMM-uri, cu excepția agriculturii, producției tutun, vin, spirtoase etc.</li>
            <li>IMM-uri din domeniul Horeca (CAEN: 5510, 5520, 5530, 5590, 5610, 5621, 5629, 5630, 9329).</li>
          </ul>
        </div>

        {/* Card 5: Cheltuieli eligibile */}
        <div className="border rounded-lg shadow-sm p-6 bg-white md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Cheltuieli eligibile</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Achiziția sistemului de panouri fotovoltaice între 27 și 150 kWp, incluzând componentele principale și echipamentele aferente.</li>
            <li>Achiziția unei stații de încărcare de minimum 22 kW, cu cel puțin două prize de încărcare.</li>
            <li>Sistem de stocare a energiei produsă, cu capacitate minimă 30% din energia generată de panouri.</li>
            <li>Sistem electric alternativ de încălzire/răcire, opțional, maxim 30% din valoarea totală eligibilă.</li>
            <li>Cheltuieli pentru proiectare și avize, până la 5% din valoarea eligibilă.</li>
            <li>Consultanță și management de proiect, până la 5% din valoarea eligibilă.</li>
            <li>Montaj și punere în funcțiune, până la 10% din valoarea eligibilă.</li>
            <li>TVA nedeductibilă (pentru neplătitori de TVA).</li>
            <li>Cheltuieli cu racordarea la rețea nu sunt eligibile.</li>
            <li>Cheltuieli efectuate după semnarea contractului de finanțare, cu excepții pentru proiectare și consultanță.</li>
          </ol>
        </div>

        {/* Card 6: Ce oferim */}
        <div className="border rounded-lg shadow-sm p-6 bg-white md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Ce îți oferim</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><strong>Consultanță tehnică și dimensionare:</strong> Soluții fotovoltaice adaptate nevoilor tale.
            </li>
            <li><strong>Proiectare, instalare și punere în funcțiune:</strong> Implementare profesională pentru performanță optimă.
            </li>
            <li><strong>Garanție și mentenanță:</strong> Suport continuu pentru o funcționare optimă.
            </li>
            <li><strong>Servicii profesionale de curățare panouri:</strong> Întreținere de top pentru sistemul tău.
            </li>
          </ul>
        </div>

        {/* Card 7: Pași pentru accesare */}
        <div className="border rounded-lg shadow-sm p-6 bg-white md:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Pași pentru accesare</h2>
          <p className="text-gray-700 mb-4">
            Înscrierea în programul guvernamental se face prin completarea unei cereri electronice, semnată de reprezentantul legal sau împuternicit (cu împuternicire notarială, dacă este cazul). După validare, vei primi un user, o parolă și un număr de identificare.
          </p>
          <p className="text-gray-700 mb-4">
            În etapa de depunere a proiectelor, va trebui să respecți criteriile tehnice și de eligibilitate, iar noi îți vom oferi sprijin pe parcurs.
          </p>
          <p className="text-gray-700">
            Raportul anual de producție fotovoltaică, în format .csv, trebuie încărcat în platforma online. Proiectele vor fi evaluate în funcție de coeficientul de performanță (CPP), criteriul principal de selecție.
          </p>
        </div>
      </section>

      {/* CTA Contact Us Button */}
      <div className="flex justify-center">
        <button
          onClick={() => setContactOpen(true)}
          className="font-semibold px-8 py-3 rounded-full border border-green-700 transition-colors duration-300 bg-white text-green-700 hover:bg-gradient-to-r hover:from-[#188282] hover:to-[#6eba4d] hover:text-white"
        >
          Contactează-ne
        </button>
      </div>

      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </main>
  );
}