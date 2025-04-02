import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Author = () => {
  const [loading, setLoading] = useState();
  const [library, setLibrary] = useState();
  const navigate = useNavigate();
  const fetchAll = async () => {
    try {
      setLoading(true);
      console.log("Starting fetching");
      const res = await axios.get(import.meta.env.VITE_API_HTTP + "/library");
      console.log(res.data);
      setLibrary(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
      console.log("Ending fetching");
    }
  };
  useEffect(() => {
    fetchAll();
  }, []);

  
  return (
    <div className="w-full flex flex-col px-[50px] mt-[40px] gap-[10px]">
      <div>Library</div>
      <div className="w-full p-[10px]">
        {!loading && library && (
          <>
            <div className="flex flex-col-reverse w-full">
              {library.data.map((item, index) => (
                <div key={index} className={`flex flex-row w-full ${index%2==0?"bg-gray-200":"bg-gray-300"} justify-between pb-4 px-4 pt-2`}>
                  <div className="flex-col w-[90%]">
                    <h1 className="border-b-2 border-gray-400 text-[23px] font-semibold">
                      {item.author}
                    </h1>
                    <div className="break-words line-clamp-3 w-full">
                      {item.description}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button onClick={()=>{
                        sessionStorage.setItem("settingID",item._id);
                        navigate("/library/setting");
                    }} className="px-5 py-1 bg-yellow-500 text-white rounded-md hover:bg-blue-600 focus:outline-none transition duration-300">
                      Setting
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      {loading && <>
      Loading Content...
      </>}
    </div>
  );
};

export default Author;
