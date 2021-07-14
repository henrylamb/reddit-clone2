import { createSlice } from '@reduxjs/toolkit';
import { usefulData } from '../feed/feedSlice';

const state = {
    ups: usefulData.ups,
    downs: usefulData.downs,
    title: usefulData.title,
    thumbnail: usefulData.thumbnail,
    author: usefulData.author,
}

export const postSlice = createSlice({
    name: 'postSlice',
    initialState: {state},
    reducers: {
        upVote: (state, action) => {
            state.ups += action.payload;
        },
        downVote: (state,action) => {
            state.downs -= action.payload;
        },

    }
    
})

export const {upVote, downVote} = postSlice.actions;

export const selectPost = state => state.state;

export default postSlice.reducer;

// does the data that will be grabbed by the feedslice need to be imported here as useful data - so that the post can be made
// or does the redditData file provide the data that is adequate 
// how can the data be passed down?