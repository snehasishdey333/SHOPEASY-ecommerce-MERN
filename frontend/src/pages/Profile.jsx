import { useEffect, useState } from "react"
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import axios from 'axios'
import URL from '../url'
import { useSelector } from "react-redux"


const Profile = () => {
    const user=useSelector(state=>state.user.currentUser)
    // console.log(user)
    const TOKEN=(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken)
    // console.log(TOKEN)
    // const [userDetails,setUserDetails]=useState({})
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [success,setSuccess]=useState(false)
  const [error,setError]=useState(false)
  
    const fetchUser=()=>{
        
        axios({
            url: URL+"/api/users/user/"+user._id,
            method: 'get',
            headers: {
                // 'X-Id-Token': 'abc123abc123',
                'token':"Bearer "+TOKEN,
                'Content-Type': 'application/json'
            }
         })
         .then(res => {
            // console.log(response.data)
        setName(res.data.name)
        setEmail(res.data.email)
        setPassword(res.data.password)
       
            // console.log(res.data)
         }) 
         .catch(err => {
            console.log(err);
            
         });
    }

    const handleUpdate=()=>{
       
        setError(false)
        setSuccess(false)
        axios.put(URL+"/api/users/user/"+user._id,{name,email,password},{
            headers: {
                // 'X-Id-Token': 'abc123abc123',
                'token':"Bearer "+TOKEN,
                'Content-Type': 'application/json'
            }
        })
         .then(res => {
            // console.log(response.data)
        setName(res.data.name)
        setEmail(res.data.email)
        setPassword(res.data.password)
        // console.log(res.data)
        setSuccess(true)
        fetchUser()
            // console.log(res.data)
         }) 
         .catch(err => {
            console.log(err);
            setError(true)
         });
    }

    useEffect(()=>{
       fetchUser()
    },[])
    
  return (
    <div>
      <Navbar/>
      <Announcement/>
      <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl md:text-3xl text-center my-8">MY PROFILE</h1>
      <div className="flex flex-col justify-center items-center space-y-8 mt-8 mb-24 border-2 border-[#FF597B] px-24 py-16">
        <input className="w-full outline-none px-4 py-2" onChange={(e)=>setName(e.target.value)} value={name} placeholder="Your Name" type="text"/>
        <input className="w-full outline-none px-4 py-2" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="Your Email Address" type="email"/>
        <input className="w-full outline-none px-4 py-2" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="Your Password" type="password"/>
        <button className="bg-[#FF597B] text-sm md:text-lg mt-4 text-white px-4 hover:bg-white hover:text-[#FF597B] border-2 border-[#FF597B] py-2" onClick={handleUpdate}>UPDATE DETAILS</button>
        {success?<div className="text-center text-sm text-green-500">Updated Details Successfully!</div>:""}
        {error?<div className="text-center text-sm text-red-500">Something went wrong!</div>:""}
      </div>
      </div>
    </div>
  )
}

export default Profile
