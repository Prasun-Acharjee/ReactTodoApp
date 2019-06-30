import React, { Component } from 'react';
class ToDoItem extends Component{
    render(){
        return(
            <div>
                <li>{this.props.element}
                <button onClick={()=> this.props.remove(this.props.index)}>Delete</button>
                </li>
            </div>
        );
    }
}
export default ToDoItem;