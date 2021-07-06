import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';

export const Footer = () => {
    
    
    return(
        <div className = "grid">
            <Switch>
                <Route path = "path">
                    <Home/>
                </Route> 

                <Route>
                    <Commuinites />
                </Route>

                <Route>
                    <Add />
                </Route>

                <Route>
                    <Chat />
                </Route>
                
                <Route> 
                    <Notification />
                </Route>
            </Switch>
        </div>

    );

};// end of header function component 

// some thought is required with the route