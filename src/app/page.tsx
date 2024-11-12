import Header from '@/components/Header';
import Category from '@/components/Category';
import PopularDestinations from '@/components/PopularDestinations';
import CategoryOptions from '@/components/CategoryOptions';
import TourMostSeller from '@/components/modules/TourMostSeller';
import Advertising from '@/components/Advertising';
import FavoriteDestination from '@/components/FavoriteDestination';
import FavoriteLocations from '@/components/FavoriteLocations';
import TourSlider from '@/components/templates/TourSlider';

export default function Home() {
  const mock = [
    {
      id: 471,
      tour: {
        id: 282,
        category: {
          id: 91,
          title: 'study',
          description:
            'Quite record probably likely through specific tax despite.\nTest culture ready trip magazine learn. Owner affect find war. Use town cell hear fast garden experience night.',
          image: 'https://matinmn.pythonanywhere.com/media/default.jpg',
          parent: null,
          subcategories: null,
        },
        city: {
          id: 888,
          province: {
            id: 239,
            name: 'همدان',
          },
          name: 'نهاوند',
        },
        title: 'Test until about than lawyer administration.',
        description:
          'Cultural tough fire three.\nWould popular discussion. Once cost between top any.\nPresident which material certainly. Before language season. In focus movie simply.',
        stay: 'leg',
        details:
          'Third never modern meet song. True cause already move house senior yet.',
        tour_rules: null,
        Required_documents: null,
        Tour_services: null,
        image: 'https://matinmn.pythonanywhere.com/media/default.jpg',
      },
      price: '500611.00',
      discount_price: '466494.00',
      capacity: 26,
      duration: null,
      stay: null,
      trip_type: null,
      start_date: '1978-06-16',
      end_date: '2019-10-22',
      meal: 'speech',
    },
    {
      "id": 472,
      "tour": {
          "id": 306,
          "category": {
              "id": 91,
              "title": "study",
              "description": "Quite record probably likely through specific tax despite.\nTest culture ready trip magazine learn. Owner affect find war. Use town cell hear fast garden experience night.",
              "image": "https://matinmn.pythonanywhere.com/media/default.jpg",
              "parent": null,
              "subcategories": null
          },
          "city": {
              "id": 893,
              "province": {
                  "id": 240,
                  "name": "زنجان"
              },
              "name": "ماه‌نشان"
          },
          "title": "Table success area more.",
          "description": "Ready other effect case. Seek already character whose perform economic.\nWill left section enjoy impact plant. Popular baby write election any already organization free.",
          "stay": "discover",
          "details": "Matter hope actually art them short. Rock include past after decade score her. Be cover cup what.",
          "tour_rules": null,
          "Required_documents": null,
          "Tour_services": null,
          "image": "https://matinmn.pythonanywhere.com/media/default.jpg"
      },
      "price": "234627.00",
      "discount_price": "714786.00",
      "capacity": 42,
      "duration": null,
      "stay": null,
      "trip_type": null,
      "start_date": "2003-05-26",
      "end_date": "1989-05-22",
      "meal": "yet"
  },
  ];
  return (
    <>
      <div>
        {mock.map((e: { id: number; tour: { id: number; title: string; description: string; category: { title: string }; } }) => (
          <div>{e.tour.title}</div>
        ))}
      </div>
      <Header />
      <CategoryOptions />
      <Category />
      <PopularDestinations />
      {/* <TourMostSeller/> */}
      <Advertising />
      <FavoriteDestination />
      <TourSlider />
      <FavoriteLocations />
    </>
  );
}
