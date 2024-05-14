import React, { useState } from 'react'
import './treatmentstyle.css'
import axios from 'axios'

const AddTreat = () => {
    const [title,settitle]=useState()
    const [description,setdescription]=useState()
    const [image,setimage]=useState()

    const treatmentdata=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:4000/treatment",{title,description,image})
        .then((res)=>{
            alert("Details saved successfully")
            settitle("")
            setdescription("")
            setimage("")
            
        })
        .catch((err)=>console.log(err))

    }
  return (
    <div className='addtreat'>
        <div className='col-12 col-sm-12 col-md-6 col-xl-6'>
        <h3 className='text-center'>Add treatments</h3>
        <div>
        <form onSubmit={treatmentdata}>
            <div className='form-group'>
                <label htmlFor='name'>Title</label>
                <input type='text' className='form-control mb-3' id='name' name='title' value={title} onChange={(e)=>settitle(e.target.value)} />
            </div>
            <div className='form-group'>
                <label htmlFor='price'>Description</label>
                <textarea type='text' className='form-control mb-3' rows="5" id='price' name='description' value={description} onChange={(e)=>setdescription(e.target.value)} />
            </div>
            <div className='form-group'>
                <label htmlFor='name'>Image</label>
                <input type='text' className='form-control mb-3' id='name' name='image' value={image} onChange={(e)=>setimage(e.target.value)} />
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

export default AddTreat