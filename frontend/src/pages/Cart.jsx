import { useSelector } from "react-redux"
import Announcement from "../components/Announcement"
import CartItem from "../components/CartItem"
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"


const Cart = () => {
  const cart=useSelector(state=>state.cart)
  const user=useSelector(state=>state.user.currentUser)
  const wishList=useSelector(state=>state.wishList)
//  console.log(cart.products)
  return (
    <div>
    <Navbar/>
    <Announcement/>
    <h1 className="text-2xl md:text-3xl text-center my-8">YOUR BAG</h1>
    
      <div className="flex mb-8 justify-between items-center px-4 md:px-[50px]">
       
        <button className="bg-[#FF597B] text-sm text-white px-2 hover:bg-white hover:text-[#FF597B] border-2 border-[#FF597B] py-1"><Link to="/products/">CONTINUE SHOPPING</Link></button>
       
       <div>
        <p>Shopping Cart {"("+cart.products.length+")"}</p>
        <p>Your Wishlist {"("+wishList.products.length+")"}</p>
       </div>
       
      </div>
      <div className="px-4 md:px-[50px] flex md:flex-row flex-col  justify-center items-start my-4 ">
        <div className="w-full flex flex-col items-start md:w-[70%]">
           {/* <CartItem/>
           <CartItem/>
           <CartItem/> */}
           {cart.products?.map((p)=>(
              <CartItem key={p._id} p={p}/>
           ))}

        </div>
        <div className="p-4 w-full md:w-[30%] border-2 border-[#FF597B] flex flex-col space-y-4">
            <h1 className="text-xl">ORDER SUMMARY</h1>
            <div className="w-full flex justify-center flex-col space-y-2">
              <div className="flex justify-between items-center text-lg">
                <p>Subtotal</p>
                <p>₹{!cart.total?0:cart.total}</p>
              </div>

              <div className="flex justify-between items-center text-lg">
                <p>Estimated Shipping</p>
                <p>+ ₹{cart.quantity?cart.quantity*50:0}</p>
              </div>

              <div className="flex justify-between items-center text-lg">
                <p>Shipping Discount</p>
                <p>- ₹{cart.quantity?cart.quantity*50:0}</p>
              </div>

              <div className="flex justify-between items-center text-lg">
                <p>Total</p>
                <p>₹{!cart.total?0:cart.total}</p>
              </div>
            </div>
            <button className="bg-[#FF597B] text-lg text-white px-4 hover:bg-white hover:text-[#FF597B] border-2 border-[#FF597B] py-3 mb-1 md:mb-2"><Link to={user && cart.products.length>1 ? "/checkout/address":"/"}>CHECKOUT</Link></button>
            {/* <button className="bg-[#FF597B] text-lg text-white px-4 hover:bg-white hover:text-[#FF597B] border-2 border-[#FF597B] py-3">PAY USING STRIPE</button> */}
        </div>
    </div>
      
    </div>
  )
}

export default Cart
