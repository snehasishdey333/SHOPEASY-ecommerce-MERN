import { useDispatch } from "react-redux"
import { removeProduct } from "../redux/cartRedux"


const CartItem = ({p}) => {
  const dispatch=useDispatch()
  
  const removeFromCart=()=>{
       
        dispatch(
          removeProduct({
            id: p._id,
            total: p.price * p.quantity,
          })
        );
       
  }
  return (
    <div className="flex justify-start items-center space-x-4 my-2 mb-8 md:w-[90%] md:ml-8 ">
      <div className="md:w-[20%] w-[30%] md:mr-10 ">
        <img className="w-full" src={p.img} alt=""/>
      </div>
      <div className="w-full flex flex-col  justify-center">
      <div className="flex justify-start items-center space-x-2 ">
        <p className="text-sm md:text-xl font-bold">Product:</p>
        <p className="text-sm md:text-xl">{p.title}</p>
      </div>

      <div className="flex justify-between  space-x-2">
        <div className="flex justify-center items-center">
            <p className="text-sm md:text-xl font-bold mr-1">ID:</p>
            <p className="text-sm md:text-xl">{p._id}</p>
        </div>
        {/* <div className="hidden md:flex md:flex-row justify-center items-center">
            <button className="text-[#FF597B] bg-white border-2 text-xl md:text-2xl px-2  border-[#FF597B]">-</button>
            <div className="w-[40px] p-2 md:ml-2 text-xl">{p.quantity}</div>
            <button className="text-[#FF597B] bg-white border-2 text-xl md:text-2xl px-1  border-[#FF597B]">+</button>
           </div> */}
        <button onClick={()=>removeFromCart(p._id)} className="bg-[#FF597B] text-sm text-white px-2 hover:bg-white hover:text-[#FF597B] border-2 border-[#FF597B] py-1">Remove</button>
      </div>
      <div className="flex justify-start items-center space-x-1">
        <p className="text-sm md:text-xl font-bold">Color:</p> <span>{p.color}</span>
      </div>
      <div className="flex justify-between items-center">
         <div className="flex justify-center items-center">
           <p className="text-sm md:text-xl font-bold mr-1">Size:</p>
           <p className="text-sm md:text-xl">{p.size}</p>
         </div> 
         {/* <div className="flex flex-row justify-center items-center space-x-4">
         <div className="md:hidden flex justify-center items-center">
            <button className="text-[#FF597B] bg-white border-2 text-xl md:text-2xl px-2  border-[#FF597B]">-</button>
            <div className="w-[40px] p-2 ml-2 text-xl">{p.quantity}</div>
            <button className="text-[#FF597B] bg-white border-2 text-xl md:text-2xl px-1  border-[#FF597B]">+</button>
           </div> */}
         <h1 className="text-xl md:text-2xl">₹{p.price * p.quantity}</h1>
         {/* </div> */}
         
      </div>
      <div className="flex justify-start items-center">
      <p className="text-sm md:text-xl font-bold mr-1">Quantity:</p>
           <p className="text-sm md:text-xl">{p.quantity}</p>
      </div>

      </div>
    </div>
  )
}

export default CartItem
