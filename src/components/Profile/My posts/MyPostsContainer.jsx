import {addPostActionCreacter} from './../../redux/profile-reduser'
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return{
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

const mapDispatchoProps = (dispatch) => {
 return{
  addPost: (newPostText) =>{
    dispatch(addPostActionCreacter(newPostText));
  }
 }
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchoProps ) (MyPosts);

export default MyPostsContainer;