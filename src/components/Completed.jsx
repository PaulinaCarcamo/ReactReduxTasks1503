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
                            <h5 className="display-3 text-light">
                                You have completed {completedtodos.length} task out of {alltodos.length}
                            </h5>
                        </div>
                        :
                        <div>
                            <h5 className="display-3 text-light">
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

