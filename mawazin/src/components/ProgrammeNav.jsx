import { NavLink } from "react-router-dom"
function ProgrammeNav() {
    return (
        <>
            <div className="flex text-white justify-center">
                <ul className="flex gap-4">
                    <li><NavLink to="/programme" href="">All</NavLink></li>
                    <li><NavLink to="/programme" href="">EDM</NavLink></li>
                    <li><NavLink to="/programme" href="">Pop</NavLink></li>
                    <li><NavLink to="/programme" href="">Rap</NavLink></li>
                </ul>
            </div>
        </>
    )
}
export default ProgrammeNav