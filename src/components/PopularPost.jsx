import React from 'react'

export const PopularPost = ({srcImg,number,title,caption}) => {
  return (
    <div>
        <div className="flex gap-[24px] Laptop:w-[350px]">
          <img className="h-[130px]" src={srcImg} alt="" />
          <div className="flex flex-col justify-center">
          <h2 className="text-[32px] font-bold text-grayishBlue">{number}</h2>
          <a className="font-extrabold pb-2 text-[18px] hover:text-softRed" href="#">{title}</a> 
          <p className="text-[15px] text-DGB">{caption}</p> 
          </div>
        </div>
    </div>
  )
}
