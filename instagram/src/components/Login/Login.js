import React from 'react'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    handleLoginInfo = event => {
        this.setState({
            [event.target.name]: [event.target.value]
        })
    }

    handleLogin = event => {
        const user = this.state.username
        localStorage.setItem('user', user)
        window.location.reload()
    }

    render() {
        return (
            <div>
                <h1>Instagram</h1>
                <p>Please login to continue</p>
                <form>
                    <input
                        type="text"
                        name="username"
                        placeholder="username"
                        value={this.state.username}
                        onChange={this.handleLoginInfo}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        value={this.state.password}
                        onChange={this.handleLoginInfo}
                    />
                    <button onClick={this.handleLogin}>Sign In</button>
                </form>
            </div>
        )
    }
}

export default Login