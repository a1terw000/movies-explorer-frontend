import './Header.css';
import headerLogo from '../../images/main__logo.svg'
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Header({ disabledColor }) {
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
        <div className={disabledColor ? '' : 'page__header'}>
            <header className='header'>
                <Link to={'/'} className='header__home'><img src={headerLogo} alt="Логотип сайта" className="header__logo" /></Link>
                <nav className={`header__container ${isOpen ? 'header__container_open' : ''}`}>
                    <div className='header__container_type_account'>
                        <div className='header__container_type_films'>
                            <Link to={'/'} className='header__image'>Главная</Link>
                            <Link to={'/movies'} className={`header__link-to-films ${pathname === '/movies' ? 'header__link-to-films_type_active' : ''}`}>Фильмы</Link>
                            <Link to={'/saved-movies'} className={`header__link-to-films ${pathname === '/saved-movies' ? 'header__link-to-films_type_active' : ''}`}>Сохранённые&nbsp;фильмы</Link>
                        </div>
                        <div className='header__container_type_profile'>
                            <Link className='header__account' to={'/profile'}>Аккаунт</Link>
                            <div className='header__background'><div className='header__account-icon'></div></div>
                        </div>
                        <button type='button' className='header__button-close-menu' onClick={clickOnMenu}></button>
                    </div>
                </nav>
                <button type='button' className='header__button-open-menu' onClick={clickOnMenu}></button>
                <nav className='header__container_type_auth'>
                    <Link className='header__signup' to={'/signup'}>Регистрация</Link>
                    <Link className='header__signin' to={'/signin'}>Войти</Link>
                </nav>
            </header>
        </div>
    )
}