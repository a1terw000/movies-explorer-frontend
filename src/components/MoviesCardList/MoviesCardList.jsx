import { useLocation } from 'react-router-dom'
import MoviesCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css'

export default function MoviesCardList() {
    const { pathname } = useLocation()
    return (
        <section className='moviesCardList'>
            <div className='moviesCardList__elements'>
                <ul className='moviesCardList__cards'>
                    <li className='moviesCardList__card'><MoviesCard /></li>
                    <li className='card'><MoviesCard /></li>
                    <li className='card'><MoviesCard /></li>
                    <li className='card'><MoviesCard /></li>
                    <li className='card'><MoviesCard /></li>
                    <li className='card'><MoviesCard /></li>
                    <li className='card'><MoviesCard /></li>
                    <li className='card'><MoviesCard /></li>
                </ul>
                {pathname === '/movies' && <button type='button' className='moviesCardList__buttonLoadingMoreCards'>Ещё</button>}
            </div>
        </section>
    )
}