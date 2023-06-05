import { Link } from '@inertiajs/react'
import React from 'react'

export const MainPost = ({data, srcImg, Title, Caption}) => {
  console.log('data cuy',data);
  return (
    <div>
        <div className="pb-[60px] Laptop:flex Laptop:flex-col Laptop:gap-[40px]">
            <img className="relative bottom-[8px] pb-[18px] " src={`/build/assets/image/${data.image}`} alt="" />
            <div className='Laptop:flex Laptop:gap-[30px] Laptop:w-[740px]'>
              <h1 className="font-bold font-[32px] text-[40px] leading-none pb-[18px] Laptop:text-[54px] Laptop:w-[940px]">{data.title}</h1>
              <div>
                <p className="text-[15px] text-DGB pb-[24px]">{data.description}</p> 
                <Link className="bg-red-500 text-white px-[32px] py-[14px] bg-softRed hover:bg-VDB text-offWhite font-bold text-[14px] tracking-[4px]" href={route('detail.show',{id: data.id})} >READ MORE</Link> 
              </div>
            </div>
        </div>
    </div>
  )
}
