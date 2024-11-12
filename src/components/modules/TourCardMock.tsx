'use client';
import { useQuery } from 'react-query';
import Image from 'next/image';
import { getTourData } from '@/utilities/actions/TourDataFetch'; 
import { getTourDataMock } from '@/utilities/actions/TourDataFetch';
//The main api is getTourData but it's not completed so i used a fake api
interface TripData {
  id: number;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  image?: string;
}

const TourCardMock = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['fetching-tour-data'],
    queryFn: getTourDataMock,
  });
  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error: someThing went wrong</div>;
  }

  return (
    <div className='max-w-4xl mx-auto space-y-6 p-4'>
      {data?.map((tour: TripData) => (
        <div
          key={tour.id}
          className='bg-white rounded-xl shadow-md overflow-hidden rtl'
        >
          <div className='flex flex-col md:flex-row'>
            <div className='md:w-72 relative'>
              <Image
                src={tour.image || '/default-image.jpg'}
                alt={tour.title}
                width={288}
                height={400}
                className='h-full w-full object-cover'
              />
            </div>
            <div className='flex flex-col p-4'>
              <h3>{tour.title}</h3>
              <p>{tour.description}</p>
              <p>
                {tour.start_date} - {tour.end_date}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TourCardMock;
