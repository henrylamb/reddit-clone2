import React from 'react';
//import logo from './reddit-logo.png';
import { useEffect } from 'react';
import { grabDataThunk} from './features/feed/feedSlice';
import { useSelector, useDispatch  } from 'react-redux';

import './App.css';

import { Header } from '../src/components/header';
import { Footer } from '../src/components/footer';
import { Feed } from '../src/features/feed/feed';





function App() {

  const dispatch = useDispatch();
  useEffect(() => {dispatch(grabDataThunk())}, [dispatch]); // not sure if the array notation is needed

  const feedData = useSelector(state => state.feedSlice);
  let {feed} = feedData;
  console.log('test 1')
  console.log(feed)

    
    if(!feed){
         feed = [];
         console.log('USING empty array');
    } else {
        console.log('using feed from the useSelector');
        return feed;
        
    };

    console.log(feed);

  
  return (
    <div className="App">
      <div className = "header">
        <Header />
      </div>

      <div className = "feed">
        {[feed].map((data, kind) => (
          <Feed 
          feed = {data}
          key = {kind}
          />
        ))}
      </div>

      <div className = "footer">
        <Footer />
      </div>

      
    </div>
  );
}

export default App;

// i can expand this later using rotuers and having a home page and others and refector the above into
