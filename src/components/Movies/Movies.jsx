import { useEffect, useState } from 'react'
import Footer from '../Footer/Footer'
import HeaderAuth from '../HeaderAuth/HeaderAuth'
import MoviesCardList from '../MoviesCardList/MoviesCardList'
import Preloader from '../Preloader/Preloader'
import SearchForm from '../SearchForm/SearchForm'
import './Movies.css'

export default function Movies({ isLoading, searchMovies, setIsCheckboxState, isCheckboxState, movies, valueInput, savedMovies, handleLikeMovie, onDeleteMovie}) {
    const [initialMoviesList, setInitialMoviesList] = useState(0)
    
    function loadingInitialMovies() {
        const currentWidth = window.innerWidth
        if (currentWidth > 1279) {
            setInitialMoviesList(16)
        } else if (currentWidth > 1023) {
            setInitialMoviesList(12)
        } else if (currentWidth > 767) {
            setInitialMoviesList(8)
        } else {
            setInitialMoviesList(5)
        }
    }

    useEffect(() => {
        setTimeout(() => {
            window.addEventListener('resize', loadingInitialMovies)
        }, 1000)
    }, [])

    useEffect(() => {
        loadingInitialMovies()
    }, [])

    function showMoreFilms() {
        const currentWidth = window.innerWidth
        if (currentWidth > 1279) {
            setInitialMoviesList(initialMoviesList + 4)
        } else if (currentWidth > 1023) {
            setInitialMoviesList(initialMoviesList + 3)
        } else {
            setInitialMoviesList(initialMoviesList + 2)
        }
    }

    return (
        <>
            <HeaderAuth />
            <main>
                <SearchForm searchMovies={searchMovies} setIsCheckboxState={setIsCheckboxState} isCheckboxState={isCheckboxState} valueInput={valueInput} />
                {isLoading
                    ?
                    <Preloader />
                    :
                    <MoviesCardList movies={movies} showMoreFilms={showMoreFilms} initialMoviesList={initialMoviesList} savedMovies={savedMovies} handleLikeMovie={handleLikeMovie}onDeleteMovie={onDeleteMovie}/>}

            </main>
            <Footer />
        </>
    )
}