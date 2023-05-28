import { Link } from '@inertiajs/react'
import React from 'react'
import Paginator from './Homepage/Paginator'

export const NewPost = ({news, meta}) => {
  console.log('prips', news)
  return (
    <div>      
        <div className="flex flex-col bg-VDB text-offWhite px-[22px] pt-[20px] pb-[28px] Laptop:w-[344px]">
            <Link href={route('new')} className="text-[32px] font-bold text-softOrange">Latest News!</Link>
            {
              news ? news.map((data, i) => {
                console.log(news)
                return (
                  <div key={i} className='text-white mt-7'>
                    <img src={"data.image"} alt="" />
                    <Link href={route('detail.show',{id: data.id})} className="font-bold text-[20px] hover:text-softOrange pt-[24px]">{data.title}</Link>
                    <p className='text-[15px] text-grayishBlue leading-7 pb-[32px] border-grayishBlue border-b-[1px]'>{data.description}</p>
                  </div>
                )
              }) : <div className='text-white'>saat ini belum ada berita</div>
            }
            <div className='flex justify-center items-center mt-[32px]'>
                    <Paginator meta={meta} />
            </div>
{/* 
            <a className="font-bold text-[20px] hover:text-softOrange pt-[24px]" href="#">{NewT1}</a>
            <p className="text-[15px] text-grayishBlue leading-7 pb-[32px]">{NewC1}</p> 

            <a className="font-bold text-[20px] hover:text-softOrange pt-[32px] border-grayishBlue border-t-[1px]" href="#">{NewT2}</a>
            <p className="text-[15px] text-grayishBlue leading-7 pb-[32px] border-grayishBlue border-b-[1px]">{NewC2}</p> 

            <a className="font-bold text-[20px] hover:text-softOrange pt-[32px]" href="#">{NewT3}</a>
            <p className="text-[15px] text-grayishBlue leading-7">{NewC3}</p>  */}
        </div>
    </div>
  )
}
