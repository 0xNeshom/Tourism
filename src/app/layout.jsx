import Footer from '@/components/modules/Footer';
import Navbar from '@/components/modules/Navbar';
import ScrollTop from '@/utilities/scrollToTop/ScrollToTop';
import './globals.css';
import localFont from 'next/font/local';
import Provider from '@/utilities/reactQueryProvider/ReactQuery';

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
      <body className={`${iranSans.src} antialiased max-w-[1550px] mx-auto`}>
        <Provider>
          <Navbar />
          {children}
          <Footer />
        </Provider>
        <ScrollTop />
      </body>
    </html>
  );
}
