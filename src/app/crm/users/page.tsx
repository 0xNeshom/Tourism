import SearchBar from '@/components/pannel/SearchBar';
import User from '@/components/pannel/User';
function page() {
  return (
    <div className='flex flex-col gap-6 w-full mt-10 mb-10'>
      <SearchBar />
      <User />
      <User />
      <User />
      <User />
      <User />
      <User />
    </div>
  );
}

export default page;
