import Footer from '../Footer/Footer'
import HeaderAuth from '../HeaderAuth/HeaderAuth'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Preloader from '../Preloader/Preloader'
import SearchForm from '../SearchForm/SearchForm'
import './SavedMovies.css'

export default function SavedMovies({ setIsSavedCheckboxState, setValueInputSavedMovies, checkLength, movies, isLoading, searchMovies, setIsCheckboxState, isCheckboxState, valueInput, onDeleteMovie }) {
    return (
        <>
            <HeaderAuth />
            <main>
                <SearchForm setIsSavedCheckboxState={setIsSavedCheckboxState} setValueInputSavedMovies={setValueInputSavedMovies} searchMovies={searchMovies} setIsCheckboxState={setIsCheckboxState} isCheckboxState={isCheckboxState} valueInput={valueInput} />
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