import { NavLink } from "react-router-dom"
function programme() {


  return (
    <>
      <div className="flex text-white justify-center">
        <ul className="flex gap-4">
          <li><NavLink to="/programme/All" href="">All</NavLink></li>
          <li><NavLink to="/programme/EDM" href="">EDM</NavLink></li>
          <li><NavLink to="/programme/Pop" href="">Pop</NavLink></li>
          <li><NavLink to="/programme/Rap" href="">Rap</NavLink></li>
        </ul>
      </div>
    </>

  )
 
}
export default programme