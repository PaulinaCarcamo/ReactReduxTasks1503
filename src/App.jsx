import React from "react";
import AddTodo from "./components/AddTodo";
import CompletedTodo from "./components/Completed";
import TodoForm from "./components/TodoForm";

const App = () => {
  return (
<div className="d-grid gap-3 my-4 my-sm-5 mx-sm-5 px-sm-5">
      <AddTodo />
      <TodoForm />
      <CompletedTodo />
    </div>
  );
};

export default App;


