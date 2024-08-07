'use client';
// import { Metadata } from 'next'
import React, { useEffect } from 'react'

// export const metadata:Metadata ={
    // title: "All Products",
    // title:{
    //     absolute:'',  // overwrite all often use in child
    //     template:'',  // mix with chiild title='%s | sahil-tut'
    //     default:''  //goes to child
    // }
// }


const page = () => {
    useEffect(() => {
        // Set a 10-second delay
        const timer = setTimeout(() => {
        //   setIsLoading(false);
        }, 10000); // 10000 milliseconds = 10 seconds
    
        // Clean up the timer on component unmount
        return () => clearTimeout(timer);
      }, []);
  return (
  <h1>Products</h1>
  )
}

export default page
