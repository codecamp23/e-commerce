import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import authLogo from '../../assets/backend/images/logo-icon.png'
import AuthContext from "../../context/auth/AuthContext";

import '../../assets/backend/plugins/vectormap/jquery-jvectormap-2.0.2.css';
import '../../assets/backend/plugins/simplebar/css/simplebar.css';
import '../../assets/backend/plugins/metismenu/css/metisMenu.min.css';
import '../../assets/backend/css/bootstrap.min.css';
import '../../assets/backend/css/bootstrap-extended.css';
import '../../assets/backend/css/app.css';
import '../../assets/backend/css/icons.css';
import '../../assets/backend/css/dark-theme.css';
import '../../assets/backend/css/semi-dark.css';
import '../../assets/backend/css/header-colors.css';
import '../../assets/backend/css/header-colors.css';
// js
import '../../assets/backend/js/bootstrap.bundle.min.js';
import '../../assets/backend/js/jquery.min.js'
import '../../assets/backend/plugins/simplebar/js/simplebar.min.js';
import '../../assets/backend/plugins/metismenu/js/metisMenu.min.js';
import '../../assets/backend/plugins/vectormap/jquery-jvectormap-2.0.2.min.js';
import '../../assets/backend/plugins/vectormap/jquery-jvectormap-world-mill-en.js';
import '../../assets/backend/plugins/chartjs/js/chart.js';
import '../../assets/backend/js/index.js';
import '../../assets/backend/js/app.js';

import 'perfect-scrollbar/css/perfect-scrollbar.css';
import PerfectScrollbar from 'perfect-scrollbar';

const Login = () => {
    const { setEmail, errors, setPassword, signIn } = AuthContext();
    const [emailInputError, setEmailInputError] = useState('form-control is-invalid');
    const [emailLabelError, setEmailLabelError] = useState('form-label is-invalid');
    const [emailIconError, setEmailIconError] = useState('position-absolute top-50 translate-middle-y text-danger');

    const [passwordInputError, setPasswordInputError] = useState('form-control is-invalid');
    const [passwordLabelError, setPasswordLabelError] = useState('form-label is-invalid');
    const [passwordIconError, setPasswordconError] = useState('position-absolute top-50 translate-middle-y text-danger');

    useEffect(() => {
        new PerfectScrollbar(".app-container")
    }, [])

    const emailErrorsHandle = (e) => {
        setEmail(e.target.value);
        errors.email = true;
        if (errors.email === true) {
            setEmailInputError('form-control is-invalid')
            setEmailLabelError('form-label is-invalid')
            setEmailIconError('position-absolute top-50 translate-middle-y text-danger')
            errors.email = false;
        } else {
            setEmailInputError('form-control')
            setEmailLabelError('form-label')
            setEmailIconError('position-absolute top-50 translate-middle-y')
        }
    }
    const passwordErrorsHandle = (e) => {
        setPassword(e.target.value);
        errors.password = true;
        if (errors.password === true) {
            setPasswordInputError('form-control is-invalid')
            setPasswordLabelError('form-label is-invalid')
            setPasswordconError('position-absolute top-50 translate-middle-y text-danger')
            errors.password = false;
        } else {
            setPasswordInputError('form-control')
            setPasswordLabelError('form-label')
            setPasswordconError('position-absolute top-50 translate-middle-y')
        }
    }
    return (
        <div className="wrapper">
            <div className="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-0">
                <div className="container">
                    <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
                        <div className="col mx-auto">
                            <div className="card mb-0">
                                <div className="card-body">
                                    <div className="p-4">
                                        <div className="mb-3 text-center">
                                            <img src={authLogo} width={60} alt />
                                        </div>
                                        <div className="text-center mb-4">
                                            <h5 className>Rocker Admin</h5>
                                            <p className="mb-0">Please log in to your account</p>
                                        </div>
                                        <div className="form-body">
                                            <form onSubmit={signIn} className="row g-3">
                                                <div className="col-md-12">
                                                    <label htmlFor="input16" className={errors.email ? emailLabelError : 'form-label'}>Email</label>
                                                    <div className="position-relative input-icon">
                                                        <input type="text" onChange={emailErrorsHandle}
                                                            className={errors.email ? emailInputError : 'form-control '}
                                                            id="email" placeholder="Email" />
                                                        <span className={errors.email ? emailIconError : 'position-absolute top-50 translate-middle-y'}><i className="bx bx-envelope" /></span>
                                                    </div>
                                                    {errors.email ? <div className="invalid-feedback">{errors.email}</div> : ''}
                                                </div>
                                                <div className="col-md-12">
                                                    <label htmlFor="input17" className={errors.password ? passwordLabelError : 'form-label'}>Password</label>
                                                    <div className="position-relative input-icon">
                                                        <input type="password" onChange={passwordErrorsHandle}
                                                            className={errors.password ? passwordInputError : 'form-control'}
                                                            id="password" placeholder="Password" onKeyUp={passwordErrorsHandle} />
                                                        <span className={errors.password ? passwordIconError : 'position-absolute top-50 translate-middle-y'}><i className="bx bx-lock-alt" /></span>
                                                    </div>
                                                    {errors.password ? <div className="invalid-feedback">{errors.password}</div> : ''}
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                                                        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Remember Me</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 text-end">	<Link to="/forget-password">Forgot Password ?</Link>
                                                </div>
                                                <div className="col-12">
                                                    <div className="d-grid">
                                                        <button type="submit" className="btn btn-primary">Sign in</button>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="text-center ">
                                                        <p className="mb-0">Don't have an account yet? <Link to="/register">Sign up here</Link>
                                                        </p>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="login-separater text-center mb-5"> <span>OR SIGN IN WITH</span>
                                            <hr />
                                        </div>
                                        <div className="list-inline contacts-social text-center">
                                            <a href="javascript:;" className="list-inline-item bg-facebook text-white border-0 rounded-3"><i className="bx bxl-facebook" /></a>
                                            <a href="javascript:;" className="list-inline-item bg-twitter text-white border-0 rounded-3"><i className="bx bxl-twitter" /></a>
                                            <a href="javascript:;" className="list-inline-item bg-google text-white border-0 rounded-3"><i className="bx bxl-google" /></a>
                                            <a href="javascript:;" className="list-inline-item bg-linkedin text-white border-0 rounded-3"><i className="bx bxl-linkedin" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*end row*/}
                </div>
            </div>
        </div>
    );
}

export default Login;
