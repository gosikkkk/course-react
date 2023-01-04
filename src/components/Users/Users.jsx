import React from "react";
import styles from '../Users/users.module.css'
import usersPhoto from '../../assets/images/users.png'
import {NavLink} from 'react-router-dom'
import { userAPI } from "../../api/api";

 const Users = (props) =>{

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages =[];
    for( let i=1; i <= pagesCount; i++){
        pages.push(i);
    }

    return  <div>
    {
        props.users.map( u => <div className={styles.users} key={u.id} >
            <span>
                <NavLink to={'/profile/'+ u.id}>
                    <div>
                        <img src={ u.photos.small != null ? u.photos.small : usersPhoto } 
                                    className={styles.userPhoto}/>
                    </div>
                </NavLink>

                <div>
                    {u.followed
                    ? <button disabled={props.followingInProgress
                        .some(id => id === u.id)} 
                        className={styles.button} 
                        onClick={()=>{props.unfollow(u.id)}}>
                        Unfollow</button> 

                    : <button disabled={props.followingInProgress
                        .some(id => id === u.id)} 
                        className={styles.button}  
                        onClick={()=>{props.follow(u.id)}}>
                        Follow</button>}
                </div>

            </span>

            <span>
                <span>
                    <div className={styles.name}>{u.name}</div>
                </span>

                <span>
                    <div>{u.status}</div>
                </span>
            </span>

        </div>)
    }
    
        <div className={styles.number}>
            {pages.map( p => {
                return <span className={ props.currentPage === p && styles.selectPage ? styles.selectPage : undefined }
                            onClick={ (e) => {props.onPageChanged(p);}}>{p}</span>
            })}
        </div>
</div>
 }


export default Users;

