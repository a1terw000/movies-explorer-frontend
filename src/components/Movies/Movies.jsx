import { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import HeaderAuth from '../HeaderAuth/HeaderAuth'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Preloader from '../Preloader/Preloader'
import SearchForm from '../SearchForm/SearchForm'
import './Movies.css'
import { ComputerInitialMovies, ComputerWidth, NotebookInitialMovies, NotebookWidth, TabletInitialMovies, TelephoneInitialMovies, TelephoneWidth, openMoviesOnComputer, openMoviesOnNotebook, openMoviesOnTelephone } from '../../utils/constants'

export default function Movies({ isLoading, searchMovies, setIsCheckboxState, isCheckboxState, movies, valueInput, savedMovies, handleLikeMovie, onDeleteMovie }) {
    const [initialMoviesList, setInitialMoviesList] = useState(0)

    function loadingInitialMovies() {
        const currentWidth = window.innerWidth
        if (currentWidth > ComputerWidth) {
            setInitialMoviesList(ComputerInitialMovies)
        } else if (currentWidth > NotebookWidth) {
            setInitialMoviesList(NotebookInitialMovies)
        } else if (currentWidth > TelephoneWidth) {
            setInitialMoviesList(TabletInitialMovies)
        } else {
            setInitialMoviesList(TelephoneInitialMovies)
        }
    }

    useEffect(() => {
        setTimeout(() => {
            window.addEventListener('resize', loadingInitialMovies())
        }, 1000)
    }, [])

    useEffect(() => {
        loadingInitialMovies()
    }, [])

    function showMoreFilms() {
        const currentWidth = window.innerWidth
        if (currentWidth > ComputerWidth) {
            setInitialMoviesList(initialMoviesList + openMoviesOnComputer)
        } else if (currentWidth > NotebookWidth) {
            setInitialMoviesList(initialMoviesList + openMoviesOnNotebook)
        } else {
            setInitialMoviesList(initialMoviesList + openMoviesOnTelephone)
        }
    }

    return (
        <>
            <HeaderAuth />
            <main>
                <SearchForm loadingInitialMovies={loadingInitialMovies} searchMovies={searchMovies} setIsCheckboxState={setIsCheckboxState} isCheckboxState={isCheckboxState} valueInput={valueInput} />
                {isLoading
                    ?
                    <Preloader />
                    :
                    <MoviesCardList movies={movies} showMoreFilms={showMoreFilms} initialMoviesList={initialMoviesList} savedMovies={savedMovies} handleLikeMovie={handleLikeMovie} onDeleteMovie={onDeleteMovie} />}

            </main>
            <Footer />
        </>
    )
}