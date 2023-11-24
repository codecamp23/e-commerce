import { Link, useSearchParams } from 'react-router-dom';
import imageLogo from '../../assets/backend/images/logo-icon.png'
import AuthContext from '../../context/auth/AuthContext';
import { useEffect } from 'react';

import '../../assets/backend/css/bootstrap.min.css';
import '../../assets/backend/css/bootstrap-extended.css';
import '../../assets/backend/css/app.css';
import '../../assets/backend/css/icons.css';

const ResetPassword = () => {
    const { setEmail, setPassword, setPasswordConfirmation, errors, changePassword, passwordErrorhandle, setPasswordErrorhandle, passwordConfirmationErrorhandle, setPasswordConfirmationErrorhandle, password, passwordConfirmation } = AuthContext();
    const [searchURLParams] = useSearchParams();
    const email = searchURLParams.get('email');
    useEffect(() => {
        setEmail(email);
    }, [])
    const passwordHandle = (e) => {
        setPassword(e.target.value);
        if (passwordErrorhandle === true) {
            setPasswordErrorhandle(false)
        }
    }
    const passwordConfirmationHandle = (e) => {
        setPasswordConfirmation(e.target.value);
        if (passwordConfirmationErrorhandle === true) {
            setPasswordConfirmationErrorhandle(false)
        }
    }
    return (
        <div className="wrapper">
            <div className="authentication-reset-password d-flex align-items-center justify-content-center">
                <div className="container">
                    <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
                        <div className="col mx-auto">
                            <div className="card">
                                <div className="card-body">
                                    <form onSubmit={changePassword} className="p-4">
                                        <div className="mb-4 text-center">
                                            <img src={imageLogo} width={60} alt="" />
                                        </div>
                                        <div className="text-start mb-4">
                                            <h5>Genrate New Password</h5>
                                            <p className="mb-0">We received your reset password request. Please enter your new password!</p>
                                        </div>
                                        <div className="mb-3 mt-4">
                                            <label className="form-label">New Password</label>
                                            <input type="password" onChange={passwordHandle}
                                                className={errors.password ? passwordErrorhandle === true ? "form-control is-invalid" : " form-control" : " form-control"}
                                                placeholder="Enter new password" />
                                            {errors.password ? passwordErrorhandle === true ? <div className="invalid-feedback">{errors.password}</div> : '' : ''}
                                        </div>
                                        <div className="mb-4">
                                            <label className="form-label">Confirm Password</label>
                                            <input type="password" onChange={passwordConfirmationHandle}
                                                className={errors.confirmation_password ? passwordConfirmationErrorhandle === true ? "form-control is-invalid" : password !== '' && passwordConfirmation !== '' && password !== passwordConfirmation ? "form-control is-invalid" : "form-control" && password !== '' && passwordConfirmation !== '' && password === passwordConfirmation ? "form-control is-valid" : "form-control" : " form-control"
                                                        && password !== '' && passwordConfirmation !== '' && password !== passwordConfirmation ? "form-control is-invalid" : "form-control" && password !== '' && passwordConfirmation !== '' && password === passwordConfirmation ? "form-control is-valid" : "form-control"}
                                                placeholder="Confirm password" />
                                            {errors.confirmation_password ? passwordConfirmationErrorhandle === true ? <div className="invalid-feedback">{errors.confirmation_password}</div> : '' : ''}
                                        </div>
                                        <div className="d-grid gap-2">
                                            <button type="submit" className="btn btn-primary">Change Password</button>
                                            <Link to="/login" className="btn btn-light"><i className="bx bx-arrow-back mr-1" />Back to Login</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ResetPassword;
