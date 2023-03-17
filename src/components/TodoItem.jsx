import { useDispatch } from 'react-redux';
import { TrashFill } from 'react-bootstrap-icons';
import { toggleComplete, deleteTodo } from '../redux/slice';

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
                        <button className="btn btn-secondary d-flex align-items-center 
                        px-sm-3 rounded-0 rounded-end border-1"
                            onClick={handleDelete}
                        >
                            <span className="d-none d-sm-flex display-4 fw-bold text-light">Delete</span>
                            <TrashFill className="ms-sm-2 display-4 fw-bold text-light" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoItem;