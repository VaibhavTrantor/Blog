import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Loader } from '../AllImages'
import { blogapi } from '../Api'
import Card from '../Components/Card'
import Footer from '../Components/Footer'
import Landing from '../Components/Landing'
import Navbar from '../Components/Navbar'
import Pagedetails from '../Components/Pagedetails'
import Pagination from '../Components/Pagination'
import Login from './Login'
import "./Welcome.css"

const Welcome = () => {
    const [blogs, setblogs] = useState([])
    const [loading, setLoading] = useState(true)
    const [currentpage, setCurrentpage] = useState(1)
    const [cardperpage, setCardperpage] = useState(6)
    const [tempcardperpage, setTempCardperpage] = useState(6)
    const [blogperpage, setBlogperpage] = useState(cardperpage)
    const [isLoggedin, setisLoggedin] = useState(false)
    const fetchblogs = async () => {
        setLoading(true)
        const data = await axios.get(blogapi)
        setblogs(data.data)
        setLoading(false)
    }
    useEffect(() => {
        fetchblogs()
        if (localStorage.getItem("token") !== null) {
            setisLoggedin(true)
        }
    }, [cardperpage])
    // Get current Blogs
    const indexofLastblog = currentpage * blogperpage;
    const indexofFirstblog = indexofLastblog - blogperpage;
    const currentblogs = blogs.slice(indexofFirstblog, indexofLastblog);

    // Change Page
    const paginate = (pagenumber) => {
        setCurrentpage(pagenumber)
    }
    const handlecardperpage = (e) => {
        if (e.target.value < 4) {
            setTempCardperpage(4)
        }else{
            setTempCardperpage(e.target.value)
        }
    }
    const fetchcard = () => {
        setCardperpage(tempcardperpage)
        setBlogperpage(tempcardperpage)
    }
    if (loading) {
        return (
            <div className='loading'>
                <img src={Loader} alt="" />
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
                        <div className='grid-item' key={blog.id} >
                            <Card blog={blog} />
                        </div>
                    ))}
                </div>
                <Pagedetails handlecardperpage={handlecardperpage} fetchcard={fetchcard} currentpage={currentpage} blogperpage={blogperpage} blogs={blogs} cardperpage={cardperpage} />
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
