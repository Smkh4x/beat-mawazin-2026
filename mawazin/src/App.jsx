import Nav from './components/Nav'
import Home from './components/Home'
import Programms from './components/Programms'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import './index.css'
import Planning from './components/Planning'
import Passeport from './components/Passeport'

function App() {

  return (

    <BrowserRouter >

    <Nav />

    <Routes>
      
      <Route path='/' element={<Home />} />
      <Route path='/programme' element={<Programms />} />
      <Route path='/planning' element={<Planning />} />
      <Route path='/passeport' element={<Passeport />} />

    </Routes>


  
    </BrowserRouter >
  )
}

export default App
