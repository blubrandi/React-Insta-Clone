import React from 'react'

import dummyData from '../../dummy-data';
import PostContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';

class PostsPage extends React.Component {
    constructor() {
        super();
        this.state = {
          posts: [],
          filtered: []
        };
      }
      componentDidMount() {
        this.setState({ posts: dummyData });
      }
      searchPostsHandler = event => {
        const posts = this.state.posts.filter(post => {
          if (post.username.includes(event.target.value)) {
            return post;
          }
        });
        this.setState({ filtered: posts });
      };
      render() {
        return (
          <div className="App">
            <SearchBar
              searchTerm={this.state.searchTerm}
              searchPosts={this.searchPostsHandler}
            />
            <PostContainer
              posts={
                this.state.filtered.length > 0
                  ? this.state.filtered
                  : this.state.posts
              }
            />
          </div>
        );
      }
}

export default PostsPage