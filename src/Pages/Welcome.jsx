import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import Navbar from '../Components/Navbar'
import Login from './Login'
import "./Welcome.css"

const Welcome = () => {
    const [blogs, setblogs] = useState([])
    const [loading, setLoading] = useState(true)
    const fetchblogs = async()=>{
        setLoading(true)
        const data= await axios.get("http://demo3741010.mockable.io/blogs")
        setblogs(data.data)
        setLoading(false)
    }
    useEffect(() => {
        fetchblogs()
    }, [])
    {!loading && console.log(blogs)}
    const [isLoggedin, setisLoggedin] = useState(false)
    if(!loading && isLoggedin || localStorage.getItem("token") !==null){return (
        <div>
           <Navbar setisLoggedin={setisLoggedin}/>
           <div className="allblogs">
           {blogs.map((blog)=>(
           <Card key={blog.id} blog={blog}/>))}
           </div>
           
        </div>
    )}
    if (!isLoggedin && localStorage.getItem("token")===null) {return(
        <Login setisLoggedin={setisLoggedin}/>
    )
        
    }
}

export default Welcome
