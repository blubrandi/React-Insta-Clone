import React from 'react'

import styled from 'styled-components'

const LoginDiv = styled.div`
    max-width: 500px;
    margin: 0 auto;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    border: 2px solid;
    padding 3em;
    justify-content: center;
`
const LogInForm = styled.div`
    display: flex;
    flex-direction: column;
`

const LoginButton = styled.div`
    padding-top: 20xp;
    background-color: #000;
    padding: 1.2em;
    color: #fff;
    text-align: center;
    margin-top: 20px;
    border: 2px solid #000;
    border-radius: 3px;

    &:hover {
        background-color: #fff;
        border: 2px solid #000;
        color: #000;
        cursor: pointer;
    }
`

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
            <LoginDiv>
                <h1>Instagram</h1>
                <p>Please login to continue</p>
                <LogInForm>
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
                    <LoginButton onClick={this.handleLogin}>Sign In</LoginButton>
                </LogInForm>
            </LoginDiv>
        )
    }
}

export default Login