import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { currency } from "../App";
import { TbTrash } from "react-icons/tb";


const List = ({token}) => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5002/api/product/list"
      );
      console.log(response.data);
      if (response.data) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const removeProduct=async(id)=>{
 try {
  const response=await axios.post("http://localhost:5002/api/product/remove",{id},{headers:{token}}
) 
if(response.data.success){
 toast.success(response.data.message)
 await fetchList()
}else{
  toast.error(response.data.message)
}
 } catch (error) {
  console.log(error)
  toast.error(error.message)
 }
  }

  useEffect(() => {
    fetchList();
  }, []);
  return (
    <div className="px-2 sm:px-8 py-12 h-screen">
      <div className="flex flex-col gap-2">
<div className="grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 bg-[#ebf9dc] text-[14px] sm:text-[15px] font-bold mb-3 rounded">
          <h5>Image</h5>
          <h5>Name</h5>
          <h5>Category</h5>
          <h5>Price</h5>
          <h5>Remove</h5>
        </div>
        {/* food list */}
        {list.map((item) => (
          <div key={item._id} className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 p-2 bg-[#fffdf4] rounded-xl">
            <img src={item.image} alt="" className="w-12 rounded-lg" />
            <h5 className="text-sm font-semibold">{item.name}</h5>
            <p className="font-semibold">{item.category}</p>
            {/* price for first size */}
            <div className="text-sm font-extrabold">{currency}{Object.values(item.price)[0]}</div>
          <div><TbTrash onClick={()=>removeProduct(item._id)} className="text-right md:text-center cursor-pointer text-lg"/></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
