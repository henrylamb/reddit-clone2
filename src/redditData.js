// this file will get data from the reddit api that is recommended by codecamdy.
// the subreddit value will be imported from the input state from the store this can have a default state of the popular page

const subredditInput = 'popular'; // this is a hold action which need to be put into the () of the below function
const postPerRequest = 10;
const afterParam = ''; // this is a place holder - will also be an argument for the function below 
const responses = [] // this should be a initial state in the store

export const fetchRedditData = async () => {
    try {
        
    const response = await fetch(`https://www.reddit.com/r/${subredditInput}.json?limit=${postPerRequest}${
        afterParam ? '&after=' + afterParam : ''
    }`);
    const data = await response.json();
    responses.push(data)

    // having smaller objects which hold different parts of the data that i want: 
    const preData = data.data.children;

    const usefulData = {
        author: preData.author_fullName,
        title: preData.title,
        downs: preData.downs,
        ups: preData.ups,
        thumbnail: preData.thumbnail,


    }; // this is just a way to access the data with a bit more ease - does not create the array that will be needed
    
    

    if (data.data.after){
    fetchRedditData(subredditInput, data.data.after)
    return;
    }; // not sure about this if statement 



    } catch(error) {
        console.log(error)
    }


}; // end of fetch

export const {usefulData} = fetchRedditData;




























// this fetch request is not as complex as the spotify one as a direct linked to the account is not being used and no authrencation is required - we are just making a viewble reddit - interaction cannot yet be created -my skill currently lacks that scope