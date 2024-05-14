import React from 'react'
import useCustomHook from './CustomHook'

const Customfunction = () => {
    const data=useCustomHook('http://localhost:4000/treatment')
  return (
    <div>

        <h1>
            {data.map((item)=>{
                return(
                    <div>
                        <h1>{item.title}</h1>
                    </div>
                )
            })}
        </h1>
    </div>
  )
}

export default Customfunction