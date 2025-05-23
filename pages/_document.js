import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="ro">
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        {/* Canonical link can be set dynamically in each page */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}