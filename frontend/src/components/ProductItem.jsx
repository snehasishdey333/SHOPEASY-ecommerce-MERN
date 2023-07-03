import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { addProduct } from "../redux/cartRedux"
import { useState } from "react"
import { AiOutlineHeart,AiFillHeart } from "react-icons/ai"
import { addProductW, removeProductW } from "../redux/wishListRedux"

const ProductItem = ({p}) => {
  // console.log(p)
  const cart=useSelector(state=>state.cart)
  
  // console.log(cart)
  const [addedtoCart,setAddedToCart]=useState(false)
  const [wishList,setwishList]=useState(false)
  const dispatch=useDispatch()

  const addToWishList=()=>{
      setwishList(true)
      dispatch(addProductW({p,quantity:1}))
  }
  const removeFromWishList=()=>{
      setwishList(false)
      dispatch(removeProductW({p,quantity:1}))
  }
  const handleCart=()=>{
    //update cart
    dispatch(
      addProduct({...p,quantity:1,color:p.color[0],size:p.size[0]})
    )
    setAddedToCart(true)
    
}
  return (
    <>
<div className=" flex flex-col justify-center items-center mt-10 md:mt-0">

    <div className="relative flex justify-center items-center h-full w-full">
    <Link to={"/product/"+p._id}>
    <img className="cursor-pointer hover:scale-105 ease-in duration-300" src={p.img} alt="img"/>
    </Link>
    <div className="absolute top-4 right-2 ">
     {!wishList? <p className="text-[#FF597B] text-2xl cursor-pointer" onClick={addToWishList}><AiOutlineHeart/></p>:""}
     {wishList?<p className="text-[#FF597B] text-2xl cursor-pointer" onClick={removeFromWishList}><AiFillHeart/></p>:""}
    </div>
    </div>
    <h1 className="font-semibold text-xl my-4 text-center">{p.title}</h1>
    <div className="flex justify-center space-x-4 items-center">
     <h3 className="text-2xl text-[#FF597B]">₹{p.price}</h3>
     {!addedtoCart?<button onClick={handleCart} className="border-2 border-[#FF597B] px-4 py-2 hover:bg-[#FF597B] hover:text-white">Cart</button>:
         <button className="border-2 border-[#FF597B] px-4 py-2 hover:bg-[#FF597B] hover:text-white"><Link to="/cart">Added</Link></button>
         }
    </div>
      {/* <div className="flex justify-center items-center space-x-1 md:space-x-4 mt-8">
         <button className="bg-[#FF597B] border-2 border-white text-white px-4 py-2 hover:bg-white hover:text-[#FF597B] hover:border-2 hover:border-[#FF597B]">Wishlist</button>
         {!addedtoCart?<button onClick={handleCart} className="border-2 border-[#FF597B] px-4 py-2 hover:bg-[#FF597B] hover:text-white">Cart</button>:
         <button className="border-2 border-[#FF597B] px-4 py-2 hover:bg-[#FF597B] hover:text-white"><Link to="/cart">Added</Link></button>
         }
      </div> */}
    </div>
    
    </>

    
    
  )
}

export default ProductItem
