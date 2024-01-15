import './Register.css'
import { Link } from 'react-router-dom';
import registerLogo from '../../images/main__logo.svg'
import useFormValidation from '../../utils/useFormValidation';

export default function Register() {
    const { handleChange } = useFormValidation

    return (
        <div className='page__auth'>
            <section className='register'>
                <Link to={'/'}><img src={registerLogo} alt="Логотип сайта" className="register__logo" /></Link>
                <h2 className='register__title'>Добро пожаловать!</h2>
                <form className='register__form'>
                    <fieldset className="register__fieldset">
                        <span className='register__name-input'>Имя</span>
                        <input type="text" name='username' className='register__input' required onChange={handleChange} minLength={2} maxLength={10} />
                        <span className='register__error-message'></span>

                        <span className='register__name-input'>E-mail</span>
                        <input type="email" name="email" className='register__input' required onChange={handleChange} />
                        <span className='register__error-message'></span>

                        <span className='register__name-input'>Пароль</span>
                        <input type="password" name="password" className='register__input' onChange={handleChange} minLength={2} maxLength={10} required />
                        <span className='register__error-message'></span>
                    </fieldset>
                    <button className={'register__submit'} type='submit'>Зарегистрироваться</button>
                </form>
                <p className="register__signin">Уже зарегистрированы?<Link className="register__login-link" to="/signin">Войти</Link></p>
            </section>
        </div>
    )
}