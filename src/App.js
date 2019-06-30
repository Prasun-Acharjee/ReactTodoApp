import React, { Component } from 'react';
import ToDoInput from './ToDoInput.js';
import ToDoList from './ToDoList.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state={elements:[],item:""};
}
handlechange=(event)=>
{
  this.setState({item:event.target.value});
  
}
addtolist=()=>
{
  this.setState({elements:this.state.elements.concat(this.state.item),item:""});
  
}

removing=(index)=>
{
  let left =this.state.elements.slice(0,index);
  let right=this.state.elements.slice(index+1);
  this.setState({elements:left.concat(right)});
}
  render() {
    return (
      <div>
      <ToDoInput value={this.state.item} change={this.handlechange} click={this.addtolist}/>
      <ToDoList name={this.state.elements} remove={this.removing}/>
      </div>
    );
  }
}

export default App;
