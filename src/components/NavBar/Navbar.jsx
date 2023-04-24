import React from 'react'
import Navbaritems from './Navbaritems.js';
import './Navbaritems.css';
import { BsFillCartFill } from 'react-icons/bs';

const Navbar = (props) => {

    // const items=['Home','Productos'];

    return (

        <nav  className={props.newclassname || "navbar navbar-expand-lg bg-body-tertiary "}>
            <div className="container-fluid ">
                
                <p className="navbar-brand itemstyle">{props.navbarlogo}</p>
                <button className="navbar-toggler" type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNav" 
                aria-controls="navbarNav" 
                aria-expanded="false" 
                aria-label="Toggle navigation">Opciones
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        {props.items?.map((texto, index) => 
                        (<Navbaritems key={index} text={texto}/>))}
                        <BsFillCartFill />
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
