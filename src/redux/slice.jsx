import { createSlice } from '@reduxjs/toolkit';
// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// export const getTodosAsync = createAsyncThunk(
//     'todos/getTodosAsync',
//     async () => {
//         const resp = await fetch('https://dummyjson.com/todos?limit=10&skip=5')
//         // const resp = await fetch('https://jsonplaceholder.typicode.com/todos')
//         if (resp.ok) {
//             const todos = await resp.json();
//             const limitTodos = todos.todos;
//             console.log(limitTodos);
//             return { limitTodos };
//             // return { todos };
//         }
//     }
// );

export const todoSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: new Date(),
                // title: action.payload.title,
                todo: action.payload.todo,
                completed: false,
            };
            state.push(todo);
        },
        toggleComplete: (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload.id);
            state[index].completed = action.payload.completed;
        },
        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload.id);
        },   

    },
    // extraReducers:  {
    //     [getTodosAsync.fulfilled]: (state, action) => {
    //         // return action.payload.todos;
    //         return action.payload.limitTodos;
    //     },
    // },
      
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;