import React from "react";
import s from './Header.module.css'
import {NavLink} from 'react-router-dom'
import { wrongLogin } from "../../utils/validators/validators";

const Header = (props) =>{ 
    return <header className={s.header}>
    <img src='https://i.pinimg.com/736x/41/3f/e4/413fe4c751d2ae450357e5cb62cebc29--kids-logo-children-logo.jpg'/>

    <div className={s.loginBlock}>
        {props.isAuth 
            ? <div>{props.login} - <button className={s.button} onClick={props.logout} >log out</button></div>
            :<NavLink to={'/login'}>log in</NavLink>}
    </div>

    </header>


}

export default Header;
