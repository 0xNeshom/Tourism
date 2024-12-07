import Link from 'next/link';
import Image from 'next/image';
import { Review } from '@/utilities/types/ReviewCard';
import { toPersianDigits } from '@/utilities/persianNumber/persian';
import icon1 from '@/public/dashboard/comments/Iconly.svg';
import icon2 from '@/public/dashboard/comments/Iconly-1.svg';
import icon3 from '@/public/dashboard/comments/Iconly-2.svg';
const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
  return (
    <div className='w-full  p-4 bg-white shadow-md rounded-lg flex flex-col justify-center'>
      <div className='flex justify-between items-center mb-6'>
        <h3 className='text-xl font-semibold'>{review.user.username}</h3>
        <p className='text-sm text-gray-600'>{toPersianDigits('1403/02/12')}</p>
      </div>
      <p
        className='text-base leading-6 font-light mb-8 flex-grow line-clamp-2'
        style={{ fontWeight: 200 }}
      >
        {review.text}
      </p>
      <div className='justify-between flex'>
        <Link
          href={review.tour}
          className='text-primary text-md '
          aria-label={`مشاهده تور `}
        >
          مشاهده تور
        </Link>
        <div className='gap-1 flex'>
          <Link href={'/'}>
            <Image src={icon3} alt='' />
          </Link>
          <Link href={'/'}>
            <Image src={icon2} alt='' />
          </Link>
          <Link href={'/'}>
            <Image src={icon1} alt='' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
