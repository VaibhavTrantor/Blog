import React, { useContext, useEffect } from 'react'
import './BlogDisplay.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { BlogDisplayImage } from '../AllImages'
import BlogContext from '../BlogContext/BlogContext'
import { useParams } from 'react-router-dom'

const BlogDispaly = () => {
    const blogs = useContext(BlogContext)
    const {getsingleblogs,Loading,singleblog} = blogs
    const { id } = useParams()
    useEffect(() => {
        getsingleblogs(id)
    }, [])
    console.log("singleblog",singleblog)
    if (Loading || singleblog===undefined) {
        return (
            <div className='loading'>
                <img src="https://thumbs.gfycat.com/DearWellinformedDalmatian-size_restricted.gif" alt="" />
            </div>

        )
    }
    if (!Loading){ return (
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
}

export default BlogDispaly
