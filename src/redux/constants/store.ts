import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../slices/authSlice';
import errorReducer from '../slices/errorSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        error: errorReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
