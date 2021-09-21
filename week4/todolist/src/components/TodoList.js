import React from "react";

function TodoList(props){
    return(
        <div>
            <h1>Todo List</h1>
            {props.data.map(function(todo, index){
                return(
                    <div key = {index}>
                        <input type = 'checkbox' checked = {todo.isComplete} onChange = {() => props.completeTodo(todo.id)}/>
                        <span style = {{textDecoration:todo.isComplete ? "line-through": ""}}>{todo.text}</span>
                        <button onClick = {()=> props.deleteTodo(todo.id)}>delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoList