const initialState = [
    {
        id: 0,
        task: 'Test this Todo Page',
        completed: false
    }, {
        id: 1,
        task: 'Learn Redux',
        completed: false
    }, {
        id: 2,
        task: 'Learn React',
        completed: true
    }
]

function todoReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO':
        return [ ...state, action.todo ]
        case 'TOGGLE_TODO':
        console.log(action)
        console.log(state)

        const newState = state.map(todo => {
            if (todo.id === action.id) {
                todo.completed = !todo.completed
            }
            return todo
        })
        return newState
        default:
            return state
    }
}

export default todoReducer