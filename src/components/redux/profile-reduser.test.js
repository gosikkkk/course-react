import profileReducer, { addPostActionCreacter, deletePost } from './profile-reduser'

let state = {
    posts: [
        {id: 1, message:'Hi, how are you?', likesCount:12},
        {id: 2, message:"It's my first post", likesCount:23},
        {id: 3, message:"yesss", likesCount:23},
        {id: 4, message:"na offer", likesCount:23},
        {id: 5, message:"blabla", likesCount:23},
    ],
}

test('length of post should be incremented', () => {
    let action = addPostActionCreacter("Rita")

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(6)
  });


test('message of post should to be correct', () => {
    let action = addPostActionCreacter("Rita")

    let newState = profileReducer(state, action);

    expect(newState.posts[5].message).toBe("Rita")

  });

  test('after deleting length of messages should be decrement', () => {
    let action = deletePost(1)

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(4)

  });


  test('after deleting length shouldt be decrement', () => {
    let action = deletePost(1)

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(4)

  });

  test(`after deleting length shouldn't be decrement if id is incorrect`, () => {
    let action = deletePost(1000)

    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(5)

  });

