import './App.css';
import React, {useState} from 'react';
import TodoList from '../components/TodoList';
import Todos from '../components/STORE';
import NewTodo from '../components/AddTodo';
import {v4 as uuidv4} from "uuid"

function App(){
  const [todoItems, setTodos] = useState(Todos)

 
  const addTodo = (text) =>{
    let newTodo = [...todoItems,
      {id: uuidv4(), text: text, isComplete: false}
    ]
    setTodos(newTodo)
  }


  const completeTodo = (id) => {
    let updatedTodos = [...todoItems]
    const index = updatedTodos.findIndex(todo => todo.id === id)
    updatedTodos[index].isComplete = !updatedTodos[index].isComplete
    setTodos(updatedTodos)
  }
  const deleteTodo = (id) => {
    let updatedTodos = [...todoItems]
    let filteredTodos = updatedTodos.filter(todo => todo.id !== id)
    setTodos(filteredTodos)
  }
  return(
    <>
    <h1>Todo List</h1>
    <NewTodo addTodo = {addTodo}/>
    <TodoList data={todoItems} completeTodo = {completeTodo} deleteTodo = {deleteTodo}/>
  </>
  )
}

export default App;
