import React from 'react'
import useCustomHook from '../CustomHook'
import axios from 'axios'

const GetBooking = () => {
    const data=useCustomHook('http://localhost:4000/booking')

    const deletebooking=(id)=>{
        axios.delete(`http://localhost:4000/booking/${id}`)
       .then((res)=>alert('Booking deleted'))
       .catch((err)=>console.log(err))
    }

  return (
    <div>
        <h3 className='text-center text-danger'>Booking Details</h3>
        <div className='table-responsive'>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item)=>{
                        return(
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.description}</td>
                                <td>{item.phone}</td>
                                <td>
                                    <button className='btn btn-danger' onClick={()=>deletebooking(item._id)}>Delete</button>
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

export default GetBooking