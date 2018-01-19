import React, {Component} from 'react'
import {connect} from 'react-redux'
import {editTodo} from '../actions/todo.actions'

class EditTodoForm extends Component {
    state = {
        editTodo: ''
    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({editTodo: event.target.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this
            .props
            .editTodo(this.props.id, this.state.editTodo)
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} value={this.state.editTodo}/>
                <button>Edit Todo</button>
            </form>
        )
    }
}

export default connect(null, {editTodo})(EditTodoForm)

// connect(mapStateToProps, mapDispatchToProps)(ReactComponent)