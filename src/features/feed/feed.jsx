import { Post } from '../posts/post';
import { grabDataThunk} from './feedSlice';
import { useSelector, useDispatch  } from 'react-redux';
import React, { useEffect } from 'react';

   


export const Feed  = () => {
 
    const dispatch = useDispatch();

    const feedData = useSelector(state => state.feedSlice);

    let {feed} = feedData;

    useEffect(() => {dispatch(grabDataThunk())}, [dispatch]); // not sure if the array notation is needed

    if(!feed){
        feed = []
    } else {
        return feed
    };

    const redditData = feed.children.data;



    return(
        <div className = "Feed">  
            {redditData.map((element, idx) => (
                <div className = "post">
                    <div className = 'vote'>
                        {element.ups}
                    </div>

                    <div className = "title">
                        {element.title} 

                    </div>

                    <div className = "content">
                        {[element.secure_media.reddit_video].fallback_url ? (<video src = {[element.secure_media.reddit_video].fallback_url} alt = "video for this post"></video>) : (<img src = {element.thumbnail} alt = "thumbnail for the post" />)} 
            
                    </div>

                    <div className = "author"> 
                        {element.author_fullname}
                    </div>

                </div>
            )})}             
                
            <button >Load More</button>
        </div>
        
    )
};
