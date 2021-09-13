import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/create" activeClassName={s.activeLink}>Создать заметку</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/all" activeClassName={s.activeLink}>Все заметки</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;
