import React, { useContext, useEffect, useState } from 'react'
import { Loader } from '../AllImages'
import BlogContext from '../BlogContext/BlogContext'
import Card from '../Components/Card'
import Footer from '../Components/Footer'
import Landing from '../Components/Landing'
import Navbar from '../Components/Navbar'
import Pagedetails from '../Components/Pagedetails'
import Pagination from '../Components/Pagination'
import Login from './Login'
import "./Welcome.scss"

const Welcome = () => {
    const blogs = useContext(BlogContext)
    const [currentpage, setCurrentpage] = useState(1)
    const [cardperpage, setCardperpage] = useState(6)
    const [tempcardperpage, setTempCardperpage] = useState(6)
    const [blogperpage, setBlogperpage] = useState(cardperpage)
    const {getblogs,Blogs,Loading,isLoggedin} = blogs
   useEffect(() => {
       getblogs()
   }, [cardperpage])
    // Get current Blogs
  
    const indexofLastblog = currentpage * blogperpage;
    const indexofFirstblog = indexofLastblog - blogperpage;
    const currentblogs = Blogs.slice(indexofFirstblog, indexofLastblog);

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
    if (Loading) {
        return (
            <div className='loading'>
                <img src={Loader} alt="" />
            </div>
        )
    }
    if (!Loading && isLoggedin || localStorage.getItem("token") !== null) {
        return (
            <div>
                <Navbar/>
                <Landing />
                <div className="grid-container" id='alltheblogs'>
                    {currentblogs.map((blog) => (
                        <div className='grid-item' key={blog.id} >
                            <Card blog={blog} />
                        </div>
                    ))}
                </div>
                <Pagedetails handlecardperpage={handlecardperpage} fetchcard={fetchcard} currentpage={currentpage} blogperpage={blogperpage} blogs={Blogs} cardperpage={cardperpage} />
                <Pagination blogperpage={blogperpage} totalblogs={Blogs.length} paginate={paginate} />
                <Footer />
            </div>
        )
    }
    if (!isLoggedin && localStorage.getItem("token") === null) {
        return (
            <Login />
        )

    }
}

export default Welcome
