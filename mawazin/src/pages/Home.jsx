import { NavLink } from "react-router-dom"
import logo from '../assets/playImg.jpg'
import logo1 from '../assets/tsawer3.jpg'
import Card from '../components/Card'
import myData from "../data/data"

function setStorage(id) {
  const addFav = JSON.parse(localStorage.getItem("mo5aniyin")) || []
  if (addFav.includes(id)) return

  addFav.push(id)

  localStorage.setItem("mo5aniyin", JSON.stringify(addFav))




}


function Home() {


  return (
    <>
      <div className='relative'>
        <img src={logo} className="w-full h-auto" />
        <div className='absolute inset-0 flex justify-center text-center'>
          <div className='text-white'>
            <h1 className=' font-bold text-4xl py-8'>Mawazine 2026</h1>
            <h2 className=' font-light text-4xl '>19 - 17 Juin 2026 | Rabat</h2>
            <h4 className='py-4'>Le Plus grad festival de musique au monde</h4>
          </div>
        </div>
        <div className='flex absolute inset-0 justify-center text-white gap-4'>
          <NavLink to="/programme"><button className='bg-amber-300 mt-90 mb-90 h-10 w-40 rounded-2xl'>Voir le programme</button></NavLink>
          <NavLink to="/passeport"><button className='bg-emerald-500 mt-90 mb-90 h-10 w-40 rounded-2xl'>Mon passeport</button></NavLink>
        </div>
      </div>

      <div className="flex justify-center text-white py-8">
        <h1 className="text-2xl font-serif">Concert du soir</h1>
      </div>

      <div className="flex justify-center">
        <img src={logo1} />
      </div>

      <div className="flex justify-center text-white py-8">

        <h1 className="text-2xl font-serif">Featured Artists</h1>

      </div>

      <div className="flex gap-30 justify-center">
        {myData.map(data => <Card key={data.id} item={data} setStorage={setStorage} />)}

      </div>


    </>

  )
}
export default Home