import React, { Component } from 'react';
import s from './NavMenu.module.css';
import { NavLink } from 'react-router-dom';


class NavMenu extends Component {
    render() {
        return (
            <div className={s.NavMenu}>
                <ul>
                    <div className="nav_item"><NavLink to="/">Main</NavLink>
                    </div>
                    <div className="nav_item"><NavLink to="/game">Game</NavLink>
                    </div>
                    <div className="nav_item"><NavLink to="/8_ball">8 Ball</NavLink>
                    </div>
                    <div className="nav_item"> <NavLink to="/measure_luck">Measure Your Luck</NavLink>
                    </div>
                    <div className="nav_item"> <NavLink to="/landing_page">Landing page</NavLink>
                    </div>
                    <div className="nav_item"> <NavLink to="/contacts">Contacts</NavLink>
                    </div>

                   
                </ul>
            </div>
        );
    }
}

export default NavMenu;
