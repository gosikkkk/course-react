import React from "react";
import s from './Post.module.css'

const Post = (props) =>{
    return (

        <div className={s.item}>
          <img src='https://cdn4.iconfinder.com/data/icons/web-mobile-2-6/20/87-1024.png' ></img>
          {props.massage}
          <div><span>like</span> { props.likesCount }</div>
        </div>

)}

export default Post;