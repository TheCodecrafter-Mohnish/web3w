import React from 'react'
import Image from 'next/image'
//import {dog} from '../../assets/dog.png'

function Navbar() {
  return (
    <>
    <Image 
    src="/asset/dog.png" 
    width={500}
    height={500}
    alt='My dog'/>
    </>
  )
}

export default Navbar