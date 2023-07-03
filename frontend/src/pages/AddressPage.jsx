import { useSelector } from "react-redux"
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import { Link, useNavigate } from "react-router-dom"
import CartItem from "../components/CartItem"
import { useEffect, useState } from "react"
import axios from "axios"
import URL from '../url'


const AddressPage = () => {
    const navigate=useNavigate()
    const cart=useSelector(state=>state.cart)
  const user=useSelector(state=>state.user.currentUser)
  const wishList=useSelector(state=>state.wishList)
  const [addressDetails,setAddressDetails]=useState({address:"",landmark:"",city:"",pincode:"",phoneNumber:"",state:""})
  const [success,setSuccess]=useState(false)
  const [error,setError]=useState(false)
  const TOKEN=(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken)
  //console.log(wishList)
// console.log(addressDetails)
useEffect(()=>{
  window.scrollTo(0, 0);
},[])

const handleCOD=()=>{

  
  

    setError(false)
    setSuccess(false)
    axios.post(URL+"/api/orders/order/create",
    {
        userId:user._id,
        products:cart.products,
        amount:cart.total,
        address:addressDetails,
        mode:"Cash On Delivery",
        status:"confirmed",
    }
    ,{
        headers: {
            // 'X-Id-Token': 'abc123abc123',
            'token':"Bearer "+TOKEN,
            'Content-Type': 'application/json'
        }
    })
     .then(res => {
        // console.log(response.data)
    console.log(res.data)
    navigate("/congratulations")
    setSuccess(true)
        // console.log(res.data)
     }) 
     .catch(err => {
        console.log(err);
        setError(true)
     });

}
  const handleAddress=(e)=>{
    const { name, value } = e.target;
    setAddressDetails(prevState => ({
        ...prevState,
        [name]: value
    }));
  }
  return (
    <div>
      <Navbar/>
      <Announcement/>
      <h1 className="text-2xl md:text-3xl text-center my-8">YOUR ADDRESS</h1>
      
      <div className="flex mb-8 justify-between items-center px-4 md:px-[50px]">
       
        <button className="bg-[#FF597B] text-sm text-white px-2 hover:bg-white hover:text-[#FF597B] border-2 border-[#FF597B] py-1"><Link to="/products/">CONTINUE SHOPPING</Link></button>
       
       <div>
        <p>Shopping Cart {"("+cart.products.length+")"}</p>
        <p>Your Wishlist {"("+wishList.products.length+")"}</p>
       </div>
       
      </div>
      <div className="px-4 md:px-[50px] flex md:flex-row flex-col  justify-center items-start my-4 ">
        <div className="w-full flex flex-col items-start md:w-[70%]  my-4">
           <input name="address" value={addressDetails.address} onChange={handleAddress} className="w-full outline-none px-4 py-2 text-lg" placeholder="Address" type="text"/>
           <input name="landmark" onChange={handleAddress} value={addressDetails.landmark} className="w-full outline-none px-4 py-2 text-lg" placeholder="Landmark" type="text"/>
           <input name="city" onChange={handleAddress} value={addressDetails.city} className="w-full outline-none px-4 py-2 text-lg" placeholder="City" type="text"/>
           <input name="pincode" onChange={handleAddress} value={addressDetails.pincode} className="w-full outline-none px-4 py-2 text-lg" placeholder="Pincode" type="number"/>
           <input name="phoneNumber" onChange={handleAddress} value={addressDetails.phoneNumber} className="w-full outline-none px-4 py-2 text-lg" placeholder="Phone Number" type="number"/>
           <input name="state" onChange={handleAddress} value={addressDetails.state} className="w-full outline-none px-4 py-2 text-lg" placeholder="State" type="text"/>
           
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
            <button className="bg-[#FF597B] text-lg text-white px-4 hover:bg-white hover:text-[#FF597B] border-2 border-[#FF597B] py-3 mb-1 md:mb-2" onClick={handleCOD}>CASH ON DELIVERY</button>
            <button className="bg-[#FF597B] text-lg text-white px-4 hover:bg-white hover:text-[#FF597B] border-2 border-[#FF597B] py-3">PAY USING STRIPE</button>
        </div>
    </div>
      
    </div>
  )
}

export default AddressPage
