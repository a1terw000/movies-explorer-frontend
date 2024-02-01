import { useLocation } from 'react-router-dom'
import MoviesCard from '../MoviesCard/MoviesCard'
import './MoviesCardList.css'

export default function MoviesCardList({ checkLength, movies, showMoreFilms, initialMoviesList, savedMovies, handleLikeMovie, onDeleteMovie }) {
    const { pathname } = useLocation()

    return (
        <section className='moviesCardList'>
            <div className='moviesCardList__elements'>
                <ul className={`moviesCardList__cards ${movies.length === 0 ? 'moviesCardList__cards_flex' : ''}`}>
                    {movies.length === 0 && checkLength ?
                        <p className='moviesCardList__undefindMovies'>Ничего не найдено</p>
                        :
                        (pathname === '/movies')
                            ?
                            movies.slice(0, initialMoviesList).map((movie) => {
                                return (
                                    <li className='moviesCardList__card' key={movie.id}>
                                        <MoviesCard movie={movie} handleLikeMovie={handleLikeMovie} savedMovies={savedMovies} />
                                    </li>
                                )
                            })
                            :
                            movies.map((savedMovie) => {
                                return (
                                    <li className='moviesCardList__card' key={savedMovie.movieId}>
                                        <MoviesCard savedMovie={savedMovie} onDeleteMovie={onDeleteMovie} />
                                    </li>
                                )
                            })
                    }
                </ul>
                {pathname === '/movies' && movies.length > initialMoviesList && <button type='button' onClick={showMoreFilms} className={`${movies.length === 0 ? 'moviesCardList__buttonLoadingMoreCards_none' : 'moviesCardList__buttonLoadingMoreCards'}`}>Ещё</button>}
            </div>
        </section>
    )
}