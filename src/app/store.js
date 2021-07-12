import { configureStore } from '@reduxjs/toolkit';
import { commentSlice } from '../features/comment/commentSlice';
import { feedSlice } from '../features/feed/feedSlice';
import { postSlice } from '../features/posts/postSlice';

export const store = configureStore({
  reducer: {
    feedSlice: feedSlice, 
    commentSlice: commentSlice,
    postSlice: postSlice,
  },
});
