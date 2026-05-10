import { NavLink } from "react-router-dom"
import logo from '../assets/playImg.jpg'
import logo1 from '../assets/tsawer3.jpg'
import Card from '../components/Card'
import myData from "../data/data"
import { useState } from "react"



function Home() {


  const [fav, setFav] = useState(() => {
    return JSON.parse(localStorage.getItem("mo5aniyin")) || [];
  });

  function setStorage(id) {
    if (fav.includes(id)) return;
    const updated = [...fav, id];
    setFav(updated);
    localStorage.setItem("mo5aniyin", JSON.stringify(updated));
  }

  return (
    <>
      <div data-aos="fade-right" className='relative'>
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

      <div className="flex justify-center">
        <div className=" grid grid-cols-3 gap-6">
           {myData.slice(0, 6).map(data => 
           <Card 
           key={data.id}
           item={data}
           re_set={setStorage}
           classConfig={"bg-blue-500 text-white px-8 py-0.5 rounded"}
           buttonName={"add"} 
           />)}
        </div>
        
      </div>


    </>

  )
}
export default Home