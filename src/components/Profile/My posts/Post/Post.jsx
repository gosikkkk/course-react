import React from "react";
import s from './Post.module.css'

const Post = (props) =>{
    return (

        <div className={s.item}>
          <img src='https://i.pinimg.com/736x/2e/2e/21/2e2e2125ee53807c2d77b34773f84b5c.jpg' ></img>
          {props.massage}
          <div><span>like</span> { props.likesCount }</div>
        </div>

)}

export default Post;