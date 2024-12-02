import './globals.css';
import localFont from 'next/font/local';
import Provider from '@/utilities/reactQueryProvider/ReactQuery';
import ReduxProvider from '../utilities/reduxProvider/ReduxProvider';
import ScrollTop from '@/utilities/scrollToTop/ScrollToTop';
import Footer from '@/components/footer/Footer';

export const metadata = {
  title: 'سفرجو',
  description: '',
};

export default function RootLayout({ children }) {
  return (
    <html lang='fa' dir='rtl'>
      <head>
        <link rel='icon' href='favicon.ico' type='image/png' />
      </head>
      <body className='antialiased max-w-[1550px] mx-auto'>
        <ReduxProvider>
          <Provider>{children}</Provider>
        </ReduxProvider>
        <ScrollTop />
      </body>
    </html>
  );
}
