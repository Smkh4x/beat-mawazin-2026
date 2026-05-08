import Nav from '../components/Nav'
import Home from '../pages/Home'
import Programme from '../pages/Programms'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Planning from '../pages/Planning'
import Passeport from '../pages/Passeport'


function Router() {
  return (
        <BrowserRouter >

    <Nav />
    

    <Routes>
      
      <Route path='/' element={<Home />} />
      <Route path='/programme' element={<Programme />} />


      
      <Route path='/planning' element={<Planning />} />
      <Route path='/Passeport' element={<Passeport />} />

    </Routes>


  
    </BrowserRouter >
  )
}
export default Router