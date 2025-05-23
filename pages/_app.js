import '../styles/globals.css';
import { appWithTranslation } from 'next-i18next';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import Script from 'next/script';
import Head from 'next/head';
import { Inter } from 'next/font/google';

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
        {/* ✅ Scripturile sunt încărcate după interacțiune — bună practică pentru performanță */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-KB43EFE5KV"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KB43EFE5KV', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        {isHome ? (
          <Component {...pageProps} />
        ) : (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </>
    </div>
  );
}

export default appWithTranslation(MyApp);