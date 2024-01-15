import MoviesCardList from '../MoviesCardList/MoviesCardList'
import SearchForm from '../SearchForm/SearchForm'
import './SavedMovies.css'

export default function SavedMovies() {
    return (
        <div className='page__unique'>
            <SearchForm />
            <MoviesCardList />
        </div>
    )
}