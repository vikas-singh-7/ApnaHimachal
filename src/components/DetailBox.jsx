import React from "react";
import DetailCompo from "./DetailCompo";

const DetailBox = () => {
  return (
    <div className="bg-blue-500 h-full px-28 py-8">
      <div className="h-auto w-full bg-yellow-500 grid grid-cols-12 grid-rows-12">
        <div className="row-span-3 col-span-6 bg-green-500 p-2">
          <DetailCompo />
        </div>
        <div className="row-span-3 col-span-6 bg-green-500 p-2">
          <DetailCompo />
        </div>
        <div className="row-span-3 col-span-6 bg-green-500 p-2">
          <DetailCompo />
        </div>
        <div className="row-span-3 col-span-6 bg-green-500 p-2">
          <DetailCompo />
        </div>
        <div className="row-span-3 col-span-6 bg-green-500 p-2">
          <DetailCompo />
        </div>
        <div className="row-span-3 col-span-6 bg-green-500 p-2">
          <DetailCompo />
        </div>
      </div>
    </div>
  );
};

export default DetailBox;
