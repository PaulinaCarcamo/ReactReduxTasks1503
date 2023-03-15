import React from 'react';
import { useSelector } from 'react-redux';

const CompletedTodo = () => {
    const todos = useSelector((state) =>
        state.todos.filter((todo) => todo.completed === true)
    );

    return (
        <div className="container">
            <h4>Completed tasks: {todos.length}</h4>
        </div>
    );
};

export default CompletedTodo;

