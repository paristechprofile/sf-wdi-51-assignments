import React, {Component} from 'react'
import Todo from './Todo'

class Todos extends Component {
    render(){
        return (
            <li data-todos-index={ this.props.todo.id }>
                <span> { this.props.todo.body } </span>
            </li>
        )
    }
}

export default Todos