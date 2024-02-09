import React from 'react'
import './home.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate("/login");
    }

    const navigateSignup = () => {
        navigate("/signup");
    }

    return (
        <>
            <div id='title'>
                <h1>Fitness Zone</h1>
            </div>
            <div id='slogan'>
                <p>Track your progress, meet your goals!</p>
            </div>
            <div id='buttonHome'>
                <button onClick={navigateLogin}>LOGIN</button>
                <button onClick={navigateSignup}>SIGN UP</button>
            </div>
        </>
    );
}
 
export default Home;