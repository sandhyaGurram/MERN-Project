import React from 'react'
import './headerstyle.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top header">
            <NavLink className="navbar-brand" to="/">
                <img src='https://png.pngtree.com/png-vector/20220131/ourmid/pngtree-hospital-logo-colour-coporate-corporate-vector-png-image_26249202.png' /><span>Health Care</span>
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end " id="navbar">
                <ul className="navbar-nav mb-lg-0 ">
                    <li className="nav-item">
                        <NavLink to='/' >Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/aboutus">About Us</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact">Contact Us</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/treatmentlist">Treatments</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="#">bookings</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/testimonial">Testimonials</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/login">Admin Dashboard</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header