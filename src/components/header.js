import {React, useState} from 'react';


export const Header = () => {
    const {input, setInput} = useState(''); // i think that i am going to need a base state

    const handleTyping = () => {

    }; // this will handle the change in the value of the search bar - will need to be linked to slice file and the initial state will be found in the local component 
    
    
    return(
        <div className = "grid">
            <div>
                <h2><a href = 'path'>Home</a></h2>
            </div>
            
            <div>
                <input 
                onChange = {handleTyping} 
                placeholder = "Search"

                /> 
            </div>

            <div>
                <h2><a href ="path">Settings</a></h2>
            </div>

            <div>
                <h2><a href = "path">Store</a></h2>
            </div>
        </div>

    );

};// end of header function component 