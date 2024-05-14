import React from 'react'
import './footerstyle.css'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='container-fluid footer text-center ' >
        <div className='row'>
            <div className='col-6 col-sm-6 col-md-3 col-xl-3'>
                <h6>ABOUT HEALTH CARE</h6>
                <p>HealthCare is a multi-speciality healthcare platform delivering a hassle-free experience for all your surgeries and medical needs with personalized care.</p>
            </div>
            <div className='col-6 col-sm-6 col-md-3 col-xl-3 text-start'>
                <h6>QUICK LINKS</h6>
                <ul>
                    <li><NavLink to="/treatmentlist">Our Doctors</NavLink></li>
                    <li><NavLink to="/contact">Contact Us</NavLink></li>
                    <li><NavLink to="/aboutus">About Us</NavLink></li>
                    <li>Health At Homes</li>
                </ul>
            </div>
            <div className='col-6 col-sm-6 col-md-3 col-xl-3 text-start'>
                <h6>CONTACT US</h6>
                <p><i class="bi bi-geo-fill"></i>  C2, Amrutha hills,

Punjagutta Officers Colony,

Punjagutta, Hyderabad

Telangana 500082</p>
            </div>
            <div className='col-6 col-sm-6 col-md-3 col-xl-3 text-start'>
                <h6>NEWSLETTER</h6>
                <ul>
                    <li><i class="bi bi-telephone-fill"></i> +91 89999 18221</li>
                    <li><i class="bi bi-telephone-fill"></i> +91 89853 18181</li>
                    <li><i class="bi bi-envelope-fill"></i> healthcare@gmail.com</li>
                    <li>
                    <i class="bi bi-facebook"></i> <i class="bi bi-twitter"></i> <i class="bi bi-linkedin"></i> <i class="bi bi-pinterest"></i>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer