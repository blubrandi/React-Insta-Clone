import React from 'react'

const Authenticate = PostsPage => Login =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        userLoggedIn: false
      };
    }

        componentDidMount() {
            if (!localStorage.getItem('user')) {
                this.setState({
                    userLoggedIn: false
                })
           } else {
               this.setState({
                userLoggedIn: true
               })
           }
        }
        render () {
            if (this.state.userLoggedIn) return <PostsPage />
            return <Login />
        }
    }

export default Authenticate