import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { Clipboard2PlusFill } from 'react-bootstrap-icons';
import { addTodo } from '../redux/slice';

const AddTodo = () => {
    const [value, setValue] = useState('');
    const [state, setState] = useState({});
    const dispatch = useDispatch();

    const notify = () => toast.warning("Please write something");

    const onSubmit = (event) => {
        event.preventDefault();
        if (value === "") {
            setState({ ...state })
            // return alert("Write something!");
            return notify()
        }
        dispatch(addTodo({ todo: value }));
        setValue("")
    };

    return (
        <div className="container px-sm-5">

            <h6 className="display-2 text-light text-center">What needs to be done?</h6>
            <br />
            <form onSubmit={onSubmit}>
                <div className="input-group">

                    <input
                        type="text"
                        className="form-control py-3 bg-secondary"
                        placeholder="Write something to do here..."
                        value={value}
                        onChange={(event) => setValue(event.target.value)}
                    />
                    <button className="btn btn-primary border-1 border-secondary px-sm-4" type="submit">
                        <div className="display-4 fw-bold text-light d-flex align-items-center">
                            <span className='d-none d-sm-flex'>Add</span>
                            <Clipboard2PlusFill className="ms-sm-2" />
                        </div>
                    </button>
                </div>

                {/* <button onClick={notify}>Notify!</button> */}
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </form>
        </div>
    );
};

export default AddTodo;
