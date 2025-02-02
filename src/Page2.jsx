import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Page2 = () => {
    const navigate = useNavigate();

    const [data, setData] = useState([])

    useEffect(() =>{
        axios('https://jsonplaceholder.typicode.com/posts')
        .then(({data}) => setData(data))
    })
    return (
        <div style={{
            textAlign: 'center'
        }} >
            <h1>PAGE2</h1>
            <button onClick={() =>{
            navigate(-1)
            }}>Go Back</button>

            {
                data.map((item) =>{
                    return <p style={{fontSize: '30px'}} key={item.id}>{item.title}</p>
                })
            }
        </div>
    );
}

export default Page2;
