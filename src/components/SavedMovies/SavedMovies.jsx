import Footer from '../Footer/Footer'
import HeaderAuth from '../HeaderAuth/HeaderAuth'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Preloader from '../Preloader/Preloader'
import SearchForm from '../SearchForm/SearchForm'
import './SavedMovies.css'

export default function SavedMovies({ checkLength, movies, isLoading, searchMovies, setIsCheckboxState, isCheckboxState, valueInput, onDeleteMovie }) {
    return (
        <>
            <HeaderAuth />
            <main>
                <SearchForm searchMovies={searchMovies} setIsCheckboxState={setIsCheckboxState} isCheckboxState={isCheckboxState} valueInput={valueInput} />
                {isLoading
                    ?
                    <Preloader />
                    :
                    <MoviesCardList checkLength={checkLength} movies={movies} onDeleteMovie={onDeleteMovie} />
                }
            </main>
            <Footer />
        </>
    )
}