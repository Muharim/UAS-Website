import React from 'react'

export const NewPost = ({NewT1, NewC1, NewT2, NewC2, NewT3, NewC3}) => {
  return (
    <div>      
        <div className="flex flex-col bg-VDB text-offWhite px-[22px] pt-[20px] pb-[28px] Laptop:w-[344px]">
            <h2 className="text-[32px] font-bold text-softOrange">New</h2>

            <a className="font-bold text-[20px] hover:text-softOrange pt-[24px]" href="#">{NewT1}</a>
            <p className="text-[15px] text-grayishBlue leading-7 pb-[32px]">{NewC1}</p> 

            <a className="font-bold text-[20px] hover:text-softOrange pt-[32px] border-grayishBlue border-t-[1px]" href="#">{NewT2}</a>
            <p className="text-[15px] text-grayishBlue leading-7 pb-[32px] border-grayishBlue border-b-[1px]">{NewC2}</p> 

            <a className="font-bold text-[20px] hover:text-softOrange pt-[32px]" href="#">{NewT3}</a>
            <p className="text-[15px] text-grayishBlue leading-7">{NewC3}</p> 
        </div>
    </div>
  )
}
