import './App.css';
import React, {useState} from 'react';
import TodoList from './TodoList';
import Todos from './STORE';

function App(){
  const [todoItems, setTodos] = useState(Todos)

  const completeTodo = id => {
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
    <div className = "todoList">
      <TodoList
          data= {todoItems} 
          completeTodo = {completeTodo}
          deleteTodo = {deleteTodo}
        />
        
    </div>
  )
}

export default App;
