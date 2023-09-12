import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleAdd, readHandle }) => {
    const {title,cover_img, reading_time, author, author_img, post_date,hashtags, id} = blog
    return (
        <div className='mb-16'>
            <img className='w-full' src={cover_img} alt={`cover_img of the title ${title}`} />
            <div className='flex justify-between items-center mt-8'>
                <div className='flex justify-center gap-6'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                    <h3 className='text-xl font-bold'>{author}</h3>
                    <p>{post_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAdd(blog)}
                    className='ml-2'><FaBookmark></FaBookmark></button>
                    
                </div>
            </div>
            <h2 className='text-2xl'>{title}</h2>
            <p> 
            {
              hashtags.map((hash, idx) => <span key={idx}><a href=''>#{hash}</a> </span>)  
            }
            </p>
            <button onClick={() => readHandle(id,reading_time)} className='text-xl font-bold underline text-purple-800 mt-10'>Mark_as_read</button>
        </div>
    );
};


Blog.propTypes = {
    blog : PropTypes.object.isRequired,
    handleAdd : PropTypes.func.isRequired,
     readHandle : PropTypes.func.isRequired
    
}
export default Blog;