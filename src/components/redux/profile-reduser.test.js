import profileReducer, { addPostActionCreacter } from './profile-reduser'


test('length of post should be incremented', () => {
    let action = addPostActionCreacter("Rita")
    let state = {
        posts: [
            {id: 1, message:'Hi, how are you?', likesCount:12},
            {id: 2, message:"It's my first post", likesCount:23},
            {id: 3, message:"yesss", likesCount:23},
            {id: 4, message:"na offer", likesCount:23},
            {id: 5, message:"blabla", likesCount:23},
        ],
    }

    let newState = profileReducer(state,action);

    expect(newState.posts.length).toBe(5)

  });

