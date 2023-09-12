import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleAdd, readHandle}) => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    return (
        <div className="w-2/3">
            <h1 className="text-3xl">Blogs: {blogs.length}</h1>
            {
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    blog={blog}
                    handleAdd={handleAdd}
                    readHandle={readHandle}
                    ></Blog>)
            }
        </div>
    );
};


Blogs.propTypes = {
    handleAdd : PropTypes.func.isRequired,
    readHandle : PropTypes.func.isRequired
}
export default Blogs;