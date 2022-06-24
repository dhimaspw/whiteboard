import React from "react";
import { Button } from 'react-bootstrap';
import {useNavigate} from 'react-router-dom'
import { signInWithGoogle } from '../../Firebase'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
        return (
            <div className="login-buttons">
                <button className="login-provider-button" onClick={signInWithGoogle}>
                    Login
                </button>
            </div>
        )
    }
export default Login;
