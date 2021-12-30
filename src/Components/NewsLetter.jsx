import React from 'react'
import './NewsLetter.scss'
import  SendIcon  from "@mui/icons-material/Send";

const NewsLetter = () => {
    return (
        <div className='newslettercontainer'>
            <h1 className="newstitle">Newsletter</h1>
            <p className="newsdescription">Get timely updates of latest technology.</p>
            <div className="newsinputcontainer">
                <input type="text" className="newsinput" placeholder='Your Email...' />
                <button className="newsbutton">
                    <SendIcon className='newssendicon'/>
                </button>
            </div>
            
        </div>
    )
}

export default NewsLetter
