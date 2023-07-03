

const OrderItem = ({o}) => {
    
  return (
    <>

    <div className="px-4 my-2 flex flex-col">
    <div className="flex justify-between items-center md:px-10 mb-4">
       <div className="flex justify-center items-center">
        <p className="text-sm font-bold md:text-lg text-[#FF597B]">Ordered on: </p>
        <p className="text-sm md:text-lg"> {o.updatedAt.slice(0,10)}</p>
       </div>

       <div className="flex justify-center items-center">
        <p className="text-sm font-bold md:text-lg text-[#FF597B]">Estimated delivery time: </p>
        <p className="text-sm md:text-lg">7 days</p>
       </div>

       
    </div>
       {o.products?.map((p)=>(
        <>
        <div className="flex justify-start items-center space-x-4 my-1 mb-8 md:w-[90%] md:ml-8 ">
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
        
      </div>
      <div className="flex justify-start items-center space-x-1">
        <p className="text-sm md:text-xl font-bold">Color:</p> <span>{p.color}</span>
      </div>
      <div className="flex justify-between items-center">
         <div className="flex justify-center items-center">
           <p className="text-sm md:text-xl font-bold mr-1">Size:</p>
           <p className="text-sm md:text-xl">{p.size}</p>
         </div> 
        
         <h1 className="text-xl md:text-2xl">₹{p.price * p.quantity}</h1>
         
         
      </div>
      <div className="flex justify-start items-center">
      <p className="text-sm md:text-xl font-bold mr-1">Quantity:</p>
           <p className="text-sm md:text-xl">{p.quantity}</p>
      </div>

      </div>
    </div>
    </>
       ))}
    </div>
    <div className="w-[80%] mx-auto bg-[#FF597B] h-[2px] opacity-30"></div>
    </>
  )
}

export default OrderItem
