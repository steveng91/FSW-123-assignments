import Todos from './Todos';
import { useContext } from "react";
import { UserContext } from "./context";

// console.log(UserContext)

function TodoList(){
    const context = useContext(UserContext)
    console.log(context)
    const lists = context.todos.map((todo)=>{
        return <Todos key = {todo.id} todo = {todo}/>
    })
    return(
        <div>
            <ul>{lists}</ul>
        </div>
    )
}

export default TodoList