import './HeaderUnAuth.css';
import headerLogo from '../../images/main__logo.svg'
import { Link } from 'react-router-dom';
// import { useState } from 'react';

export default function HeaderUnAuth() {
    // const {pathname} = useLocation()
    // const [isOpen, setIsOpen] = useState(false)
    // function clickOnMenu() {
    //     if(isOpen) {
    //         setIsOpen(false)
    //     } else {
    //         setIsOpen(true)
    //     }
    // }
    return (
        <header className='header-un-auth'>
            <div className='header-un-auth__content'>
                <Link to={'/'} className='header-un-auth__home'><img src={headerLogo} alt="Логотип сайта" /></Link>
                {/* <nav className={`header-un-auth__container ${isOpen ? 'header-un-auth__container_open' : ''}`}>
                    <div className='header-un-auth__container-account'>
                        <div className='header-un-auth__container-account_type_films'>
                            <Link to={'/'} className='header-un-auth__link-to-home'>Главная</Link>
                            <Link to={'/movies'} className={`header-un-auth__link-to-films ${pathname === '/movies' ? 'header-un-auth__link-to-films_type_active' : ''}`}>Фильмы</Link>
                            <Link to={'/saved-movies'} className={`header-un-auth__link-to-films ${pathname === '/saved-movies' ? 'header-un-auth__link-to-films_type_active' : ''}`}>Сохранённые&nbsp;фильмы</Link>
                        </div>
                        <div className='header-un-auth__container-account_type_profile'>
                            <Link className='header-un-auth__account' to={'/profile'}>Аккаунт</Link>
                            <div className='header-un-auth__background'><div className='header-un-auth__account-icon'></div></div>
                        </div>
                        <button type='button' className='header-un-auth__button-close-menu' onClick={clickOnMenu}></button>
                    </div>
                </nav>
                <button type='button' className='header-un-auth__button-open-menu' onClick={clickOnMenu}></button> */}
                <nav className='header-un-auth__container-auth'>
                    <Link className='header-un-auth__signup' to={'/signup'}>Регистрация</Link>
                    <Link className='header-un-auth__signin' to={'/signin'}>Войти</Link>
                </nav>
            </div>
        </header>
    )
}