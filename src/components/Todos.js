import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions/todo.actions'
import EditTodoForm from './EditTodoForm'

const Todos = (props) => {
  return (
    <div>
      <ul>
        {props.todos.map((todo) => (
          <div>
          <li
            key={todo.id}
            onClick={() => props.toggleTodo(todo.id)}>
            {todo.task}: {todo.completed.toString()}
          </li>
          <EditTodoForm id={todo.id}/>
          
          </div>
        ))}
      </ul>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const TodosWithRedux = connect(mapStateToProps, { toggleTodo })(Todos)

export default TodosWithRedux
