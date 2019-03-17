import React from 'react';
import PropTypes from 'prop-types'

import './App.css';
import dummyData from './dummy-data'
import PostContainer from './components/PostContainer/PostContainer'
import HeaderSection from './components/HeaderSection/HeaderSection'


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
          <div>
          <HeaderSection />
          </div>
          
          <div className="postSection">
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
