import React from 'react'
import user from '../user.png'
import 'bootstrap/dist/css/bootstrap.css'
import { useNavigate } from 'react-router-dom'
const Main = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }

    return (
        <>
            <nav className="navbar bg-body-tertiary">
            <div className="container">
                <h1 id='appname'>Fitness Zone</h1>
                <img src={user} width="50" height="50" alt='user'></img>
            </div>
            </nav>
            <div className="frame">
                <div className="center">
                    <div className="headline">
                            <div className="small">your daily</div>progress
                        </div>
                        <div className="circle-big">
                            <div className="text">
                                1978<div className="small">kcal</div>
                            </div>
                            <svg>
                                <circle className="bg" cx="57" cy="57" r="52"/>
                                <circle className="progress" cx="57" cy="57" r="52"/>
                            </svg>
                        </div>
                        <div className="circles-small">
                            <div className="circle-small">
                                <div className="text">
                                    8563<div className="small">steps</div>
                                </div>
                                <svg>
                                    <circle className="bg" cx="40" cy="40" r="37"/>
                                    <circle className="progress one" cx="40" cy="40" r="37"/>
                                </svg>
                            </div>
                            <div className="circle-small">
                                <div className="text">
                                    6.2<div className="small">km</div>
                                </div>
                                <svg>
                                    <circle className="bg" cx="40" cy="40" r="37"/>
                                    <circle className="progress two" cx="40" cy="40" r="37"/>
                                </svg>
                            </div>
                        </div>
                </div>
            </div>
            <div>
                <button id='homeButton' onClick={handleClick}>HOME</button>
            </div>
        </>
    );
}
 
export default Main;