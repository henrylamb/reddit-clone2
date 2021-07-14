import { useSelector } from "react-redux";
import { selectFeed } from "../feed/feedSlice";
import './postStyle.css';

export const Post = () => {

    const selectPost  = useSelector(selectFeed); // not sure about the naming convention of this
    // need to get the data from select posts state


    return(
        <div className = 'post'>
            <div className = 'vote'>
                <h1>vote</h1>
            </div>

            <div className = 'title'>
                <h1>title</h1>
            </div>

           <h6></h6>

           <h6></h6>
            
            <div className = 'content'>
                <h1>content</h1>
            </div>

            <h6></h6>

            <h6></h6>
                
            <div className = 'author'>
                <h1>author</h1>
            </div>

          
        </div>
    )
}