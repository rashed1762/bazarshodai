import React from 'react'
import Heroslider from './heroslider'
import '../Css/banner2.css'
import img1 from '../../../public/assests/cat1.jpg'
import img2 from '../../../public/assests/cat2.png'
import img3 from '../../../public/assests/cat3.png'
import img4 from '../../../public/assests/cat4.png'
import img5 from '../../../public/assests/cat5.png'
import img6 from '../../../public/assests/cat6.png'
import img7 from '../../../public/assests/delivary.webp'
import background from '../../../public/assests/Home13_bg_8.jpg'
import Welcome_banner from './Welcome_banner'
import CardSlider from './CardSlider'
import Image from 'next/image'
import Bigsale from './Bigsale'


const Homepage = () => {
  return (
    <div>
      <div className="">
      <Heroslider ></Heroslider>
      <Welcome_banner></Welcome_banner>
      
      <CardSlider></CardSlider>

      <div className="mt-32">
        <h1 className="text-yellow-600 text-center font-bold">The Best Product</h1>
        <h1 className="text-4xl text-center font-bold">Top Category</h1>
      <div className="container mx-auto grid grid-cols-6 gap-8 mt-32
      
      xxs:grid-cols-1
    xs:grid-cols-1
    sm:grid-cols-1
    md:grid-cols-2
    lg:grid-cols-6


      
      ">

<div>
<div className="card bg-base-100 w-46 h-80 shadow-xl rounded-full bg-green-200">
<figure className="px-10 pt-10">
<Image className=" rounded-full" src={img1}></Image>
</figure>
<div className="card-body items-center text-center">
<h2 className="card-title">Fruit & Vegetables</h2>


</div>
</div>
</div>

<div>
<div className="card bg-base-100 w-46 h-80 shadow-xl rounded-full bg-red-200">
<figure className="px-10 pt-10">
<Image className=" rounded-full" src={img2}></Image>
</figure>
<div className="card-body items-center text-center">
<h2 className="card-title">Health & Wellness</h2>


</div>
</div>
</div>


<div>
 <div className="card bg-base-100 w-46 h-80 shadow-xl rounded-full bg-blue-100">
<figure className="px-10 pt-10">
<Image className=" rounded-full" src={img3}></Image>
</figure>
<div className="card-body items-center text-center">
<h2 className="card-title">Package Foods</h2>


</div>
</div>
</div>



<div>
<div className="card bg-base-100 w-46 h-80 shadow-xl rounded-full bg-violet-200">
<figure className="px-10 pt-10">
<Image className=" rounded-full" src={img4}></Image>
</figure>
<div className="card-body items-center text-center">
<h2 className="card-title">Grocery & Staples</h2>


</div>
</div>
</div>



<div>
<div className="card bg-base-100 w-46 h-80 shadow-xl rounded-full bg-rose-100">
<figure className="px-10 pt-10">
<Image className=" rounded-full" src={img5}></Image>
</figure>
<div className="card-body items-center text-center">
<h2 className="card-title">Leafy Green</h2>


</div>
</div>
</div>



<div>
<div className="card bg-base-100 w-46 h-80 shadow-xl rounded-full bg-neutral-300">
<figure className="px-10 pt-10">
<Image className=" rounded-full" src={img6}></Image>
</figure>
<div className="card-body items-center text-center">
<h2 className="card-title">Health & Wellness</h2>


</div>
</div>
</div>

</div>
      </div>


    
      
    </div>

    <section className="mt-8">
     <div  className="absolute ">
<Image src={background}></Image>
     </div>

     <div className="relative p-48 font-great font-bold " >
      
      <h1 className="text-red-500 text-8xl">Get 20%</h1>
      <h1 className="text-white text-8xl">Discount Code</h1>
      <p className="text-white max-w-xl mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus fugit consequatur nihil in reiciendis dignissimos, aspernatur quae mollitia laudantium ut.</p>
      <button>See More</button>
      
     
     </div>
    </section>

    <section>
      <Bigsale></Bigsale>
    </section>

    <section className="delivary mt-32 mb-4 ">
      <div className="container mx-auto grid grid-cols-3 gap-4">

        <div>
          <Image className="delivaryimg" src={img7} h={80} w={80} ></Image>
        </div>
        <div className="col-span-2 mt-24 font-bold text-[#D4FFFF]">
          <h1 className="text-7xl font-great">We Delivery on Next Day</h1>
          <h1 className="text-7xl font-great">from 10:00 AM to 08:00 PM</h1>
          <p className="mt-4 mb-4">* For Orders starts from $100</p>
          <button className="btn btn-outline btn-success text-white">Read More</button>
        </div>

      </div>
    </section>

    
    </div>
  )
}

export default Homepage