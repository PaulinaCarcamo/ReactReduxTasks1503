import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/slice';

const AddTodo = () => {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const onSubmit = (event) => {
        event.preventDefault();
        if (value) {
            dispatch(
                addTodo({
                    // title: value,
                    todo: value,
                })
            );
        }
    };

    return (
        <div className="container">
            <h4 className="text-primary text-center">WHAT NEEDS TO BE DONE?</h4>
            <br />
            <form onSubmit={onSubmit}>
                {/* <div className="col-sm" > */}
                {/* <label className="sr-only">Add todo</label> */}
                {/* <input
                        type="text"
                        className="form-control py-2"
                        placeholder="Write something to do here..."
                        value={value}
                        onChange={(event) => setValue(event.target.value)}
                    >
                    </input>
                </div>
                <div className="col-sm my-auto" >
                    <button type="submit" className="btn btn-primary ">
                        Submit
                    </button>
                </div> */}

                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        // placeholder="Recipient's username"
                        // aria-label="Recipient's username"
                        // aria-describedby="button-addon2" 

                        placeholder="Write something to do here..."
                        value={value}
                        onChange={(event) => setValue(event.target.value)}
                    />
                    <button className="btn btn-secondary" type="submit" id="button-addon2">Button</button>
                </div>
            </form>
        </div>
    );
};

export default AddTodo;
