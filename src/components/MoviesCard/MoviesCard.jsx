import './MoviesCard.css'
import LikeButton from '../LikeButton/LikeButton'
import { useLocation } from 'react-router-dom';

export default function MoviesCard({ movie, savedMovie, handleLikeMovie, onDeleteMovie, savedMovies }) {
    const { pathname } = useLocation()
    function getTimeFromMins(mins) {
        if (mins >= 60) {
            let hours = Math.trunc(mins / 60);
            let minutes = mins % 60;
            return hours + 'ч ' + minutes + 'м'
        } else {
            return mins + 'м'
        }
    };
    
    return (
        (pathname === '/movies') ?
            <>
                <img src={`https://api.nomoreparties.co${movie.image.url}`} alt={movie.name} className='moviesCard__image' />
                <div className='moviesCard__integration'>
                    <h2 className='moviesCard__name'>{movie.nameRU}</h2>
                    <LikeButton movie={movie} handleLikeMovie={handleLikeMovie} savedMovies={savedMovies}/>
                </div>
                <p className='moviesCard__duration'>{getTimeFromMins(movie.duration)}</p>
            </>
            :
            <>
                <img src={savedMovie.image} alt={savedMovie.name} className='moviesCard__image' />
                <div className='moviesCard__integration'>
                    <h2 className='moviesCard__name'>{savedMovie.nameRU}</h2>
                    <LikeButton savedMovie={savedMovie} onDeleteMovie={onDeleteMovie}/>
                </div>
                <p className='moviesCard__duration'>{getTimeFromMins(savedMovie.duration)}</p>
            </>
    )
}