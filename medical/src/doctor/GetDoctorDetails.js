import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './doctorstyle.css'
import $ from "jquery"


const GetDoctorDetails = () => {
    const [data,setdata]=useState([])


    useEffect(()=>{
        axios.get("http://localhost:4000/doctor")
       .then((res)=>setdata(res.data))
       .then(()=> {
        $(document).ready(function(){
            $('#myTable').DataTable()
        })
        })
       .catch((err)=>console.error(err))
    })
    const deletedoctor=(id)=>{
        axios.delete(`http://localhost:4000/doctor/${id}`)
       .then((res)=>{
         alert("Deleted Doctor")
 
       })
       .catch((err)=>alert(err))
    }
  return (
    <div className='getdoctor'>
        <h3 className='text-center text-danger mb-4'>List of Doctors</h3>
        <div className='table-responsive'>
            <table id="myTable" className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Doctor</th>
                        <th>Experiance</th>
                        <th>Qualification</th>
                        <th>Address</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item)=>{
                        return(
                            <tr>
                                <td>{item.title}</td>
                                <td>Dr. {item.name}</td>
                                <td>{item.experiance} Years</td>
                                <td>{item.qualification}</td>
                                <td>{item.address}</td>
                                <td>
                                    <button><NavLink to={`/dashboard/editdoctor/${item._id}`}><i class="bi bi-pencil-square"></i></NavLink></button>
                                    <button onClick={()=>deletedoctor(item._id)}><i class="bi bi-x-square-fill"></i></button>
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

export default GetDoctorDetails