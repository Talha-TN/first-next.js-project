"use client"
import React from 'react'
// import { useParams } from 'next/navigation'
const page = ({params}) => { // we can also get params value like this without importing
    // const params = useParams()
    // const empContact = params.name
  return (
    <div>
        {/* <h1>the contact page of {empContact}</h1> */}
        <h1>my name is {params.name}</h1>
       {/* <p>{empContact==="talha" && " number : 03480951759"}</p> */}
       {/* <p>{empContact==="hamza" && "number : 03489668081"}</p> */}
       <p>{params.name==="talha" && "number : 03489668081"}</p>
       <p>{params.name==="hamza" && "number : 03489668081"}</p>
        
    </div>
  )
}

export default page