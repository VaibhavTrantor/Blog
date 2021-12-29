import React, { useContext, useRef, useState } from 'react'
import { LoginProfile, LoginWallpaper } from '../AllImages'
import BlogContext from '../BlogContext/BlogContext'
import "./Login.scss"

const Login = (props) => {
    const blogs = useContext(BlogContext)
    const { login, error } = blogs
    const [classes, setclasses] = useState(false)
    const [value, setValue] = useState({ username: "", password: "" })
    const handlechange = (event) => {
        setclasses(true)
        setValue({ ...value, [event.target.name]: event.target.value })
    }
    const handlelogin = () => {
        login(value.username, value.password)
    }
    const ref = useRef()
    const userref = useRef()
    const passref = useRef()
    const handleclick = ()=>{
        if (ref.current && userref.current.value === "" && passref.current.value ==="") {
            setclasses(false)
        }
    }

    return (
        <div ref={ref} onClick={handleclick} className='logincontainer'>
            <div className="container">
                <div className="img">
                    <img src={LoginWallpaper} alt="" />
                </div>
                <div className="login-container">
                    <form>
                        <img className='avatar' src={LoginProfile} alt="profile" />
                        <h2>Welcome</h2>
                        {error && <div className='error1'>
                            <strong className='error' id='error'>Invalid Credentials !</strong>
                        </div>}

                        <div className={`input-div one ${classes && "focus"}`} >
                            <div className="i">
                                <i className='fas fa-user'></i>
                            </div>
                            <div>
                                <h5>Username</h5>
                                <input ref={userref} name='username' value={value.username} onChange={handlechange} type="text" className={`input ${classes && "focus"}`} />
                            </div>
                        </div>
                        <div className={`input-div two ${classes && "focus"}`}>
                            <div className="i">
                                <i className='fas fa-lock'></i>
                            </div>
                            <div>
                                <h5>Password</h5>
                                <input ref={passref} name='password' value={value.password} onChange={handlechange} type="password" className={`input ${classes && "focus"}`} />
                            </div>
                        </div>
                        <input type='button' onClick={handlelogin} className='btn' value="login" />
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Login
