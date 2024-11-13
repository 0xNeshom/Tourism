import React from 'react'
import PhotoLayout from './templates/PhotoLayout'
import Image from 'next/image'
import line from '@/public/Line.svg'
import img1 from '@/public/Image 05.svg';
import img2 from '@/public/Image00.svg';
import img3 from '@/public/Image45.svg';
import img4 from '@/public/Image 04.svg';
import img5 from '@/public/Image 03.svg';
const Gisoom: React.FC = () => {
    const mainImage = img1;
  const topImages = [img2, img3];
  const bottomImages = [img4, img5];

  return (
    <div>
      <PhotoLayout mainImage={mainImage} topImages={topImages} bottomImages={bottomImages} />
      <Image src={line} alt=''/>
    </div>
  )
}

export default Gisoom
