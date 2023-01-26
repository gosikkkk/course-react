import React from "react";
import s from './Header.module.css'
import {NavLink} from 'react-router-dom'
import { wrongLogin } from "../../utils/validators/validators";

const Header = (props) =>{ 
    return <header className={s.header}>
    <b>Social Network</b>
    <div className={s.loginBlock}>
        {props.isAuth 
            ? <div>{props.login} - <button className={s.button} onClick={props.logout} >log out</button></div>
            :<NavLink className={s.login} to={'/login'}>log in</NavLink>}
    </div>

    </header>


}

export default Header;
