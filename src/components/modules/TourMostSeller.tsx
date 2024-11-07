'use client'
import { useEffect, useState } from "react";
import axios from "axios";


interface Tour {
  id: number;
  title: string;
  location: string;
  days: number;
  oldPrice: number;
  price: number;
  rating: number;
  image: any;
}

const TourMostSeller = () => {
  const [tours, setTours] = useState<Tour[]>([]); 

  useEffect(() => {
    axios
      .get("http://localhost:4000/tours")
      .then((response) => {
        setTours(response.data); 
      })
      .catch((error) => {
        console.error("Error fetching tours:", error);
      });
  }, []);

  return (
    <div>
      {tours.map((tour) => (
        <div key={tour.id} className="w-[522px]">
          <img 
            src={tour.image} 
            width={50}
            height={50}
            alt={tour.title}
          />
          <h3>{tour.title}</h3>
          <p>مبدا: {tour.location}</p>
          <p>قیمت: {tour.price.toLocaleString()} تومان</p>
        </div>
      ))}
    </div>
  );
};

export default TourMostSeller;
