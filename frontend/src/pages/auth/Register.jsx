import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import authLogo from '../../assets/backend/images/logo-icon.png'
import AuthContext from "../../context/auth/AuthContext";
import { Link } from "react-router-dom";

import '../../assets/backend/css/bootstrap.min.css';
import '../../assets/backend/css/bootstrap-extended.css';
import '../../assets/backend/css/app.css';
import '../../assets/backend/css/icons.css';

const Register = () => {
    const { setUserName, setEmail, setPassword, setPasswordConfirmation, sginUp, errors, password, passwordConfirmation } = AuthContext();
    // errors clear
    const [usernameInputError, setUserNameInputError] = useState('form-control is-invalid');
    const [usernameLabelError, setUserNameLabelError] = useState('form-label is-invalid');
    const [usernameIconError, setUserNameIconError] = useState('position-absolute top-50 translate-middle-y text-danger');

    const [emailInputError, setEmailInputError] = useState('form-control is-invalid');
    const [emailLabelError, setEmailLabelError] = useState('form-label is-invalid');
    const [emailIconError, setEmailIconError] = useState('position-absolute top-50 translate-middle-y text-danger');

    const [passwordInputError, setPasswordInputError] = useState('form-control is-invalid');
    const [passwordLabelError, setPasswordLabelError] = useState('form-label is-invalid');
    const [passwordIconError, setPasswordconError] = useState('position-absolute top-50 translate-middle-y text-danger');

    const [passwordConfirmationInputError, setPasswordConfirmationInputError] = useState('form-control is-invalid');
    const [passwordConfirmationLabelError, setPasswordConfirmationLabelError] = useState('form-label is-invalid');
    const [passwordConfirmationIconError, setPasswordconConfirmationError] = useState('position-absolute top-50 translate-middle-y text-danger');
    // const [passwordConfirmationOrPasswordValid, sePasswordConfirmationPasswordValidOrInvalid] = useState('');
    const usernameErrorsHandle = (e) => {
        setUserName(e.target.value);
        errors.username = true;
        if (errors.username === true) {
            setUserNameInputError('form-control is-invalid')
            setUserNameLabelError('form-label is-invalid')
            setUserNameIconError('position-absolute top-50 translate-middle-y text-danger')
            errors.username = false;
        } else {
            setUserNameInputError('form-control')
            setUserNameLabelError('form-label')
            setUserNameIconError('position-absolute top-50 translate-middle-y')
        }
    }
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
    const passwordConfirmationErrorsHandle = (e) => {
        setPasswordConfirmation(e.target.value)
        errors.confirmation_password = true;
        if (errors.confirmation_password === true) {
            setPasswordConfirmationInputError('form-control is-invalid')
            setPasswordConfirmationLabelError('form-label is-invalid')
            setPasswordconConfirmationError('position-absolute top-50 translate-middle-y text-danger')
            if (passwordConfirmation === password) {
                setPasswordConfirmationInputError('form-control is-valid')
            } else {
                setPasswordConfirmationInputError('form-control is-invalid')
            }
            errors.confirmation_password = false;
        } else {
            setPasswordConfirmationInputError('form-control')
            setPasswordConfirmationLabelError('form-label')
            setPasswordconConfirmationError('position-absolute top-50 translate-middle-y')
            if (passwordConfirmation === password) {
                setPasswordConfirmationInputError('form-control is-valid')
            } else {
                setPasswordConfirmationInputError('form-control is-invalid')
            }
        }
    }
    return (
        <div className="wrapper">
            <div className="d-flex align-items-center justify-content-center my-5">
                <div className="container-fluid">
                    <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
                        <div className="col mx-auto">
                            <div className="card mb-0">
                                <div className="card-body">
                                    <div className="p-4">
                                        <div className="mb-3 text-center">
                                            <img src={authLogo} width={60} alt="..." />
                                        </div>
                                        <div className="text-center mb-4">
                                            <h5 className>Rocker Admin</h5>
                                            <p className="mb-0">Please fill the below details to create your account</p>
                                        </div>
                                        <div className="form-body">
                                            <form onSubmit={sginUp} className="row g-3">
                                                <div className="col-md-12">
                                                    <label htmlFor="input13" className={errors.username ? usernameLabelError : 'form-label'}>User Name</label>
                                                    <div className="position-relative input-icon">
                                                        <input type="username" onChange={usernameErrorsHandle}
                                                            className={errors.username ? usernameInputError : 'form-control '}
                                                            id="username" placeholder="User Name" />
                                                        <span className={errors.username ? usernameIconError : 'position-absolute top-50 translate-middle-y'}><i className="bx bx-user" /></span>
                                                    </div>
                                                    {errors.username ? <div className="invalid-feedback">{errors.username}</div> : ''}
                                                </div>
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
                                                <div className="col-md-12">
                                                    <label htmlFor="input17" className={errors.confirmation_password ? passwordConfirmationLabelError : 'form-label'}>Confirm Password</label>
                                                    <div className="position-relative input-icon">
                                                        <input type="password" onChange={passwordConfirmationErrorsHandle}
                                                            className={errors.confirmation_password ? passwordConfirmationInputError : 'form-control' && password !== ''
                                                                && passwordConfirmation !== '' && passwordConfirmation === password ? 'form-control is-valid' : 'form-control' && password !== '' && passwordConfirmation !== '' && passwordConfirmation !== password ? 'form-control is-invalid' : 'form-control'}
                                                            id="password_confirmation" placeholder="Confirm Password" />
                                                        <span className={errors.confirmation_password ? passwordConfirmationIconError : 'position-absolute top-50 translate-middle-y'}><i className="bx bx-lock-alt" /></span>
                                                    </div>
                                                    {errors.confirmation_password ? <div className="invalid-feedback">{errors.confirmation_password}</div> : ''}
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-check form-switch">
                                                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                                                        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">I read and agree to Terms &amp; Conditions</label>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="d-grid">
                                                        <button type="submit" className="btn btn-primary">Sign up</button>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="text-center ">
                                                        <p className="mb-0">Already have an account? <Link to="/login">Sign in here</Link></p>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="login-separater text-center mb-5"> <span>OR SIGN UP WITH EMAIL</span>
                                            <hr />
                                        </div>
                                        <div className="list-inline contacts-social text-center">
                                            <a href="" className="list-inline-item bg-facebook text-white border-0 rounded-3"><i className="bx bxl-facebook" /></a>
                                            <a href="" className="list-inline-item bg-twitter text-white border-0 rounded-3"><i className="bx bxl-twitter" /></a>
                                            <a href="" className="list-inline-item bg-google text-white border-0 rounded-3"><i className="bx bxl-google" /></a>
                                            <a href="" className="list-inline-item bg-linkedin text-white border-0 rounded-3"><i className="bx bxl-linkedin" /></a>
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

export default Register;
