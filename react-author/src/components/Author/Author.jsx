import React, { useEffect } from 'react'
import axios from 'axios'
const Author = () => {
    
    const fetchAll = async()=>{
        try{
            console.log("Starting fetching")
            const res = await axios.get(import.meta.env.VITE_API_HTTP+'/library');
            console.log(res.data)
        }catch(err){
            console.log(err)
        }finally{
            console.log("Ending fetching")
        }
    }
    useEffect(()=>{
        fetchAll()
    },[])
  return (
    <div className='w-full flex flex-row'>
        <div className='flex-1'></div>
        <div className='flex-1'></div>
    </div>
  )
}

export default Author