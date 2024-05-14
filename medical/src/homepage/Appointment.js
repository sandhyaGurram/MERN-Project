import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useCustomHook from '../CustomHook'
import axios from 'axios'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Bottom from '../footer/Bottom'

const Appointment = () => {
    const [user,setuser]=useState('')
    const [phone,setphone]=useState('')
    const [description,setdescription]=useState('')

    const {title,name}=useParams()

    const postbooking=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:4000/booking',{user,phone,description})
       .then((res) => {
        alert(`Thanks for contacting ${user} You'll get update on booking`)
        setuser('')
        setphone('')
        setdescription('')
 
       })
       .catch((err)=>console.log(err))
    }

  return (
    <>
     <div>  
        <Header/>
    <div className='hompage-banner'>
        <div className='text-center'>
            <h4>BOOKING APPOINTMENT</h4>
            <p>Home - Booking for<span> {title}</span></p>
        </div>
    </div>
    <div className='py-5 contactus'>    
        <div className='col-6 mx-auto'>
            <form onSubmit={postbooking}>
                <div className='row mb-5'>
                    <div className='col-6 '>
                        <input type='text' className='form-control' placeholder={name} />
                    </div>
                    <div className='col-6 '>
                        <input type='text' className='form-control' placeholder={title} />
                    </div>
                </div>
                <div className='row mb-5'>
                    <div className='col-6 '>
                        <input type='text' className='form-control' placeholder='Name' name='user' value={user} onChange={(e)=>setuser(e.target.value)}  />
                    </div>
                    <div className='col-6 '>
                        <input type='number' className='form-control' placeholder='Number' name='phone' value={phone} onChange={(e)=>setphone(e.target.value)}  />
                    </div>
                </div>
                
                <div className='mb-5'>
                    <textarea type='text' className='form-control' placeholder='Message' rows="3" name='description' value={description} onChange={(e)=>setdescription(e.target.value)}  ></textarea>
                </div>
                <div className='mb-5 text-center'>
                    <input type='submit' className='btn'/>
                </div>
            </form>
        </div>  
    </div>
    <div>
        <Footer/>
        <Bottom/>
    </div>
</div>
    {/* <div>Appointment</div>
    <h1>{title}</h1>
    <h1>{name}</h1> */}


    </>
    
  )
}

export default Appointment