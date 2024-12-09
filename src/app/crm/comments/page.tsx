'use client';

import { useQuery } from 'react-query';
import Link from 'next/link';
import ReviewCard from '@/components/pannel/ReviewCard';
import { getComments } from '@/utilities/actions/CommentList';
import { Review } from '@/utilities/types/ReviewCard';

const Page: React.FC = () => {
  const { data, isLoading, isError } = useQuery<Review[]>({
    queryKey: ['fetching-comments'],
    queryFn: getComments,
  });

  if (isLoading) {
    return (
      <div className='w-full flex justify-center md:h-[700px] h-[700px]'>
        <span className='loading loading-spinner loading-lg text-primary'></span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center min-h-[400px] text-red-500">
        <span>خطا در دریافت اطلاعات</span>
      </div>
    );
  }

  const reviews = data || [];
 

  return (
    <div className="w-full mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-10 mr-20 justify-center mx-auto">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Page;