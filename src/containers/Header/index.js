import React from 'react'
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <header>
            <ul>
                <li>
                    <NavLink to="/Home">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Blog">
                        Blog
                    </NavLink>
                </li>
            </ul>
        </header>
    );
}

export default Header;