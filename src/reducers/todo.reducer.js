const initialState = [
  {
    id: 0,
    task: 'This is from Redux',
    completed: false
  },
  {
    id: 1,
    task: 'I am a Redux Master',
    completed: false
  },
  {
    id: 2,
    task: 'drink more water',
    completed: true
  }
]

function todoReducer (state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [ ...state, action.todo ]
    default:
      return state
  }
}

export default todoReducer
