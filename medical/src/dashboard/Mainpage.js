import React, { useContext, useEffect, useState } from 'react'
import Header from '../header/Header'
import Banner from '../header/Banner'
import Sidenav from '../sidenav/Sidenav'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../footer/Footer'
import Bottom from '../footer/Bottom'
import { store } from '../App'
import axios from 'axios'

const Mainpage = () => {
    const [data,setData]=useState("")
    const [token,setToken]=useContext(store)
    const navigate=useNavigate()
    useEffect(()=>{
        if(token){
            axios.get('http://localhost:4000/dashboard',{headers:{"x-token":token,}})
            .then((res)=>{setData(res.data)})
            .catch((err)=>console.error(err))
        } else{
            navigate('/login')
        }
    },[token])
  return (
    <div>   
            <Header/>
            <Banner/>
        
        <div className='row m-0'>
            <div className='col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3'>
                <Sidenav/>
            </div>
            <div className='col-12 col-sm-12 col-md-6 col-lg-9 col-xl-9 py-5'>
                <Outlet/>
            </div>
        </div>
        <div>
            <Footer/>
            <Bottom/>
        </div>
    </div>
  )
}

export default Mainpage