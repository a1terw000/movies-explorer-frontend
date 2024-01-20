import './AboutMe.css'
import { Link } from "react-router-dom";

export default function AboutMe() {
    return (
        <section className='aboutMe'>
            <div className='aboutMe__elements'>
                <h2 className='aboutMe__title'>Студент</h2>
                <div className='aboutMe__container'>
                    <div className='aboutMe__image2'></div>
                    <div className='aboutMe__content'>
                        <div>
                            <p className='aboutMe__name'>Данил</p>
                            <p className='aboutMe__subtitle'>Фронтенд-разработчик, 16 лет</p>
                            <p className='aboutMe__description'>Я родился в городе Ростов-на-Дону. Учусь в 11 классе, а также люблю кодить.</p>
                        </div>
                        <Link to={'https://github.com/a1terw000'} className='aboutMe__link' target='_blank'>Github</Link>
                    </div>
                    <div className='aboutMe__image'></div>
                </div>
            </div>
        </section>
    )
}