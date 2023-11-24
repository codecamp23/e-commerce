import { Link } from 'react-router-dom';
import logoImage from '../../assets/backend/images/icons/forgot-2.png'
import AuthContext from '../../context/auth/AuthContext';
import { useState } from 'react';

import '../../assets/backend/css/bootstrap.min.css';
import '../../assets/backend/css/bootstrap-extended.css';
import '../../assets/backend/css/app.css';
import '../../assets/backend/css/icons.css';

const ForgetPassword = () => {
    const { sendEmail, setEmail, errors, form } = AuthContext();
    const [emailInputError, setEmailInputError] = useState('form-control is-invalid');
    const [emailLabelError, setEmailLabelError] = useState('form-label is-invalid');
    const [emailIconError, setEmailIconError] = useState('position-absolute top-50 translate-middle-y text-danger');
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
    return (
        <div className="wrapper">
            <div className="authentication-forgot d-flex align-items-center justify-content-center">
                <div className="card forgot-box">
                    <div className="card-body">
                        <form onSubmit={sendEmail} ref={form} className="p-3">
                            <div className="text-center">
                                <img src={logoImage} width={100} alt="..." />
                            </div>
                            <h4 className="mt-5 font-weight-bold">Forgot Password?</h4>
                            <p className="text-muted">Enter your registered email ID to reset the password</p>
                            <div className="col-md-12 pb-3">
                                <label htmlFor="input16" className={errors.email ? emailLabelError : 'form-label'}>Email</label>
                                <div className="position-relative input-icon">
                                    <input type="text" onChange={emailErrorsHandle}
                                        className={errors.email ? emailInputError : 'form-control '}
                                        id="email" placeholder="Email" />
                                    <span className={errors.email ? emailIconError : 'position-absolute top-50 translate-middle-y'}><i className="bx bx-envelope" /></span>
                                </div>
                                {errors.email ? <div className="invalid-feedback">{errors.email}</div> : ''}
                            </div>
                            <div className="d-grid gap-2">
                                <button type="submit" className="btn btn-primary">Send</button>
                                <Link to="/login" className="btn btn-light"><i className="bx bx-arrow-back me-1" />Back to Login</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgetPassword;
