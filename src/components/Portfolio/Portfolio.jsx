import './Portfolio.css'
import { Link } from "react-router-dom";
import portfolioLink from '../../images/portfolio__link.svg'

export default function Portfolio() {
    return (
        <section className='portfolio'>
            <div className='portfolio__elements'>
                <h2 className='portfolio__title'>Портфолио</h2>
                <ul className='portfolio__list'>
                    <li className='portfolio__item'>
                        <Link to={'https://a1terw000.github.io/how-to-learn/'} className='portfolio__link' target='_blank'>
                            <p className='portfolio__text'>Статичный сайт</p>
                            <img alt='link-to-site' src={portfolioLink} className='portfolio__image'></img>
                        </Link>
                    </li>
                    <li className='portfolio__item'>
                        <Link className='portfolio__link' to={'https://a1terw000.github.io/russian-travel/#'} target='_blank'>
                            <p className='portfolio__text'>Адаптивный сайт</p>
                            <img alt='link-to-site' src={portfolioLink} className='portfolio__image'></img>
                        </Link>
                    </li>
                    <li className='portfolio__item'>
                        <Link className='portfolio__link' to={'https://lazya.nomoredomainsmonster.ru/'} target='_blank'>
                            <p className='portfolio__text'>Одностраничное приложение</p>
                            <img alt='link-to-site' src={portfolioLink} className='portfolio__image'></img>
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
    )
}