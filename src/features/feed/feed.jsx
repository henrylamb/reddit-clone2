import { Post } from '../posts/post';
import { selectFeed, getData, loadMorePosts } from './feedSlice';
import { useSelector, useDispatch  } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { fetchRedditData } from '../../redditData';
import React, { useEffect } from 'react';

    const makeSelectorFeed = createSelector(
        selectFeed, 
        (feed) => ({feed,}));


export const Feed  = () => {
 
    const dispatch = useDispatch();

    const { feed } = useSelector(selectFeed);

    


    useEffect(() => {

        return getData();
  

    }, []); // not sure if the array notation is needed




    return(
        <div className = "Feed">
            <Post />
            
            <div><p>{feed.children}</p></div>
           
     
                
            
            <button onClick = {() => getData()}>Load More</button>
        </div>
        
    )
};
