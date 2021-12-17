import React from 'react'
import './Landing.css'
const Landing = () => {
    return (
        <div className='main-container-landing'>
            <div className='landing-image'>
                <img src="../images/welcome.svg" alt="" />
            </div>
            <div className="landing-title">
                <h1>Welcome, <span>{localStorage.getItem("token")}</span></h1>
                <h2>The BlogHome<span className='dot'>.</span></h2>
                <a href="#alltheblogs" className='landing-button'><i id='compass' className='fa-solid fa-compass'></i>Explore</a>
            </div> 
        </div>
    )
}

export default Landing
