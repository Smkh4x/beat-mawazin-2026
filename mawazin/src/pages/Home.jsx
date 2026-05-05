import { NavLink } from "react-router-dom"
import logo from '../assets/playImg.jpg'
import logo1 from '../assets/tsawer3.jpg'

import img1 from '../assets/arbi.jpg'
import img2 from '../assets/saidmjred.jpeg'
import img3 from '../assets/stati.jpeg'

function Home() {
  const Nums = [
    {
      Name: "Chab Arbi",
      img1,
      discription: "19:00",

    },
    {
      Name: "Said elmjared",
      img2,
      discription: "22:00",
    },
    {
      Name: "stati",
      img3,
      discription: "18:00",
    }

  ]

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
        {Nums.map((num, i) => {
          return <div key={i} className="bg-white w-60 h-80 rounded-2xl text-center py-4 font-bold ">
              <h1>{num.Name}</h1>
              <div className="flex justify-center">

              <img src={num.img1} />
              <img src={num.img2} />
              <img src={num.img3} />

              </div>
              <h3 className="py-2">{num.discription}</h3>
            </div>
          
        })}
      </div>













    </>

  )
}
export default Home