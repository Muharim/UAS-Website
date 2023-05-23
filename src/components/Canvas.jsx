import React from 'react'

export const Canvas = ({toggleCanvas}) => {
  return (
    <div className=' fixed flex justify-end z-10 w-full left-0 top-0 bg-black/50'>
      <div className='top-0 right-0 w-[68%] h-[100vh] px-[24px] bg-white'>  
        <button onClick={toggleCanvas}><svg className='absolute right-5 top-7' width="32" height="31" xmlns="http://www.w3.org/2000/svg"><g fill="#00001A" fillRule="evenodd"><path d="m2.919.297 28.284 28.284-2.122 2.122L.797 2.419z"/><path d="M.797 28.581 29.081.297l2.122 2.122L2.919 30.703z"/></g></svg></button>
        <ul className='pt-[22vh]'>
            <li className='py-[12px] hover:text-softRed text-[18px]'><a href="#">Home</a></li> 
            <li className='py-[12px] hover:text-softRed text-[18px]'><a href="#">New</a></li> 
            <li className='py-[12px] hover:text-softRed text-[18px]'><a href="#">Popular</a></li>
        </ul> 
      </div>
    </div>
  )
}
