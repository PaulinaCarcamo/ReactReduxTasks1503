// import { configureStore } from '@reduxjs/toolkit';
// import todoReducer from './slice';

// export default configureStore({
//     reducer: {
//         todos: todoReducer,
//     },
// });

import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './slice';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['todos']
}

const rootReducer = combineReducers({
    todos: todoReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
});


