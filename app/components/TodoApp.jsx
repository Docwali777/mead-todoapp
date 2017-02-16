import React, { Component } from "react";
import TodoList from "./TodoList"

class TodoApp extends Component {
constructor(props){
  super(props)
  this.state = {
    todo: [
    {
      id: 1,
      text: "Walk the dog"
    },
    {
      id: 2,
      text: "clean the yard"
    },
    {
      id: 3,
      text: "Learn more react-redux"
    },
    {
      id: 4,
      text: "Keep it moving People"
    }
    ]
  }
}

  render(){
    let {todo} = this.state
    return(
    <div>
      <TodoList todo={todo} />
    </div>
    )
  }
}
export default TodoApp;
