import React, { useEffect, useState } from 'react'
import Header from '../header/Header'
import './homestyle.css'
import Footer from '../footer/Footer'
import Bottom from '../footer/Bottom'
import axios from 'axios'

const Testimonial = () => {
    const [data, setdata] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:4000/testimonial`)
            .then((res) => setdata(res.data))
            .catch((err) => console.error(err))
    }, [])
    return (
        <div className='testimonial-list'>

            <Header />

            <div className='hompage-banner'>
                <div className='text-center'>
                    <h4>Testimonial</h4>
                    <p>Home - <span> Testimonials</span></p>
                </div>
            </div>
            <div className='m-0 p-5'>
                <div className='row m-0 p-5'>
                    {data.map((item) => {
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
            <div>
                <Footer />
                <Bottom />
            </div>
        </div>
    )
}

export default Testimonial