import { useEffect, useState } from "react"
import { popularProducts } from "./Data"
import ProductItem from "./ProductItem"
import URL from "../url"
import axios from 'axios'
import { Link } from "react-router-dom"
import Loader from '../components/Loader'

const Products = ({cat,filters,sort}) => {
  // console.log(URL)
  // console.log(cat,filters,sort)

  const [products,setProducts]=useState([])
  const [filteredProducts,setFilteredProducts]=useState([])
  const [loading,setLoading]=useState(false)

  const fetchProducts=async ()=>{
    setLoading(true)
    try{
      const res=await axios.get(cat? URL+`/api/products/all?category=${cat}`: URL+"/api/products/all")
      // console.log(res.data)
      setProducts(res.data)
      setLoading(false)
    }
    catch(err){
      console.log(err)
      setLoading(true)
    }
  }

useEffect(()=>{
 
    window.scrollTo(0, 0);
  
  fetchProducts()
},[cat])

useEffect(()=>{
  cat && setFilteredProducts(
    products.filter(item=>Object.entries(filters).every(([key,value])=>item[key].includes(value)))
  )

},[products,cat,filters])

useEffect(()=>{
  if(sort==="newest"){
    setFilteredProducts(prev=>[...prev].sort((a,b)=>a.createdAt-b.createdAt))
  }else if(sort==="asc"){
    setFilteredProducts(prev=>[...prev].sort((a,b)=>a.price-b.price))
  }else{
    setFilteredProducts(prev=>[...prev].sort((a,b)=>b.price-a.price))
  }

},[sort])


  return (
    
    <div className="grid md:grid-cols-5 grid-cols-2 gap-12 md:gap-20 my-12 px-10 md:px-[50px]">
      {!loading?cat?filteredProducts.map((p)=>(
        <ProductItem key={p._id}  p={p}/>
        
      )):
      products.slice(0,20).map((p)=>(
        <ProductItem key={p._id}  p={p}/>
        
      )):<>
      <Loader/>
      <Loader/>
      <Loader/>
      <Loader/>
      <Loader/>
      </>}
    </div>
  )
}

export default Products
