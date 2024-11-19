import React from 'react';
import Navbar from '@/components/modules/Navbar';
import Footer from '@/components/modules/Footer';
const layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
