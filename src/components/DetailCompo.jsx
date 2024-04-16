import React from 'react'

const DetailCompo = ({image,para1,para2}) => {
  return (
    <div className='h-[70vh] w-auto border-2 border-black rounded-md  overflow-hidden '>
        <div className='bg-[url("./images/detail1.webp")] bg-cover bg-center h-[80%] w-full'></div>
        <div className='h-[20%] w-full flex flex-col items-center p-2 '>
            <p className='font-semibold text-sm text-[#FB4A9D]'>NEWS</p>
            <p className='font-semibold'>Clash Mini Ending Development</p>
        </div>
    </div>
  )
}

export default DetailCompo