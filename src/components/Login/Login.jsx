import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { required } from '../../utils/validators/validators'
import { createField, Input } from '../common/FormControls/FormControls'
import { connect } from 'react-redux'
import { login } from '../redux/auth-reduser'
import { Navigate } from 'react-router-dom'
import style from '../common/FormControls/FormControls.module.css'

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
    return (
        <form onSubmit={handleSubmit} className={style.text}>
            {createField('Email', 'email', [required], Input)}
            {createField('Password', 'password', [required], Input, {
                type: 'password',
            })}
            {createField(
                null,
                'rememberMe',
                [],
                Input,
                { type: 'checkbox' },
                'rememberMe'
            )}

            {captchaUrl && <img src={captchaUrl} />}
            {captchaUrl &&
                createField('symbols', 'captcha', [required], Input, {})}

            {error && <div className={style.formSummaryError}>{error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(
            formData.email,
            formData.password,
            formData.rememberMe,
            formData.captcha
        )
    }

    if (props.isAuth) {
        return <Navigate to={'/profile'} />
    }

    return (
        <div>
            <h1 className={style.text}>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl,
})

export default connect(mapStateToProps, { login })(Login)
