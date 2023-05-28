import Paginator from '@/Components/Homepage/Paginator';
import { MainPost } from '@/Components/MainPost';
import Navbar from '@/Components/Navbar';
import { NewPost } from '@/Components/NewPost';
import NewsList from '@/Components/NewsList';
import { PopularPost } from '@/Components/PopularPost';
import { Link, Head } from '@inertiajs/react';


export default function PopularNews(props) {
    console.log('popi',props)
    return (
        <div className='min-h-screen bg-white font-sans'>
            <Head title={props.title} />
            <Navbar user={props.auth.user}/>
            <div className='px-5 text-black'>
                <PopularPost data={props.news} />
            </div>
        </div>
    )
}