import Image from 'next/image';
import React from 'react'

const ServiceCar = ({service}) => {
    const{title,description,img,price,category}=service ||{};
  return (
    <div><div className="card bg-base-100 w-96 shadow-xl">
    <figure>
      <Image src={img} height={400} width={400} alt={title}></Image>
    </figure>
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <h2 className="card-title">{description}</h2>
      <p>Price: <span>${price}</span></p>
      <p>Category: <span>{category}</span></p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div></div>
  )
}

export default ServiceCar