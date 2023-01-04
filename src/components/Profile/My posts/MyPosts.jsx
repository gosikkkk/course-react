import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormControls/FormControls";

const maxLength10 = maxLengthCreator(10)

let AddNewPostForm = (props) => {
  return (
      <form onSubmit={props.handleSubmit}>
          <div><Field placeholder={"write post"} 
                      name={"newPostText"} 
                      component={Textarea}
                      validate={[required, maxLength10, ]}/>
          </div>
          <div><button>Add Post</button></div>
      </form>
)
}

let AddNewPostFormRedux = reduxForm({
    form: 'profileAddNewPostForm'
})(AddNewPostForm)

const MyPosts = React.memo(props =>{
  
  let postElements = 
  props.posts.map (p => <Post massage={p.message} likesCount={p.likesCount}/>);

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  }

    return (
    
    <div className={s.content}>

      <div className={s.postBlock}>
        <h3>My post</h3>
      </div>

      <AddNewPostFormRedux onSubmit={onAddPost}/>

      <div className={s.posts}>
        {postElements}
      </div>

  </div>
    )

})


 
export default MyPosts;

