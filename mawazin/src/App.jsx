import Nav from './components/Nav'
import Home from './pages/Home'
import Programms from './pages/Programms'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import './index.css'
import Planning from './pages/Planning'
import Passeport from './pages/Passeport'

function App() {

  return (

    <BrowserRouter >

    <Nav />

    <Routes>
      
      <Route path='/' element={<Home />} />
      <Route path='/programme' element={<Programms />} />
      <Route path='/planning' element={<Planning />} />
      <Route path='/Passeport' element={<Passeport />} />

    </Routes>


  
    </BrowserRouter >
  )
}

export default App
