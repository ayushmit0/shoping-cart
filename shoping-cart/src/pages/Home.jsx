import React from 'react'
import { useState, useEffect } from 'react';
import Spinner from '../components/Spinner';
import Product from '../components/Product';

function Home() {
    const API_URL = "https://fakestoreapi.com/products";
    const [loading,setLoading]=useState(false);
    const [posts,setPosts]=useState([])

    async function fetchProductData(){
       setLoading(true)
       try {
        const response=await fetch(API_URL)
        const data= await response.json()
        setPosts(data);
        
       } catch (error) {
        console.log("Error aagya ji");
        // setPosts([]);
       }
       setLoading(false)
    }

    useEffect(()=>{
        fetchProductData()
    },[])
  return (

    <div>
      {
        loading?<Spinner/>:
        posts.length>0 ?
        (<div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-w-6xl mx-auto space-y-10 space-x-5 '>
          {
            posts.map((post)=>(
            <Product key={post.id} post={post}/>
          ))
          }
        </div>):
        <div className='flex justify-center items-center mt-20'>
          <p>no data found</p>
        </div>

      }
    
    
    </div>
  )
}

export default Home