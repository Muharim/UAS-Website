import React from 'react'

export const MainPost = ({srcImg, Title, Caption}) => {
  return (
    <div>
        <div className="pb-[60px] Laptop:flex Laptop:flex-col Laptop:gap-[40px]">
            <img className="relative bottom-[8px] pb-[18px] Laptop:hidden" src={srcImg} alt="" />  
            <img className='hidden h-[300px] Laptop:block' src="image-web-3-desktop.jpg" alt="" />
            <div className='Laptop:flex Laptop:gap-[30px] Laptop:w-[740px]'>
              <h1 className="font-extrabold font-[32px] text-[40px] leading-none pb-[18px] Laptop:text-[54px] Laptop:w-[1100px]">{Title}</h1>
              <div>
                <p className="text-[15px] text-DGB pb-[24px]">{Caption}</p> 
                <button className="px-[32px] py-[14px] bg-softRed hover:bg-VDB text-offWhite font-bold text-[14px] tracking-[4px]">READ MORE</button> 
              </div>
            </div>
        </div>
    </div>
  )
}
