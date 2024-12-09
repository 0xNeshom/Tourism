import icon1 from "@/public/advertising/map-icon.svg"
import icon2 from "@/public/advertising/wallet-icon.svg"
import icon3 from "@/public/advertising/plant-icon-2.svg"
import Image from "next/image"
const Advertising = () => {
    const options= [
        {id:1, title: 'تنوع تورها' , description:"هر مدل توری که بخوای ما داریم" ,icon:icon1},
        {id:2, title: 'قیمت های به صرفه' , description:"با کف قیمت میتونی بری سفر" ,icon:icon2},
        {id:3, title: 'امن و معتبر ' , description:"با خیال راحت بلیت بخر" ,icon:icon3}
    ]
  return (
    <div className="max-w-full flex gap-14 md:my-20 mx-auto justify-center items-center flex-wrap my-14 ">
        {options.map((e)=>(
            <div key={e.id} className="md:w-80 md:p-12 xs:w-80 flex p-3 shadow-md rounded-md gap-6 items-center justify-center">
                <Image src={e.icon} alt="Tours"/>
                <div className="flex flex-col gap-3 text-nowrap">
                    <h3 className="text-base font-semibold">{e.title}</h3>
                    <span className="text-sm font-light">{e.description}</span>
                </div>
            </div>
        ))}
      
    </div>
  )
}

export default Advertising
