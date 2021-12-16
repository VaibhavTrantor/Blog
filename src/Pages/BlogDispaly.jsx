import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './BlogDisplay.css'

const BlogDispaly = () => {
    const [singleblog, setSingleblog] = useState([])
    const [loading, setLoading] = useState(true)
    const [isLoggedin, setisLoggedin] = useState(false)
    const { id } = useParams()
    const fetchblogs = async () => {
        setLoading(true)
        const data = await axios.get("http://demo3741010.mockable.io/blogs")
        const res = data.data
        setSingleblog(res.filter((blog) => blog.id == id))
        setLoading(false)
    }
    useEffect(() => {
        fetchblogs()
        if (localStorage.getItem("token") !== null) {
            setisLoggedin(true)
        }
    }, [])
    console.log("single blog is", singleblog, id)
    if (loading) {
        return (
            <div className='loading'>
                <img src="https://thumbs.gfycat.com/DearWellinformedDalmatian-size_restricted.gif" alt="" />
            </div>
        )
    }
    return (
        <div>

        </div>
    )
}

export default BlogDispaly
