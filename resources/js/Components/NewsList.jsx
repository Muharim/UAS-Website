import React from 'react'

const isNews = (news) => {
    return news.map((data, i) => {
        return (
            <div key={i} className="card w-full h-96 lg:w-96 bg-white-100 shadow-xl">
                <figure className='w-full'><img className='object-cover' src="https://images.unsplash.com/photo-1684903655159-23f35d4e8cea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{data.title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{data.description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-inline">{data.category}</div>
                        <div className="badge badge-outline">{data.author}</div>
                    </div>
                </div>
            </div>
        )
    });
}

const noNews = () => {
    return(
        <div>
            Saat ini belum ada berita tersedia
        </div>
    )
}

const NewsList = ({news}) => {
    return !news ? noNews() : isNews(news)
}

export default NewsList