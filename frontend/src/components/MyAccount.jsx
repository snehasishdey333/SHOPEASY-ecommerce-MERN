import { Link, useNavigate } from "react-router-dom"
import Announcement from "./Announcement"
import Navbar from "./Navbar"
import { logoutSuccess } from '../redux/userRedux'
import { useDispatch, useSelector } from "react-redux"


const MyAccount = () => {
  const user=useSelector(state=>state.user.currentUser)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleLogout=()=>{
    dispatch(logoutSuccess())
    navigate("/")
  }
  return (
    <div>
     <div className='absolute top-11 z-10 flex flex-col bg-[#FF597B] px-4 pr-12 py-4 space-y-2 text-lg'>
              <p className="cursor-pointer text-white hover:text-black"><Link to="/profile">Profile</Link></p>
              <p className="cursor-pointer text-white hover:text-black"><Link to={"/orders/"+user._id}>Orders</Link></p>
              <p className="cursor-pointer text-white hover:text-black"><Link to="/wishlist">Wishlist</Link></p>
              <p className="cursor-pointer text-white hover:text-black"><Link to="/cart">Cart</Link></p>
              <p onClick={handleLogout} className="cursor-pointer text-white hover:text-black"><Link to="/logout">Log out</Link></p>
            </div>
    </div>
  )
}

export default MyAccount
