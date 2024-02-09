import React from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate("/fitness");
    }
    return (
        <>
        <div class="login-box">
            <h2>SIGN UP</h2>
            <form onSubmit={handleSubmit}>
                <div class="user-box">
                <input type="text"required/>
                <label>Name</label>
                </div>
                <div class="user-box">
                <input type="text"required/>
                <label>E-Mail</label>
                </div>
                <div class="user-box">
                <input type="password" required/>
                <label>Create Password</label>
                </div>
                <input type='submit' id='submit'></input>
            </form>
        </div>
        </>
    );
}
 
export default Signup;