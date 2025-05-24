import '../styles/globals.css';
import { appWithTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
const Layout = dynamic(() => import('../components/Layout'), { ssr: false });
// ✅ Script încărcat doar în browser, pentru a reduce dimensiunea bundle-ului server-side
const Script = dynamic(() => import('next/script'), { ssr: false });
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import ScrollIndicator from '../components/ScrollIndicator';

// 🔧 Recomandări generale pentru performanță:
// - Folosește `next/image` pentru imagini în loc de <img src="" />
// - Activează compresia GZIP/Brotli pe server
// - Optimizează dimensiunea fișierelor video din `/public/videos`
// - Folosește `loading="lazy"` pentru imagini și iframe-uri
// - Evită `console.log()` inutile în producție

const inter = Inter({ subsets: ['latin'], display: 'swap' });

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isHome = router.pathname === '/';

  return (
    <div className={inter.className}>
      <>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href={`https://sewcels.ro${router.asPath}`} />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        </Head>
        {/* ✅ Google Analytics se încarcă la primul scroll pentru performanță */}
        <Script id="gtag-load" strategy="lazyOnload">
          {`
            let gaInitialized = false;
            const initGA = () => {
              if (gaInitialized) return;
              gaInitialized = true;
              const gtagScript = document.createElement('script');
              gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-KB43EFE5KV';
              gtagScript.async = true;
              document.head.appendChild(gtagScript);

              gtagScript.onload = () => {
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-KB43EFE5KV', {
                  page_path: window.location.pathname,
                });
              };
            };

            window.addEventListener('scroll', initGA, { once: true });
          `}
        </Script>
        {isHome ? (
          <>
            <Component {...pageProps} />
            <ScrollIndicator />
          </>
        ) : (
          <Layout>
            <Component {...pageProps} />
            <ScrollIndicator />
          </Layout>
        )}
      </>
    </div>
  );
}

export default appWithTranslation(MyApp);