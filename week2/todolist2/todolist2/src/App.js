import React from 'react';
import todoList from './STORE';
import TodoList from './todo2';
import './App.css';

function App() {
  return (
   <div className="TodoApp">
     <h1 className= "todoList">Todo List</h1>
     {console.log(todoList[0].text)}
     <TodoList todoItems={todoList}/>
   </div>
  );
}

export default App;
