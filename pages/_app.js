import '../styles/globals.css';
import { appWithTranslation } from 'next-i18next';
import Layout from '../components/Layout';
import { useRouter } from 'next/router';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isHome = router.pathname === '/';

  return (
    <>
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
  );
}

export default appWithTranslation(MyApp);