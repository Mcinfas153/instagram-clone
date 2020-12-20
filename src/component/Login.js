import React from 'react'
import {
    Link
} from "react-router-dom";
import './styles/login.css'

function Login() {
    return (
        <div className="login">
            <Link to="/home">
                <div className="loginImage__wrapper">
                    <img src="https://q5n8c8q9.rocketcdn.me/wp-content/uploads/2018/09/plann.png" className="login__image" />
                </div>
            </Link>
            <div className="loginForm__wrapper">
                <form>
                    <Link to="/home">
                        <div className="loginForm__imageWrapper">
                            <img className="loginForm__image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1024px-Instagram_logo.svg.png" />
                        </div>
                    </Link>
                    <input type="email" className="login__field" name="email" placeholder="Enter your email" />
                    <input type="password" className="login__field" name="password" placeholder="Enter your password" />
                    <button type="button" className="login__button">Login</button>
                </form>
                <p className="signup__text">Don't have an account? <Link to="/home"><a>Sign up</a></Link></p>
            </div>

        </div>
    )
}

export default Login
