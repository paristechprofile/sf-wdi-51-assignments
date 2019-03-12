import React, {Component} from 'react'
import TodoModel from '../models/Todo'
import TodosList from '../components/TodosList';
import CreateTodoForm from '../components/CreateTodoForm'

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
    deleteTodo = (todo) => {
        TodoModel.delete(todo).then((res) =>{
            let todos = this.state.todos.filter(function(todo){
                return todo._id !== res.data._id
            });
            this.setState({ todos }) //ES6 magic. If the object key value pair is the same, name you can say just the one word
        })
    }
    createTodo = (todo) => {
        let newTodo = {
            body: todo,
            completed: false
        }
        TodoModel.create(newTodo).then((res) => {
            let todos = this.state.todos
            let newTodos = todos.push(res.data)
            this.setState({ newTodos })
        })
    }
    updateTodo = (todo, todoBody, todoId) => {
        function isUpdatedTodo(todo) {
            return todo._id === todoId;
        }
        TodoModel.update(todoId, todoBody).then((res) => {
            let todos = this.state.todos
            todos.find(isUpdatedTodo).body = todoBody.body;
            this.setState({ todos })
        })
    }
    render(){
        return (
        <div className='todosContainer'>
            <TodosList 
                todos={ this.state.todos }
                updateTodo={ this.updateTodo }
                deleteTodo={ this. deleteTodo } />
            <CreateTodoForm
                createTodo={ this.createTodo } />
            
        </div>
        )
    }
}

export default TodosContainer