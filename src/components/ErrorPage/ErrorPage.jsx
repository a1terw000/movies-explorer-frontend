import { Link, useNavigate } from 'react-router-dom'
import './ErrorPage.css'

export default function ErrorPage() {
    const navigate = useNavigate()
    return (
        <div className='page__unique'>
            <section className='errorPage'>
                <h2 className='errorPage__title'>404</h2>
                <p className='errorPage__text'>Страница не найдена</p>
                <Link onClick={() => navigate(-1)} className='errorPage__link'>Назад</Link>
            </section>
        </div>
        
    )
}