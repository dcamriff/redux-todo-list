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
    case 'TOGGLE_TODO':

      const newState = state.map(todo => {
        if (todo.id === action.id) {
          todo.completed = !todo.completed
        }
        return todo
      })

      return newState
    case 'EDIT_TODO':
    return state.map(todo => {
      if (todo.id === action.id) {
        todo.task = action.todo
      }
      return todo
    })
    
      default:
      return state
  }
}

export default todoReducer
