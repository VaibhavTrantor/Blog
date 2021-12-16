import React from 'react'
import "./Card.css"
const Card = ({blog}) => {
    return (
        <div className="main">
        <div className='card-container'>
            <div className="image-container">
                <img src="https://images.unsplash.com/photo-1638913662295-9630035ef770?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
            </div>
            <div className="card-content">
                <div className="blog-post-date">
                    <span>{blog.Day}</span>
                    <span>October 27 2019</span>
                </div>
                <div className="card-title">
                <h1>Shark Sighting</h1>
                </div>
                <div className="card-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure laudantium magnam nulla animi ratione inventore officiis doloribus! </p>
                </div>
            </div>
                <div className="btncard">
                    <button>View More</button>
                </div>
            </div>
            </div>
    
    )
}

export default Card
