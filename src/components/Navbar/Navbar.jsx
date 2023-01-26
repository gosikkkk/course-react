import React from "react";
import s from './Navbar.module.css'
import { NavLink } from "react-router-dom"
import profile from '../../assets/images/profile.png'
import message from '../../assets/images/message.png'
import friends from '../../assets/images/friends.png'
import news from '../../assets/images/news.png'
import music from '../../assets/images/music.svg'
import setting from '../../assets/images/setting.svg'



const Navbar = () =>{
    return(
      
      <nav className={s.nav}>
        <div className={s.item} > 
          <NavLink to="/profile" className={ navData => navData.isActive ? s.active : s.item }> <img src={profile} className={s.img}/> Profile</NavLink>
        </div>

        <div className={s.item}> 
          <NavLink to="/dialogs" className={ navData => navData.isActive ? s.active : s.item }> <img src={message} className={s.img}/> Message</NavLink>
        </div>

        <div className={s.item}> 
          <NavLink to="/users" className={ navData => navData.isActive ? s.active : s.item }> <img src={friends} className={s.img}/> Users</NavLink>
        </div>

        <div className={s.item}> 
          <NavLink to="/news" className={ navData => navData.isActive ? s.active : s.item }> <img src={news} className={s.img}/> News</NavLink>
        </div>

        <div className={s.item}> 
          <NavLink to="/music" className={ navData => navData.isActive ? s.active : s.item }> <img src={music} className={s.img}/> Music</NavLink>
        </div>

        <div className={s.item}> 
          <NavLink to="/setting" className={ navData => navData.isActive ? s.active : s.item }> <img src={setting} className={s.img}/> Setting</NavLink>
        </div>

    </nav>

    )
}

export default Navbar;
