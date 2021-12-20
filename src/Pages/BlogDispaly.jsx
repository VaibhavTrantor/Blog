import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './BlogDisplay.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { BlogDisplayImage } from '../AllImages'
import { blogapi } from '../Api'

const BlogDispaly = () => {
    const [singleblog, setSingleblog] = useState([])
    const [loading, setLoading] = useState(true)
    const [isLoggedin, setisLoggedin] = useState(false)
    const { id } = useParams()
    const fetchblogs = async () => {
        setLoading(true)
        const data = await axios.get(blogapi)
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
    if (loading) {
        return (
            <div className='loading'>
                <img src="https://thumbs.gfycat.com/DearWellinformedDalmatian-size_restricted.gif" alt="" />
            </div>

        )
    }
    if (!loading) return (
        <>
            <Navbar />
            <div className='display-container'>
                <div className="wrapper">
                    <div className="imagecontainer">
                        <img src={singleblog[0].image} alt="" />
                    </div>
                    <div className="infocontainer">
                        <h1 className="displaytitle">{singleblog[0].title}</h1>
                        <h2 className="displaytitle2">~ Vaibhav singh</h2>

                    </div>
                </div>
                <div className="moreinfo">
                    <div className="dateday">
                        <span>{singleblog[0].Day}</span>
                        <span>{singleblog[0].Date}</span>
                    </div>
                    <div className="description">{singleblog[0].body}</div>
                </div>
            </div>
            <div className='funimage'>
                <img src={BlogDisplayImage} alt="" />
            </div>
            <Footer />
        </>
    )
}

export default BlogDispaly
