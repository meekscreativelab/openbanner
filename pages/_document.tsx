import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <body className="text-gray-800 font-normal">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
