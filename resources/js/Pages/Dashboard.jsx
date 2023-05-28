import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router, Link} from '@inertiajs/react';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Dashboard(props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [content, setContent] = useState('');
    const [isNotif, setIsNotif] = useState(false);

    useEffect(() => {
        if(!props.myNews){
            router.get('/news')
        }
    }, []);
    console.log(props)
    
    const handleSubmit = () => {
        const data = {
            title, description, category, image, content
        }
        router.post('/news',data)
        setIsNotif(true)
        setTitle('')
        setDescription('')
        setCategory('')
        setImage('')
        setContent('')
    }

    return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="p-6 bg-white border-b border-gray-200">
                        <div className='m-2'>
                            {isNotif && 
                                <div className="alert alert-success shadow-lg">
                                <div>
                                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6 placeholder::text-black" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                  <span>{props.flash.message}</span>
                                </div>
                              </div>
                            }
                        </div>
                        <input value={title} onChange={(title) => setTitle(title.target.value)} type="text" placeholder="Judul" className="bg-white input input-bordered w-full m-2" />
                        <input value={description} onChange={(description) => setDescription(description.target.value)} type="text" placeholder="Deskripsi" className="bg-white input input-bordered w-full m-2" />
                        <input value={category} onChange={(category) => setCategory(category.target.value)} type="text" placeholder="Kategori" className="bg-white input input-bordered w-full m-2"/>
                        <input type="file" onChange={(image)=>setImage(image.target.files[0])} accept='image/*' className="bg-white file-input file-input-primary w-full m-2"/>
                        <textarea value={content} onChange={(content) => setContent(content.target.value)}  className="bg-white m-2 textarea textarea-primary w-full placeholder:text-[16px] text-[16px]" rows='5' placeholder="Content"></textarea>
                        
                        <button onClick={() => handleSubmit()} className='btn btn-primary m-2'>Submit</button>
                    </div>
                </div>
                <div className='p-4'>
                    {props.myNews && props.myNews.length > 0 ? props.myNews.map((news,i) => {
                        return (
                            <div key={i} className="card w-full h-96 lg:w-96 bg-white shadow-xl m-auto my-4">
                                <div className="card-body">
                                    <h2 className="card-title">{news.title}
                                        <div className="badge badge-secondary">NEW</div>
                                    </h2>
                                    <p>{news.description}</p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-inline">{news.category}</div>
                                        <div className="badge badge-outline">
                                            <Link href={route('edit.news')} method='get' data={{id : news.id}} as='button' className="badge badge-outline">edit</Link>
                                        </div>
                                        <div className="badge badge-outline">
                                            <Link href={route('delete.news')} method='post' data={{id : news.id}} as='button' className="badge badge-outline">delete</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }): <p>Anda belum memiliki berita</p>}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
