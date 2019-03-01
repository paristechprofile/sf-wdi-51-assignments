import React, {Component} from 'react'

class CreateTodoForm extends Component {
    constructor(){
        super()
        //sets the initial state via the constructor! that's the constructor's job :)
        this.state = {
        todo: ''
        }
    }
    onInputChange = (e) => {
        this.setState({
        todo: e.target.value
        })
    }
    onFormSubmit = (e) => {
    e.preventDefault()
    let todo = this.state.todo
    this.props.createTodo(todo)
    this.setState({
        todo: ""
        })
    }
    render(){ // first we set up the html
        return (
        <div >
            <form onSubmit={ this.onFormSubmit } id="taskForm">
            <input  
                onChange={ this.onInputChange } 
                value={ this.state.todo }
                placeholder="What do you need to do?" 
                type="text" 
                id="newItemDescription" 
            />
            <button 
            type="submit" 
            className="btn"
            id="addTask" >Add Todo</button>
            </form>
        </div>
        )
    }
}

export default CreateTodoForm