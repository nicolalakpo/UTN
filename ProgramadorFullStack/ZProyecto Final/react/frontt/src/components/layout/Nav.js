// import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"
import React from "react"
const Footer = (props) => {
    return (
        <nav>
            <ul className="holder">

                {/* <li><Link to="/">Home</Link></li>
                <li><Link to="/nosotros">Nosotros</Link></li>
                <li><Link to="/tortas">Tortas</Link></li>
                <li><Link to="/eventos-especiales">Eventos Especiales</Link></li>
                <li><Link to="/contactanos">Contactanos</Link></li> */}


                <li>
                    <NavLink
                        to="/" className = {({ isActive }) =>
                            isActive ? "activo" : undefined
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                <NavLink
                        to="/novedades" className = {({ isActive }) =>
                            isActive ? "activo" : undefined
                        }
                    >
                        Novedades
                    </NavLink>
                </li>
                
                <li>
                <NavLink
                        to="/tortas" className = {({ isActive }) =>
                            isActive ? "activo" : undefined
                        }
                    >
                        Tortas
                    </NavLink>
                </li>
                <li>
                <NavLink
                        to="/eventos-especiales" className = {({ isActive }) =>
                            isActive ? "activo" : undefined
                        }
                    >
                        Eventos Especiales
                    </NavLink>
                </li>
                <li>
                <NavLink
                        to="/nosotros" className = {({ isActive }) =>
                            isActive ? "activo" : undefined
                        }
                    >
                        Nosotros
                    </NavLink>
                </li>
                <li>
                <NavLink
                        to="/contactanos" className = {({ isActive }) =>
                            isActive ? "activo" : undefined
                        }
                    >
                        Contactanos
                    </NavLink>
                </li>
                



            </ul>
        </nav>
    )
}
export default Footer;