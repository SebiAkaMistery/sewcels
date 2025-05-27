import '../styles/globals.css';
import { appWithTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
const Layout = dynamic(() => import('../components/Layout'), { ssr: false });
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import ScrollIndicator from '../components/ScrollIndicator';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isHome = router.pathname === '/';

  useEffect(() => {
    function updateConsent() {
      if (window.Cookiebot && window.Cookiebot.consents) {
        window.gtag('consent', 'update', {
          ad_storage: window.Cookiebot.consents.marketing ? 'granted' : 'denied',
          analytics_storage: window.Cookiebot.consents.statistics ? 'granted' : 'denied',
        });
      }
    }

    window.addEventListener('CookiebotOnAccept', updateConsent);
    window.addEventListener('CookiebotOnDecline', updateConsent);

    // Aplică consimțământul curent la mount (în caz de reload pagina)
    updateConsent();

    return () => {
      window.removeEventListener('CookiebotOnAccept', updateConsent);
      window.removeEventListener('CookiebotOnDecline', updateConsent);
    };
  }, []);

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

          {/* Cookiebot Consent Banner */}
          <script
            id="Cookiebot"
            src="https://consent.cookiebot.com/uc.js"
            data-cbid="a33c7fe7-e4d0-40cb-bb0e-66b549a1b4f6"
            type="text/javascript"
            async
          ></script>
        </Head>
        {isHome ? (
          <>
            <Component {...pageProps} />
          </>
        ) : (
          <Layout>
            <Component {...pageProps} />
            {!isHome && <ScrollIndicator />}
          </Layout>
        )}
      </>
    </div>
  );
}

export default appWithTranslation(MyApp);