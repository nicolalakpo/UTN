import { Link } from "react-router-dom"
import React from "react"
const Footer = (props) =>{
    return(
        <nav>
        <ul className="holder">
           
            <li><Link to= "/">Home</Link></li>
            <li><Link to= "/nosotros">Nosotros</Link></li>
            <li><Link to= "/tortas">Tortas</Link></li>
            <li><Link to= "/eventos-especiales">Eventos Especiales</Link></li>
            <li><Link to= "/contactanos">Contactanos</Link></li>
        </ul>
    </nav>
    )
}
export default Footer;