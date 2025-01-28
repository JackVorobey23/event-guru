import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@redux/slices/counterSlice';
import authReducer from '@redux/slices/authSlice';
import eventsReducer from '@redux/slices/eventsSlice';
import { useDispatch } from 'react-redux';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    events: eventsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
