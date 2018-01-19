import React, { Component } from 'react'
import { connect } from 'react-redux'

class Todos extends Component {
  render () {
    return (
      <div>
        <ul>
          {this.props.todos.map(todo => (
            <li key={todo.id}>{todo.task}: {todo.completed.toString()}</li>
          ))}
        </ul>
      </div>
    )
  }
}

Todos.defaultProps = {
  todos: []
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(Todos)
