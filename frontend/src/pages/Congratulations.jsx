
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import {TiTick} from 'react-icons/ti'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

const Congratulations = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
    const user=useSelector(state=>state.user.currentUser)
  return (
    <div>
      <Navbar/>
      <Announcement/>
      <h1 className="text-2xl md:text-3xl text-center my-8">ORDER CONFIRMATION</h1>
      <div className="flex mb-8 justify-between items-center px-4 md:px-[50px]">
       
        <button className="bg-[#FF597B] text-sm text-white px-2 hover:bg-white hover:text-[#FF597B] border-2 border-[#FF597B] py-1"><Link to="/products/">CONTINUE SHOPPING</Link></button>
        <button className="bg-[#FF597B] text-sm text-white px-2 hover:bg-white hover:text-[#FF597B] border-2 border-[#FF597B] py-1"><Link to={"/orders/"+user._id}>ORDERS PAGE</Link></button>
       
       
      </div>
      <div className="px-4 md:px-[50px] flex md:flex-row flex-col  justify-center items-start my-4 md:mb-24">
        <div className="w-full flex flex-col  items-start md:w-[70%]   my-6 md:my-0">
        <div className='flex justify-start items-center md:mt-14 space-x-4 mb-4'>
        <div className='bg-green-500 p-3 rounded-full text-white '>
            <p className='text-3xl'><TiTick/></p>
        </div>
           <h1 className='text-4xl text-green-500 font-bold'>Congratulations</h1>
        </div>
        <h3 className='text-black text-2xl text-left font-semibold'>Your Order is Successfull! Go to order page to get full order details.</h3>
        </div>
        <div className="p-4 w-full md:w-[30%] border-2 border-[#FF597B] flex flex-col space-y-4">
            <h1 className="text-xl">ORDER SUMMARY</h1>
            <div className="w-full flex justify-center flex-col space-y-2">
              <div className="flex justify-between items-center text-lg">
                <p>Subtotal</p>
                <p>₹200</p>
              </div>

              <div className="flex justify-between items-center text-lg">
                <p>Estimated Shipping</p>
                <p>+ ₹300</p>
              </div>

              <div className="flex justify-between items-center text-lg">
                <p>Shipping Discount</p>
                <p>- ₹400</p>
              </div>

              <div className="flex justify-between items-center text-lg">
                <p>Total</p>
                <p>₹500</p>
              </div>
            </div>
            {/* <button className="bg-[#FF597B] text-lg text-white px-4 hover:bg-white hover:text-[#FF597B] border-2 border-[#FF597B] py-3 mb-1 md:mb-2"><Link to={user && cart.products.length>1 ? "/checkout/address":"/"}>CHECKOUT</Link></button> */}
            {/* <button className="bg-[#FF597B] text-lg text-white px-4 hover:bg-white hover:text-[#FF597B] border-2 border-[#FF597B] py-3">PAY USING STRIPE</button> */}
        </div>
    </div>
    </div>
  )
}

export default Congratulations
