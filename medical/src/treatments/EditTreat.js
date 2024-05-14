import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditTreat = () => {
    const [title,settitle]=useState()
    const [description,setdescription]=useState()
    const [image,setimage]=useState()

    const navigate=useNavigate()

    const {id}=useParams()

    useEffect(()=>{
        axios.get(`http://localhost:4000/treatment/${id}`)
        .then((res)=>{
            settitle(res.data.title)
            setdescription(res.data.description)
            setimage(res.data.image)
        })
        .catch((err)=>console.error(err))
    },[])

    const updatetreatdata=(e)=>{
        e.preventDefault()
        axios.put(`http://localhost:4000/treatment/${id}`,{title,description,image})
        .then((res)=>{
            alert("Treatment details updated successfully")
            navigate('/dashboard/gettreatdetails')    
        })
        .catch((err)=>console.log(err))

    }

  return (
    <div className='addtreat'>
    <div>
    <h1>Update treatement Details</h1>
    <form onSubmit={updatetreatdata}>
        <div className='form-group'>
            <label htmlFor='name'>Title</label>
            <input type='text' className='form-control' id='name' name='title' value={title} onChange={(e)=>settitle(e.target.value)} />
        </div>
        <div className='form-group'>
            <label htmlFor='price'>Description</label>
            <input type='text' className='form-control' id='price' name='description' value={description} onChange={(e)=>setdescription(e.target.value)} />
        </div>
        <div className='form-group'>
                <label htmlFor='name'>Image</label>
                <input type='text' className='form-control mb-3' id='name' name='image' value={image} onChange={(e)=>setimage(e.target.value)} />
            </div>
        <div className='text-center'>
            <input type='submit' className='btn' value="Update" />
        </div>

    </form>
    </div>
</div>
  )
}

export default EditTreat