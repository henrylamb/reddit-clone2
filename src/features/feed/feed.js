import { Post } from '../posts/post';
import { selectFeed, fetchData, loadMorePosts } from './feedSlice';
import { useSelector, useDispatch  } from 'react-redux';

export const Feed  = (props) => {
 
    const dispatch = useDispatch();
    const feedData = useSelector(selectFeed)

    console.log(selectFeed.feed)



    return(
        <div className = "Feed">
            <Post />

            <button { () => {dispatch({type: "loadMorePosts"})}}>Load More</button>
        </div>
        
    )
};