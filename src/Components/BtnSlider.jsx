import './Slider.scss'
import React from 'react'
import {  ArrowLeft, ArrowRight } from '@mui/icons-material'

const BtnSlider = ({direction,moveSlide}) => {
    return (
        <button onClick={moveSlide} className={direction === "next" ? "btn-slide next" : "btn-slide prev"}>
            {direction === "next" ? <ArrowRight className='arrow'/> : <ArrowLeft className='arrow'/>}
        </button>
    )
}

export default BtnSlider
