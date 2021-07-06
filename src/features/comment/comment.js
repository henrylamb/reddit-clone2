import React from 'react';

export const Comment = (props) => {

    // have the function that grabs the string data from an array here then input it to the comment - being called
    
    // this component will be passed a series of props so that the correct comment can be rendered in the correct order

    const commentInput = () => {

    }
     
    return(
        <div>
            <p>comment {commentInput()}</p>
            <img src = '' alt = "up vote"/>
            <img src = '' alt = "down vote" />
        </div>
    )
}; // end of function component