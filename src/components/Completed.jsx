import React from 'react';
import { useSelector } from 'react-redux';

const CompletedTodo = () => {
    const alltodos = useSelector((state) => state.todos);

    const completedtodos = useSelector((state) =>
        state.todos.filter((todo) => todo.completed === true)
    );

    return (
        <div className="container">
            {alltodos.length === 0
                ? null
                :
                <div>
                    {completedtodos.length === 1
                        ?
                        <div>
                            <h5 className="display-3 text-light">
                                You have completed <span className="font-gd">{completedtodos.length}</span> task out of <span>{alltodos.length}</span>
                            </h5>
                        </div>
                        :
                        <div>
                            <h5 className="display-3 text-light">
                                You have completed <span className="font-gd">{completedtodos.length}</span> tasks out of <span>{alltodos.length}</span>
                            </h5>
                        </div>
                    }
                </div>
            }
        </div>
    );
};

export default CompletedTodo;

