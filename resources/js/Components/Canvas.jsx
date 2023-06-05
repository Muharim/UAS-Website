import { Link } from '@inertiajs/react'
import React from 'react'

export const Canvas = ({toggleCanvas, user}) => {
  return (
    <div className=' fixed flex justify-end z-10 w-full left-0 top-0 bg-black/50'>
      <div className='top-0 right-0 w-[68%] h-[100vh] px-[24px] bg-white'>  
        <button onClick={toggleCanvas}><svg className='absolute right-5 top-7' width="32" height="31" xmlns="http://www.w3.org/2000/svg"><g fill="#00001A" fillRule="evenodd"><path d="m2.919.297 28.284 28.284-2.122 2.122L.797 2.419z"/><path d="M.797 28.581 29.081.297l2.122 2.122L2.919 30.703z"/></g></svg></button>
        {
          !user ?
          <>
            <ul className='pt-[160px] text-black'>
                    <li className='py-[12px] hover:text-softRed text-[18px]'><Link href={route('login')}>Login</Link></li>
                    <li className='py-[12px] hover:text-softRed text-[18px]'><Link href={route('new')}>New</Link></li>
                    <li className='py-[12px] hover:text-softRed text-[18px]'><Link href={route('popular')}>Popular</Link></li>
            </ul> 
          </>
          :
          <>
            <h1 className='mt-[100px] text-3xl text-black font-bold'>Halo, {user.name}!</h1>
            <ul className='pt-[20px] text-black'>
              <li className='py-[12px] hover:text-softRed text-[18px]'><Link href={route('dashboard')}>Dashboard</Link></li>
              <li className='py-[12px] hover:text-softRed text-[18px]'><Link href={route('new')}>New</Link></li>
              <li className='py-[12px] hover:text-softRed text-[18px]'><Link href={route('popular')}>Popular</Link></li>
              <li className='py-[12px] hover:text-softRed text-[18px]'><Link href={route('logout')} onClick={toggleCanvas} method='post' as='button'>Logout</Link></li>
            </ul> 
          </>
        }
      </div>
    </div>
  )
}
