import './Login.css'
import { Link } from 'react-router-dom';
import loginLogo from '../../images/main__logo.svg'
import useFormValidation from '../../hooks/useFormValidation';
import { useEffect, useState } from 'react';
import { EmailRegex, LoginIncorrectError } from '../../utils/constants.js'

export default function Login({ handleLogin, loginError, setLoginError }) {
    const { values, errors, handleChange, isValid } = useFormValidation()
    const [buttonDisabledWhenSubmit, setButtonDisabledWhenSubmit] = useState(false)

    useEffect(() => {
        setLoginError(false)
        setButtonDisabledWhenSubmit(false)
    }, [setLoginError, values])
    
    function onLogin(evt) {
        evt.preventDefault()
        setButtonDisabledWhenSubmit(true)
        handleLogin(values.email, values.password)
    }
    return (
        <section className='login'>
            <div className='login__elements'>
                <Link to={'/'} className='login__link-to-home'><img src={loginLogo} alt="Логотип сайта" className="login__logo" /></Link>
                <h2 className='login__title'>Рады видеть!</h2>
                <form className='login__form' onSubmit={onLogin} noValidate>
                    <fieldset className="login__fieldset-input">
                        <p className='login__name-input'>E-mail</p>
                        <input onChange={handleChange} type="email" name="email" className={`login__input ${errors.email ? 'login__input_error' : ''}`} required placeholder='Введите ваш e-mail' pattern={EmailRegex}/>
                        <span className='login__error-message'>{errors.email}</span>

                        <p className='login__name-input'>Пароль</p>
                        <input onChange={handleChange} type="password" name="password" className={`login__input ${errors.password ? 'login__input_error' : ''}`} minLength={2} maxLength={10} required placeholder='Введите пароль' />
                        <span className='login__error-message'>{errors.password}</span>
                    </fieldset>
                    <fieldset className='login__fieldset-submit'>
                        {loginError ? <span className='login__submit-error'>{LoginIncorrectError}</span> : ''}
                        <button disabled={!isValid || buttonDisabledWhenSubmit} className={`login__submit ${!isValid || loginError || buttonDisabledWhenSubmit ? 'login__submit_disabled' : ''}`} type='submit'>Войти</button>
                    </fieldset>
                </form>
                <p className="login__signup">Ещё не зарегистрированы?<Link className="login__register-link" to="/signup">Регистрация</Link></p>
            </div>
        </section>
    )
}