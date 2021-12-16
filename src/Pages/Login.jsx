import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Login.css"

const Login = (props) => {
    const [value, setValue] = useState({username:"",password:""})
    const handlechange = (event)=>{
        setValue({...value,[event.target.name]:event.target.value})
    }
    const navigate = useNavigate()
    const handlelogin = (e)=>{
        e.preventDefault();
        if (value.username==="demo") {
            if (value.password==="demo") {
                localStorage.setItem("token",value.username)
                navigate("/")
                props.setisLoggedin(true)
            }else{
                document.getElementById("error").style.display="inline"
               
            }
        }else{
            document.getElementById("error").style.display="inline"
            
        }
    }
    React.useEffect(() => {
        const inputs = document.querySelectorAll('.input');
    function focusFunc() {
        console.log("i am runnig")
        let parent = this.parentNode.parentNode;
        parent.classList.add('focus')
    }
    function blurFunc() {
        let parent = this.parentNode.parentNode;
        if(this.value===""){
            parent.classList.remove('focus')
        }
    }
    inputs.forEach(input=>{
        input.addEventListener('focus',focusFunc)
        input.addEventListener('blur',blurFunc)
    })
    }, [])
    
    return (
        <div className='logincontainer'>
            <div className="container">
                <div className="img">
                    <img src="./images/pic2.svg" alt="" />
                </div>
                <div className="login-container">
                    <form>
                        <img className='avatar' src="./images/pic1.svg" alt="profile" />
                        <h2>Welcome</h2>
                        <div className='error1'>
                                <strong className='error'  id='error'>Invalid Credentials !</strong>
                        </div>

                        <div className="input-div one">
                            <div className="i">
                                <i className='fas fa-user'></i>
                            </div>
                            <div>
                                <h5>Username</h5>
                                <input name='username' value={value.username} onChange={handlechange} type="text" className='input' />
                            </div>
                        </div>
                        <div className="input-div two">
                            <div className="i">
                                <i className='fas fa-lock'></i>
                            </div>
                            <div>
                                <h5>Password</h5>
                                <input name='password' value={value.password} onChange={handlechange} type="password" className='input' />
                            </div>
                        </div>
                        <input type="submit" onClick={handlelogin} className='btn' value="login" />
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Login
