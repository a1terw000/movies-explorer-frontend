import { useLocation } from 'react-router-dom'
import MoviesCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css'

export default function MoviesCardList() {
    const { pathname } = useLocation()
    return (
        <div className='page__unique'>
            <section className='moviesCardList'>
                <ul className='cards'>
                    <li className='card'><MoviesCard /></li>
                    <li className='card'><MoviesCard /></li>
                    <li className='card'><MoviesCard /></li>
                    <li className='card'><MoviesCard /></li>
                    <li className='card'><MoviesCard /></li>
                    <li className='card'><MoviesCard /></li>
                    <li className='card'><MoviesCard /></li>
                    <li className='card'><MoviesCard /></li>
                </ul>
                {pathname === '/movies' && <button type='button' className='moviesCardList__buttonLoadingMoreCards'>Ещё</button>}
            </section>
        </div>
    )
}