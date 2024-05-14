import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { store } from '../App'
import useCustomHook from '../CustomHook'

const Profile = () => {
    const doctordata=useCustomHook('http://localhost:4000/doctor')
    const treatmentdata = useCustomHook('http://localhost:4000/treatment')
    
    

  return (
    <>
    <div>Profile</div>
    {doctordata.map((item)=>{
      return(
        <>
        {item.name}
        <p>=====================================</p>
        { treatmentdata.map((item)=>{
      return(
        <>
        {item.title}
        </>
      )
     }) }
        </>
      )
    })}
     

    </>
    
  )
}

export default Profile