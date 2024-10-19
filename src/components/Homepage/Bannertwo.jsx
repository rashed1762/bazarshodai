import React from 'react'
import '../Css/banner2.css'
import background from '../../../public/assests/Home13_bg_8.jpg'
import Image from 'next/image'

const Bannertwo = () => {
  return (
    <div classname="mt-8">
      <Image classname="w-full" src={background}></Image>
      <div>
        <h1 classname="text-white text-6xl relative">hello world</h1>
        </div>  
    </div>
    
    
  )
}

export default Bannertwo