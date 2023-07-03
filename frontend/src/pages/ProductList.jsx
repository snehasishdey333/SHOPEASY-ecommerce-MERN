
import Navbar from '../components/Navbar'
import { popularProducts } from '../components/Data'
import ProductItem from '../components/ProductItem'
import Announcement from '../components/Announcement'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import Products from '../components/Products'

const ProductList = () => {
  const location=useLocation()
  const cat=(location.pathname.split("/")[2])
  const [filters,setFilters]=useState({})
  const [sort,setSort]=useState("newest")
  const handleFilters=(e)=>{
    const value=e.target.value
    
    setFilters({
      ...filters,
      [e.target.name]:value
        // [e.target.name]:value.toLowercase()
    })

  }
  // console.log(filters)
  // console.log(sort)
  return (
    <div>
      <Navbar/>
      <Announcement/>
      <h1 className='mt-8 text-left md:text-2xl text-xl font-bold px-4 md:px-[50px]'>{cat.slice(0,1).toUpperCase()+cat.slice(1)}</h1>
      <div className='mt-4 flex justify-between items-center px-4 md:px-[50px]'>
      {/* left portion */}
        <div className='flex justify-center items-center space-x-1 md:space-x-4'>
            <h3 className='hidden md:block text-sm md:text-lg font-semibold'>Filter Products</h3>
            <h3 className='md:hidden text-sm md:text-lg font-semibold'>Filter</h3>
           
            <div className='px-2'>
            <select className='text-sm md:text-lg' name="color" onChange={handleFilters}>
                <option disabled>Color</option>
                <option value="red">Red</option>
                <option value="black">Black</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
                <option value="brown">Brown</option>
                <option value="white">White</option>
                <option value="pink">Pink</option>
            </select>
        </div>

        <div className='md:px-2'>
            <select className='text-sm md:text-lg' name="size" onChange={handleFilters}>
                <option disabled>Size</option>
                <option value="XXXL">XXXL</option>
                <option value="XXL">XXL</option>
                <option value="XL">XL</option>
                <option value="L">L</option>
                <option value="M">M</option>
                <option value="S">S</option>
                <option value="XS">XS</option>
            </select>
        </div>


        </div>
         {/* right portion */}
        <div className='flex justify-center items-center space-x-1 md:space-x-4'>
        <h3 className='hidden md:block text-sm md:text-lg font-semibold'>Sort Products</h3>
        <h3 className='md:hidden text-sm md:text-lg font-semibold'>Sort</h3>
           
           <div className='md:px-2'>
           <select onChange={e=>setSort(e.target.value)} className='text-sm md:text-lg' >
               
               <option value="newest">Newest</option>
               <option value="asc">Price (asc)</option>
               <option value="desc">Price (desc)</option>
               
           </select>
       </div>
        </div>
      </div>
      {/* <div className="grid md:grid-cols-5 grid-cols-2 gap-12 md:gap-20 my-12 px-10 md:px-[50px]"> */}
      {/* {popularProducts.map((p)=>(
        <ProductItem key={p.id} sort={sort} cat={cat} filters={filters} p={p}/>
      ))} */}
      <Products cat={cat} filters={filters} sort={sort} />
    {/* </div> */}
    </div>
  )
}

export default ProductList
