import React, { useState } from 'react'
import Header from '../header/Header'
import './homestyle.css'
import Footer from '../footer/Footer'
import Bottom from '../footer/Bottom'
import OurDoctors from './OurDoctors'
import axios from 'axios'

const Contact = () => {
    
    const [name,setname]=useState('')
    const [email,setemail]=useState('')
    const [phone,setphone]=useState('')
    const [address,setaddress]=useState('')
    const [description,setdescription]=useState('')

    const sendcontact=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:4000/contact',{name,email,phone,address,description})
        .then((res) => {
            alert(`Thanks for contacting ${name}`)
            setname('')
            setemail('')
            setphone('')
            setaddress('')
            setdescription('')
        })
        .catch((error) => {
            console.log('Error occurred:', error);
        });
    }
  return (
    <div>
        
            <Header/>
        
        <div className='hompage-banner'>
            <div className='text-center'>
                <h4>CONTACT US</h4>
                <p>Home - <span> Contact</span></p>
            </div>

        </div>
        <div className='py-5 contactus'>
            
                
                <div className='col-8 mx-auto'>
                    <form onSubmit={sendcontact}>
                        <div className='row mb-5'>
                            <div className='col-6 '>
                                <input type='text' className='form-control' placeholder='Name' name='name' value={name} onChange={(e)=>setname(e.target.value)}/>
                            </div>
                            <div className='col-6 '>
                                <input type='text' className='form-control' placeholder='Email' name='email' value={email} onChange={(e)=>setemail(e.target.value)}/>
                            </div>
                        </div>
                        <div className='row mb-5'>
                            <div className='col-6 '>
                                <input type='number' className='form-control' placeholder='Phone' name='phone' value={phone} onChange={(e)=>setphone(e.target.value)}/>
                            </div>
                            <div className='col-6 '>
                                <input type='text' className='form-control' placeholder='Address' name='address' value={address} onChange={(e)=>setaddress(e.target.value)}/>
                            </div>
                        </div>
                        
                        <div className='mb-5'>
                            <textarea type='text' className='form-control' placeholder='Message' rows="3" name='description' value={description} onChange={(e)=>setdescription(e.target.value)}></textarea>
                        </div>
                        <div className='mb-5 text-center'>
                            <input type='submit' className='btn'/>
                        </div>
                    </form>
                </div>
                <div className='col'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121807.96521980871!2d78.42037735255018!3d17.43581892178454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9f30dd0a5fd3%3A0x60740f5f364999bb!2sKamineni%20Hospitals%20%7C%20Best%20Multispeciality%20Hospital%20in%20LB%20Nagar%20Hyderabad!5e0!3m2!1sen!2sin!4v1714810779040!5m2!1sen!2sin" width="100%" height="100%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
           
        </div>
        <div>
            <Footer/>
            <Bottom/>
        </div>
    </div>
  )
}

export default Contact