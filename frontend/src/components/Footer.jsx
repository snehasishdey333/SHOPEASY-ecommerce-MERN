import { Link } from "react-router-dom"
import {MdLocationPin,MdCall,MdMailOutline} from 'react-icons/md'
import {FaFacebookSquare,FaInstagramSquare,FaTwitterSquare,FaPinterestSquare} from 'react-icons/fa'

const Footer = () => {
  return (
    <>
    <div className="bg-[#EEEEEE] px-4 md:px-[50px] md:flex-row space-y-16 md:space-y-0 flex-col flex justify-between items-start pt-8 pb-16">
    {/* left div */}
    <div className="w-full md:w-[25%] flex flex-col items-start">
    <div className='text-xl mb-6 md:text-2xl text-center cursor-pointer text-[#FF597B]'>
       <Link to="/">SHOPEASY</Link>   
      </div>
      <p className="text-left mb-3">Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
      <div className="flex justify-center items-center space-x-3 text-3xl">
        <p className="hover:text-[#FF597B] cursor-pointer"><FaFacebookSquare/></p>
        <p className="hover:text-[#FF597B] cursor-pointer"><FaInstagramSquare/></p>
        <p className="hover:text-[#FF597B] cursor-pointer"><FaTwitterSquare/></p>
        <p className="hover:text-[#FF597B] cursor-pointer"><FaPinterestSquare/></p>
      </div>
    </div>
    {/* middle div */}
    <div className="w-full md:w-[25%] flex flex-col items-start">
    <h3 className="text-xl font-bold mb-6">Useful Links</h3>
    <div className="flex space-x-12">
    <ul>
        <li className="hover:text-[#FF597B] cursor-pointer">Home</li>
        <li className="hover:text-[#FF597B] cursor-pointer">Man Fashion</li>
        <li className="hover:text-[#FF597B] cursor-pointer">Accessories</li>
        <li className="hover:text-[#FF597B] cursor-pointer">Order Tarcking</li>
        <li className="hover:text-[#FF597B] cursor-pointer">Wishlist</li>
    </ul>

    <ul>
        <li className="hover:text-[#FF597B] cursor-pointer">Cart</li>
        <li className="hover:text-[#FF597B] cursor-pointer">Woman Fashion</li>
        <li className="hover:text-[#FF597B] cursor-pointer">My Account</li>
        <li className="hover:text-[#FF597B] cursor-pointer">Terms & Conditions</li>
        <li className="hover:text-[#FF597B] cursor-pointer">Privacy Policy</li>
    </ul>

    </div>

    </div>
    {/* right div */}
    <div className="w-full md:w-[25%] flex flex-col items-start">
    <h3 className="text-xl font-bold mb-6">Contact</h3>
    <div className="flex space-x-3 justify-center items-center">
       <p><MdLocationPin/></p>
       <p>Saradapally, Birapra, Dist-Alipurduar, 735204</p>
    </div>
    <div className="flex space-x-3 justify-center items-center">
       <p><MdCall/></p>
       <p>+91 6437864372</p>
    </div>
    <div className="flex space-x-3 justify-center items-center">
       <p><MdMailOutline/></p>
       <p>info@shopeasy.com</p>
    </div>
    <div></div>
    </div>
      
    </div>
    <p className="bg-[#EEEEEE] py-4 text-center text-[#FF597B]">Copyright © by SHOPEASY 2023. All rights reserved.</p>
    </>
  )
}

export default Footer
