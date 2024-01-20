import { useLocation } from 'react-router-dom'
import './LikeButton.css'

export default function LikeButton() {
    const { pathname } = useLocation()
    return (
        <div>
            {pathname === '/movies' ?
                <button className='moviesCard__likeButton' aria-label="Добавить фильм в сохранённые"></button>
                :
                <button className='moviesCard__trashButton' aria-label="Удалить фильм из сохранённых"></button>
            }
        </div>
    )
}