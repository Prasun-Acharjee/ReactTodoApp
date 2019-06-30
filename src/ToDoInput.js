import React, { Component } from 'react';
class ToDoInput extends Component{
 
    render(){
     return(
         <div>
         <input value={this.props.value} type="text" onChange={this.props.change}></input>
         <button onClick={this.props.click}>Add to List</button>
        </div> 
     );
 }   
}
export default ToDoInput;