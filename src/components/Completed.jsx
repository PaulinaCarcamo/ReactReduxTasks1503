import React from 'react';
import { useSelector } from 'react-redux';

const CompletedTodo = () => {
    const alltodos = useSelector((state) => state.todos);

    const completedtodos = useSelector((state) =>
        state.todos.filter((todo) => todo.completed === true)
    );

    return (
        <div className="container px-sm-5">
            {alltodos.length === 0
                ? null
                :
                <div>
                    {completedtodos.length === 1
                        ?
                        <div>
                            <h5 className="display-3 d-none d-md-flex text-light text-center text-sm-start">
                                You have completed {completedtodos.length} task out of {alltodos.length}
                            </h5>
                            <h5 className="display-3 d-md-none text-center text-light border rounded py-2 px-3">
                                You have completed {completedtodos.length} task out of {alltodos.length}
                            </h5>
                        </div>
                        :
                        <div>
                            <h5 className="display-3 d-none d-md-flex text-light text-center text-sm-start">
                                You have completed {completedtodos.length} tasks out of {alltodos.length}
                            </h5>
                            <h5 className="display-3 d-md-none text-center text-light border rounded py-2 px-3">
                                You have completed {completedtodos.length} tasks out of {alltodos.length}
                            </h5>
                        </div>
                    }
                </div>
            }
        </div>
    );
};

export default CompletedTodo;

