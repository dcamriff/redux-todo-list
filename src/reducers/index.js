import { combineReducers} from 'redux'
import todoReducer from './todo.reducer'

// Combine all our reducers together
const rootReducer = combineReducers({
    todos: todoReducer
})

export default rootReducer

// const rootReducer is just a function that takes in an object