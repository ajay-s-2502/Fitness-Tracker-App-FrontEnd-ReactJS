import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate("/fitness");
    }

    return (
        <>
        <div class="login-box">
            <h2>LOGIN</h2>
            <form onSubmit={handleSubmit}>
                <div class="user-box">
                <input type="text"required/>
                <label>Username</label>
                </div>
                <div class="user-box">
                <input type="password" required/>
                <label>Password</label>
                </div>
                <input type='submit' id='submit'></input>
            </form>
        </div>
        </>
    );
}
 
export default Login;