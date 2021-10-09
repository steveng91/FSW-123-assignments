import React, {useState} from 'react'
import Todos from './STORE'
import { v4 as uuidv4 } from 'uuid'

export const UserContext = React.createContext()

function UserProvider(props){
    const [todos, setTodos] = useState(Todos)

    const addTodo = text =>{
        const newTodo = [
            ...todos,
            {id: uuidv4(),
            text:text,
            isComplete:false
        }
        ]
        setTodos(newTodo)
    }
    const completeTodo = id =>{
        const tempTodo = [
            ...todos
        ]
        const index = tempTodo.findIndex(todo => todo.id === id)
        tempTodo[index].isComplete = !tempTodo[index].isComplete
        setTodos(tempTodo)
    }
    const deleteTodo = id =>{
        const tempTodo = [
            ...todos
        ]
        const newTodo = tempTodo.filter(todo => todo.id !==id)
        setTodos(newTodo)
    }
    const editTodo = (id,text)=>{
        const tempTodo = [
            ...todos
        ]
        const index = tempTodo.findIndex(todo =>todo.id ===id)
        tempTodo[index].text = text
        setTodos(tempTodo)
    }
    return(
        <UserContext.Provider value = {{editTodo, deleteTodo, completeTodo, addTodo, todos}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider