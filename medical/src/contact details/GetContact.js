import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useCustomHook from '../CustomHook'
import { useParams } from 'react-router-dom'

const GetContact = () => {
    const [data,setdata]=useState([])

    useEffect(()=>{
        axios.get(`http://localhost:4000/contact`)
       .then((res)=>setdata(res.data))
       .catch((err)=>console.error(err))
    },[])

    // const data=useCustomHook('http://localhost:4000/contact')


    const deletecontact=(id)=>{
       
        axios.delete(`http://localhost:4000/contact/${id}`)
       .then((res)=>alert('Contact deleted'))
       .catch((err)=>console.log(err))
    }
  return (
    <div className=''>
        <h3 className='text-center text-danger pb-4'>Contact Details</h3>
        <div className='table-responsive'>
    
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Message</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item)=>{
                        return(
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.address}</td>
                                <td>{item.description}</td>
                                <td>
                                <button className='btn btn-danger' onClick={()=>deletecontact(item._id)}>Delete</button>
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

export default GetContact