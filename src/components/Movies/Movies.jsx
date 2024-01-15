import MoviesCardList from '../MoviesCardList/MoviesCardList'
import SearchForm from '../SearchForm/SearchForm'
import './Movies.css'

export default function Movies() {
    return (
        <div className='page__unique'>
            <SearchForm />
            <MoviesCardList />
        </div>
    )
}