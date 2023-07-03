import Home from "./pages/Home";
import {Routes,Route} from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Footer from "./components/Footer";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import {useSelector} from 'react-redux'
import Logout from "./pages/Logout";
import MyAccount from "./components/MyAccount";
import WishList from "./pages/WishList";
import Profile from "./pages/Profile";
import Order from './pages/Order'
import AddressPage from "./pages/AddressPage";
import Congratulations from "./pages/Congratulations";

export default function App() {
  const user=useSelector(state=>state.user.currentUser)
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/register" element={user?<Home/>:<Register/>} />
        <Route exact path="/login" element={user?<Home/>:<Login/>} />
        <Route exact path="/products" element={<ProductList/>} />
        <Route exact path="/cart" element={<Cart/>} />
        <Route exact path="/product/:id" element={<Product/>} />
        <Route exact path="/products/:category" element={<ProductList/>} />
        <Route exact path="/logout" element={<Logout/>} />
        <Route exact path="/profile" element={<Profile/>} />
        <Route exact path="/orders/:id" element={<Order/>} />
        <Route exact path="/wishlist" element={<WishList/>} />
        <Route exact path="/checkout/address" element={<AddressPage/>}/>
        <Route exact path="/congratulations" element={<Congratulations/>}/>
        </Routes>
        <Footer/>
        </>
    
  )
}