import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import './treatmentstyle.css'
import DataTable from 'datatables.net-dt';

const GetTreatDetails = () => {
    const [data,setdata]=useState([])

   

    useEffect(()=>{
        axios.get("http://localhost:4000/treatment")
        .then((res)=>
            setdata(res.data))
        .catch((err)=>console.error(err))
    },[])
console.log(data)
    const deletetreatment=(id)=>{
        axios.delete(`http://localhost:4000/treatment/${id}`)
        .then((res)=>{
            alert("Deleted treatment")
        })
        .catch((err)=>alert(err))
    }
  return (
    <div className='gettreatment'>
        <h3 className='text-center text-danger mb-4'>Treatments List</h3>
        <div className='table-responsive'>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item)=>{
                        return(
                            <tr>
                                <td><img src={item.image}/></td>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td>
                                    <button><NavLink to={`/dashboard/edittreatment/${item._id}`}><i class="bi bi-pencil-square"></i></NavLink></button>
                                    <button onClick={()=>deletetreatment(item._id)}><i class="bi bi-x-square-fill"></i></button>
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

export default GetTreatDetails