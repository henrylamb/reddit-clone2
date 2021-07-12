import React from 'react';
//import {Route, Switch, Link} from 'react-router-dom'; // this can be used later when there are more pages
import './footerStyle.css';


export const Footer = () => {
    
    
    return(
        <div className = "grid">

            <div className = 'home'> 
                <h3 >Home</h3>
            </div>
            
            <div className = 'search'>
                <h3 >Search</h3>
            </div>
            
            <div className = 'add' >
                <h3 >+</h3>
            </div>
            
            <div className = 'message'>
                <h3 >messages</h3>
            </div>

            <div className = 'ping' >
                <h3 >Notification</h3>
            </div>
            

            
        </div>

    );

};// end of header function component 

// some thought is required with the route