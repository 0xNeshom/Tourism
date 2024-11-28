import './globals.css';
import localFont from 'next/font/local';
import Provider from '@/utilities/reactQueryProvider/ReactQuery';
import ScrollTop from '@/utilities/scrollToTop/ScrollToTop';
import Footer from '@/components/footer/Footer';

export const metadata = {
  title: 'سفرجو',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang='fa' dir='rtl'>
      <body className='antialiased max-w-[1550px] mx-auto'>
        <Provider>{children}</Provider>
        <ScrollTop />
      </body>
    </html>
  );
}
