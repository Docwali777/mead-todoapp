import React, { Component } from "react"
import Todo from "./Todo"

class TodoList extends Component{
constructor(props){
  super(props)
}

  render(){
    let {todo} = this.props;
    const renderList=()=>{
      return todo.map((list)=>{
        return <Todo  key={list.id} {...list} />
      })
    }
    return (
        <div>{renderList()}</div>
    )
  }
}
export default TodoList;
