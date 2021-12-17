import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Navbar.css"
const Navbar = (props) => {
    const navigate = useNavigate()
    const handlelogout = () => {
        localStorage.removeItem("token")
        navigate("/")
        props.setisLoggedin(false)
    }
    return (
        <div className='Navcontainer'>
            <nav>
                <img className='logo' onClick={() => navigate('/')} src="../images/logo.svg" alt="" />
                <h3 className='titleblog' onClick={() => navigate('/')}>BlogHome<span style={{ color: "red" }}>.</span></h3>
                <div>
                    <i onClick={handlelogout} id='logout' className="fa-solid fa-arrow-right-from-bracket"></i>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
