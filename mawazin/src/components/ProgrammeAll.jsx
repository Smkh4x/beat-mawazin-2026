import { NavLink } from "react-router-dom"
function ProgrammeAll() {

          const days = ["19","20","21","22","23","24","25","26","27"]
  return (
    <>
      <div className="flex text-white justify-center">
        <ul className="flex gap-4">
          <li><NavLink to="/programme/All" href="">All</NavLink></li>
        </ul>
      </div>
      <div className="flex justify-center gap-8 ">
        {days.map(day => 
          <div key={day} className="py-4 text-white">
            <button><NavLink>{day}</NavLink></button>
        </div>
        )}


      </div>

    </>

  )
 
}
export default ProgrammeAll