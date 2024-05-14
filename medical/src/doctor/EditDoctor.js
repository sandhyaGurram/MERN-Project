import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditDoctor = () => {
    const [title,settitle]=useState('')
    const [name,setname]=useState('')
    const [experiance,setexperiance]=useState('')
    const [qualification,setqualification]=useState('')
    const [address,setaddress]=useState('')

    const navigate=useNavigate()
    const {id}=useParams()

    const [treatdata,settreatdata]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:4000/treatment')
       .then((res)=>{
         settreatdata(res.data)
       })
       .catch((err)=>console.error(err))
    },[])
    

    useEffect(()=>{
        axios.get(`http://localhost:4000/doctor/${id}`)
       .then((res)=>{
        settitle(res.data.title)
        setname(res.data.name)
        setexperiance(res.data.experiance)
        setqualification(res.data.qualification)
        setaddress(res.data.address)
 
       })
       .catch((err)=>console.error(err))
    },[])

    const updatedoctor=(e)=>{
        e.preventDefault()
        axios.put(`http://localhost:4000/doctor/${id}`,{title,name,experiance,qualification,address})
        .then((res)=>{
            alert("Details updated successfully")
            navigate('/dashboard/getdoctordetails')
        })
        .catch((err)=>alert(err))
    }
  return (
    <div className='col-md-6 mx-auto'>
        <h1>Update Doctor Details</h1>
        <form onSubmit={updatedoctor}>
        <select className="form-select mb-3" name='title' value={title} onChange={(e)=>settitle(e.target.value)}  >
        <option selected>{title}</option>
                {treatdata.map((item)=>{
                    return(
                        <>
                        
                        <option value={item.title}>{item.title}</option>
                        </>
                        
                    )
                })}
            </select>
            
            <input type='text' className='form-control mb-3' placeholder='Doctor Name' name='name' value={name} onChange={(e)=>setname(e.target.value)} />
            <input type='number' className='form-control mb-3' placeholder='Experiance' name='experiance' value={experiance} onChange={(e)=>setexperiance(e.target.value)} />
            <input type='text' className='form-control mb-3' placeholder='Qualification' name='qualification' value={qualification} onChange={(e)=>setqualification(e.target.value)} />
            <input type='text' className='form-control mb-3' placeholder='Address' name='address' value={address} onChange={(e)=>setaddress(e.target.value)} />
            <input type='submit' value="update"/>
        </form>
    </div>
  )
}

export default EditDoctor