import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions/todo.actions'

const Todos = (props) => {
  return (
    <div>
      <ul>
        {props.todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => props.toggleTodo(todo.id)}>
            {todo.task}: {todo.completed.toString()}
          </li>
        ))}
      </ul>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const TodosWithRedux = connect(mapStateToProps, { toggleTodo })(Todos)

export default TodosWithRedux
