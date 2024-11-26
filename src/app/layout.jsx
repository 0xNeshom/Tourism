import Footer from '@/components/templates/footer/Footer';
import Head from 'next/head';
import ScrollTop from '@/utilities/scrollToTop/ScrollToTop';
import './globals.css';
import localFont from 'next/font/local';
import Provider from '@/utilities/reactQueryProvider/ReactQuery';
import { SpeedInsights } from '@vercel/speed-insights/next';

const iranSans = localFont({
  src: [
    { path: '../public/fonts/IRANSansX-Regular.woff2' },
    { path: '../public/fonts/IRANSansX-Medium.woff2' },
    { path: '../public/fonts/IRANSansX-Black.woff2' },
    { path: '../public/fonts/IRANSansX-Bold.woff2' },
    { path: '../public/fonts/IRANSansX-Light.woff2' },
    { path: '../public/fonts/IRANSansX-Thin.woff2' },
  ],
});

export default function RootLayout({ children }) {
  return (
    <html lang='fa' dir='rtl'>
      <Head>
        <link
          href='https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/Vazirmatn-Variable-font-face.css'
          rel='stylesheet'
          type='text/css'
        />
      </Head>
      <body className={` antialiased max-w-[1550px] mx-auto`}>
        <Provider>{children}</Provider>
        <ScrollTop />
        <SpeedInsights
          url='https://tourism-388dntoly-mohsens-projects-b89f5647.vercel.app/' 
          view='desktop'
          threshold={50}
        />
      </body>
    </html>
  );
}
