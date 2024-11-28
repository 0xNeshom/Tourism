import MainAboutUs from '../aboutUs/MainAboutUs';
import SidebarAboutus from './SidebarAboutus';
const AboutUs = () => {
  return (
    <div className='flex justify-center  gap-6'>
      <SidebarAboutus />
      <MainAboutUs />
    </div>
  );
};

export default AboutUs;
