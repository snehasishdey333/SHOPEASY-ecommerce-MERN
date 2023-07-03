import {IoMdSend} from 'react-icons/io'

const NewsLetter = () => {
  return (
    <div className="py-24 md:py-32 mx-auto flex flex-col justify-center items-center bg-[#FF597B]">
      <h1 className='text-white text-5xl font-bold mb-4'>Newsletter</h1>
      <p className='mx-auto px-4 text-center text-white text-lg md:text-xl'>Get timely updates from your favourite products</p>
      <div className=" mt-8 w-[80%] md:w-[30%] flex justify-center items-center space-x-2">
         <input className="outline-none px-4 py-2 w-[80%] md:w-[85%]" placeholder="Your Email"/>
         <button className=' text-center bg-white px-2 md:px-4 py-3 md:py-3 w-[20%] md:w-[15%]'><div className='text-[#FF597B] text-center mx-auto flex justify-center items-center'><IoMdSend/></div></button>
      </div>
    </div>
  )
}

export default NewsLetter
