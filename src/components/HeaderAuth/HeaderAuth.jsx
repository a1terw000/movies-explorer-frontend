import './HeaderAuth.css';
import '../HeaderUnAuth/HeaderUnAuth.css'
import headerLogo from '../../images/main__logo.svg'
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function HeaderAuth() {
    const {pathname} = useLocation()
    const [isOpen, setIsOpen] = useState(false)
    function clickOnMenu() {
        if(isOpen) {
            setIsOpen(false)
        } else {
            setIsOpen(true)
        }
    }
    return (
        <header className={`header-auth ${pathname === '/' ? 'header-un-auth' : ''}`}>
            <div className='header-auth__content'>
                <Link to={'/'} className='header-auth__home'><img src={headerLogo} alt="Логотип сайта" /></Link>
                <nav className={`header-auth__container ${isOpen ? 'header-auth__container_open' : ''}`}>
                    <div className='header-auth__container-account'>
                        <div className='header-auth__container-films'>
                            <Link to={'/'} className='header-auth__link-to-home'>Главная</Link>
                            <Link to={'/movies'} className={`header-auth__link-to-films ${pathname === '/movies' ? 'header-auth__link-to-films_type_active' : ''}`}>Фильмы</Link>
                            <Link to={'/saved-movies'} className={`header-auth__link-to-films ${pathname === '/saved-movies' ? 'header-auth__link-to-films_type_active' : ''}`}>Сохранённые&nbsp;фильмы</Link>
                        </div>
                        <div className='header-auth__container-profile'>
                            <Link className='header-auth__account' to={'/profile'}>Аккаунт</Link>
                            <div className='header-auth__background'><div className='header-auth__account-icon'></div></div>
                        </div>
                        <button type='button' className='header-auth__button-close-menu' onClick={clickOnMenu}></button>
                    </div>
                </nav>
                <button type='button' className='header-auth__button-open-menu' onClick={clickOnMenu}></button>
            </div>
        </header>
    )
}