import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import Footer from '../Components/Footer'
import Landing from '../Components/Landing'
import Navbar from '../Components/Navbar'
import Pagination from '../Components/Pagination'
import Login from './Login'
import "./Welcome.css"

const Welcome = () => {
    const [blogs, setblogs] = useState([])
    const [loading, setLoading] = useState(true)
    const [currentpage, setCurrentpage] = useState(1)
    const [blogperpage] = useState(6)
    const [isLoggedin, setisLoggedin] = useState(false)
    const fetchblogs = async () => {
        setLoading(true)
        const data = await axios.get("http://demo3741010.mockable.io/blogs")
        setblogs(data.data)
        setLoading(false)
    }
    useEffect(() => {
        fetchblogs()
        if (localStorage.getItem("token") !== null) {
            setisLoggedin(true)
        }
    }, [])
    // Get current Blogs
    const indexofLastblog = currentpage * blogperpage;
    const indexofFirstblog = indexofLastblog - blogperpage;
    const currentblogs = blogs.slice(indexofFirstblog, indexofLastblog);

    // Change Page
    const paginate = (pagenumber) => {
        setCurrentpage(pagenumber)
    }
    if (loading) {
        return (
            <div className='loading'>
                <img src="https://thumbs.gfycat.com/DearWellinformedDalmatian-size_restricted.gif" alt="" />
            </div>
        )
    }
    if (!loading && isLoggedin || localStorage.getItem("token") !== null) {
        return (
            <div>
                <Navbar setisLoggedin={setisLoggedin} />
                <Landing />
                <div className="grid-container" id='alltheblogs'>
                    {currentblogs.map((blog) => (
                        <div className='grid-item'>
                            <Card key={blog.id} blog={blog} />
                        </div>
                    ))}
                </div>
                <Pagination blogperpage={blogperpage} totalblogs={blogs.length} paginate={paginate} />
                <Footer />
            </div>
        )
    }
    if (!isLoggedin && localStorage.getItem("token") === null) {
        return (
            <Login setisLoggedin={setisLoggedin} />
        )

    }
}

export default Welcome
