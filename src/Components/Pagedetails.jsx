import React from 'react'
import './Pagedetails.css'
const Pagedetails = ({ handlecardperpage, fetchcard, currentpage, blogperpage, blogs, cardperpage }) => {
    return (
        <div>
            <div className="cardpagecontainer">
                <div>
                    <input type="text" list='cardperpage' onChange={handlecardperpage} min='4' className='cardpage' placeholder='Select Blog Per Page...' />
                    <button className='searchbutton' type="submit" onClick={fetchcard}><i className='fa-solid fa-magnifying-glass'></i></button>
                </div>
                <h4 className='blogdetails'>Page : {currentpage}/{Math.ceil(blogs.length / blogperpage)}</h4>
                <h4 className='blogdetails'>Blog : {cardperpage}/page</h4>
            </div>
            <datalist name="cardperpage" id="cardperpage">hello
                <option className='option' value="6"></option>
                <option className='option' value="12"></option>
                <option className='option' value="18"></option>
                <option className='option' value="24"></option>
                <option className='option' value="30"></option>
                <option className='option' value="36"></option>
            </datalist>
        </div>
    )
}

export default Pagedetails
