import './MoviesCard.css'
import LikeButton from '../LikeButton/LikeButton'
import { Link, useLocation } from 'react-router-dom';
import { getTimeFromMins } from '../../utils/constants';

export default function MoviesCard({ movie, savedMovie, handleLikeMovie, onDeleteMovie, savedMovies }) {
    const { pathname } = useLocation()
    
    return (
        (pathname === '/movies') ?
            <>
                <Link to={movie.trailerLink} target='_blank'><img src={`https://api.nomoreparties.co${movie.image.url}`} alt={movie.name} className='moviesCard__image' /></Link>
                <div className='moviesCard__integration'>
                    <h2 className='moviesCard__name'>{movie.nameRU}</h2>
                    <LikeButton movie={movie} handleLikeMovie={handleLikeMovie} savedMovies={savedMovies}/>
                </div>
                <p className='moviesCard__duration'>{getTimeFromMins(movie.duration)}</p>
            </>
            :
            <>
                <Link to={savedMovie.trailerLink} target='_blank'><img src={savedMovie.image} alt={savedMovie.name} className='moviesCard__image' /></Link>
                <div className='moviesCard__integration'>
                    <h2 className='moviesCard__name'>{savedMovie.nameRU}</h2>
                    <LikeButton savedMovie={savedMovie} onDeleteMovie={onDeleteMovie}/>
                </div>
                <p className='moviesCard__duration'>{getTimeFromMins(savedMovie.duration)}</p>
            </>
    )
}