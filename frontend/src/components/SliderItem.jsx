import { sliderItems } from "./Data"


const SliderItem = ({s}) => {
   // console.log(s)
  return (
    <div  className="z-1 hidden md:flex  w-screen h-full px-[200px] bg-[#F9B5D0]  justify-center items-center">
    <div className="w-full h-full relative ">
    <img src={s.img} className="h-full ml-48 z-99 absolute"/>
    <div className="bg-white h-[500px] rounded-full w-[500px] mt-8 z-1"></div>
    </div>
      
       <div className="w-full flex flex-col justify-center items-center space-y-8">
       <div className="flex flex-col justify-center items-center space-y-8">
         <h1 className="text-5xl">{s.title}</h1>
         <h3 className="text-2xl text-center text-black">{s.desc}</h3>
        </div>
        <button className="border-4 border-white px-8 py-4 bg-[#FF597B] font-bold text-white">SHOP NOW</button>
       </div>
       
       </div>
  )
}

export default SliderItem
