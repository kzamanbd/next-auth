import apiSlice from '@/features/api/apiSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware({ serializableCheck: false }).concat(apiSlice.middleware);
	},
	devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
