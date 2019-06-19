import React, { Component } from 'react';
import Tilt from "react-tilt";
import { SocialIcon } from 'react-social-icons';

import '../../assets/css/main.css';
import '../../assets/css/util.css';
import '../../assets/css/animate.css';
import '../../assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import loginImg from '../../assets/images/img-01.png';

class Login extends Component {
    login() {
        this.props.auth.login();
    }

    render() {
        return (
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <Tilt
                            className="parent"
                            options={{
                                max: 25
                            }}
                            style={{
                                height: 250,
                                width: 250
                            }}
                        >
                            <div className="login100-pic js-tilt child" data-tilt>
                                <img src={loginImg} alt="IMG" />
                            </div>
                        </Tilt>

                        <div className="login100-form validate-form">
                            <span className="login100-form-title">
                                Social Login Providers
                            </span>
                            <div className="social-media-icons">
                                <SocialIcon network="linkedin" style={{ height: 60, width: 60, margin: '0 5px 0 5px' }} />
                                <SocialIcon network="facebook" style={{ height: 60, width: 60, margin: '0 5px 0 5px'  }} />
                                <SocialIcon network="google" style={{ height: 60, width: 60, margin: '0 5px 0 5px' }} />
                                <SocialIcon network="twitter" style={{ height: 60, width: 60, margin: '0 5px 0 5px'}} />
                            </div>

                            {/* <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                <input className="input100" type="text" name="email" placeholder="Email" />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                            </div>

                            <div className="wrap-input100 validate-input" data-validate="Password is required">
                                <input className="input100" type="password" name="pass" placeholder="Password" />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-lock" aria-hidden="true"></i>
                                </span>
                            </div> */}

                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn" onClick={this.login.bind(this)}>
                                    Login
                            </button>
                            </div>

                            <div className="text-center p-t-12">
                                <span className="txt1">
                                    Forgot
                                </span>
                                <a className="txt2" href="#">
                                    Username / Password?
                                </a>
                            </div>

                            <div className="text-center p-t-136">
                                <a className="txt2" href="#">
                                    Create your Account
                                <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
