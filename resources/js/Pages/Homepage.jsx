import Paginator from '@/Components/Homepage/Paginator';
import { MainPost } from '@/Components/MainPost';
import Navbar from '@/Components/Navbar';
import { NewPost } from '@/Components/NewPost';
import NewsList from '@/Components/NewsList';
import { PopularPost } from '@/Components/PopularPost';
import { Link, Head } from '@inertiajs/react';


export default function HomePage(props) {
    console.log(props)
    return (
        <div className='pt-[28px] bg-white px-[16px] pb-[64px] font-Inter Laptop:px-[160px] Laptop:pt-[90px]'>
            <Head title={props.title} />
            <Navbar user={props.auth.user}/>
            <div className='px-5 text-black Laptop:flex Laptop:gap-[30px] Laptop:relative Laptop:bottom-[6px]'>
                <MainPost
                    data = {props.newsAll[9]}
                    srcImg={"./build/assets/image/image-web-3-mobile.jpg"}
                    Title={"The Bright Future of Web 3.0?"}
                    Caption={"We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?"}
                />
                <NewPost news={props.news.data} meta={props.news.meta}/>
            </div>
            <div className='px-5 text-black'>
            <PopularPost data={props.newsAll} />
            </div>
        </div>
    )
}