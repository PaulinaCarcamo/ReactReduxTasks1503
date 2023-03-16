import React, { useEffect } from 'react';
import TodoItem from './TodoItem';
import { useSelector, useDispatch } from 'react-redux';
import { getTodosAsync } from '../redux/slice';
import { Check2Circle, ListCheck } from 'react-bootstrap-icons';
// import { images } from '../assets/images';

// const welldone = images[0].img

const TodoForm = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);

    useEffect(() => {
        dispatch(getTodosAsync());
    }, [dispatch]);

    return (
        <div className="container">

            {todos.length === 0
                ?
                <div>
                    <h5 className="text-light">All done! <Check2Circle /> </h5>
                    {/* <img src={welldone} height="200"></img> */}
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