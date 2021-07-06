import { configureStore } from '@reduxjs/toolkit';
import { commentSlice } from '../features/comment/commentSlice';
import counterReducer from '../features/counter/counterSlice';
import { feedSlice } from '../features/feed/feedSlice';
import { postSlice } from '../features/posts/postSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    feedSlice: feedSlice, 
    commentSlice: commentSlice,
    postSlice: postSlice,
  },
});
