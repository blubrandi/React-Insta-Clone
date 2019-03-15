import React from 'react';

import './App.css';
import dummyData from './dummy-data'
import PostContainer from './components/PostContainer/PostContainer'


import SearchBar from './components/SearchBar/SearchBar'

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      posts: dummyData
    }
  }
  render() {
    return (
      <div className="App">
        <div>
          <SearchBar />
          <div>
            {this.state.posts.map((post, timestamp)=> {
              return (
                <PostContainer post={post} key={timestamp}/>
              )
            })}
            
          </div>
          
        </div>
      </div>
    );
  }
}

export default App;
