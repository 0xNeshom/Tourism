'use client';
import { useQuery } from 'react-query';
import Image from 'next/image';
import { getTourDataMock } from '@/utilities/actions/TourDataFetch';

interface TripData {
  id: number;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  image?: string;
  tour: {
    id: number;
    title: string;
    description: string;
    category: {
      title: string;
      image: string;
    };
  };
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
    return <div>Error: something went wrong</div>;
  }

  if (!data || !Array.isArray(data)) {
    return <div>Error: Invalid data format</div>;
  }

  return (
    <div className='max-w-4xl mx-auto space-y-6 p-4'>
      <ul className="space-y-4">
        {data.map((e: TripData) => (
          <li
            key={e.id}
            className="bg-white rounded-xl shadow-md overflow-hidden rtl"
          >
            <div className="flex flex-col md:flex-row">
              <div className="md:w-72 relative">
                <Image
                  src={e.tour.category.image || '/default-image.jpg'}
                  alt={e.tour.title}
                  width={288}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col p-4">
                <h3 className="text-xl font-semibold">{e.tour.title}</h3>
                <p className="text-gray-600">{e.tour.description}</p>
                <p className="text-sm text-gray-500">{e.start_date} - {e.end_date}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TourCardMock;
