import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';
import 'antd/dist/antd.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Flask App Food Security</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Food Security Index"></meta>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
