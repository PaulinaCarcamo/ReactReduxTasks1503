import React, { useEffect } from 'react';
import TodoItem from './TodoItem';
import { useSelector, useDispatch } from 'react-redux';
import { getTodosAsync } from '../redux/slice';
import { PatchCheck } from 'react-bootstrap-icons';

const TodoForm = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);

    useEffect(() => {
        dispatch(getTodosAsync());
    }, [dispatch]);

    return (
        <div className="container px-sm-5">

            {todos.length === 0
                ?
                <div>
                    <h5 className="text-light d-flex align-items-center display-3 justify-content-center">
                        All done!
                        <PatchCheck className="mx-2" /> </h5>
                </div>
                :
                <ul className="list-group">
                    {todos.map((todo) => (
                        <TodoItem id={todo.id} todo={todo.todo} completed={todo.completed} />
                    ))}
                </ul>
            }
        </div>
    );
};

export default TodoForm;