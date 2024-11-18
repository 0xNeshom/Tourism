import MainAboutUs from "../modules/MainAboutUs"
import SidebarAboutus from "../modules/SidebarAboutus"
const AboutUs = () => {
  return (
    <div className="flex justify-center  gap-6">
      <SidebarAboutus/>
      <MainAboutUs/>
    </div>
  )
}

export default AboutUs
