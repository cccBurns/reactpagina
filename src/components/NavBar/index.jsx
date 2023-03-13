import CartWidget from '../CartWidget';
import { NavLink } from 'react-router-dom';
import React from "react";


export const NavBar = () => {
    return (
        <div className="container">
            <nav className="nav">
                <div className="nav__brand">
                    <NavLink className="nav__link" to='/'>GraphicShop</NavLink>
                </div>
                <ul className="nav__list">
                    <li>
                        <NavLink className="nav__link" to='/categoria/Nvidias'>Nvidia</NavLink>
                    </li>
                    <li>
                        <NavLink className="nav__link" to='/categoria/Amd'>AMD</NavLink>
                    </li>      
                    
                    <li>
                        <NavLink className="nav__link" to='cart'>
                                <CartWidget />
                            </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;