import React, { useContext, useEffect, useState } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Bottom from '../footer/Bottom'
import './homestyle.css'
import OurDoctors from './OurDoctors'
import axios from 'axios'
import $ from 'jquery';
import { useNavigate } from 'react-router-dom'
import { store } from '../App'

const Home = () => {
  const [data, setdata] = useState([])



  useEffect(() => {
    axios.get('http://localhost:4000/testimonial')
      .then((res) => setdata(res.data))
      .catch((err) => console.error(err))
  }, [])
  return (
    <div>
      <Header />
      <div className='homepage'>
        <div className='container-fleid homeimg'></div>
        <div className='m-0'>
          <OurDoctors />
        </div>
        <div className='container-fluid home-testimonials pb-4'>
          <h1 className='text-center pt-4 text-danger'>Testimonials</h1>
          <div className='text-center'> 
          <p className='text-underline'></p>
          <p className='text-underline mb-4 mt-1'></p>
          </div>
         
          <div className='row m-0'>
            {data.length > 0 && data.slice(0, 3).map((item) => {
              return (
                <div className='col-12 col-sm-12 col-md-4 col-xl-4 mb-4'>
                  <div className='card'>
                    <div className='card-body'>
                      <p className='card-text'><i class="bi bi-quote"></i> {item.description}  <i class="bi bi-quote"></i></p>
                      <h5 className='card-title'><i class="bi bi-person-fill-check"></i> - {item.name}</h5>
                    </div>
                  </div>
                </div>
              )
            })}

          </div>
        </div>
      </div>

      <div>
        <Footer />
        <Bottom />
      </div>

    </div>
  )
}

export default Home