'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import search from '@/public/dashboard/users/Search-user.svg';
function SearchBar() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert(`Searching for: ${searchValue}`);
  };

  return (
    <div className='w-[80%] flex justify-start mx-auto   flex-col'>
      <div className='flex  justify-center items-center h-[42px] px-4 bg-white rounded-md shadow-md w-[80%] max-w-[400px] '>
        <form onSubmit={handleSubmit} className='flex items-center w-full'>
          <input
            type='text'
            placeholder='جستجوی کاربر موردنظر'
            value={searchValue}
            onChange={handleSearch}
            className='w-full px-4 py-2 rounded-l-lg   focus:outline-none placeholder:text-[10px] placeholder:font-thin'
          />
          <button type='submit' className=''>
            <Image src={search} alt='' />
          </button>
        </form>
      </div>
      <button className='bg-white text-primary text-xs font-medium px-7 w-fit py-4 rounded-md mt-4 shadow-md'>
        اضافه کردن کاربر
      </button>
    </div>
  );
}

export default SearchBar;
