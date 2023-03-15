import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/slice';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddTodo = () => {
    const [value, setValue] = useState('');
    const [state, setState] = useState({});
    const dispatch = useDispatch();

    const notify = () => toast("Please write something");

    const onSubmit = (event) => {
        event.preventDefault();
        if (value === "") {
            setState({ ...state })
            // return alert("Write something!");
            return notify()
        }
        dispatch(addTodo({ todo: value }));
    };

    return (
        <div className="container">

            <h6 className="display-6 text-light text-center">WHAT NEEDS TO BE DONE?</h6>
            <form onSubmit={onSubmit}>
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control py-3"
                        placeholder="Write something to do here..."
                        value={value}
                        onChange={(event) => setValue(event.target.value)}
                    />
                    <button className="btn btn-secondary px-4" type="submit">
                        <span className="fw-bold">ADD</span>
                    </button>
                </div>
                {/* <button onClick={notify}>Notify!</button> */}
                <ToastContainer />
            </form>
        </div>
    );
};

export default AddTodo;
