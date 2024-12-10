import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom';

const Detail = () => {
    const params = useParams();
    const [data, setData] = useState({})
    const navigate = useNavigate()

    useEffect(() =>{
        axios(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
        .then(({data}) => setData(data))
    }, [params.id])
    return (
        <div>
            <h1>Detail</h1>
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <button onClick={() =>{
            navigate(-1)
            }}>Go Back</button>
        </div>
    );
}

export default Detail;
