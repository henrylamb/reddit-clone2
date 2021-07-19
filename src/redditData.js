const subredditInput = 'popular'; // this is a hold action which need to be put into the () of the below function
const postPerRequest = 10;
const afterParam = ''; // this is a place holder - will also be an argument for the function below 

// this is just the fetching function
export const fetchRedditData = async () => {
    
    try {
        
    const response = await fetch(`https://www.reddit.com/r/${subredditInput}`);
    const data = await response.json();
   
    // having smaller objects which hold different parts of the data that i want: 
    
    return data.data.children.map((post) => post.data);


    } catch(error) {
        console.log(error)
        return [];
    }


}; 




























// this fetch request is not as complex as the spotify one as a direct linked to the account is not being used and no authrencation is required - we are just making a viewble reddit - interaction cannot yet be created -my skill currently lacks that scope