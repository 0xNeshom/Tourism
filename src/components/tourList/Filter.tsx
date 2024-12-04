'use client'
import { useState } from 'react';
import Image from 'next/image';
import plus from '@/public/filter/Iconly-1.svg'
import mines from '@/public/filter/Iconly.svg'
const Filter = () => {
  const [people, setPeople] = useState(5);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [price, setPrice] = useState(5000000);
  const [discounts, setDiscounts] = useState(false);
  const [city, setCity] = useState('');
  const [categories, setCategories] = useState({
    beach: false,
    adventure: false,
    historical: false,
    tour: false,
  });

  // const handlePriceChange = (e) => setPrice(e.target.value);
  // const handleDiscountChange = () => setDiscounts(!discounts);
  // const handleCityChange = (e) => setCity(e.target.value);
  // const handleCategoryChange = (e) => {
  //   const { name, checked } = e.target;
  //   setCategories((prev) => ({
  //     ...prev,
  //     [name]: checked,
  //   }));
  // };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <span className="text-xl font-semibold">فیلتر کردن</span>
        <button className="text-green-500">حذف فیلتر ها</button>
      </div>

      <div>
        {/* Number of People */}
        <div className="flex items-center space-x-2 mb-6">
          <label htmlFor="people" className="text-sm">تعداد افراد:</label>
          <button
            className="bg-gray-200 p-2 rounded-full text-sm"
            onClick={() => setPeople(people + 1)}
          >
            <Image src={plus} alt=''/>
          </button>
          <input
            type="number"
            id="people"
            value={people}
            // onChange={ (e) => setPeople(e.target.value);}
            className="w-12 text-center border border-gray-300 rounded-md"
          />
          <button
            className="bg-red-500 w-5 rounded-full text-sm"
            onClick={() => setPeople(Math.max(1, people - 1))}
          >
            -
          </button>
       
        </div>

        {/* Date and Duration */}
        <div className="flex space-x-4 mb-6">
          <div>
            <label htmlFor="startDate" className="text-sm">از:</label>
            <input
              type="date"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-32"
            />
          </div>
          <div>
            <label htmlFor="endDate" className="text-sm">تا:</label>
            <input
              type="date"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-32"
            />
          </div>
        </div>

        {/* Price Range */}
        <div className="mb-6">
          <label htmlFor="price" className="text-sm">محدوده قیمت:</label>
          <input
            type="range"
            id="price"
            min="500000"
            max="10000000"
            step="500000"
            value={price}
            // onChange={handlePriceChange}
            className="w-full mt-2"
          />
          <div className="flex justify-between text-sm">
            <span>از 500,000 تومان</span>
            <span>تا 10,000,000 تومان</span>
          </div>
        </div>

        {/* Special Discounts */}
        <div className="flex items-center space-x-2 mb-6">
          <label htmlFor="discounts" className="text-sm">تخفیف‌های ویژه:</label>
          <input
            type="checkbox"
            id="discounts"
            checked={discounts}
            // onChange={handleDiscountChange}
            className="h-5 w-5 text-green-500"
          />
        </div>

        {/* City Selection */}
        <div className="mb-6">
          <label className="text-sm">شهر مورد نظر:</label>
          <div className="grid grid-cols-2 gap-4 mt-2">
            {['تهران', 'مشهد', 'اصفهان', 'کیش'].map((cityName) => (
              <div key={cityName} className="flex items-center space-x-2">
                <input
                  type="radio"
                  id={cityName}
                  name="city"
                  value={cityName}
                  checked={city === cityName}
                  // onChange={handleCityChange}
                  className="text-green-500"
                />
                <label htmlFor={cityName} className="text-sm">{cityName}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Category Selection */}
        <div>
          <label className="text-sm">دسته بندی ها:</label>
          <div className="grid grid-cols-2 gap-4 mt-2">
            {['ساحلی', 'جنگلی', 'تاریخی', 'همه‌ی تورها'].map((category) => (
              <div key={category} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={category}
                  name={category}
                  // checked={categories[category]}
                  // onChange={handleCategoryChange}
                  className="h-5 w-5 text-green-500"
                />
                <label htmlFor={category} className="text-sm">{category}</label>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <button className="bg-green-500 text-white px-6 py-2 rounded-lg">اعمال فیلتر</button>
      </div>
    </div>
  );
};

export default Filter;
