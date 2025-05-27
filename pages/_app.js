import '../styles/globals.css';
import { appWithTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
const Layout = dynamic(() => import('../components/Layout'), { ssr: false });
// Removed dynamic import of Script as per instructions
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
          {/* Google Ads Conversion Tracking */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17121530553"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'AW-17121530553');
              `,
            }}
          />
        </Head>
        {isHome ? (
          <>
            <Component {...pageProps} />
          </>
        ) : (
          <Layout>
            <Component {...pageProps} />
            {!isHome && (
              <ScrollIndicator />
            )}
          </Layout>
        )}
      </>
    </div>
  );
}

export default appWithTranslation(MyApp);