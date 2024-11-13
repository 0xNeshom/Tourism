import React from 'react';
import Image from 'next/image';

interface PhotoLayoutProps {
  mainImage: string; 
  topImages: string[]; 
  bottomImages: string[]; 
}

const PhotoLayout: React.FC<PhotoLayoutProps> = ({ mainImage, topImages, bottomImages }) => {
  return (
    <div className='flex justify-center md:mt-20 md:mb-12'>
      <div className='main flex md:flex-row xs:flex-col flex-wrap md:gap-5'>
        <div className='right'>
          <Image src={mainImage} alt='Main Image' />
        </div>
        <div className='left flex flex-col md:gap-[22px]'>
          <div className='Top flex md:flex-row flex-col md:gap-5'>
            {topImages.map((img, index) => (
              <Image key={index} src={img} alt={`Top Image ${index + 1}`} />
            ))}
          </div>
          <div className='Bottom flex flex-col md:flex-row md:gap-5'>
            {bottomImages.map((img, index) => (
              <Image key={index} src={img} alt={`Bottom Image ${index + 1}`} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoLayout;
