import PlausibleProvider from 'next-plausible';
import type { AppProps } from 'next/app';
import 'styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider domain="openbanner.co">
      <Component {...pageProps} />
    </PlausibleProvider>
  );
}

export default MyApp;
