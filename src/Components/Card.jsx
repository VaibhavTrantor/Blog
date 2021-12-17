import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Card.css"
const Card = ({ blog }) => {
    const navigate = useNavigate()
    return (
        <div className="main">
            <div className='card-container'>
                <div className="image-container">
                    <img src={blog.image} alt="" />
                </div>
                <div className="card-content">
                    <div className="blog-post-date">
                        <span>{blog.Day}</span>
                        <span>{blog.Date}</span>
                    </div>
                    <div className="card-title">
                        <h1>{blog.title.slice(0, 15)}...</h1>
                    </div>
                    <div className="card-body">
                        <p>{blog.body.slice(0, 60)}...</p>
                    </div>
                </div>
                <div className="btncard">
                    <button onClick={() => navigate(`/blogdisplay/${blog.id}`)}>View More</button>
                </div>
            </div>
        </div>

    )
}

export default Card
