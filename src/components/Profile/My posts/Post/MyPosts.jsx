import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreacter,updatePostTextActionCreater} from './../../redux/profile-reduser'

const MyPosts = (props) =>{

  let postElements = 
  props.posts.map (p => <Post massage={p.message} likesCount={p.likesCount}/>);

  let newPostElement = React.createRef();

  let addPost = () => {
    // props.dispatch(addPostActionCreacter());

  }

  let onPostChange = () =>{
    let text = newPostElement.current.value;
    // let action = updatePostTextActionCreater(text);
    // props.dispatch(action)
  }

    return (
    
    <div className={s.content}>

      <div className={s.postBlock}>
        <h3>My post</h3>
      </div>

      <div>
        <div><textarea onChange={onPostChange} ref={ newPostElement } value={props.newPostText}/></div>
        <div><button onClick={ addPost }>Add post</button></div>
      </div>


      <div className={s.posts}>
        {postElements}
      </div>

  </div>
)}

export default MyPosts;