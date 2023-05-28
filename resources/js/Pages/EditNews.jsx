import Paginator from '@/Components/Homepage/Paginator';
import Navbar from '@/Components/Navbar';
import NewsList from '@/Components/NewsList';
import { Link, Head, router} from '@inertiajs/react';
import { useState } from 'react';


export default function EditNews(props) {
    const [title, setTitle] = useState(props.myNews.title);
    const [description, setDescription] = useState(props.myNews.description);
    const [category, setCategory] = useState(props.myNews.category);
    const [image, setImage] = useState(props.myNews.image);
    const [content, setContent] = useState(props.myNews.content);

    const handleUpdate = () => {
        const data = {
            id: props.myNews.id, title, description, category, image, content
        }
        router.post('/news/update',data)
        setTitle('')
        setDescription('')
        setCategory('')
        setImage('')
        setContent('')
    }
    return (
        <div className='min-h-screen bg-slate-50'>
            <Head title='Edit' />
            <Navbar user={props.auth.user}/>
            <div className='p-8 text-2xl'>
                <h1>Edit Berita</h1>
            </div>
            <div className="card w-full lg:w-96 bg-white shadow-xl m-auto my-4">
                <div className="card-body">
                    <label>Judul</label><input type="text" className='my-2 input input-primary w-full bg-white' onChange={(title)=>setTitle(title.target.value)} defaultValue={props.myNews.title} />
                    <label>Deskripsi</label><input type="text" className='my-2 input input-primary w-full bg-white' onChange={(description)=>setDescription(description.target.value)} defaultValue={props.myNews.description} />
                    <label>Kategori</label><input type="text" className='my-2 input input-primary w-full bg-white' onChange={(category)=>setCategory(category.target.value)} defaultValue={props.myNews.category} />
                    <label>Gambar</label><img className='' src={`/build/assets/image/${props.myNews.image}`} alt="" /><input type="file" onChange={(image)=>setImage(image.target.files[0])} accept='image/*' className="bg-white file-input file-input-primary w-full m-2"/>
                    <label>Content</label><textarea onChange={(content) => setContent(content.target.value)}  className="bg-white m-2 textarea textarea-primary w-full placeholder:text-[16px] text-[16px]" rows='5' placeholder="Content">{props.myNews.content}</textarea>
                    <button className='btn btn-primary mt-2' onClick={() => handleUpdate()}>Update</button>
                </div>
            </div>
        </div>
    )
}