import React from 'react';
import {useState, useEffect} from 'react';
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [error, setError] = useState(null);

    // useState can be any datatype (array, string, boolean...)

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not fetch');
                }
                {/*console.log(res);*/}
                return res.json();
            })
            .then(data => {
                {/*console.log(data);*/
                }
                setBlogs(data);
                setError(null);
            })
            .catch(error => {
                {/*console.log(error.message)*/}
                setError(error.message)
                })
    }, []);

    return (
        <div className="home">
            { error && <div>{ error }</div> }
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
        </div>
    );
};

export default Home;