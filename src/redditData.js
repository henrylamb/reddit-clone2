import axios from 'axios';


const subredditInput = 'popular'; // this is a hold action which need to be put into the () of the below function
const postsPerRequest = 10;
//const afterParam = ''; // this is a place holder - will also be an argument for the function below 

// this is just the fetching function
export const fetchRedditData = async () => {
    try {
        
    const response = await axios.get(`https://www.reddit.com/r/${subredditInput}.json?limit=${postsPerRequest}`); // not sure this is not liked
    return response.data;
   
    // having smaller objects which hold different parts of the data that i want: 

    } catch(error) {
        console.log(error)
    }
}; 




























// this fetch request is not as complex as the spotify one as a direct linked to the account is not being used and no authrencation is required - we are just making a viewble reddit - interaction cannot yet be created -my skill currently lacks that scope