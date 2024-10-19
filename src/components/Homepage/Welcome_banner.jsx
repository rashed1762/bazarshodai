import React from 'react'
import img1 from '../../../public/assests/afterbanner.png'
import img2 from '../../../public/assests/leaves-.png'
import img3 from '../../../public/assests/heath.png'
import img4 from '../../../public/assests/hc_.png'
import img5 from '../../../public/assests/tree.png'

import Image from 'next/image'

const Welcome_banner = () => {
  return (
    <div className="">
        <div className="mt-16  " >
        <h1  className=" flex justify-center text-4xl">Welcome to <span className="text-lime-600 font-bold"> BazarShodai</span></h1>
        
        <p className ="flex justify-center mt-4 " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo inventore enim sed harum animi dolores, esse eligendi aperiam!</p>
        <p className="flex justify-center"> Debitis asperiores accusamus vitae ratione voluptatem culpa tenetur id vel incidunt praesentium inventore atque </p>
        

        <div className="grid grid-cols-3 gap-4 container mx-auto">
          <div className="mt-48">
            <div className="" >
              <div className="flex justify-center items-center">
              <Image  src ={img2}></Image>
              </div>
             
              <h1 className="flex justify-center items-center font-bold mt-4">Always fresh</h1>
              <p className="flex justify-center items-center">Lorem ipsum dolor sit, amet consectetur adipisicing .</p>
              <p className="flex justify-center items-center">Explicabo inventore enim sed harum animi  </p>
              <p className="flex justify-center items-center">Lorem ipsum dolo </p>
            </div>


            <div className="mt-8">
              <div className="flex justify-center items-center">
              <Image  src ={img3}></Image>
              </div>
             
              <h1 className="flex justify-center items-center">Super Healthy</h1>
              <p className="flex justify-center items-center">Lorem ipsum dolor sit, amet consectetur adipisicing .</p>
              <p className="flex justify-center items-center">Explicabo inventore enim sed harum animi  </p>
              <p className="flex justify-center items-center">Lorem ipsum dolo </p>
            </div>
          </div>

          <div className="flex justify-center mt-16">
            <Image src={img1}></Image>
          </div>

          <div className="mt-48">
            <div>
              <div className="flex justify-center items-center">
              <Image  src ={img4}></Image>
              </div>
             
              <h1 className="flex justify-center items-center font-bold">100% natural</h1>
              <p className="flex justify-center items-center">Lorem ipsum dolor sit, amet consectetur adipisicing .</p>
              <p className="flex justify-center items-center">Explicabo inventore enim sed harum animi  </p>
              <p className="flex justify-center items-center">Lorem ipsum dolo </p>
            </div>


            <div className="mt-8">
              <div className="flex justify-center items-center">
              <Image  src ={img5}></Image>
              </div>
             
              <h1 className="flex justify-center items-center">Premium Quality</h1>
              <p className="flex justify-center items-center">Lorem ipsum dolor sit, amet consectetur adipisicing .</p>
              <p className="flex justify-center items-center">Explicabo inventore enim sed harum animi  </p>
              <p className="flex justify-center items-center">Lorem ipsum dolo </p>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Welcome_banner