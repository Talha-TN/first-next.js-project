import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <>
    <div >home page</div>
    <Link style={{color:"green",marginTop:"40px",fontSize:"32px"}} href={"/"}>go back</Link>
    </>
  )
}

export default page