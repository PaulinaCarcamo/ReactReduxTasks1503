import React, { useEffect } from 'react';
import TodoItem from './TodoItem';
import { useSelector, useDispatch } from 'react-redux';
import { getTodosAsync } from '../redux/slice';

const TodoForm = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);

    useEffect(() => {
        dispatch(getTodosAsync());
    }, [dispatch]);

    return (
        <div className="container">
            {todos.length === 0
                ? <div><h5>Looks like you&apos;re absolutely free today!</h5></div>
                :
                <ul className="list-group bg-secondary p-5">
                    {todos.map((todo) => (
                        // <TodoItem id={todo.id} title={todo.title} completed={todo.completed} />
                        <TodoItem id={todo.id} todo={todo.todo} completed={todo.completed} />
                    ))}
                </ul>
            }
        </div>
    );
};

export default TodoForm;