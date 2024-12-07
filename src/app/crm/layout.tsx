import SideBar from '@/components/pannel/SideBar';

const page = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex min-h-screen bg-stone-50'>
      <SideBar />
      <main className='flex-1 overflow-x-hidden'>{children}</main>
    </div>
  );
};

export default page;
