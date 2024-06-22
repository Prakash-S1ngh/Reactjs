import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Signup from './Signup.png';
import Frame from './Frame.png';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

function Signin(props) {
    const [passwordShown, setPasswordShown] = useState(false);
    const [selectedRole, setSelectedRole] = useState('Student'); // State to track selected role

    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
    };
    function letlog(){
        props.loginHanler()
    }

    const clickHandler = (e) => {
        setSelectedRole(e.target.value);
    };

    return (
        <div className="Sign login-div">
            <div className="left">
                <div className="head1"><h2>Join the millions learning to code with StudyNotion for free.</h2></div>
                <div className='txt'>
                    <div className="text text3">Build skills for today, tomorrow, and beyond.</div>
                    <div className="text2 text4">Education to future-proof your career.</div>
                </div>
                <div className="Radio-btn">
                    <div className="btn-1">
                        <button 
                            name="ocupation" 
                            value="Student" 
                            onClick={clickHandler} 
                            className={selectedRole === 'Student' ? 'active' : ''}
                        >
                            Student
                        </button>
                    </div>
                    <div className="btn-2">
                        <button 
                            name="ocupation" 
                            value="Teacher" 
                            onClick={clickHandler} 
                            className={selectedRole === 'Teacher' ? 'active' : ''}
                        >
                            Teacher
                        </button>
                    </div>
                </div>

                <div className="form">
                    <form action='/dashboard'>
                        <div className="name">
                            <div className="firstname">
                                <label name='First'>First Name:</label>
                                <input type="text" placeholder="Enter First Name"></input>
                            </div>

                            <div className="lastname">
                                <label name='last'>Last Name:</label>
                                <input type="text" placeholder="Enter Last Name"></input>
                            </div>
                        </div>

                        <div className="email">
                            <label>Email Address<sup>*</sup>:</label>
                            <input type="text" placeholder="Enter Email address" />
                        </div>

                        <div className="password-section">
                            <label>Enter Password <sup>*</sup>:</label>
                            <div className="password-input-container">
                                <input type={passwordShown ? "text" : "password"} placeholder="Enter Password" />
                                <FontAwesomeIcon icon={passwordShown ? faEyeSlash : faEye} onClick={togglePasswordVisibility} />
                            </div>

                            <label>Confirm Password <sup>*</sup>:</label>
                            <div className="password-input-container">
                                <input type={passwordShown ? "text" : "password"} placeholder="Confirm Password" />
                                <FontAwesomeIcon icon={passwordShown ? faEyeSlash : faEye} onClick={togglePasswordVisibility} />
                            </div>
                        </div>

                        <button className='btn' onClick={letlog}>Sign In</button>
                    </form>
                </div>
            </div>

            <div className="right">
                <div className="img1">
                    <img src={Signup} alt="Login Graphic" />
                </div>
                <div className="img2">
                    <img src={Frame} alt="Frame Graphic" />
                </div>
            </div>
        </div>
    );
}

export default Signin;
