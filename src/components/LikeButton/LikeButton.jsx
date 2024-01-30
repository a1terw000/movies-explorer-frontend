import { useLocation } from 'react-router-dom'
import './LikeButton.css'
import { useEffect, useState } from 'react'

export default function LikeButton({ movie, savedMovie, handleLikeMovie, onDeleteMovie, savedMovies }) {
    const { pathname } = useLocation()
    const [isLiked, setIsLiked] = useState(false)

    useEffect(() => {
        if (pathname === '/movies')
          setIsLiked(savedMovies.some((film) => movie.id === film.movieId))
      }, [savedMovies, movie, setIsLiked, pathname])

    function handleLike() {
        if(savedMovies.some((film) => movie.id === film.id)) {
            handleLikeMovie(movie)
            setIsLiked(true)
        } else {
            handleLikeMovie(movie)
            setIsLiked(false)
        }
    }
    
    return (
        <div>
            {pathname === '/movies' ?
                <button onClick={handleLike} className={`moviesCard__likeButton ${isLiked ? 'moviesCard__likeButton_active' : ''}`} aria-label="Добавить фильм в сохранённые"></button>
                :
                <button onClick={() => onDeleteMovie(savedMovie._id)} className='moviesCard__trashButton' aria-label="Удалить фильм из сохранённых" ></button>
            }
        </div>
    )
}