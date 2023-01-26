import React from "react";
import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom"
import user from '../../../assets/images/users.png'

export const DialogItem = (props) =>{

    let path = "/dialogs/" + props.id;

     return (
     <div className= {s.dialog + ' '+ s.active}>
        <img src={user} className={s.users}/>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
    )
}
