import './Slider.scss'
import React from 'react'
import BtnSlider from './BtnSlider'
import {sliderItems} from '../SliderData/Data'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(1)
    const nextSlide = ()=>{
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        
    }
    const prevSlide = ()=>{
        setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
    }
    const moveDot = index =>{
        setSlideIndex(index)
    }
    return (
        <div className='slidercontainer'>
           <div className="wrapperslider" style={{transform:`translateX(${slideIndex * (-100)}vw)`}}>
            {sliderItems.map((obj,index)=>(
               
                    <div className={slideIndex === index + 1 ? "slide active-anim":"slide"} style={{backgroundImage: `linear-gradient(${obj.deg}deg, #${obj.bg1} ${obj.hue}%, #${obj.bg2} ${obj.percen}%)`}}>
                            <img src={obj.img} alt="hello" />
                        <div className='infocontainerslider'>
                        <h1 className="slidertitle">{obj.title}</h1>
                        <p className="sliderdescription">{obj.desc}</p>
                        <button className='sliderbtn'><a href="#alltheblogs">Explore Now</a></button>
                        </div>
                    </div>
                
                ))}
            </div>
                    <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
                <BtnSlider moveSlide={nextSlide} direction={"next"}/>
            <div className="container-dots">
                {Array.from({length:3}).map((item,index)=>(
                    <div onClick={()=>moveDot(index)} className={slideIndex === index ? "dot active" : "dot"}></div>
                    ))}
                </div>
               
            
        </div>
    )
}

export default Slider
