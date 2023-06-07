import { Link } from '@inertiajs/react';
import React from 'react'


export const PopularPost = ({data}) =>{
  console.log('dari pop',data);
  return (
    <div className='pt-[60px] flex flex-col gap-[34px] Laptop:flex-row Laptop:pt-[5px] pb-10'>
        <div className="flex gap-[24px] Laptop:w-[350px]">
          <img className="h-[130px]" src="./build/assets/image/image-retro-pcs.jpg" alt="" />
          <div className="flex flex-col justify-center">
            <h2 className="text-[32px] font-bold text-grayishBlue">01</h2>
            <Link className="font-extrabold pb-2 text-[18px] hover:text-softRed" href={route('detail.show',{id: data[10].id})}>Reviving Retro PCs</Link> 
            <p className="text-[15px] text-DGB">"What happens when old PCs are given modern upgrades?"</p> 
          </div>
        </div>
        <div className="flex gap-[24px] Laptop:w-[350px]">
          <img className="h-[130px]" src="./build/assets/image//image-top-laptops.jpg" alt="" />
          <div className="flex flex-col justify-center">
            <h2 className="text-[32px] font-bold text-grayishBlue">02</h2>
            <Link className="font-extrabold pb-2 text-[18px] hover:text-softRed" href={route('detail.show',{id: data[11].id})}>Top 10 Laptops of 2022</Link> 
            <p className="text-[15px] text-DGB">Our best picks for various needs and budgets.</p> 
          </div>
        </div>
        <div className="flex gap-[24px] Laptop:w-[350px]">
          <img className="h-[130px]" src="./build/assets/image//image-gaming-growth.jpg" alt="" />
          <div className="flex flex-col justify-center">
            <h2 className="text-[32px] font-bold text-grayishBlue">03</h2>
            <Link className="font-extrabold pb-2 text-[18px] hover:text-softRed" href={route('detail.show',{id: data[12].id})}>The Growth of Gaming</Link> 
            <p className="text-[15px] text-DGB">How the pandemic has sparked fresh opportunities.</p> 
          </div>
        </div>
    </div>
  )
}
