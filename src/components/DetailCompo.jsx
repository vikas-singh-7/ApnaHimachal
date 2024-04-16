import React from "react";
import { useNavigate } from "react-router-dom";

const DetailCompo = ({ image, para1, para2, navigation }) => {
  const navigate = useNavigate();
  return (
    <div onClick={()=>{
      navigate("/")
    }} className="h-[70vh]  w-auto rounded-md border-2  overflow-hidden ">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className={`bg-[url(${image})] bg-cover bg-center h-[80%] w-full`}
      ></div>
      <div className="h-[20%] bg-zinc-800 w-full flex flex-col items-center p-2 ">
        <p className="font-semibold text-sm text-white">{para1}</p>
        <p className="font-semibold text-white font-[cursive]">{para2}</p>
      </div>
    </div>
  );
};

export default DetailCompo;
