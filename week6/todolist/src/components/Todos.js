import {useContext, useState} from 'react'
import {UserContext} from './context'

function Todos({todo}){
    const context = useContext(UserContext)
    const [edit, setEdit] = useState(false)
    const [error, setError] = useState(false)
    const [text, setText] = useState(todo.text)

    const toggleEdit = () => {
        setEdit(!edit)
        setText(todo.text)
        setError(false)
    }
    const handleEdit = (e)=>{
        (e.target.value === "") ? setError(true) : setError(false)
        setText(e.target.value)
    }
    const handleUpdate = (id, text) =>{
        context.editTodo(id, text)
        toggleEdit()
    }
    return(
        <div className="todo">
            <li>
                <input type = "checkbox" checked = {todo.isComplete} onChange = {()=> context.completeTodo(todo.id)}/>
                <span style = {{textDecoration: todo.isComplete ? "line-through": ""}}>{todo.text}</span>

            </li>
            {!edit ? (
                <div>
                    {/* <label style = {{textDecoration: todo.isComplete ? "line-through": ""}} for = {todo.id}>{todo.text}</label> */}
                </div>
            ) :(
                <div>
                    <input type = "type" value = {text} onChange = {handleEdit}/>
                </div>
            )}
            {!edit ? (
                <div>
                    <button className ="btn" onClick ={()=> context.deleteTodo(todo.id)}>Delete</button>
                    <button className = "btn" onClick ={()=> toggleEdit()} disabled = {todo.isComplete}>Edit</button>
                </div>
            ):(
                <div>
                    <button className = "btn" disabled = {error} onClick = {() => handleUpdate(todo.id, text)}>finish edit</button>
                    <button className = "btn" onClick = {()=> toggleEdit()}>cancel edit</button>
                </div>
            )}
        </div>
    )
}

export default Todos