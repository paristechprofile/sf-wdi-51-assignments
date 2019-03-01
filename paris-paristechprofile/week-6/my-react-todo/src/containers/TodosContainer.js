import React, {Component} from 'react'
import TodoModel from '../models/Todo'

import TodosList from '../components/TodosList';

class TodosContainer extends Component {
    state = {
        todos: []
    };

    componentDidMount(){
        this.fetchData();
    }
    // fetch all to todos from super-crud-spi
    fetchData(){
        TodoModel.all().then( (res) => {
            this.setState({
                todos: res.data.todos,
                todo: ''
            })
        });
    }

    render(){
        return (
        <div className='todosContainer'>
            <TodosList todos={ this.state.todos }/>
        </div>
        )
    }
}

export default TodosContainer