import React from 'react'
import toast from 'react-hot-toast';
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/CartSlice';

function CartItem({item}) {

    const dispatch=useDispatch()
    const removeFromCart=()=>{
        dispatch(remove(item.id))
        toast.success("item removed ")
    }
  return (
    <div>
        <div className='flex flex-row justify-between items-center gap-4 my-7 border-b-2 border-gray-500 py-4 '>
            <div className='h-[200px]'>
                <img src={item.image} className='h-full w-full'></img>
            </div>
            <div>
                <h1 
                className='font-bold text-gray-700 '
                >{item.title}</h1>
                <h1
                className='text-sm text-gray-500 my-2'
                >{item.description.split(" ").slice(0,15).join(" ")+"..."}</h1>


                <div className='flex flex-row justify-between font-semibold my-5'>
                    <p
                    className='text-green-600 font-bold'
                    >${item.price}</p>
                    <div className='w-8 h-8 bg-red-300 flex items-center justify-center rounded-full hover:bg-red-600'>
                    <button onClick={removeFromCart}>
                      <MdDeleteOutline
                        className=''
                      />
                    </button>
                        
                    </div>
                </div>


            </div>

        </div>
        
        
    </div>
  )
}

export default CartItem

