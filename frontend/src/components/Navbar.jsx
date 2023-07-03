import {BsSearch} from 'react-icons/bs'
import {Link, useNavigate} from 'react-router-dom'
import {AiOutlineShoppingCart,AiFillHeart} from 'react-icons/ai' 
import {useDispatch, useSelector} from 'react-redux'
import {FaRegUserCircle} from 'react-icons/fa'

import MyAccount from './MyAccount'
import { useState } from 'react'



const Navbar = () => {
   const cart=useSelector(state=>state.cart)
   const quantity=useSelector(state=>state.cart.quantity)
   const user=useSelector(state=>state.user.currentUser)
   const dispatch=useDispatch()
   const navigate=useNavigate()
   const [toggleAccount,setToggleAccount]=useState(false)
   // console.log(cart)
   // console.log(quantity)

   
   const handleToggle=()=>{
      setToggleAccount(!toggleAccount)
   }
  
  return (
    <div className="bg-white px-1 md:px-[50px] py-4 flex ">
    {/* left div */}
      <div className="flex-1 flex justify-start items-center space-x-2 md:space-x-4">
         <h3 className="hidden md:block font-semibold md:text-xl">EN</h3>
         <div className="w-[100px] md:w-[45%] flex bg-white border-2 border-[#FF8E9E] justify-center items-center">
            <input placeholder='Search' type="text" className="text-sm md:text-md w-[95%]  outline-none px-1 py-1 md:px-2 md:py-1 bg-white"/>
            <p className='w-[20%]  pr-2 text-[#FF8E9E]'><BsSearch/></p>
         </div>
      </div>

      {/* middle div */}
      <div className='flex-1 text-xl md:text-2xl text-center cursor-pointer text-[#FF597B]'>
       <Link to="/">SHOPEASY</Link>   
      </div>

      {/* right div */}
      <div className='flex-1 flex justify-end items-center space-x-4 md:space-x-8 mr-1 md:mr-0'>
         {!user?<h3 className='md:text-xl text-sm'><Link to="/register">REGISTER</Link></h3>:""}
         {!user?<h3 className='md:text-xl text-sm '><Link to="/login">SIGN IN</Link></h3>:""}
         {user?<div className='text-[#FF597B] relative hidden md:block md:text-xl cursor-pointer' >
            <p onClick={handleToggle}>MY ACCOUNT</p>
            {toggleAccount?<MyAccount/>:""}
         </div>:""}
         {user?<div className='md:hidden relative text-[#FF597B] text-2xl cursor-pointer'>
         <p onClick={handleToggle}><FaRegUserCircle/></p>
         {toggleAccount?<MyAccount/>:""}
         </div>:""}
         {/* {user?<h3 className='text-2xl cursor-pointer text-[#FF597B]'><Link to="/wishlist">
            <AiFillHeart/>
         </Link></h3>:""} */}
         {user?<Link to="/cart">
         <div className='flex justify-center items-center cursor-pointer'>
            <p className=' text-2xl'><AiOutlineShoppingCart/></p>
            <div className='mr-1 md:mr-0 bg-[#FF597B] flex justify-center items-center px-1 rounded-full'>
                <p className='text-[#EEEEEE]'>{quantity}</p>
            </div>
         </div>
         </Link>:""}
         
      </div>
    </div>
  )
}

export default Navbar
