import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../slices/authSlice';
import errorReducer from '../slices/errorSlice';
import instanceReducer from '../slices/instanceSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        error: errorReducer,
        instance: instanceReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
