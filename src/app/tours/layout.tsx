import Footer from '@/components/footer/Footer';
import Navbar from '@/components/navbar/Navbar';

const layout = ({ children }: any) => {
  return (
    <div>
      <Navbar />
      {/* <h1>تخفیف های ويژه</h1> */}
      {children}
      <Footer />
    </div>
  );
};

export default layout;
