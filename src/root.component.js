import React from "react";
import "./index.css";
import ToDo from "./components/ToDo";



export default function Root(props) {

  return(
    <div className="todo-app">
      <ToDo />
    </div>
  )
}
