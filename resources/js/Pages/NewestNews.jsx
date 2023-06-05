import Paginator from '@/Components/Homepage/Paginator';
import { MainPost } from '@/Components/MainPost';
import Navbar from '@/Components/Navbar';
import { NewPost } from '@/Components/NewPost';
import NewsList from '@/Components/NewsList';
import { PopularPost } from '@/Components/PopularPost';
import { Link, Head } from '@inertiajs/react';


export default function NewestNews(props) {
    console.log(props)
    return (
        <div className='min-h-screen bg-white font-sans pb-8 Laptop:px-[160px] Laptop:py-[90px]'>
            <Head title={props.title} />
            <Navbar user={props.auth.user}/>
            <div className='px-5 text-black'>
                <NewPost news={props.news.data} meta={props.news.meta}/>
            </div>
        </div>
    )
}