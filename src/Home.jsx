import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div style={{
            fontSize: '50px',
            display: 'flex',
            justifyContent: 'space-evenly',
            marginTop: '100px'
        }} >
            <Link style={{
            color: 'black'
        }}  to={'/'} >Home</Link>
            <Link style={{
            color: 'black'
        }}  to={'page1'}>Page1</Link>
            <Link style={{
            color: 'black'
        }}  to={'page2'}>Page2</Link>
            
        </div>
    );
}

export default Home;
