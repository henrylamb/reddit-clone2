//import {createSlice} from 'react-redux';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import 'react-redux';


// have the imports above 

const state = {
    hasError: false, 
    isLoading: false,
    feed: {},

};



// create a thunk so that middleware functions can be made and so that the reddit api can be connected and load 15posts each time a botton is clicked

const fetchData = createAsyncThunk('redditData', async (arg, thunkApi) => {
    try{
        const subredditInput = 'popular'; // this is a hold action which need to be put into the () of the below function
        const postPerRequest = 10;


        const response = await fetch(`https://www.reddit.com/r/${subredditInput}.json?limit=${postPerRequest}`);
        const responseJson = await response.json();


    if(responseJson) {
        return responseJson;
    } else {
        return;
    }

   


    } 
    catch(error){ 
        console.log(error)
    }
        
}); 

// the slice
export const feedSlice = createSlice({
    name: 'feedSlice',
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
                state.feed = action.payload; // this payload should be 10 posts from the popular feed of reddit

            })
        

    }
    

 }


);

//exports !!!!!!!!! to make the data useful there will have to be a for loop that is used to iterate through each children item in the array - this will occur in a component

export const selectFeed = state => state.feedSlice; // the state will be changed with this line - the above useful data should change the original state and thus lead to a rerender to occur

export default feedSlice.reducer;

export const usefulData = state.feed;

// plan for future improvement would be to have the argeuments of the fetchData be such that it is the input of the search bar leading to different searches akin to the redditData file
