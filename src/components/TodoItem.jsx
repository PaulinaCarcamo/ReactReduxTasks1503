import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo } from '../redux/slice';
import { TrashFill } from 'react-bootstrap-icons';

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
            {/* <li className={` list-group-item list-group-item-action rounded-1 mt-2 bg-secondary
            ${completed && 'list-group-item-success bg-success'}`}
                onClick={handleCheckbox}
            >
                <div className=" d-flex justify-content-between py-1">
                    <span className=" d-flex align-items-center">
                        <input
                            type="checkbox"
                            className="form-check-input me-2 my-auto "
                            // onClick={handleCheckbox}
                            checked={completed}
                        />
                        <label className="form-check-label  ">
                            {todo}
                        </label>
                    </span>

                    <span>
                        <button onClick={handleDelete}
                            className="bg-transparent border-0 text-dark">
                            <TrashFill />
                        </button>

                        <button className="bg-transparent border-0 text-dark">
                            <PencilFill />
                        </button>
                    </span>
                </div>
            </li> */}


            <div className="my-1">
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
                        <span className="display-4 fw-bold text-light d-flex align-items-center">
                            Delete 
                            <TrashFill className="ms-2"/>
                            </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TodoItem;