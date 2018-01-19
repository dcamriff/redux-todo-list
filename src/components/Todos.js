import React from 'react'
import { connect } from 'react-redux'

const Todos = (props) => {
  return (
    <div>
      <ul>
        {props.todos.map(todo => (
          <li key={todo.id}>{todo.task}: {todo.completed.toString()}</li>
        ))}
      </ul>
    </div>
  )
}

Todos.defaultProps = {
  todos: []
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const TodosWithRedux = connect(mapStateToProps)(Todos)

export default TodosWithRedux
