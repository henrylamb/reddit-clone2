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

    
    if(!feed){
         feed = [];
    } else {
        return feed;
    };

    let redditData = [feed];
    console.log('data for two?' + redditData);

    if(!redditData){
        redditData = []
        console.log('using test data');
    };

    console.log('in feed.jsx data' + redditData);
  return (
    <div className="App">
      <div className = "header">
        <Header />
      </div>

      <div className = "feed">
        {redditData.map((feed, idx) => (
          <Feed 
          key = {idx}
          feed = {feed}
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
