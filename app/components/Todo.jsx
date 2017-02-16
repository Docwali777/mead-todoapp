import React, { Component } from "react"

class Todo extends Component{
constructor(props){
  super(props)
}

  render(){
var {id, text } = this.props
console.log(text)
    return (
        <div>{id}: {text}</div>
    )
  }
}
export default Todo;
