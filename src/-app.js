import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Google Analytics Script */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-PBXLCHCTCT`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PBXLCHCTCT');
          `,
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
