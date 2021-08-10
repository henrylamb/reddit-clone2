import { grabDataThunk} from './feedSlice';
import { useSelector, useDispatch  } from 'react-redux';
import React, { useEffect } from 'react';
import {testData } from './testData';

import './postStyle.css';

   


export const Feed  = () => {

    const dispatch = useDispatch();
    useEffect(() => {dispatch(grabDataThunk())}, [dispatch]); // not sure if the array notation is needed

    const feedData = useSelector(state => state.feedSlice);

    let {feed} = feedData;

    
    if(!feed){
         feed = [];
    } else {
        return feed;
    }

    let redditData = [feed.data.children.data];
    

    if(!redditData){
        redditData = [testData]
        console.log('using test data');
    } else {
        redditData = redditData;
    }; 
    
    console.log(redditData);
    



    return(
        <div className = "Feed">  
            {redditData.map((element, idx) => (
                <div className = "post" key = "idx">
                    <div className = 'vote' >
                        {element.ups}
                    </div>

                    <div className = "title" >
                        {element.title} 

                    </div>

                    <div className = "content">
                        <img  src = {element.thumbnail} alt = "thumbnail for the post" />
            
                    </div>

                    <div className = "author" > 
                        {element.author_fullname}
                    </div>

                </div>
              )       
            )}             
                
            <button >Load More</button>
        </div>
        
    )
};
