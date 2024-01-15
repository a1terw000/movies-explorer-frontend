import { useLocation } from 'react-router-dom'
import './LikeButton.css'

export default function LikeButton() {
    const { pathname } = useLocation()
    return (
        <div>
            {pathname === '/movies' ?
                <button className='moviesCard__likeButton'><div className='moviesCard__likeIcon'></div></button>
                :
                <button className='moviesCard__likeButton'><div className='moviesCard__trashIcon'></div></button>
            }
        </div>
    )
}