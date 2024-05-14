import React from 'react'
import Header from '../header/Header'
import './homestyle.css'
import Footer from '../footer/Footer'
import Bottom from '../footer/Bottom'
import OurDoctors from './OurDoctors'

const Treatmentslist = () => {
  return (
    <div className='treatmentlist'>
        
            <Header/>
    
        <div className='hompage-banner'>
            <div className='text-center'>
                <h4>Treatments</h4>
                <p>Home - <span> Treatments</span></p>
            </div>

        </div>
        <div>
            <OurDoctors/>
        </div>
        <div>
            <Footer/>
            <Bottom/>
        </div>
    </div>
  )
}

export default Treatmentslist