import { NextResponse } from 'next/server'


const mockTours = [
  {
    id: 471,
    tour: {
      id: 282,
      category: {
        id: 91,
        title: "تور تفریحی",
        description: "تورهای تفریحی و گردشگری برای تمام سنین",
        image: "/api/placeholder/400/300",
        parent: null,
        subcategories: null
      },
      city: {
        id: 888,
        province: {
          id: 239,
          name: "همدان"
        },
        name: "نهاوند"
      },
      title: "تور گردشگری نهاوند",
      description: "سفری خاطره‌انگیز به یکی از زیباترین شهرهای استان همدان",
      stay: "هتل 3 ستاره",
      details: "بازدید از جاذبه‌های تاریخی و طبیعی نهاوند",
      tour_rules: "قوانین و مقررات تور",
      Required_documents: "کارت ملی و شناسنامه",
      Tour_services: "صبحانه، ناهار، ترانسفر",
      image: "/api/placeholder/400/300"
    },
    price: "3500000",
    discount_price: "3200000",
    capacity: 26,
    duration: "3 روز",
    stay: "هتل",
    trip_type: "تفریحی",
    start_date: "1402-12-15",
    end_date: "1402-12-18",
    meal: "صبحانه و ناهار"
  },
  {
    id: 472,
    tour: {
      id: 283,
      category: {
        id: 92,
        title: "تور طبیعت‌گردی",
        description: "تورهای طبیعت‌گردی و کوهنوردی",
        image: "/api/placeholder/400/300",
        parent: null,
        subcategories: null
      },
      city: {
        id: 889,
        province: {
          id: 239,
          name: "همدان"
        },
        name: "تویسرکان"
      },
      title: "تور طبیعت‌گردی تویسرکان",
      description: "گشت و گذار در طبیعت زیبای تویسرکان",
      stay: "اقامتگاه بومگردی",
      details: "بازدید از باغات گردو و مناطق طبیعی",
      tour_rules: "همراه داشتن کفش مناسب کوهنوردی",
      Required_documents: "کارت ملی",
      Tour_services: "صبحانه، ناهار، راهنمای محلی",
      image: "/api/placeholder/400/300"
    },
    price: "2800000",
    discount_price: "2500000",
    capacity: 20,
    duration: "2 روز",
    stay: "اقامتگاه بومگردی",
    trip_type: "طبیعت‌گردی",
    start_date: "1402-12-20",
    end_date: "1402-12-22",
    meal: "صبحانه محلی"
  },
  {
    id: 473,
    tour: {
      id: 284,
      category: {
        id: 93,
        title: "تور تاریخی",
        description: "بازدید از اماکن تاریخی",
        image: "/api/placeholder/400/300",
        parent: null,
        subcategories: null
      },
      city: {
        id: 890,
        province: {
          id: 239,
          name: "همدان"
        },
        name: "همدان"
      },
      title: "تور تاریخی همدان",
      description: "بازدید از آثار تاریخی شهر همدان",
      stay: "هتل 4 ستاره",
      details: "بازدید از غار علیصدر و تپه هگمتانه",
      tour_rules: "رعایت پوشش مناسب",
      Required_documents: "کارت ملی و شناسنامه",
      Tour_services: "تمام وعده‌های غذایی",
      image: "/api/placeholder/400/300"
    },
    price: "4500000",
    discount_price: "4200000",
    capacity: 30,
    duration: "4 روز",
    stay: "هتل",
    trip_type: "تاریخی",
    start_date: "1402-12-25",
    end_date: "1402-12-29",
    meal: "تمام وعده‌ها"
  }
]

export async function GET(request, { params }) {

  await new Promise(resolve => setTimeout(resolve, 1000))
  
  const tourId = parseInt(params.id, 10)
  const tour = mockTours.find(t => t.id === tourId)
  
  if (!tour) {
    return NextResponse.json(
      { error: "تور مورد نظر یافت نشد" },
      { status: 404 }
    )
  }

  return NextResponse.json(tour)
}
