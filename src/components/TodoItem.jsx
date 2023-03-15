
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo, updateTodos } from '../redux/slice';
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
            <li className={` list-group-item list-group-item-action rounded-1 mt-2 
            ${completed && 'list-group-item-success'}`}
            >
                <div className=" d-flex justify-content-between py-1">
                    <span className=" d-flex align-items-center">
                        <input
                            type="checkbox"
                            className="form-check-input me-2 my-auto"
                            onClick={handleCheckbox}
                            checked={completed}
                        />
                        <label className="form-check-label ">
                            {todo}
                        </label>
                    </span>

                    <span>
                        <button onClick={handleDelete}
                            className="bg-transparent border-0 text-dark">
                            {/* Delete */}
                            <TrashFill />
                        </button>

                        <button className="bg-transparent border-0 text-dark">
                            {/* Update */}
                            <PencilFill />
                        </button>
                    </span>
                </div>
            </li>
        </div>

    );
};

export default TodoItem;