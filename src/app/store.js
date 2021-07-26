import { configureStore } from '@reduxjs/toolkit';
import feedSlice from '../features/feed/feedSlice';

export const store = configureStore({
  reducer: {
    feedSlice: feedSlice, 
  },
});
