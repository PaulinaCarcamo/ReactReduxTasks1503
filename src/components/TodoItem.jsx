import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo } from '../redux/slice';
import { PencilFill, TrashFill } from 'react-bootstrap-icons';

const TodoItem = ({ id, todo, completed }) => {
    const dispatch = useDispatch();

    const handleCheckbox = () => {
        dispatch(toggleComplete({ id, completed: !completed }));
    };

    const handleDelete = () => {
        dispatch(deleteTodo({ id }));
    };

    return (
        <div>

            {/* <div className="my-1">
                <div className={`input-group d-flex justify-content-between bg-secondary rounded-4 rounded-start
                ${completed && 'text-primary bg-success'}`}   >

                    <span className=" d-flex align-items-center py-3 mx-2"
                        onClick={handleCheckbox}
                    >
                        <input
                            type="checkbox"
                            className="form-check-input mx-2 my-auto  "
                            // onClick={handleCheckbox}
                            checked={completed}
                        />
                        <label className="form-check-label">
                            {todo}
                        </label>
                    </span>
                    <button className="btn btn-secondary border-0 px-3" onClick={handleDelete}>
                        <div className="display-4 fw-bold text-light d-flex align-items-center">
                            <span className="d-none d-sm-flex">
                                Delete
                            </span>
                            <TrashFill className="ms-2" />
                        </div>
                    </button>
                </div>
            </div> */}

            <div className="container-sm my-1">
                <div className={`row bg-secondary rounded border-0 ${completed && 'text-primary bg-success'}`}>

                    <div className="col d-flex align-items-center py-3 " onClick={handleCheckbox}>
                        <input
                            type="checkbox"
                            className="form-check-input p-2 me-2"
                            checked={completed}
                        />
                        <label className="form-check-label" >
                            {todo}
                        </label>
                    </div>

                    <div className="col-2 d-flex justify-content-end px-0 ">
                        <button className="btn btn-secondary
                        d-flex align-items-center px-sm-3
                        rounded-0 rounded-end border-1"
                            onClick={handleDelete}
                        >
                            <span className="d-none d-sm-flex display-4 fw-bold text-light">Delete</span>
                            <TrashFill className="ms-sm-2 display-4 fw-bold text-light   " />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoItem;