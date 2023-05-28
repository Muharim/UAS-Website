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
        <div className='min-h-screen bg-white font-sans'>
            <Head title={props.title} />
            <Navbar user={props.auth.user}/>
            <div className='px-5 text-black'>
                <MainPost
                    data = {props.newsAll[10]}
                    srcImg={"./build/assets/image/image-web-3-mobile.jpg"}
                    Title={"The Bright Future of Web 3.0?"}
                    Caption={"We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?"}
                />
                <NewPost news={props.news.data} meta={props.news.meta}/>
                <PopularPost data={props.newsAll} />

                {/* <h1>{props.desc}</h1>
                <div className='flex justify-center flex-col lg:flex-row lg:flex-wrap lg:flex-scretch items-center gap-4 p-4'>
                    <NewsList news={props.news.data} />
                </div>
                <div className='flex justify-center items-center mt-2'>
                    <Paginator meta={props.news.meta} />
                </div> */}
            </div>
        </div>
    )
}