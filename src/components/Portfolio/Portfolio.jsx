import './Portfolio.css'
import { Link } from "react-router-dom";

export default function Portfolio() {
    return (
        <div className='page__unique'>
            <section className='portfolio'>
                <h2 className='portfolio__title'>Портфолио</h2>
                <ul className='portfolio__list'>
                    <li className='portfolio__item'>Статичный сайт
                        <Link to={'#'} className='portfolio__link'>
                            <button className='portfolio__button'></button>
                        </Link>
                    </li>
                    <li className='portfolio__item'>Адаптивный сайт
                        <Link className='portfolio__link' to={'https://a1terw000.github.io/russian-travel/#'}>
                            <button className='portfolio__button'></button>
                        </Link>
                    </li>
                    <li className='portfolio__item'>Одностраничное приложение
                        <Link to={'https://a1terw000.github.io/mesto/'} className='portfolio__link'>
                            <button className='portfolio__button'></button>
                        </Link>
                    </li>
                </ul>
            </section>
        </div>
    )
}