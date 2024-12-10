import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from'./Home'
import Page1 from './Page1'
import Page2 from './Page2'
import Detail from './Detail'

function App() {
  return (
    <div>
      <BrowserRouter>
      <header style={{
        display: 'flex',
        background: '#000000',
        gap: '40px',
        color: 'white',
      }} >
        <h1 style={{
          marginRight: '500px'
        }} >Logo</h1>
        <Link style={{marginTop: '25px', marginLeft: '500px', color: 'white'}} to={'/'} >Home</Link>
        <Link style={{marginTop: '25px', color: 'white'}} to={'page1'}>Page1</Link>
        <Link style={{marginTop: '25px', color: 'white'}} to={'page2'} >Page2</Link>

      </header>

        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/page1' element={<Page1/>} />
          <Route path='/page2' element={<Page2/>} />
          <Route path='/post/:id' element={<Detail/>} />
        </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
