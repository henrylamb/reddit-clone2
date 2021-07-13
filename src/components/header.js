import {React} from 'react';
import './headerStyle.css'; 

export const Header = () => {

    const handleTyping = () => {

    }; // this will handle the change in the value of the search bar - will need to be linked to slice file and the initial state will be found in the local component 
    
    
    return(
        <div className = "grid">
            <div className = 'home'>
                <h3><a href = 'path'>Home</a></h3>
            </div>
            
            <div className = 'search'>
                <input 
                onChange = {handleTyping} 
                placeholder = "Search"

                /> 
            </div>

            <div className = 'setting'>
                <h3><a href ="path">Settings</a></h3>
            </div>

            <div className = 'store'>
                <h3><a href = "path">Store</a></h3>
            </div>
        </div>

    );

};// end of header function component 