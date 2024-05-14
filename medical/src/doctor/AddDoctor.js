import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AddDoctor = () => {
    const [title,settitle]=useState([])
    const [name,setname]=useState('')
    const [experiance,setexperiance]=useState('')
    const [qualification,setqualification]=useState('')
    const [address,setaddress]=useState('')

    const [treatdata,settreatdata]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:4000/treatment')
       .then((res)=>{
         settreatdata(res.data)
         console.log(res.data.title)
       })
       .catch((err)=>console.error(err))
    },[])

    const doctordata=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:4000/doctor',{title,name,experiance,qualification,address})
        .then((res)=>{
            alert("Details saved successfully")
            settitle('')
            setname('')
            setexperiance('')
            setqualification('')
            setaddress('')
 
        })
        .catch((err)=>alert(err))
    }
    console.log(title)
  return (
    <div className='col-md-8 mx-auto add-doctor'>
        <h3 className='text-center '>Add Doctor Details</h3>
        <form onSubmit={doctordata}>
            <select className="form-select mb-3" name='title' value={title} onChange={(e)=>settitle(e.target.value)}  >
            <option selected>Select Treatment</option>
                {treatdata.map((item)=>{
                    return(
                        <>
                       
                        <option value={item.title}>{item.title}</option>
                        </>
                        
                    )
                })}
            </select>
            <input type='text' className='form-control mb-3' placeholder='Doctor Name' name='name' value={name} onChange={(e)=>setname(e.target.value)} />
            <input type='number' className='form-control mb-3' placeholder='Experiance' name='exp' value={experiance} onChange={(e)=>setexperiance(e.target.value)} />
            <input type='text' className='form-control mb-3' placeholder='Qualification' name='qualification' value={qualification} onChange={(e)=>setqualification(e.target.value)} />
            <input type='text' className='form-control mb-3' placeholder='Address' name='address' value={address} onChange={(e)=>setaddress(e.target.value)} />
            <div className='text-center'>
                <input type='submit' className='btn' />
            </div>
        </form>
    </div>
  )
}

export default AddDoctor