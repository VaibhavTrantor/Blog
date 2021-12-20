import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PagenotFound } from '../AllImages'
import './Pagenotfound.css'

const PageNotFound = () => {
    const navigate = useNavigate()
    return (
        <div>
            <div className='pagenotfound'>
                <img src={PagenotFound} alt="" />
                <button className='pagenotfoundbutton' onClick={() => navigate("/")}>BACK TO HOME</button>
            </div>
        </div>
    )

}

export default PageNotFound
