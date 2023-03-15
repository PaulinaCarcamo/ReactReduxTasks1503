import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo } from '../redux/slice';

// const TodoItem = ({ id, title, completed }) => {
const TodoItem = ({ id, todo, completed }) => {

    const dispatch = useDispatch();

    const handleCheckboxClick = () => {
        dispatch(toggleComplete({ id, completed: !completed }));
    };

    const handleDeleteClick = () => {
        dispatch(deleteTodo({ id }));
    };

    return (

        <li className={`list-group-item list-group-item-action rounded-1 mt-2 ${completed && 'list-group-item-success'}`}
        >
            <div className="d-flex justify-content-between ">
                <span className="d-flex align-items-center ">
                    <input
                        type="checkbox"
                        className="form-check-input me-2 my-auto  "
                        onClick={handleCheckboxClick}
                        checked={completed}
                
                    />
                    <label className="form-check-label">
                        {/* {title} */}
                        {todo}
                    </label>
                </span>
                <button onClick={handleDeleteClick} className="btn btn-danger">
                    Delete
                </button>
            </div>
        </li>

    );
};

export default TodoItem;