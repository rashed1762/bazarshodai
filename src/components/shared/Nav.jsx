"use client"
import Image from 'next/image'
import React from 'react'
import log from '../../../public/assests/lo.png'
import Link from 'next/link'
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { signIn } from "next-auth/react";

const Nav = () => {
  const {status}=useSession();
  const { data: session } = useSession();
  const navItems =[
    {
        title : "Home",
        path : "/"
    },
    {
        title : "About",
        path : "/about"
    },
    {
      title : "Products",
      path : "/products"
  },
    {
        title : "Service",
        path : "/service"
    },
    {
        title : "Blog",
        path : "/blog"
    },
    {
      title : "login",
      path : "/login"
  },
  {
    title : "Signup",
    path : "/signup"
},
    

]
  
  return (
    <div>

<div className="navbar  shadow-md  ">
<div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg
          xmlns=""
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {
        navItems.map((item)=>(
            <Link className='font-semibold hover:text-green-500 duration-300 ' href={item.path} key={item.path}>
                {item.title}</Link>
        )) 
      }
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <Image src={log}></Image>
  </div>
  <div className="navbar-end">
   {status === "authenticated" ?(
     <div>
     Welcome, <span className="font-bold text-red-500">{session?.user?.name}</span>
   </div>
   ):(
    <div>
    . <span className="font-bold text-red-500">{session?.user?.name}</span>
  </div>
   )}
    
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">

        <div className="w-10 rounded-full">
          
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <Link href="/dashboard">
        <li >
          <div>
            <h1 className='font-bold'>Profile</h1>
          </div>
        </li>
        </Link>
        {
          status === "authenticated" ?(
            <button
          onClick={() => signOut()}
          className="btn btn-outline btn-success font-bold px-6 py-2 mt-3"
        >
          Log Out
        </button>
          ):
          (
            <button
          onClick={() => signIn()}
          className="btn btn-outline btn-success font-bold px-6 py-2 mt-3"
        >
          Log In
        </button>
          )
        }
        
      </ul>
    </div>
  </div>

</div>
    </div>
  )
}

export default Nav