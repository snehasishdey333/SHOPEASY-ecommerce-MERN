import axios from "axios";
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import { useSelector } from "react-redux";
import URL from "../url";
import { useEffect, useState } from "react";
import OrderItem from "../components/OrderItem";
import Loader from "../components/Loader";


const Order = () => {
    const [orders,setOrders]=useState([])
    const [loading,setLoading]=useState(false)
    const user=useSelector(state=>state.user.currentUser)
    const TOKEN=(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken)
    const fetchOrders=()=>{
      setLoading(true)
        axios({
            url: URL+"/api/orders/"+user._id,
            method: 'get',
            headers: {
                // 'X-Id-Token': 'abc123abc123',
                'token':"Bearer "+TOKEN,
                'Content-Type': 'application/json'
            }
         })
         .then(res => {
            // console.log(response.data)
        setOrders(res.data)
        setLoading(false)
      //  console.log(res.data)
            // console.log(res.data)
         }) 
         .catch(err => {
            console.log(err);
            setLoading(true)
         });
    }

    useEffect(()=>{
        fetchOrders()
    },[user._id])
  return (
    <div>
    <Navbar/>
    <Announcement/>
    <div className="flex flex-col items-center justify-center mb-8">
      <h1 className="text-2xl md:text-3xl text-center my-8">MY ORDERS</h1>
      <div>
           {loading?<div className="flex justify-center items-center h-[70vh]">
            <Loader/>
           </div>:orders.reverse().map((o)=>(
            <OrderItem key={o._id} o={o}/>
           ))}
      </div>
      </div>
    </div>
  )
}

export default Order
