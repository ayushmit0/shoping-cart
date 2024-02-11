import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem';
import { NavLink } from 'react-router-dom';


function Cart() {
   const {cart}=useSelector((state)=>state);
   const [totalAmount,setTotalAmount]=useState(0)

  useEffect(()=>{

    setTotalAmount(cart.reduce((acc,curr)=>acc+curr.price,0))

  },[cart])
  return (
    <div>
        {
            cart.length>0 ?
            (
              <div className=' flex lg:flex-row md:flex-row   justify-between  max-w-6xl mx-auto flex-col '>
                  <div className=' px-4'>
                  {
                        cart.map((item)=>{
                            return <CartItem key={item.id} item={item}/>
                            
                        })
                    }
                  </div>

                 <div className=' bg-slate-300 flex flex-col justify-between py-8 lg:w-[35%] md:w-[40%]   '>
                      <div className=' flex flex-col mx-4  px-5'>
                          <div className='text-gray-900 font-bold text-2xl'>
                              your cart
                          </div>
                          <div className='text-green-700 font-bold text-3xl'>
                               Summary
                          </div>
                               <p className='font-semibold'>
                               <span cla>Total Items:{" "}{cart.length}</span>
                              </p>
                        
                      </div>

                      <div className='px-5 flex flex-col items-center '>
                             
                           <p className='font-semibold'>total Amount :${Math.round(totalAmount*100)/100}</p>
                
                          <button className='w-full bg-green-600 rounded-sm text-white  font-semibold py-1 px-2 m-2 hover:bg-green-800'>
                            Checkout Now
                          </button>
                      </div>
                 </div>
                  

              </div>
            ):
            <div className='flex items-center justify-center flex-col mt-10'>
                <p className='font-semibold text-lg'>your cart is empty</p>
                <NavLink to={"/"} className="m-8 bg-gray-600 text-gray-300 rounded-sm shadow-md shadow-black py-2 px-4
                hover:scale-110 transition duration-300 ">
                        shop now
                </NavLink>
            </div>
        }
    </div>
  

  )
}

export default Cart