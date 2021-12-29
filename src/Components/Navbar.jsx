import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Logo } from '../AllImages'
import BlogContext from '../BlogContext/BlogContext'
import "./Navbar.scss"
const Navbar = () => {
    const blogs = useContext(BlogContext)
    const navigate = useNavigate()
    const {logout} = blogs
    const handlelogout = () => {
        logout()
        navigate("/")
        
    }
    return (
        <div className='Navcontainer'>
            <nav>
                <img className='logo' onClick={() => navigate('/')} src={Logo} alt="" />
                <h3 className='titleblog' onClick={() => navigate('/')}>BlogHome<span style={{ color: "red" }}>.</span></h3>
                <div>
                    <i onClick={handlelogout} id='logout' className="fa-solid fa-arrow-right-from-bracket"></i>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
