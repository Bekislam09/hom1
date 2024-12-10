import { useNavigate} from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Page1 = () => {
    const navigate = useNavigate();

    const [data, setData] = useState([])

    useEffect(() =>{
        axios(`https://jsonplaceholder.typicode.com/users`)
        .then(({data}) => setData(data))
    })

    return (
        <div style={{
            textAlign: 'center'
        }} >
            <h1>PAGE1</h1>
            <button onClick={() =>{
            navigate(-1)
            }}>Go Back</button>

            {
                data.map(item =>{
                    return <p style={{fontSize: '30px'}} key={item.id}>{item.name}</p>
                })
            }

        </div>
    );
}

export default Page1;
