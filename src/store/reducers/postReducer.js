

const initialState = {
  posts: [
    {id: '1', title: 'help me find peach', content: 'blah blah blah'},
    {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
    {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'}
  ]
}

const postReducer = (state = initialState, action) => {
  switch(action.type) {
    case "CREATE_POST":
      console.log('create post', action)
      return state
    case "CREATE_POST_ERROR":
      console.log('create post error', action.err)
      return state
    default: 
      return state
  }
}

export default postReducer;