import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import 'react-redux';
import { fetchRedditData } from '../../redditData';

// have the imports above 

const initialState = {
    hasError: false, 
    isLoading: false,
    feed: [],
    ups: 1,
    downs: 1,

};

// redux thunk here: 

export const grabDataThunk = createAsyncThunk('features/feedSlice', async () => {
    const response = await fetchRedditData();
    console.log('reddit data grabbed')
    return response;
})





// the slice
export const feedSlice = createSlice({
    name: 'feedSlice',
    initialState: initialState,
    reducers: {
        upVote: (state, action) => {
            state.ups += action.payload;
        },
        downVote: (state,action) => {
            state.downs -= action.payload;
        },

    },
    extraReducers: {
        [grabDataThunk.pending]: (state, action) => {
            state.hasError = false;
            state.isLoading = true;
            console.log('data pending')
        },
        [grabDataThunk.rejected]: (state, action) => {
            state.hasError = true;
            state.isLoading = false;
            console.log('failed to get data')
        },
        [grabDataThunk.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.hasError = false;
            state.feed = action.payload;
            console.log('you have got data');
            console.log(action.payload);
        }

    }
});



//exports !!!!!!!!! to make the data useful there will have to be a for loop that is used to iterate through each children item in the array - this will occur in a component

export default feedSlice.reducer;

//export const usefulData = initialState.feed;

export const {
    upVote,
    downVote,
    } = feedSlice.actions






















// plan for future improvement would be to have the argeuments of the fetchData be such that it is the input of the search bar leading to different searches akin to the redditData file
// create a thunk so that middleware functions can be made and so that the reddit api can be connected and load 15posts each time a botton is clicked

/*export const fetchData = createAsyncThunk('redditData', async (arg, thunkApi) => {
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
        
}); */