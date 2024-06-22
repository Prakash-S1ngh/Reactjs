import login from './login.png';
import Frame from './Frame.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Login(props) {
    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
    };
    function letlog(){
        props.loginHanler()
    }

    return (
        <div className="login-div">
            <div className="left">
                <div className="head1"><h2>Welcome Back</h2></div>
                <div className='txt'>
                    <div className="text">Build skills for today, tomorrow, and beyond.</div>
                    <div className="text2">Education to future-proof your career.</div>
                </div>

                <div className="button">
                    <label>Email Address<sup>*</sup>:</label><br />
                    <input type="text" placeholder="Enter Email address" /><br /><br />
                    <label>Password <sup>*</sup>:</label><br />
                    <div className="password-container">
                        <input type={passwordShown ? "text" : "password"} placeholder="Enter Password" />
                        <FontAwesomeIcon icon={passwordShown ? faEyeSlash : faEye} onClick={togglePasswordVisibility} />
                    </div>
                    <button className='btn' onClick={letlog}>Log-in</button>
                </div>
            </div>

            <div className="right">
                <div className="img1">
                    <img src={login} alt="Login Graphic" />
                </div>
                <div className="img2">
                    <img src={Frame} alt="Frame Graphic" />
                </div>
            </div>
        </div>
    );
}

export default Login;
