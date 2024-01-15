import './MoviesCard.css'
import cardImage from '../../images/cardImage.png'
import LikeButton from '../LikeButton/LikeButton'

export default function MoviesCard() {
    return (
        <div className='moviesCard'>
            <img src={cardImage} alt="" className='moviesCard__image' />
            <div className='moviesCard__integration'>
                <h2 className='moviesCard__name'>33 слова о дизайне</h2>
                <LikeButton />
            </div>
            <p className='moviesCard__duration'>1ч42м</p>
        </div>
    )
}