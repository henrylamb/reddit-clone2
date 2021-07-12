import {createSlice} from 'react-redux';
import { createAsyncThunk } from '@reduxjs/toolkit';


// have the imports above 

const state = {
    hasError: false, 
    isLoading: false,
    feed: [],

};

export const feedSlice = createSlice({
    name: '',
    initialState: state,
    reducers: {
        loadMorePosts: (state, action) => {

            
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state, action) => {
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.isLoading = false;
                state.hasError = true;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasError = false;
                state.feed = action.payload;

            })
        

    }
    

 }


);

// create a thunk so that middleware functions can be made and so that the reddit api can be connected and load 15posts each time a botton is clicked

const fetchData = createAsyncThunk('redditData', async (arg, thunkApi) => {
    try{

    const response = fetch('https://www.reddit.com/r/popular.json');

    const responseJson = await response.json();

    return responseJson; 


    } 
    catch(error){ 
        console.log(error)
    }
        
}); 

// creating a usable bit of data for the post: and parts of the feed: 

export const usefulData = {
    author: state.feed.data.children.author_fullName,
    title: state.feed.data.children.title,
    downs: state.feed.data.children.downs,
    ups: state.feed.data.children.ups,
    thumbnail: state.feed.data.children.thumbnail,
}; // not sure if this collection of data from the state actually works - how does useSelector work in this sinarcio

// need to export the correct a relevant parts of the reducers and the state of the things

export const selectFeed = state => state.feedSlice.feed; // the state will be changed with this line - the above useful data should change the original state and thus lead to a rerender to occur

export default feedSlice.reducer;

// plan for future improvement would be to have the argeuments of the fetchData be such that it is the input of the search bar leading to different searches akin to the redditData file
