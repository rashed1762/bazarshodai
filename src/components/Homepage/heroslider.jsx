"use client"
import React from "react";
import img1 from '../../../public/assests/banner2.png'
import Image from "next/image";



const Heroslider = () => {
    
    
  return (
   <div className="bg-green-600 ">
    <div className="grid grid-cols-2 container mx-auto
    

    ">

        <div className=" mt-48 text-white">
            <h1 className="font-bold font-bai mb-4">Test Of Nature</h1>
            <h1 className="text-7xl font-bold font-concert mb-4"> Sprouted & organic</h1>
            <h1 className="text-7xl font-bold font-concert">Gluten Free Snacks</h1>
            <p className="mt-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis recusandae, deserunt a numquam vitae fugit corporis impedit nostrum veritatis voluptatibus.</p>
            <div className="mt-4">
            <button className="btn btn-neutral">Shop Now</button>
            </div>
        </div>

        <div >
            <div>
            <Image   src={img1}></Image>
            </div>
           
           
        </div>

    </div>
   </div>
  )
}

export default Heroslider