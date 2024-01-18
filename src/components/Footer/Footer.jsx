import './Footer.css';
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__elements'>
                <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
                <div className='footer__container'>
                    <p className='footer__subtitle'>© 2024</p>
                    <nav className='footer__nav'>
                        <Link className='footer__link' to={'https://practicum.yandex.ru/'} target='_blank'>Яндекс.Практикум</Link>
                        <Link className='footer__link' to={'https://github.com/a1terw000'} target='_blank'>Github</Link>
                    </nav>
                    <p className='footer__subtitle2'>© 2024</p>
                </div>
            </div>
        </footer>
    )
}