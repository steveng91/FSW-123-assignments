import React from "react";

function TodoList(props){
    return(
        <div>
            <h1>Todo List</h1>
            {props.data.map(function(todo, index){
                return(
                    <div key = {index}>
                        <input type = 'checkbox' checked = {todo.isComplete} onchange = {() => props.completeTodo(todo.id)}></input>
                        <label
                            onClick = {() => props.completeTodo(todo.id)}>                       
                            {todo.text}
                            </label>
                            <button onClick = {()=> props.deleteTodo(todo.id)}>delete</button>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoList