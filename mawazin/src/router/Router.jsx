import Nav from '../components/Nav'
import Home from '../pages/Home'
import Programme from '../pages/Programms'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Planning from '../pages/Planning'
import Passeport from '../pages/Passeport'
import ProgrammeNav from '../components/ProgrammeNav'
import ProgrammeEDM from '../components/ProgrammeEDM'
import ProgrammePop from '../components/ProgrammePop'
import ProgrammeRap from '../components/ProgrammeRap'
import ProgrammeAll from '../components/ProgrammeAll'


function Router() {
  return (
        <BrowserRouter >

    <Nav />
    
    

    <Routes>
      <Route path='/programme' element={<ProgrammeNav />} />

      <Route path='/programme/EDM' element={<ProgrammeEDM />} />
      <Route path='/programme/Rap' element={<ProgrammeRap />} />
      <Route path='/programme/Pop' element={<ProgrammePop />} />
      <Route path='/programme/All' element={<ProgrammeAll />} />
      
      <Route path='/' element={<Home />} />
      <Route path='/programme' element={<Programme />} />


      
      <Route path='/planning' element={<Planning />} />
      <Route path='/Passeport' element={<Passeport />} />

    </Routes>


  
    </BrowserRouter >
  )
}
export default Router