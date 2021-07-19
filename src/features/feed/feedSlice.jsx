//import {createSlice} from 'react-redux';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import 'react-redux';
import { fetchRedditData } from '../../redditData';

// have the imports above 

const initialState = {
    hasError: false, 
    isLoading: false,
    feed: [],

};





// the slice
export const feedSlice = createSlice({
    name: 'feedSlice',
    initialState: initialState,
    reducers: {
        loadingData:  (state, action) => {
            state.hasError = false;
            state.isLoading = true;
        },
        failedLoadingData: (state, action) => {
            state.hasError = true;
            state.isLoading = false;
        },
        successLoadingData: (state, action) => {
            state.hasError = false;
            state.isLoading = false;
            state.feed = action.payload;
        }

    }
});

// the redux thunk

console.log(initialState.feed)

export const getData = () => {
    return async (useDispatch) => {
        try{
            useDispatch(loadingData());

            const posts = await fetchRedditData();
                
            useDispatch(successLoadingData(posts));

        } catch(error) {
            console.log(error)
            useDispatch(failedLoadingData())
        }

    }
}










//exports !!!!!!!!! to make the data useful there will have to be a for loop that is used to iterate through each children item in the array - this will occur in a component

export const selectFeed = state => state.feed; // the state will be changed with this line - the above useful data should change the original state and thus lead to a rerender to occur

export default feedSlice.reducer;

//export const usefulData = initialState.feed;

export const {
    loadingData,
    failedLoadingData,
    successLoadingData,

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