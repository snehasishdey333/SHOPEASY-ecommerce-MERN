import { Link } from "react-router-dom"


const CategoryItem = ({c}) => {
  return (
    <Link className="" to={`/products/${c.cat}`}>
   <div className="z-1 flex justify-center items-center">
    <div className="z-2 relative md:h-[500px] md:w-[400px] w-full">
    <img src={c.img} alt="img" className="hover:brightness-50 brightness-75 w-full h-full object-cover"/>
    <div className="space-y-4 absolute top-[250px] left-0 right-0 grid place-items-center flex flex-col justify-center items-center">
        <h3 className="text-white  text-2xl">{c.name}</h3>
        <button className="px-4 py-2 bg-white text-[#FF597B] hover:bg-[#FF597B] hover:border-2 hover:border-white border-[#FF597B] border-2 hover:text-white">SHOP NOW</button>
      </div>
    </div>
      
      
    </div>
   </Link>
    
  )
}

export default CategoryItem
