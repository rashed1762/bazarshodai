"use client"
import React from "react";
import img1 from '../../../public/assests/product1.png'
import img2 from '../../../public/assests/5.png'
import img3 from '../../../public/assests/4.png'
import img4 from '../../../public/assests/2.png'
import img5 from '../../../public/assests/3.png'
import img6 from '../../../public/assests/6.png'
import img7 from '../../../public/assests/7.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import CardSlider from "./CardSlider";
import Countdown from "./Countdown";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }


const Bigsale = () => {
    const targetDate = new Date('2024-10-27T23:59:59'); // Example date
    var settings = {
        nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
        dots: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <div>
        <div className="container mx-auto flex gap-4">
        <h1 className="text-6xl font-mono">Big Sale  
            
                 {/* Countdown from 120 seconds (2 minutes) */}</h1>
                 <Countdown targetDate={targetDate} />
        </div>
        
        <div className=" container mx-auto mt-16">
        <Slider {...settings}>
        <div>
        <div className="w-96 card card-side bg-base-100 shadow-xl">
  <figure>
    <Image src={img1}></Image>
  </figure>
  <div className="card-body">
    <h2 className="card-title">Organic Orange Fruit</h2>
    <p>Lorem ipsum dolor sit amet consectetur .</p>
    <p>Price:$7</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
        <div>
        <div className="w-96 card card-side bg-base-100 shadow-xl">
  <figure>
    <Image src={img2}></Image>
  </figure>
  <div className="card-body">
    <h2 className="card-title">Organic Orange Fruit</h2>
    <p>Lorem ipsum dolor sit amet consectetur .</p>
    <p>Price:$7</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
        <div>
        <div className="w-96 card card-side bg-base-100 shadow-xl">
  <figure>
    <Image src={img3}></Image>
  </figure>
  <div className="card-body">
    <h2 className="card-title">Organic Orange Fruit</h2>
    <p>Lorem ipsum dolor sit amet consectetur .</p>
    <p>Price:$7</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
        <div>
        <div className="w-96 card card-side bg-base-100 shadow-xl">
  <figure>
    <Image src={img4}></Image>
  </figure>
  <div className="card-body">
    <h2 className="card-title">Organic Orange Fruit</h2>
    <p>Lorem ipsum dolor sit amet consectetur .</p>
    <p>Price:$7</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
        <div>
        <div className="w-96 card card-side bg-base-100 shadow-xl">
  <figure>
    <Image src={img5}></Image>
  </figure>
  <div className="card-body">
    <h2 className="card-title">Organic Orange Fruit</h2>
    <p>Lorem ipsum dolor sit amet consectetur .</p>
    <p>Price:$7</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
        <div>
        <div className="w-96 card card-side bg-base-100 shadow-xl">
  <figure>
    <Image src={img6}></Image>
  </figure>
  <div className="card-body">
    <h2 className="card-title">Organic Orange Fruit</h2>
    <p>Lorem ipsum dolor sit amet consectetur .</p>
    <p>Price:$7</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
        <div>
        <div className="w-96 card card-side bg-base-100 shadow-xl">
  <figure>
    <Image src={img7}></Image>
  </figure>
  <div className="card-body">
    <h2 className="card-title">Organic Orange Fruit</h2>
    <p>Lorem ipsum dolor sit amet consectetur .</p>
    <p>Price:$7</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
       
      </Slider>
        </div>
            
    </div>
  )
}

export default Bigsale