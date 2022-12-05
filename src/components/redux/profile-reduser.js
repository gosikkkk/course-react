const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT'
const ADD_POST = 'ADD-POST'

let initialState = {
    posts: [
        {id: 1, message:'Hi, how are you?', likesCount:12},
        {id: 2, message:"It's my first post", likesCount:23},
        {id: 3, message:"yesss", likesCount:23},
        {id: 4, message:"na offer", likesCount:23},
        {id: 5, message:"blabla", likesCount:23},
    ],
    newPostText:'write post'
}

export const profileReduser = (state = initialState,action) => {
    
    switch(action.type){
        case  ADD_POST: 
            let newPost = {
                id:5,
                message: state.newPostText,
                likesCount: 0 
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
            
        case UPDATE_POST_TEXT: 
            return {
                ...state,
                newPostText: action.newText

            };
        default:
            return state;
    }
}

export const addPostActionCreacter = () => ({type: ADD_POST}) 
export const updatePostTextActionCreater = (text) =>({type: UPDATE_POST_TEXT, newText: text})

