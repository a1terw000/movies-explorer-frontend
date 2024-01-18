import './Login.css'
import { Link } from 'react-router-dom';
import loginLogo from '../../images/main__logo.svg'
import useFormValidation from '../../utils/useFormValidation';

export default function Login() {
    const { handleChange } = useFormValidation
    return (
        <section className='login'>
            <div className='login__elements'>
                <Link to={'/'}><img src={loginLogo} alt="Логотип сайта" className="login__logo" /></Link>
                <h2 className='login__title'>Рады видеть!</h2>
                <form className='login__form'>
                    <fieldset className="login__fieldset">
                        <span className='login__name-input'>E-mail</span>
                        <input type="email" name="email" className='login__input' required onChange={handleChange} placeholder='Введите ваш e-mail'/>
                        <span className='login__error-message'></span>
                        
                        <span className='login__name-input'>Пароль</span>
                        <input type="password" name="password" className='login__input' onChange={handleChange} minLength={2} maxLength={10} required placeholder='Введите пароль'/>
                        <span className='login__error-message'></span>
                    </fieldset>
                    <button className={'login__submit'} type='submit'>Войти</button>
                </form>
                <p className="login__signup">Ещё не зарегистрированы?<Link className="login__register-link" to="/signup">Регистрация</Link></p>
            </div>
        </section>
    )
}