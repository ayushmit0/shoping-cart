import React from 'react'
import {toast} from "react-hot-toast"
import { useSelector, useDispatch } from 'react-redux'
import {add,remove} from '../redux/CartSlice'

function Product({post}) {

    const {cart}=useSelector((state)=>state)
    const dispatch=useDispatch();

    const addToCart=()=>{
        dispatch(add(post))
        toast.success("item added to cart")
        
    }
    const removeFromCart=()=>{
        dispatch(remove(post.id))
        toast.error("item removed from cart")
    }
  return (
    <div className='flex flex-col items-center justify-between  overflow-x-hidden 
    hover:scale-105 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl shadow-inner shadow-slate-500
    '>
        <div>
            <p className='text-gray-700 
            font-semibold text-lg text-left truncate lg:w-40 mt-1
            '>{post.title}</p>
            
        </div>
        <div>
            <p className='lg:w-40 text-gray-400 font-normal text-[10px] text-left '
            >{post.description.split(" ").slice(0,10).join(" ")+"..."}</p>
        </div>
        <div className='h-[180px]'>
            <img src={post.image} className='h-full w-full'/> 
        </div>


        <div className='flex flex-row justify-between gap-12 items-center w-full mt-5 font-semibold'>
            <div>
                <p className='text-green-600 '>${post.price}</p>
            </div>

            {
                cart.some((p)=>p.id==post.id)?
                (
                    <button
                    className='bg-red-600 rounded-lg px-2 py-1 hover:bg-slate-600 text-white'
                    onClick={removeFromCart}>
                    Remove item
                    </button>
                ):
                (
                    <button
                    className='bg-green-600 rounded-lg px-2 py-1 hover:bg-slate-600 text-white'
                    onClick={addToCart}>
                        Add to cart
                    </button>
                )
            }

        </div>
        
        
    </div>
  )
}

export default Product