import React, {Component} from 'react'
import Todo from './Todo'

class TodosList extends Component {
    render(){

        let todos = this.props.todos.map( (todo) => {
        return (
            <Todo
            key={todo._id}
            todo={ todo }/>
        )
        })

        return(
        <ul>
            {todo}
        </ul>
        )
        
    }
}

export default TodosList