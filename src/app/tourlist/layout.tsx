import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';

const layout = ({ children }: any) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
