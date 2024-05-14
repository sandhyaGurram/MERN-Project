import React, { useEffect, useState } from 'react'
import { NavLink, useLocation, useParams } from 'react-router-dom'
import Header from '../header/Header'
import './homestyle.css'
import Footer from '../footer/Footer'
import Bottom from '../footer/Bottom'
import axios from 'axios'

const Fulldetails = () => {
    // let { state } = useLocation();
    // console.log(state)

    // const [data,setdata]=useState([])
    const [docData,setDocData]=useState([])

    const {title}=useParams()

    // useEffect(()=>{
    //     axios.get('http://localhost:4000/treatment')
    //     .then((res)=>setdata(res.data))
    //     .catch((err)=>console.error(err))
    // })

    useEffect(()=>{
        axios.get('http://localhost:4000/doctor')
        .then((res)=>{
            // setdocdata(res.data)
            const result=res.data.filter(d=>d.title==title)
            console.log(result)
            setDocData(result)
        }
    )
        
    },[])


  return (
    <div>
    
            <Header/>
        
        <div className='hompage-banner'>
            <div className='text-center'>
                <h4>Full Details</h4>
                <p>Home - <span> {title}</span></p>
            </div>

        </div>
        <div className='py-5 doctor-treatment-details'>
            <div className='row m-0'>
            {docData.map((item)=>{
                return(
                    <div key={item._id} className=''>
                    <div className='col-12 col-sm-12 col-md-6 col-lg-6 mx-auto mb-4'>
                        <div className='card'>
                        <div className='row m-0 '>
                            <div className='col'>
                                <h5>Dr. {item.name}</h5>
                                <p>{item.qualification}</p>
                                <p>{item.title}</p>
                                <p>{item.address}</p>
                            </div>
                            <div className='col appointment-text '>
                                <div>
                                <p><NavLink to={`/appointment/${item.name}/${title}`}>Book Appointment</NavLink></p>
                                </div>
                                
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                )
            })}
            </div>
        </div>
        <div>
            <Footer/>
            <Bottom/>
        </div>
    </div>
  )
}

export default Fulldetails