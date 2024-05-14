import React from 'react'
import './sidenavstyle.css'
import { NavLink } from 'react-router-dom'

const Sidenav = () => {
  return (
    <div className='sidenav'>
        <h3 className='text-center mt-3'>Dashboard</h3>
        <ul>
            <li>
                <NavLink to=''>Add Treatments</NavLink>
            </li>
            <li>
                <NavLink to='gettreatdetails'>Update Treatments</NavLink>
            </li>
            <li>
                <NavLink to='doctoradd'>Add Doctors</NavLink>
            </li>
            <li>
                <NavLink to='getdoctordetails'>Update Doctors</NavLink>
            </li>
            <li>
                <NavLink to='addtestim'>Add testimonials</NavLink>
            </li>
            <li>
                <NavLink to='gettestimonial'>Update testimonials</NavLink>
            </li>
            <li>
                <NavLink to='getbooking'>Booking Details</NavLink>
            </li>
            <li>
                <NavLink to='getcontact'>Contact Details</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Sidenav