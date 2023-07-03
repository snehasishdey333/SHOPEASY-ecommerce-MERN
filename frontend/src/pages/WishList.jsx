import { useSelector } from "react-redux"
import Announcement from "../components/Announcement"
import CartItem from "../components/CartItem"
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"
import ProductItem from "../components/ProductItem"
import WishListItem from "../components/WishListItem"
import { useState } from "react"


const WishList = () => {
  const wishlist=useSelector(state=>state.wishList)
 
  return (
    <div>
    <Navbar/>
    <Announcement/>
    <h1 className="text-2xl md:text-3xl text-center my-8">YOUR WISHLIST</h1>
    
      
    <div className="grid md:grid-cols-5 grid-cols-2 gap-12 md:gap-20 my-12 px-10 md:px-[50px]">
    {wishlist.products?.map((p)=>(
      <WishListItem key={p.p} p={p.p} />
      ))}
    </div>
    
    </div>
  )
}

export default WishList

