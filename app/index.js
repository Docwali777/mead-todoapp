import React, { Component } from "react";
import { render } from "react-dom";
import TodoApp from "./components/TodoApp";
import css from "style-loader!css-loader!./App.css"
import { Route, Router, IndexRoute, hasHistory} from "react-router"

class App extends Component{
  render(){
    return(
      <TodoApp />
    )
  }
}

render(<App />, document.getElementById('root'))
