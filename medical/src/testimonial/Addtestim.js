import axios from 'axios'
import React, { useState } from 'react'
import './testimonialstyle.css'

const Addtestim = () => {
    
    const [description,setdescription]=useState()
    const [name,setname]=useState()

    const testimdata=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:4000/testimonial',{description,name})
        .then((res)=>{
            alert("details saved successfully")
            setdescription('')
            setname('')
        })
        .catch((err)=>console.log(err))
    }
  return (
    <div className='testimonial '>
        <div className='col-12 col-sm-12 col-md-8 col-xl-6 '>
        <h3 className='text-center'>Add Testimonial</h3>
        <div>
        <form onSubmit={testimdata}>
            <div className='form-group mb-4'>
                <label htmlFor='price'>Description</label>
                <textarea type='text' className='form-control' rows="5" id='price' name='description' value={description} onChange={(e)=>setdescription(e.target.value)} />
            </div>
            <div className='form-group mb-4'>
                <label htmlFor='name'>Name</label>
                <input type='text' className='form-control mb-3' id='name' name='name' value={name} onChange={(e)=>setname(e.target.value)} />
            </div>
            <div className='text-center'>
                <input type='submit' className='btn' />
            </div>

        </form>
        </div>
        </div>
    </div>
  )
}

export default Addtestim