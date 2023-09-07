import { NavLink } from "react-router-dom"; 
import logo from "../assets/logo.png";

export default function Navigation() {
    return (
        <nav className="nav">
            <div>
                <NavLink to="/"><img src={logo} alt="Logo" className="logo" /></NavLink>
            </div>

            <div>
                <NavLink to="/" className="menupunkt">Hjem</NavLink>
                <NavLink to="/rejser" className="menupunkt">Rejser</NavLink>
                <NavLink to="/om" className="menupunkt">Om os</NavLink>
            </div>  
        </nav>
    )
}