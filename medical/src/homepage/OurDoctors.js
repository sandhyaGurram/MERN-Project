import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './homestyle.css'
import { NavLink } from 'react-router-dom'

const OurDoctors = () => {
  const [data, setdata] = useState([])


  useEffect(() => {
    axios.get('http://localhost:4000/treatment')
      .then((res) => setdata(res.data))
      .catch((err) => console.error(err))
  }, [])



  return (
    <div className='px-5 our-doctors'>
      <h3 className='text-center pt-5 text-danger'>Treatments</h3>
      <div className='text-center'> 
          <p className='text-underline'></p>
          <p className='text-underline mb-4 mt-1'></p>
          </div>
      <div className='row m-0'>
        {data.map((item) => {
          return (
            <div className='col-12 col-sm-6 col-md-4 col-lg-2'>
              <NavLink to={`/fulldetails/${item.title}`}>
                <div className='card mb-5'>
                  <div className='card-body text-center'><img src={item.image} /> </div>
                    <h5 className='card-text text-center'>{item.title} </h5>
                </div>
              </NavLink>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default OurDoctors