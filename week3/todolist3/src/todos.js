import React from "react";

class TodoList extends React.Component{

    completeTodo() {
        this.props.completeTodo(this.props.completeTodo(this.props.id));
    }

    deleteTodo() {
        this.props.deleteTodo(this.props.deleteTodo(this.props.id));
    }

    render() {
        let style = {textDecorationLine: 'none'}
        if (this.props.isComplete){
            style = {textDecorationLine: 'line-through'}
        }
        return (
            <div className ="todoDiv">
                <div>
                    <input type="checkbox"className= "checkbox" id={this.props.id} onClick={() => {this.completeTodo()}} checked={this.props.isComplete}/>
                </div>
                <div>
                    <label style={style} for={this.props.id}> {this.props.text} </label>
                </div>
                <div>
                    <button className="btn3" onClick={()=>{this.deleteTodo()}}>x</button>
                </div>

            </div>
        )
    }
}
export default TodoList