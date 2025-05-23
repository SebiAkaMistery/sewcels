import Head from 'next/head';
import { useRouter } from 'next/router';

export default function PoliticaConfidentialitate() {
  const { locale } = useRouter();
  return (
    <div className="bg-white text-gray-900 py-12 px-6 md:px-20">
      <Head>
        <title>{locale === 'ro' ? 'Politica de Confidențialitate - SEWCELS' : 'Privacy Policy - SEWCELS'}</title>
        <meta
          name="description"
          content={
            locale === 'ro'
              ? 'Citește Politica de Confidențialitate SEWCELS. Află cum colectăm, utilizăm și protejăm datele tale personale în acord cu GDPR.'
              : 'Read SEWCELS Privacy Policy. Learn how we collect, use, and protect your personal data in accordance with GDPR.'
          }
        />
        <meta property="og:title" content={locale === 'ro' ? 'Politica de Confidențialitate SEWCELS' : 'SEWCELS Privacy Policy'} />
        <meta
          property="og:description"
          content={
            locale === 'ro'
              ? 'Informații despre prelucrarea datelor personale, cookie-uri și drepturile tale conform GDPR.'
              : 'Information on personal data processing, cookies, and your rights under GDPR.'
          }
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://sewcels.ro/${locale === 'ro' ? 'ro' : 'en'}/politica-confidentialitate`} />
      </Head>
      <div className="max-w-5xl mx-auto text-sm leading-relaxed text-justify">
        {locale === 'ro' ? (
          <>
            <h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Politica de Confidențialitate
            </h1>
            <p>
              S.C. SEWCELS S.R.L., cu sediul social în Oradea, Str. Paltinului, Nr. 6, jud. Bihor,
              înmatriculată la Registrul Comerţului sub nr. J05/134/2019, având C.U.I. RO40423719,
              email: office@sewcels.ro, este deplin răspunzătoare de procesarea datelor cu caracter
              personal pe care le colectează în desfășurarea cotidiană a activităților sale și vă
              garantează protecția acestor date conform Regulamentului (UE) 679/2016 (GDPR).
              Prezentul document explică tipul de date personale pe care le procesăm, scopul și
              temeiul pentru care le procesăm și durata pentru care păstrăm aceste date.
            </p>
            <h2 className="text-xl font-semibold mt-10 mb-4 text-blue-900">1. INFORMATII GENERALE</h2>
            <p className="mb-4">
              1.1. SEWCELS este un operator de date cu caracter personal, asa cum este definit de legislatia in vigoare,
              mai exact, Regulamentul GDPR cunoscut sub acronimul G.D.P.R. Aceasta inseamna ca detine controlul datelor
              cu caracter personal colectate si decide asupra modului de prelucrare. Drept urmare, Compania a implementat
              in procesele de afaceri o serie de politici, proceduri, masuri tehnice si organizationale pentru securizarea
              acestor date si pentru a asigura respectarea drepturilor persoanelor vizate.
            </p>
            <h2 className="text-xl font-semibold mt-10 mb-4 text-blue-900">2. DATE CU CARACTER PERSONAL PRELUCRATE</h2>
            <p className="mb-4">
              SEWCELS prelucreaza date cu caracter personal despre dumneavoastra prin mai multe metode:
            </p>
            <p className="mb-4">
              <strong>2.1. Surse publice</strong> SEWCELS colecteaza date financiare despre persoane juridice si date cu caracter personal despre actionarii, administratorii, reprezentantii legali si cenzorii acestor persoane juridice din surse publice precum, dar fara a fi limitate la acestea: Registrul Comerțului, Monitorul Oficial, ANAF, Ministerul de Finanțe, Buletinul Procedurilor de Insolvență, Arhiva Electronică de Garanții Reale Mobiliare, Ministerul Justitiei, etc..
            </p>
            <p className="mb-4">
              <strong>2.2. Surse electronice</strong> Atunci cand vizitati website-ul SEWCELS https://www.sewcels.ro/ vom colecta informatii despre dumneavoastra utilizand fisiere denumite “cookies”, fisiere de mici dimensiuni pe echipamentul dumneavoastra. Cookie-urile nu sunt virusi, ci fisiere de date care ne permit sa va identificam la urmatoarea vizita pe website-ul nostru, pentru a imbunatati si personaliza serviciile pe care vi le oferim prin intermediul website-ului nostru. Mai multe detalii puteti citi in politica noastra de cookie-uri (asta va urma sa o definitivam si punem aici link ulterior).
            </p>
            <p className="mb-4">
              Utilizăm cookie-uri esențiale și analitice pentru a asigura funcționalitatea site-ului și pentru a înțelege modul în care utilizatorii interacționează cu paginile noastre. Cookie-urile esențiale sunt necesare pentru funcționarea corectă a site-ului, în timp ce cele analitice ne ajută să îmbunătățim performanța generală. Puteți controla preferințele privind cookie-urile din setările browserului dumneavoastră.
            </p>
            <p className="mb-4">
              Atunci cand doriti sa aplicati la un post de lucru vacant si ne transmiteti prin e-mail CV-ul si/sau scrisoarea de intentie, vom colecta si prelucra informatiile transmise. Mai multe informatii despre prelucrarea datelor in acest proces puteti citi Notă de informare privind prelucrarea datelor în procesul de recrutare on-line.
            </p>
            <p className="mb-4">
              Atunci cand transmiteti un e-mail despre o posibila comanda catre unul dintre reprezentantii SEWCELS.
            </p>
            <p className="mb-4">
              <strong>2.3. Consimtamant</strong> SEWCELS va putea sa prelucreze datele dumneavoastra in baza consimtamantului expres si liber exprimat. Prin consimtamant al persoanei vizate intelegem orice manifestare de voinţă liberă, specifică, informată şi lipsită de ambiguitate a persoanei vizate prin care aceasta acceptă, printr-o declaraţie sau printr-o acţiune fără echivoc, ca datele cu caracter personal care o privesc să fie prelucrate.
            </p>
            <h2 className="text-xl font-semibold mt-10 mb-4 text-blue-900">3. SCOPUL SI LEGALITATEA PRELUCRARII DATELOR CU CARACTER PERSONAL</h2>
            <p className="mb-4">
              SEWCELS utilizeaza datele dumneavostra cu caracter personal in mod legal, in conformitate cu prevederile legale aplicabile si in totala conformitate cu prevederile Regulamentului GDPR, specific art. 6.1, astfel:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li><strong>3.1</strong> In baza consimtamantului dumneavoastra, pentru: Oferte publicitare;</li>
              <li><strong>3.2</strong> In baza interesului legitim, pentru:
                <ul className="list-disc list-inside ml-6">
                  <li>Comunicarea cu dumneavoastra ;</li>
                  <li>Informari despre compania SEWCELS ;</li>
                  <li>Informari despre produsele si serviciile SEWCELS ;</li>
                  <li>Pentru dezvoltarea serviciilor noastre potrivit nevoilor si cerintelor dumneavoastra;</li>
                  <li>Pentru operarea eficienta a sistemelor si aplicatiilor IT&C de colectare, stocare si procesare a informatiilor comerciale;</li>
                  <li>Pentru imbunatatirea securitatii sistemelor si aplicatiilor IT&C;</li>
                  <li>Pentru comunicari privind evenimentele SEWCELS (inclusiv poze sau filmari de le evenimentele SEWCELS)</li>
                </ul>
              </li>
              <li><strong>3.3</strong> Pentru executarea contractelor comerciale:
                <ul className="list-disc list-inside ml-6">
                  <li>In intocmirea si transmiterea de oferte comerciale pentru contracte comerciale;</li>
                  <li>In livrarea serviciilor contractate si pentru indeplinirea obligatiilor contractuale;</li>
                  <li>Pentru suport tehnic necesar executarii contractului.</li>
                </ul>
              </li>
              <li><strong>3.4</strong> Pentru indeplinirea obligatiilor noastre legale:
                <ul className="list-disc list-inside ml-6">
                  <li>In cazul cererilor primite de la autoritatile de stat competente vom coopera si furniza date, inclusiv date cu caracter personal, cu verificarea atenta a legalitatii acestor cereri;</li>
                  <li>Vom coopera cu autoritatile competente in situatii care implica activitati ilegale, activitati de frauda s.a., furnizand date (inclusiv date cu caracter personal) dupa ce verificam legalitatea cererilor.</li>
                </ul>
              </li>
              <li><strong>3.5</strong> Pentru apararea drepturilor noastre legale:
                <ul className="list-disc list-inside ml-6">
                  <li>In cazul încălcării drepturilor SEWCELS, a utilizatorilor, a altor candidați, a angajaților și a altor persoane vizate, sau în cazurile prevăzute de lege.</li>
                </ul>
              </li>
            </ul>
            <p className="mb-4">
              In cazul in care vom avea nevoie sa prelucram datele dumneavoastra cu caracter personal in alte scopuri decat cele descrise in acest document, o vom face doar cu informarea sau consimtamantul dumneavoastra aprioric (exprimat in prealabil).
            </p>
            <h2 className="text-xl font-semibold mt-10 mb-4 text-blue-900">4. MODUL DE STOCARE SI PRELUCRARE A DATELOR CU CARACTER PERSONAL. MASURILE DE SECURITATE.</h2>
            <p className="mb-4">
              Datele cu caracter personal colectate de catre SEWCELS sunt prelucrate in Uniunea Europeana, in locatiile SEWCELS, la furnizori de servicii a infrastructurii IT&amp;C si/sau furnizori de aplicatii specifice. In dezvoltarea infrastructurii IT&amp;C SEWCELS a tinut cont de cele mai bune practici din domeniu, astfel:
            </p>
            <ul className="list-disc list-inside mb-4 ml-6">
              <li>Perimetrul virtual al organizatiei este securizat cu echipamente de tip firewall;</li>
              <li>Perimetrul fizic al organizatiei este securizat cu echipamente de tip CCTV;</li>
              <li>Aplicatiile specifice activitatii SEWCELS sunt actualizate periodic pe masura ce furnizorii de tehnologie publica patch-uri;</li>
              <li>Serverele si echipamentele utilizatorilor interni sunt protejate cu aplicatii anti-virus si anti-malware;</li>
              <li>Echipamentele utilizatorilor interni si anumite baze de date critice vor fi protejate cu aplicatii de criptare, daca este cazul;</li>
              <li>Accesul la sisteme si aplicatii al utilizatorilor este controlat si monitorizat;</li>
              <li>Infrastructura critica de comunicatii este asigurata cu sisteme de alimentare cu energie de urgenta.</li>
            </ul>
            <p className="mb-4">
              SEWCELS nu va face publice si nu va transfera catre entitati neautorizate datele dumneavoastra personale.
            </p>
            <h2 className="text-xl font-semibold mt-10 mb-4 text-blue-900">5. DURATA STOCARII DATELOR CU CARACTER PERSONAL</h2>
            <p className="mb-4">
              Datele dumneavostra cu caracter personal vor fi stocate strict pe durata necesara indeplinirii scopului pentru care au fost colectate sau pe durata impusa de indeplinirea obligatiilor legale. De exemplu, datele din formularele de contact se vor pastra 6 luni de la momentul transmiterii acestora. Pentru contactele comerciale, dupa inchierea acestora, datele personale se vor pastra pe o perioada de 36 luni pentru realizarea unor drepturi legale, daca este cazul. De asemenea, dupa incetarea contractului, conform legislatiei fiscale aplicabila platilor, datele personale din instrumente de plata si contract vor fi stocate pe o perioada de 10 ani. Daca nu intervine un contract intre dumneavoastra si SEWCELS, datele dumneavoastra vor fi pastrate pentru o perioada de 12 luni. Dupa expirarea perioadei de stocare, datele dumneavostra cu caracter personal vor fi sterse.
            </p>
            <h2 className="text-xl font-semibold mt-10 mb-4 text-blue-900">6. ACCESUL TERTILOR LA INFORMATIILE DUMNEAVOASTRA</h2>
            <p className="mb-4">
              Informațiile nu sunt împărtășite cu companii terțe, cu exceptia furnizorilor de servicii ce fac site-ul nostru utilizabil și a furnizorilor indispensabili în executarea obligațiilor contractuale asumate. SEWCELS poate uneori să fie obligată să dezvăluie datele dumneavoastră unor terțe părți, cum ar fi autoritățile locale, instanțele judecătorești, organismele de reglementare și / sau agențiile de aplicare a legii în scopul respectării legilor și reglementărilor aplicabile sau ca răspuns la o procedură legală. Vom împărtăși, de asemenea, informațiile dumneavoastră personale cu terțe părți dacă avem consimțământul dumneavoastră sau pentru a detecta, a preveni sau a aborda în alt mod fraude, breșe de securitate sau probleme tehnice, sau pentru a proteja compania împotriva încălcării drepturilor de proprietate sau împotriva încălcării siguranței SEWCELS, a utilizatorilor, a altor candidați, a angajaților și a altor persoane vizate, sau în cazurile prevăzute de lege. Vom dezvălui datele dumneavoastră cu caracter personal doar în scopurile și acelor terțe părți, după cum este descris mai jos. SEWCELS va lua măsurile necesare pentru a se asigura că datele dumneavoastră cu caracter personal sunt prelucrate, securizate și transferate conform legii în vigoare.
            </p>
            <h2 className="text-xl font-semibold mt-10 mb-4 text-blue-900">7. FURNIZORII EXTERNI DE SERVICII</h2>
            <p className="mb-4">
              Acolo unde este necesar, vom însărcina alte companii și persoane fizice să îndeplinească anumite sarcini care contribuie la serviciile noastre, în numele nostru. Putem, de exemplu, să furnizăm, date cu caracter personal către agenți, contractori sau parteneri pentru găzduirea bazelor noastre de date, pentru serviciile de prelucrare a datelor sau pentru a vă trimite informații pe care le-ați solicitat. Vom partaja sau pune la dispoziţie furnizorilor externi de servicii acele informații, în măsura necesară, pentru a procesa solicitările dumneavoastra. Aceste informații nu pot fi folosite de aceştia pentru orice alte scopuri, în special nu pentru scopurile lor sau pentru terțe părți. Furnizorii de servicii externi SEWCELS sunt obligaţi prin contract să respecte confidențialitatea datelor cu caracter personal.
            </p>
            <h2 className="text-xl font-semibold mt-10 mb-4 text-blue-900">8. ORGANISMELE PUBLICE</h2>
            <p className="mb-4">
              Vom dezvălui datele dumneavoastră cu caracter personal doar organismelor publice, dacă acest lucru este cerut de lege. De exemplu, SEWCELS va răspunde solicitărilor din partea instanțelor judecătorești, organelor de aplicare a legii, agențiilor de reglementare și altor autorități publice și oficiale, care pot include astfel de autorități şi din afara țării de reședință.
            </p>
            <h2 className="text-xl font-semibold mt-10 mb-4 text-blue-900">9. TRANSFERURI INTERNAȚIONALE DE DATE CU CARACTER PERSONAL</h2>
            <p className="mb-4">
              Informațiile dumneavoastră cu caracter personal pot fi transferate către destinatari stabiliți în afara Spațiului Economic European. Ne vom asigura că toate transferurile au loc în conformitate cu legile aplicabile privind protecția datelor, inclusiv prin încheierea de contracte privind transferul de date dacă este necesar. Orice transferuri de date cu caracter personal în alte ţări decât cele pentru care s-a luat o decizie în ceea ce privește caracterul adecvat al nivelului de protecție a datelor de către Comisia Europeană, aşa cum sunt enumerate pe site-urile oficiale se efectuează pe baza unor acorduri contractuale care utilizează clauzele contractuale standard adoptate de Comisia Europeană sau alte garanții corespunzătoare, în conformitate cu legea în vigoare.
            </p>
            <h2 className="text-xl font-semibold mt-10 mb-4 text-blue-900">10. TRANSFERURILE DE AFACERI</h2>
            <p className="mb-4">
              În legătură cu orice reorganizare, restructurare, fuziune sau vânzare sau alt transfer de active (colectiv denumite „Transfer de afaceri“), vom transfera date, inclusiv date cu caracter personal, într-un volum rezonabil și după cum va fi necesar pentru Transferul de Afaceri, și cu condiția ca partea destinatară să fie de acord să respecte datele dvs cu caracter personal conform cadrului legislativ aplicabil privind protecția datelor. Compania va continua să asigure securitatea și confidențialitatea oricăror date personale și să notifice utilizatorii afectați înainte ca datele cu caracter personal să devină subiectul unei alte politici de prelucrare a datelor personale.
            </p>
            <h2 className="text-xl font-semibold mt-10 mb-4 text-blue-900">11. DREPTURILE DUMNEAVOASTRĂ CONFORM REGULAMENTULUI 679/2016 GDPR</h2>
            <p className="mb-4">
              Ca persoană vizată aveți drepturi specifice cu privire la datele cu caracter personal pe care le colectăm de la dumneavoastră. SEWCELS vă va respecta drepturile individuale și se va ocupa de interesele dumneavoastră în mod corespunzător.
            </p>
            <ul className="list-disc list-inside mb-4 ml-6">
              <li><strong>Dreptul de retragere a consimțământului:</strong> Vă puteți retrage consimțământul pentru prelucrarea datelor cu caracter personal, în orice moment.</li>
              <li><strong>Dreptul la rectificare:</strong> Puteți obține de la noi rectificarea datelor cu caracter personal care vă privesc. Facem eforturi rezonabile pentru a păstra datele cu caracter personal utilizate continuu – care sunt în posesia sau controlul nostru – exacte, complete, actuale și relevante.</li>
              <li><strong>Dreptul la restricție:</strong> Puteți obține restricționarea prelucrării dacă:
                <ul className="list-disc list-inside ml-6">
                  <li>contestați corectitudinea datelor – pentru perioada verificării acestora;</li>
                  <li>prelucrarea este ilegală și preferați restricția în locul ștergerii;</li>
                  <li>nu mai avem nevoie de date dar doriți păstrarea lor pentru constatarea sau apărarea unui drept;</li>
                  <li>vă opuneți prelucrării și se verifică dacă interesele noastre prevalează.</li>
                </ul>
              </li>
              <li><strong>Dreptul de acces:</strong> Ne puteți cere informații privind datele deținute, scopul, sursa și destinatarii acestora. Vă oferim gratuit un exemplar. Ne rezervăm dreptul de a percepe o taxă pentru copii suplimentare.</li>
              <li><strong>Dreptul la portabilitate:</strong> La cerere, vom transfera datele către alt operator, dacă este posibil tehnic și legal.</li>
              <li><strong>Dreptul la ștergere:</strong> Puteți solicita ștergerea datelor dacă:
                <ul className="list-disc list-inside ml-6">
                  <li>nu mai sunt necesare pentru scopul inițial;</li>
                  <li>vă opuneți prelucrării ulterioare și cererea este validă;</li>
                  <li>datele au fost prelucrate ilegal.</li>
                </ul>
                Excepție fac cazurile când păstrarea este necesară legal, inclusiv pentru constatarea sau apărarea unui drept.
              </li>
              <li><strong>Dreptul de opoziție:</strong> Vă puteți opune oricând prelucrării, iar noi vom înceta prelucrarea cu excepția cazului în care există motive legitime și imperioase.</li>
              <li><strong>Dreptul de a depune o plângere:</strong> Dacă suspectați o încălcare, puteți depune o plângere la:
                <br />
                Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal
                <br />
                Adresă: B-dul G-ral. Gheorghe Magheru 28-30, Sector 1, București, 010336
                <br />
                Email: anspdcp@dataprotection.ro
              </li>
            </ul>
            <p className="mb-4">
              <strong>Vă rugăm să rețineți:</strong> Vom încerca să soluționăm cererile în maximum 30 de zile. În cazuri complexe, putem extinde acest termen justificat. Putem refuza accesul dacă există prevederi legale care o impun, caz în care vom comunica motivul.
            </p>
            <p className="mb-4">
              Pentru a exercita drepturile, vă rugăm să ne trimiteți o solicitare scrisă și semnată la sediul nostru sau la adresa de email office@sewcels.ro. Putem solicita informații suplimentare pentru a verifica identitatea solicitantului.
            </p>
            <h2 className="text-xl font-semibold mt-10 mb-4 text-blue-900">12. ACTUALIZAREA NOTEI DE INFORMARE</h2>
            <p className="mb-4">
              Prezenta Notă de Informare este revizuită periodic pentru a include toate măsurile tehnice și organizatorice introduse de SEWCELS pentru a contribui la un mediu informatic echilibrat și securizat.
            </p>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Privacy Policy
            </h1>
            <p>
              S.C. SEWCELS S.R.L., headquartered in Oradea, Str. Paltinului, No. 6, Bihor County, registered with the Trade Registry under no. J05/134/2019, with CUI RO40423719, email: office@sewcels.ro, is fully responsible for the processing of personal data it collects in the daily conduct of its activities and guarantees the protection of such data in accordance with Regulation (EU) 679/2016 (GDPR). This document explains the type of personal data we process, the purpose and legal basis for processing, and the duration for which we retain this data.
            </p>
            <h2 className="text-xl font-semibold mt-10 mb-4 text-blue-900">1. GENERAL INFORMATION</h2>
            <p className="mb-4">
              1.1. SEWCELS is a personal data operator as defined by the legislation in force, specifically the GDPR Regulation. This means it has control over the personal data collected and decides how it is processed. Consequently, the company has implemented a series of policies, procedures, technical and organizational measures in its business processes to secure this data and ensure the rights of data subjects are respected.
            </p>
            <h2 className="text-xl font-semibold mt-10 mb-4 text-blue-900">2. PROCESSED PERSONAL DATA</h2>
            <p className="mb-4">
              SEWCELS processes personal data about you through several methods:
            </p>
            <p className="mb-4">
              <strong>2.1. Public sources</strong> SEWCELS collects financial data about legal entities and personal data about shareholders, administrators, legal representatives, and auditors of these legal entities from public sources such as, but not limited to: the Trade Registry, Official Gazette, ANAF, Ministry of Finance, Insolvency Proceedings Bulletin, Electronic Archive for Secured Transactions, Ministry of Justice, etc.
            </p>
            <p className="mb-4">
              <strong>2.2. Electronic sources</strong> When you visit the SEWCELS website https://www.sewcels.ro/ we will collect information about you using files called “cookies”, which are small files on your device. Cookies are not viruses, but data files that allow us to identify you on your next visit to our website, in order to improve and personalize the services we offer through our website. You can read more details in our cookie policy (to be finalized and linked here later).
            </p>
            <p className="mb-4">
              We use essential and analytics cookies to ensure the website functions correctly and to understand how users interact with our pages. Essential cookies are necessary for the website’s basic functionality, while analytics cookies help us improve overall performance. You can control your cookie preferences through your browser settings.
            </p>
            <p className="mb-4">
              When you wish to apply for a vacant job and send us your CV and/or cover letter by email, we will collect and process the information sent. More information about data processing in this process can be found in the Information Note regarding data processing in the online recruitment process.
            </p>
            <p className="mb-4">
              When you send an email about a potential order to one of the SEWCELS representatives.
            </p>
            <p className="mb-4">
              <strong>2.3. Consent</strong> SEWCELS may process your data based on your express and freely given consent. By consent of the data subject we mean any freely given, specific, informed and unambiguous indication of the data subject’s wishes by which he or she, by a statement or by a clear affirmative action, signifies agreement to the processing of personal data relating to him or her.
            </p>
            <h2 className="text-xl font-semibold mt-10 mb-4 text-blue-900">3. PURPOSE AND LEGALITY OF PERSONAL DATA PROCESSING</h2>
            <p className="mb-4">
              SEWCELS uses your personal data legally, in accordance with applicable legal provisions and in full compliance with the provisions of the GDPR Regulation, specifically art. 6.1, as follows:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li><strong>3.1</strong> Based on your consent, for: Advertising offers;</li>
              <li><strong>3.2</strong> Based on legitimate interest, for:
                <ul className="list-disc list-inside ml-6">
                  <li>Communication with you;</li>
                  <li>Information about SEWCELS company;</li>
                  <li>Information about SEWCELS products and services;</li>
                  <li>For developing our services according to your needs and requirements;</li>
                  <li>For efficient operation of IT&C systems and applications for collecting, storing and processing commercial information;</li>
                  <li>For improving the security of IT&C systems and applications;</li>
                  <li>For communications regarding SEWCELS events (including photos or videos from SEWCELS events)</li>
                </ul>
              </li>
              <li><strong>3.3</strong> For executing commercial contracts:
                <ul className="list-disc list-inside ml-6">
                  <li>For preparing and sending commercial offers for commercial contracts;</li>
                  <li>For delivering contracted services and fulfilling contractual obligations;</li>
                  <li>For technical support necessary for contract execution.</li>
                </ul>
              </li>
              <li><strong>3.4</strong> For fulfilling our legal obligations:
                <ul className="list-disc list-inside ml-6">
                  <li>In case of requests received from competent state authorities we will cooperate and provide data, including personal data, after carefully verifying the legality of these requests;</li>
                  <li>We will cooperate with competent authorities in situations involving illegal activities, fraud, etc., providing data (including personal data) after verifying the legality of the requests.</li>
                </ul>
              </li>
              <li><strong>3.5</strong> For defending our legal rights:
                <ul className="list-disc list-inside ml-6">
                  <li>In case of violation of the rights of SEWCELS, users, other candidates, employees, and other data subjects, or in cases provided by law.</li>
                </ul>
              </li>
            </ul>
            <p className="mb-4">
              If we need to process your personal data for purposes other than those described in this document, we will do so only with your prior information or consent (expressed in advance).
            </p>
            <h2 className="text-xl font-semibold mt-10 mb-4 text-blue-900">4. STORAGE AND PROCESSING OF PERSONAL DATA. SECURITY MEASURES.</h2>
            <p className="mb-4">
              The personal data collected by SEWCELS is processed in the European Union, at SEWCELS locations, at IT&C infrastructure service providers and/or specific application providers. In developing the IT&C infrastructure, SEWCELS has taken into account best practices in the field, as follows:
            </p>
            <ul className="list-disc list-inside mb-4 ml-6">
              <li>The virtual perimeter of the organization is secured with firewall equipment;</li>
              <li>The physical perimeter of the organization is secured with CCTV equipment;</li>
              <li>Applications specific to SEWCELS activity are updated periodically as technology providers release patches;</li>
              <li>Servers and internal users' equipment are protected with antivirus and anti-malware applications;</li>
              <li>Internal users' equipment and certain critical databases will be protected with encryption applications, if necessary;</li>
              <li>User access to systems and applications is controlled and monitored;</li>
              <li>Critical communication infrastructure is secured with emergency power supply systems.</li>
            </ul>
            <p className="mb-4">
              SEWCELS will not disclose or transfer your personal data to unauthorized entities.
            </p>
            <h2 className="text-xl font-semibold mt-10 mb-4 text-blue-900">5. DURATION OF PERSONAL DATA STORAGE</h2>
            <p className="mb-4">
              Your personal data will be stored strictly for the period necessary to fulfill the purpose for which it was collected or for the period required by legal obligations. For example, data from contact forms will be kept for 6 months from the time of transmission. For commercial contacts, after their conclusion, personal data will be kept for a period of 36 months for the realization of legal rights, if necessary. Also, after the termination of the contract, according to the fiscal legislation applicable to payments, personal data from payment instruments and contracts will be stored for a period of 10 years. If no contract is concluded between you and SEWCELS, your data will be kept for a period of 12 months. After the storage period expires, your personal data will be deleted.
            </p>
            <h2 className="text-xl font-semibold mt-10 mb-4 text-blue-900">6. THIRD PARTY ACCESS TO YOUR INFORMATION</h2>
            <p className="mb-4">
              Information is not shared with third-party companies, except for service providers that make our site usable and providers essential for fulfilling contractual obligations. SEWCELS may sometimes be required to disclose your data to third parties, such as local authorities, courts, regulatory bodies and/or law enforcement agencies for the purpose of complying with applicable laws and regulations or in response to legal proceedings. We will also share your personal information with third parties if we have your consent or to detect, prevent, or otherwise address fraud, security breaches, or technical issues, or to protect the company against infringement of property rights or against breaches of SEWCELS safety, users, other candidates, employees and other data subjects, or in cases provided by law. We will disclose your personal data only for the purposes and to those third parties as described below. SEWCELS will take the necessary measures to ensure that your personal data is processed, secured, and transferred in accordance with applicable law.
            </p>
            <h2 className="text-xl font-semibold mt-10 mb-4 text-blue-900">7. EXTERNAL SERVICE PROVIDERS</h2>
            <p className="mb-4">
              Where necessary, we will engage other companies and individuals to perform certain tasks that contribute to our services, on our behalf. For example, we may provide personal data to agents, contractors, or partners for hosting our databases, for data processing services, or to send you information you have requested. We will share or make available to external service providers only that information necessary to process your requests. This information cannot be used by them for any other purposes, especially not for their own purposes or for third parties. SEWCELS external service providers are contractually obliged to maintain the confidentiality of personal data.
            </p>
            <h2 className="text-xl font-semibold mt-10 mb-4 text-blue-900">8. PUBLIC BODIES</h2>
            <p className="mb-4">
              We will disclose your personal data only to public bodies if this is required by law. For example, SEWCELS will respond to requests from courts, law enforcement agencies, regulatory agencies, and other public and official authorities, which may include such authorities outside your country of residence.
            </p>
            <h2 className="text-xl font-semibold mt-10 mb-4 text-blue-900">9. INTERNATIONAL TRANSFERS OF PERSONAL DATA</h2>
            <p className="mb-4">
              Your personal data may be transferred to recipients located outside the European Economic Area. We will ensure that all transfers are carried out in accordance with applicable data protection laws, including by entering into data transfer agreements if necessary. Any transfers of personal data to countries other than those for which an adequacy decision has been made by the European Commission, as listed on official websites, are carried out based on contractual agreements using the standard contractual clauses adopted by the European Commission or other appropriate safeguards, in accordance with the law in force.
            </p>
            <h2 className="text-xl font-semibold mt-10 mb-4 text-blue-900">10. BUSINESS TRANSFERS</h2>
            <p className="mb-4">
              In connection with any reorganization, restructuring, merger, or sale or other transfer of assets (collectively referred to as "Business Transfer"), we will transfer data, including personal data, in a reasonable volume and as necessary for the Business Transfer, provided that the receiving party agrees to respect your personal data in accordance with the applicable legal framework for data protection. The company will continue to ensure the security and confidentiality of any personal data and will notify affected users before personal data becomes subject to another personal data processing policy.
            </p>
            <h2 className="text-xl font-semibold mt-10 mb-4 text-blue-900">11. YOUR RIGHTS UNDER REGULATION 679/2016 GDPR</h2>
            <p className="mb-4">
              As a data subject, you have specific rights regarding the personal data we collect from you. SEWCELS will respect your individual rights and will handle your interests appropriately.
            </p>
            <ul className="list-disc list-inside mb-4 ml-6">
              <li><strong>Right to withdraw consent:</strong> You may withdraw your consent for the processing of personal data at any time.</li>
              <li><strong>Right to rectification:</strong> You may obtain from us the rectification of personal data concerning you. We make reasonable efforts to keep the personal data used continuously – which is in our possession or control – accurate, complete, up-to-date, and relevant.</li>
              <li><strong>Right to restriction:</strong> You may obtain restriction of processing if:
                <ul className="list-disc list-inside ml-6">
                  <li>you contest the accuracy of the data – for the period during which it is verified;</li>
                  <li>the processing is unlawful and you prefer restriction instead of erasure;</li>
                  <li>we no longer need the data but you wish to keep it for the establishment or defense of a right;</li>
                  <li>you object to processing and it is being verified whether our interests prevail.</li>
                </ul>
              </li>
              <li><strong>Right of access:</strong> You may request information regarding the data held, its purpose, source, and recipients. We will provide a free copy. We reserve the right to charge a fee for additional copies.</li>
              <li><strong>Right to data portability:</strong> Upon request, we will transfer the data to another operator, if technically and legally possible.</li>
              <li><strong>Right to erasure:</strong> You may request the erasure of data if:
                <ul className="list-disc list-inside ml-6">
                  <li>it is no longer necessary for the original purpose;</li>
                  <li>you object to further processing and the request is valid;</li>
                  <li>the data has been processed unlawfully.</li>
                </ul>
                Exceptions are cases where retention is legally required, including for the establishment or defense of a right.
              </li>
              <li><strong>Right to object:</strong> You may object to processing at any time, and we will cease processing unless there are legitimate and compelling reasons.</li>
              <li><strong>Right to file a complaint:</strong> If you suspect a breach, you may file a complaint with:
                <br />
                National Supervisory Authority for Personal Data Processing
                <br />
                Address: B-dul G-ral. Gheorghe Magheru 28-30, Sector 1, Bucharest, 010336
                <br />
                Email: anspdcp@dataprotection.ro
              </li>
            </ul>
            <p className="mb-4">
              <strong>Please note:</strong> We will attempt to resolve requests within a maximum of 30 days. In complex cases, we may extend this term with justification. We may refuse access if there are legal provisions requiring it, in which case we will communicate the reason.
            </p>
            <p className="mb-4">
              To exercise your rights, please send us a written and signed request at our headquarters or at the email address office@sewcels.ro. We may request additional information to verify the identity of the applicant.
            </p>
            <h2 className="text-xl font-semibold mt-10 mb-4 text-blue-900">12. UPDATING THIS INFORMATION NOTICE</h2>
            <p className="mb-4">
              This Information Notice is periodically reviewed to include all technical and organizational measures introduced by SEWCELS to contribute to a balanced and secure information environment.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}