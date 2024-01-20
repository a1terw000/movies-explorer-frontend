import './HeaderUnAuth.css';
import headerLogo from '../../images/main__logo.svg'
import { Link } from 'react-router-dom';
export default function HeaderUnAuth() {
    return (
        <header className='header-un-auth'>
            <div className='header-un-auth__content'>
                <Link to={'/'} className='header-un-auth__home'><img src={headerLogo} alt="Логотип сайта" /></Link>
                <nav className='header-un-auth__container'>
                    <Link className='header-un-auth__signup' to={'/signup'}>Регистрация</Link>
                    <Link className='header-un-auth__signin' to={'/signin'}>Войти</Link>
                </nav>
            </div>
        </header>
    )
}