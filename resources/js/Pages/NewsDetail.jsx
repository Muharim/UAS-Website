import Paginator from '@/Components/Homepage/Paginator';
import { MainPost } from '@/Components/MainPost';
import Navbar from '@/Components/Navbar';
import { NewPost } from '@/Components/NewPost';
import NewsList from '@/Components/NewsList';
import { PopularPost } from '@/Components/PopularPost';
import { Link, Head } from '@inertiajs/react';


export default function NewsDetail(props) {
    console.log('xixi',props)
    console.log('xixixi',props.news[0].image)
    return (
        <div className='min-h-screen bg-white font-sans Laptop:px-[160px] Laptop:py-[90px]'>
            <Head title={props.title} />
            <Navbar user={props.auth.user}/>
            <div className='px-5 text-black pb-[52px]'>
                <div className=''>
                    <h1 className='text-3xl mb-3'>{props.news[0].title}</h1>
                    <img className='w-[400px] my-9' src={`/build/assets/image/${props.news[0].image}`} alt="" />
                    <p className='text-xl'>{props.news[0].content}</p>
                </div>
                <div className='flex justify-end px-[12px]'>
                    <p className='text-lg mt-[100px]'>author : {props.news[0].author}</p>
                </div>
            </div>
        </div>
    )
}