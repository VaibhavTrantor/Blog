import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Pagenotfound.css'

const PageNotFound = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className='pagenotfound'>
                <img src="https://miro.medium.com/max/1838/1*zE2qnVTJehut7B8P2aMn3A.gif" alt="" />
                <button className='pagenotfoundbutton' onClick={() => navigate("/")}>BACK TO HOME</button>
            </div>
        </div>
    )

}

export default PageNotFound
