import React from 'react';
import { useSelector } from 'react-redux';

const CompletedTodo = () => {
    const alltodos = useSelector((state) => state.todos);

    const completedtodos = useSelector((state) =>
        state.todos.filter((todo) => todo.completed === true)
    );

    return (
        <div className="container">
            <h4 className="text-light">
                You have completed {completedtodos.length} tasks out of {alltodos.length}
            </h4>
        </div>
    );
};

export default CompletedTodo;

