import { useSelector } from "react-redux"
import { selectFeed } from "../feed/feedSlice"

export const Post = () => {

    const selectPost  = useSelector(selectFeed); // not sure about the naming convention of this

    return(
        <div className = 'post'>
            <h2>there</h2>
        </div>
    )
}