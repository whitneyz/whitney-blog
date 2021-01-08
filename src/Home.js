import React from 'react';
import {useState} from 'react';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);


    // let name = 'given';
    // useState can be any datatype (array, string, boolean...)
    const [name, setName] = useState('given');
    const [age,setAge] = useState('10');

    const handleClick = () => {
        setName('mimi');
        setAge('12');
    }
    return (
        <div className="Home">
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
};

export default Home;