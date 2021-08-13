import React from 'react';
import './postStyle.css';

   
console.log('is this working ?')

export const Feed  = (props) => {

    const {feed} = props;
    console.log(feed);

    
    
    return( 
        <div className = "Feed">  

                <div className = "post">

                    <div className = 'vote' >
                       <p>{feed.ups}</p>   
                    </div>

                    <div className = "title" >
                        {feed.title} 

                    </div>

                    <div className = "content">
                        <img  src = {feed.thumbnail} alt = "thumbnail for the post" />
            
                    </div>

                    <div className = "author" > 
                        {feed.author_fullname}
                    </div>

                </div>
              )       
            )        
                
            <button >Load More</button>
        </div>
        
    ) 
};
