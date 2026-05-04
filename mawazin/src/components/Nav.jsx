import { NavLink } from "react-router-dom"

function Nav() {
  return (
    <>
    
    <div className="flex text-white container mx-auto py-4">
    <div>
        <h1>Mawazine</h1>
    </div>
    <ul className="flex ms-auto gap-10">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/programme">Programms</NavLink></li>
        <li><NavLink to="/planning">Planning</NavLink></li>
        <li><NavLink to="/passeport">Passeport</NavLink></li>

    </ul>
    </div>
    </>

    
  )
}
export default Nav