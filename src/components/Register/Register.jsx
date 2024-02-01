import './Register.css'
import { Link } from 'react-router-dom';
import registerLogo from '../../images/main__logo.svg'
import useFormValidation from '../../hooks/useFormValidation';
import { useEffect, useState } from 'react';
import { EmailRegex, RegisterIncorrectError } from '../../utils/constants.js'

export default function Register({ handleRegister, registerError, setRegisterError }) {
    const { values, errors, isValid, handleChange } = useFormValidation()
    const [buttonDisabledWhenSubmit, setButtonDisabledWhenSubmit] = useState(false)

    useEffect(() => {
        setRegisterError('')
        setButtonDisabledWhenSubmit(false)
    }, [setRegisterError, values])

    function onRegister(evt) {
        evt.preventDefault()
        setButtonDisabledWhenSubmit(true)
        handleRegister(values.name, values.email, values.password)
    }
    return (
        <section className='register'>
            <div className='register__elements'>
                <Link to={'/'} className='register__link-to-home'><img src={registerLogo} alt="Логотип сайта" className="register__logo" /></Link>
                <h2 className='register__title'>Добро пожаловать!</h2>
                <form className='register__form' onSubmit={onRegister} noValidate>
                    <fieldset className="register__fieldset-input">
                        <span className='register__name-input'>Имя</span>
                        <input type="text" name='name' id='name' className={`register__input ${errors.name ? 'register__input_error' : ''}`} required onChange={handleChange} minLength={2} maxLength={10} placeholder='Введите ваше имя' />
                        <span className='register__error-message'>{errors.name}</span>

                        <span className='register__name-input'>E-mail</span>
                        <input type="email" name='email' id='email' className={`register__input ${errors.email ? 'register__input_error' : ''}`} required onChange={handleChange} placeholder='Введите ваш e-mail' pattern={EmailRegex}/>
                        <span className='register__error-message'>{errors.email}</span>

                        <span className='register__name-input'>Пароль</span>
                        <input type="password" name='password' id='password' className={`register__input ${errors.password ? 'register__input_error' : ''}`} onChange={handleChange} minLength={2} maxLength={10} required placeholder='Введите пароль' />
                        <span className='register__error-message'>{errors.password}</span>
                    </fieldset>
                    <fieldset className='register__fieldset-submit'>
                        {registerError ? <span className='register__submit-error'>{RegisterIncorrectError}</span> : '' }
                        <button className={`register__submit ${!isValid || registerError || buttonDisabledWhenSubmit ? 'register__submit_disabled' : ''}`} disabled={!isValid || buttonDisabledWhenSubmit} type='submit'>Зарегистрироваться</button>
                    </fieldset>
                </form>
                <p className="register__signin">Уже зарегистрированы?<Link className="register__login-link" to="/signin">Войти</Link></p>
            </div>
        </section>
    )
}