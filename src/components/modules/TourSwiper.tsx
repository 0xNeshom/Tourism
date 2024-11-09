import Link from 'next/link';

const TourSwiper = () => {
  return (
    <div className=' '>
      <Link href={'/article/123'}>
        <img
          src='https://i.etsystatic.com/22917574/r/il/244bc4/2563600623/il_1588xN.2563600623_et9a.jpg'
          alt=''
          className='md:w-[522px] md:h-[346px] rounded-lg'
        />
      </Link>
    </div>
  );
};

export default TourSwiper;
