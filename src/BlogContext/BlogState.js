import axios from "axios";
import { useState } from "react";
import BlogContext from "./BlogContext";
const BlogState = (props) => {
    const api = "http://demo3741010.mockable.io/blogs"
    const [Blogs, setBlogs] = useState([])
    const [error, setError] = useState(false)
    const [isLoggedin, setIsLoggedin] = useState(false)
    const [Loading, setLoading] = useState(false)
    const [singleblog, setSingleblog] = useState()



    const getblogs = async () => {
        setLoading(true)
        const response = await axios.get(api)
        const res = response.data
        setBlogs(res)
        setLoading(false)
        if (localStorage.getItem('token') !== null) {
            setIsLoggedin(true)
        }
    }
    const getsingleblogs = async (id) => {
        setLoading(true)
        const response = await axios.get(api)
        const res = response.data
        console.log("context")
        setSingleblog((res).filter((blog) => blog.id == id))
        setLoading(false)
        if (localStorage.getItem('token') !== null) {
            setIsLoggedin(true)
        }
    }
    const login = (username, password) => {
        if (username === "demo" && password === "demo") {
            localStorage.setItem('token', username)
            setIsLoggedin(true)
        } else {
            setError(true)
        }
    }
    const logout = () => {
        localStorage.removeItem("token")
        setIsLoggedin(false)
        setError(false)
    }
    return (<BlogContext.Provider value={{ Blogs, getblogs, login, isLoggedin, Loading, error, getsingleblogs, setIsLoggedin, logout, singleblog }}>
        {props.children}
    </BlogContext.Provider>)
}

export default BlogState
