import {useState,useContext} from "react";
import {UserContext} from './context'

function NewTodo(){
    const context = useContext(UserContext)
    const[value, setValue] = useState("")
    const[error, setError] = useState("")
    const submit = (e) => {
        e.preventDefault()
        if(value === ""){
            setError("Enter New Todo")
            return
            
        }
        else{
            context.addTodo(value)
            setValue("")
        }
    }
    const handleChange = (e) =>{
        e.preventDefault()
        if(error)setError("")
        setValue(e.target.value)
    }
    return(
        <>
        <form onSubmit={submit}>
            
            <input type = "text" value  ={value} onChange = {handleChange}/>
            <button type = "submit">Add Todo</button>
        </form>
        </>
    )
}

export default NewTodo