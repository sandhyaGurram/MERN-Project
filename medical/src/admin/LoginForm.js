import React, { useContext, useState } from 'react'
import './loginstyles.css'
import { store } from '../App'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const LoginForm = () => {
    const [token,setToken]=useContext(store)
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')

    const navigate=useNavigate()
    const userdata=(e)=>{
        
        e.preventDefault()
        axios.post("http://localhost:4000/login",{email,password})
        .then((res)=>{
            setToken(res.data.token)
            // if(res.data==="user success"){
            //     navigate('/')
            // }
            // else if(res.data==="Invalid email"){
            //     alert('Invalid email')
            // }
            // else{
            //     alert("Invalid password")
            // }
        })
        .catch((err)=>{
            console.log(err)
        alert(err)})
        
    }
    if(token){
        navigate('/dashboard')
    }
    return (
        <div className=' loginform'>
            <div>
                <form onSubmit={userdata}>
                    <h4 className='text-center mb-5'><span className='text-danger'>Login </span>User</h4>
                    <div className="input-group  mb-3">
                        <span className="input-group-text" ><i className="bi bi-envelope-fill"></i></span>
                        <input type="text" name='email' className="form-control" placeholder="Username" value={email} onChange={(e)=>setemail(e.target.value)}/>
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" ><i className="bi bi-lock-fill"></i></span>
                        <input type="password" name='password' className="form-control" placeholder="Password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
                    </div>
                    <div className='text-center'>
                        <input type='submit' className='btn'/>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default LoginForm