import React from 'react';
import './App.css';
import TodoList from './todos';
import todos from './store';

class TodoApp extends React.Component {
  constructor() {
    super()
    this.state = {
      Todos: todos.map((item, index) =>
        ({
          key: index,
          id: item.id,
          text: item.text,
          isComplete: item.isComplete
        })
      )
  }
}

 completeTodo = (e) =>{
  if (e) {
    let UpdatedTodos = [...this.state.Todos]
    let index = UpdatedTodos.findIndex (item => item.id ===e);
    let updatedTodo = {...UpdatedTodos[index]}
    if(updatedTodo.isComplete) {
      updatedTodo.isComplete = false
    } else{
      updatedTodo.isComplete = true
    }
    UpdatedTodos[index] = updatedTodo
    this.setState({
      Todos: UpdatedTodos
    })
  }
}
deleteTodo = (e) => {
  if (e) {
    let DeletedTodos = [...this.state.Todos]
    let index = DeletedTodos.findIndex( item => item.id === e);
    DeletedTodos.splice(index, 1)
    this.setState({
      Todos: DeletedTodos
    })
  }  
}

render() {
  const todoList = this.state.Todos.map((item, index) => {
    return (
      <TodoList
      key = {item.key}
      id = {item.id}
      text = {item.text}
      isComplete = {item.isComplete}
      completeTodo = {this.completeTodo}
      deleteTodo = {this.deleteTodo}
      />
    )
  })
  return (
    <div className= 'TodoList'>
      <h1>Todo List</h1>
      {todoList}
    </div>
    )
  }
}
export default TodoApp