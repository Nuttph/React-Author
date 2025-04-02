import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const CreateAuthor = () => {
    const [author, setAuthor] = useState("");
    const [des, setDes] = useState("");
    const navigate = useNavigate()
    const handleCreate = async()=>{
        if(author == null || author.split == "" || des == null || des.split == ""){
            return;
        }
        try{
            const res = await axios.post(import.meta.env.VITE_API_HTTP + "/library",{
                author:author,
                description:des
            })
            navigate('/library')
            console.log(res)
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
                handleCreate()
            }}>
                <div className="flex flex-col w-full">
                    <label className="text-white">Author Name:</label>
                    <input required type="text" value={author} onChange={(e)=>{setAuthor(e.target.value)}} className="w-full h-[40px] px-2 outline-none rounded-md" maxLength={50} />
                    <div className={`w-full flex justify-end  ${author.length >= 40 && author.length !== 50 ? "text-[#ffc31d]":author.length >= 50 ? "text-[#f00]":"text-white"}`}>{author.length}/50</div>
                </div>
                <div className="flex flex-col">
                    <label className="text-white">Description:</label>
                    <textarea required type="text" className="h-[200px] outline-none rounded-md p-2" maxLength={500} value={des} onChange={(e)=>{setDes(e.target.value)}} />
                    <div className={`w-full flex justify-end  ${des.length >= 450 && des.length < 500 ? "text-[#ffc31d]":des.length >= 500 ? "text-[#f00]":"text-white"}`}>{des.length}/500</div>
                </div>
                <button className='bg-green-500 hover:bg-green-600 w-fit px-4 rounded-md duration-300 text-[20px] hover:scale-125'>Create</button>
            </form>
        </div>

        
    </div>
  )
}

export default CreateAuthor