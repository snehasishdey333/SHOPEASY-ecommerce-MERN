import Navbar from "../components/Navbar"
import Announcement from '../components/Announcement'
import { useLocation } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import URL from "../url"
import { addProduct } from "../redux/cartRedux"
import { useDispatch } from "react-redux"
import Loader from "../components/Loader"



const Product = () => {
  const location=useLocation()
  const productId=(location.pathname.split("/")[2])
  
  // console.log(productId)
  // console.log(URL)
  const [product,setProduct]=useState([])
  const [quantity,setQuantity]=useState(1)
  const [color,setColor]=useState("")
  const [size,setSize]=useState("")
  const [loading,setLoading]=useState(false)
  const dispatch=useDispatch()

  // console.log(color)
  // console.log(size)

  const handleCart=()=>{
      //update cart
      dispatch(
        addProduct({...product,quantity,color,size})
      )
      
  }
  
  const fetchProduct=async ()=>{
    setLoading(true)
    try{
      const res=await axios.get(URL+"/api/products/product/"+productId)
      
      setProduct(res.data)
      setColor(res.data.color[0])
      setSize(res.data.size[0])
      // console.log(res.data)
      setLoading(false)
    }
    catch(err){
      console.log(err)
      setLoading(true)
    }
  }

 

useEffect(()=>{
  window.scrollTo(0, 0);
   fetchProduct()
},[productId])

  return (
    <div>
    <Navbar/>
    <Announcement/>
    {loading?<div className="flex justify-center items-center h-[70vh]">
        <Loader/>
    </div>:<div className="px-4 md:px-[50px] my-24 flex justify-center items-center md:items-start md:flex-row flex-col space-y-16 md:space-x-16">
        {/* left */}
        <div className="flex justify-center items-center w-full md:w-[30%] px-4 md:px-0">
          <img src={product.img} alt="product image" className="mt-2"/>
        </div>
        {/* right */}
        <div className="w-full md:w-[50%] flex justify-center items-start md:items-start flex-col md:px-0 px-4">
          <h1 className="md:text-4xl text-3xl">{product.title}</h1>
          <p className="text-md mt-8 ">{product.desc}</p>
          <h1 className="md:text-4xl text-3xl my-8 text-[#FF597B]">₹{product.price}</h1>
          <div className="flex justify-center items-center mb-8 space-x-8">
          <label className="text-xl">Color: </label>
          <select onChange={(e)=>setColor(e.target.value)} className='text-lg md:text-lg md:px-4 md:py-2 px-2 py-1 ml-2'>
                
                {product.color?.map((c,i)=>(
                  <option  className="px-4 ml-2" key={i} value={c}>{c}</option>
                  
                ))}
                
            </select>

          <label className="text-xl">Size: </label>
          <select onChange={(e)=>setSize(e.target.value)} className='text-md md:text-lg md:px-4 md:py-2 px-2 py-1 ml-2'>
                
                {product.size?.map((s,i)=>(
                  <option  className="px-4 ml-2" key={i} value={s}>{s}</option>
                  
                ))}
                
            </select>
          </div>
          
           <div className="flex justify-center items-center">
            <button onClick={quantity<2?1:()=>setQuantity(quantity-1)} className="text-[#FF597B] bg-white border-2 text-2xl px-3 py-2 border-[#FF597B]">-</button>
            {/* <input value={quantity} className="w-[60px] p-2 ml-3 text-xl" type="number"/> */}
            <div className="px-4 py-2 text-lg">{quantity}</div>
            <button onClick={()=>setQuantity(quantity+1)} className="text-[#FF597B] bg-white border-2 text-2xl px-2 py-2 border-[#FF597B]">+</button>
           </div>
           <button onClick={handleCart} className="bg-[#FF597B] mt-8 text-white px-6 hover:bg-white hover:text-[#FF597B] text-xl border-2 border-[#FF597B] py-3">Add to Cart</button>
        </div>
    </div>}
    </div>
  )
}

export default Product
