import React from 'react'
import { FaCartPlus } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
  const {cart}=useSelector((state)=>state)
  return (
    <div>
      <div className='flex flex-row justify-between items-center mx-auto max-w-6xl h-20 '>
        
        <NavLink to={"/"}>
            <div className='ml-5'>
            <img src='../logo.png' alt='image' className='h-14'/>
            </div>
        </NavLink>
        
        
        <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6'>
          <NavLink to={"/"}>
            <p>Home</p>
          </NavLink>
          <NavLink to={'/cart'}>
           <div className='relative'>
           <FaCartPlus className='text-2xl'/>
            {
              cart.length>0
              &&
              <span className='absolute -top-2 -right-1 bg-green-600 flex items-center
               justify-center text-xs text-white rounded-full w-4 h-4 animate-bounce
              '>{cart.length}</span>
            }
           </div>
            
          </NavLink>
          
        </div>
      </div>
    </div>
  )
}

export default Navbar