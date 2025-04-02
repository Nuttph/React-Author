import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Setting = () => {
    const [author, setAuthor] = useState("");
    const [des, setDes] = useState("");
    const [loading,setLoading] = useState(true);
    const navigate = useNavigate()
    const fetchOne = async() =>{
        const id = sessionStorage.getItem("settingID");

        if(!id){
            console.log("No settingID")
            return;
        }

        try{
            setLoading(true)
            console.log("Starting fetching")
            const res = await axios.get(import.meta.env.VITE_API_HTTP + "/library");
            if(Array.isArray(res.data?.data)){
                const filterID = res.data.data.filter(i=>String(i._id) == id);
                console.log(filterID)
                setAuthor(filterID[0].author)
                setDes(filterID[0].description)
            }

        }catch(err){
            console.log(err)
        }finally{
            console.log("Eng fetch")
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchOne()
    },[])

    const handleUpdate = async()=>{
        const id = sessionStorage.getItem("settingID");

        if(!id){
            console.log("No id");
            return;
        }

        try{
            const res = await axios.put(import.meta.env.VITE_API_HTTP + "/library/"+id,{
                author:author,
                description:des
            })
            console.log(res)
        }catch(err){
            console.log(err)
        }
    }
    const handleDelete = async()=>{
        const id = sessionStorage.getItem("settingID");

        if(!id){
            console.log("No id");
            return;
        }

        try{
            const res = await axios.delete(import.meta.env.VITE_API_HTTP + "/library/"+id)
            console.log(res)
            navigate('library');
        }catch(err){
            console.log(err)
        }
    }

  return (
    <div className='px-[40px] mt-[40px]'>
        <div className="bg-gray-700 text-white p-[10px] rounded-lg shadow-2xl">
            <h1 className="font-bold text-[20px]">Setting Library</h1>
            <form className="flex flex-col text-black gap-4" onSubmit={(e)=>{
                e.preventDefault();
                handleUpdate()
            }}>
                <div className="flex flex-col w-full">
                    <label className="text-white">Author Name:</label>
                    <input type="text" value={author} onChange={(e)=>{setAuthor(e.target.value)}} className="w-full h-[40px] px-2 outline-none rounded-md" maxLength={50} />
                    <div className={`w-full flex justify-end  ${author.length >= 40 && author.length !== 50 ? "text-[#ffc31d]":author.length >= 50 ? "text-[#f00]":"text-white"}`}>{author.length}/50</div>
                </div>
                <div className="flex flex-col">
                    <label className="text-white">Description:</label>
                    <textarea type="text" className="h-[200px] outline-none rounded-md p-2" maxLength={500} value={des} onChange={(e)=>{setDes(e.target.value)}} />
                    <div className={`w-full flex justify-end  ${des.length >= 450 && des.length < 500 ? "text-[#ffc31d]":des.length >= 500 ? "text-[#f00]":"text-white"}`}>{des.length}/500</div>
                </div>
                <button className='bg-green-500 hover:bg-green-600 w-fit px-4 rounded-md duration-300 text-[20px] hover:scale-125'>Update</button>
            </form>
        </div>

        <button className='bg-red-500 hover:bg-red-600 px-4 duration-300 text-[20px] rounded-md mt-4' onClick={()=>{
            handleDelete()
        }}>Delete Article</button>
    </div>
  )
}

export default Setting