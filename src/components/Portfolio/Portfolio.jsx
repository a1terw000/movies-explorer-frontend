import './Portfolio.css'
import { Link } from "react-router-dom";

export default function Portfolio() {
    return (
        <section className='portfolio'>
            <div className='portfolio__elements'>
                <h2 className='portfolio__title'>Портфолио</h2>
                <ul className='portfolio__list'>
                    <li className='portfolio__item'>
                        <Link to={'#'} className='portfolio__link' target='_blank'>
                            <p className='portfolio__text'>Статичный сайт</p>
                            <button className='portfolio__button'></button>
                        </Link>
                    </li>
                    <li className='portfolio__item'>
                        <Link className='portfolio__link' to={'https://a1terw000.github.io/russian-travel/#'} target='_blank'>
                            <p className='portfolio__text'>Адаптивный сайт</p>
                            <button className='portfolio__button'></button>
                        </Link>
                    </li>
                    <li className='portfolio__item'>
                        <Link className='portfolio__link' to={'https://a1terw000.github.io/russian-travel/#'} target='_blank'>
                            <p className='portfolio__text'>Одностраничное приложение</p>
                            <button className='portfolio__button'></button>
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    )
}