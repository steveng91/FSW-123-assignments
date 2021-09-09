import React from "react";

function TodoList(props){
    return(
        <div className="todolist">
    {props.todoItems.map(todoItem =><div>
        <p key={todoItem.text}><input type="checkbox"/>{todoItem.text}</p>
        </div>)}
    </div>    
    )
}
export default TodoList