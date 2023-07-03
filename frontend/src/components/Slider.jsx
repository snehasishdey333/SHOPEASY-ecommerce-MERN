import { useState } from "react";
import { sliderItems } from "./Data"
import { BsCheckLg, BsChevronLeft,BsChevronRight} from 'react-icons/bs'
import SliderItem from "./SliderItem";


const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? sliderItems.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === sliderItems.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    console.log(slideIndex)
    setCurrentIndex(slideIndex);
   
  };
  console.log(sliderItems.indexOf({
    id: 2,
    img: "https://www.pngall.com/wp-content/uploads/5/Attractive-Model-Man-PNG-Free-Image.png",
    title: "AUTUMN COLLECTION",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "fcf1ed",
  })+2)

  return (
    <div className="hidden relative h-[75vh] w-full md:flex justify-center items-center">
       <div className="overflow-hidden h-full w-screen duration-500 flex flex-row">
       
       {
        sliderItems.map((s,i)=>(
          <div key={i} onClick={() =>
          goToSlide(sliderItems.indexOf(s)+2)}>
          <SliderItem  s={s}/>
          </div>
          
        ))
        
       }
      

       </div>
       {/* left arrow */}
       <div className='z-5 group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronLeft onClick={prevSlide} size={40}/>
       </div>
       {/* right arrow */}
       <div className='z-5 group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronRight onClick={nextSlide} size={40}/>
       </div>
       
        
     
    </div>
  )
}

export default Slider
