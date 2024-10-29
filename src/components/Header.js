import React from 'react';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <h1>Movies</h1>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" className={nav => nav.isActive ? "nav-active" : ""}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/fav" className={nav => nav.isActive ? "nav-active" : ""}>Coups de coeur</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;