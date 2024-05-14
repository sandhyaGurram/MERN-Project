import axios from 'axios'
import React, { useEffect, useState } from 'react'

const GetTestimonial = () => {
    const [data,setdata]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:4000/testimonial')
        .then((res)=>setdata(res.data))
        .catch((err)=>console.error(err))
    })

    const deletetestimonial=(id)=>{
        axios.delete(`http://localhost:4000/testimonial/${id}`)
        .then((res)=>{
             alert("Deleted testimonial")
         })
        .catch((err)=>alert(err))
    }
  return (
    <div className='get-testimonials'>
        <h3 className='text-center text-danger mb-4'>Testimonials</h3>
        <div className='table-responsive'>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Reviews</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item)=>{
                        return(
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>
                                    <button className='btn btn-danger' onClick={()=>deletetestimonial(item._id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
           

            </table>
        </div>
    </div>
  )
}

export default GetTestimonial