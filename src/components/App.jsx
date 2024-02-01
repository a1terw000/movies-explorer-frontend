import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import CurrentUserContext from '../contexts/CurrentUserContext'
import './App.css'
import Main from './Main/Main'
import Register from './Register/Register'
import Login from './Login/Login'
import Profile from './Profile/Profile'
import Movies from './Movies/Movies'
import SavedMovies from './SavedMovies/SavedMovies'
import ErrorPage from './ErrorPage/ErrorPage'
import mainApi from '../utils/MainApi'
import { useCallback, useEffect, useState } from 'react'
import ProtectedRoute from './ProtectedRoute/ProtectedRoute'
import Preloader from './Preloader/Preloader'
import moviesApi from '../utils/MoviesApi'
import { durationShortMovies } from '../utils/constants'

export default function App() {
    const [allMovies, setAllMovies] = useState([]) // все фильмы из апишки
    const [filteredMovies, setFilteredMovies] = useState([]) // отфильтрованные фильмы
    const [savedFilteredMovies, setSavedFilteredMovies] = useState([]) // отфильтрованные сохраненные фильмы
    const [isCheckboxState, setIsCheckboxState] = useState(false) // отслеживаем состояние чекбокса короткометражек
    const [isSavedCheckboxState, setIsSavedCheckboxState] = useState(false) // отслеживаем состояние чекбокса сохранённых короткометражек
    const [valueInput, setValueInput] = useState('') // строка из инпута поиска фильмов
    const [valueInputSavedMovies, setValueInputSavedMovies] = useState('') // строка из инпута сохранённых фильмов
    const [isLoading, setIsLoading] = useState(true) // для прелоадера
    const [loggedIn, setLoggedIn] = useState(false) // проверка логирования
    const [currentUser, setCurrentUser] = useState({}) // юзер который авторизовался
    const [savedMovies, setSavedMovies] = useState([]) // массив лайкнутых юзером фильмов
    const [isResult, setIsResult] = useState(false) // результат изменения профиля
    const [registerError, setRegisterError] = useState(false)
    const [loginError, setLoginError] = useState(false)
    const [profileError, setProfileError] = useState(false)
    const [checkLength, setCheckLength] = useState(false)
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const jwt = localStorage.getItem('jwt')

    // Регистрация + Аунтефикация + Профиль
    useEffect(() => {
        if (jwt) {
            Promise.all([mainApi.getPresentUser(jwt), mainApi.getSavedMovies(jwt)])
                .then(([userData, moviesData]) => {
                    setCurrentUser(userData)
                    setSavedMovies(moviesData)
                    setLoggedIn(true)
                    if (allMovies.length === 0) {
                        setCheckLength(true)
                    } else {
                        setCheckLength(false)
                    }
                })
                .catch((err) => {
                    console.error(err)
                })
                .finally(() => setIsLoading(false))
        } else {
            setLoggedIn(false)
            setIsLoading(false)
            localStorage.clear()
            setFilteredMovies([])
            setSavedFilteredMovies([])
            setValueInput('')
            setValueInputSavedMovies('')
            setIsCheckboxState(false)
            setIsSavedCheckboxState(false)
            setAllMovies([])
            setCurrentUser({})
            setCheckLength(false)
        }
    }, [loggedIn, jwt, allMovies.length])

    function handleLogin(email, password) {
        mainApi.login(email, password)
            .then((res) => {
                localStorage.setItem('jwt', res.token)
                setLoggedIn(true)
                navigate('/movies')
            })
            .catch((err) => {
                console.log(err)
                localStorage.clear()
                setLoggedIn(false)
                setLoginError(true)
            })
    }

    function handleRegister(name, email, password) {
        mainApi.register(name, email, password)
            .then((res) => {
                handleLogin(email, password)
            })
            .catch((err) => {
                console.error(err)
                setLoggedIn(false)
                setRegisterError(true)
            })
    }

    function editUserData(name, email) {
        mainApi.editUserData(name, email, localStorage.jwt)
            .then((res) => {
                setIsResult(true)
                setCurrentUser(res)
            })
            .catch((err) => {
                console.error(err)
                setProfileError(true)
            })
    }

    useEffect(() => {
        if (pathname !== '/profile') {
            setIsResult(false)
            setProfileError(false)
        }
    }, [pathname, setIsResult])

    function logOut() {
        localStorage.clear()
        setLoggedIn(false)
        setIsLoading(false)
        setFilteredMovies([])
        setSavedFilteredMovies([])
        setValueInput('')
        setValueInputSavedMovies('')
        setIsCheckboxState(false)
        setIsSavedCheckboxState(false)
        setAllMovies([])
        setCurrentUser({})
        setCheckLength(false)
        navigate('/')
    }

    // Поиск фильмов

    function filterMovies(movies, inputValue) {
        return movies.filter((movie) => {
            return movie.nameRU.toLowerCase().includes(inputValue.toLowerCase())
        })
    }

    function filterShortMovies(movies) {
        return movies.filter((movie) => {
            return movie.duration < durationShortMovies
        })
    }

    const filter = useCallback((movies, inputValue, checkboxState) => {
        localStorage.setItem('movies', JSON.stringify(movies))
        localStorage.setItem('inputValue', JSON.stringify(inputValue))
        localStorage.setItem('checkboxState', JSON.stringify(checkboxState))
        setFilteredMovies(isCheckboxState ? filterShortMovies(filterMovies(movies, inputValue)) : filterMovies(movies, inputValue))
        setValueInput(inputValue)
    }, [isCheckboxState])

    function searchMovies(inputValue) {
        if (allMovies.length === 0) {
            setIsLoading(true)
            moviesApi.getMovies()
                .then((movies) => {
                    setAllMovies(movies)
                    filter(movies, inputValue, isCheckboxState)
                })
                .catch((err) => {
                    console.error(err)
                })
                .finally(() => setIsLoading(false))
        } else (
            filter(allMovies, inputValue, isCheckboxState)
        )
    }

    useEffect(() => {
        if (localStorage.movies && localStorage.inputValue && localStorage.checkboxState) {
            const movies = JSON.parse(localStorage.getItem('movies'))
            const inputValue = JSON.parse(localStorage.getItem('inputValue'))
            const checkboxState = JSON.parse(localStorage.getItem('checkboxState'))
            setAllMovies(movies)
            setValueInput(inputValue)
            setIsCheckboxState(checkboxState)
            filter(movies, inputValue, checkboxState)
        }
    }, [filter])

    const filterSavedMovies = useCallback((movies, inputValue) => {
        setSavedFilteredMovies(isSavedCheckboxState ? filterShortMovies(filterMovies(movies, inputValue)) : filterMovies(movies, inputValue))
        setValueInputSavedMovies(inputValue)
    }, [isSavedCheckboxState])

    function searchSavedMovies(valueInputSavedMovies) {
        filterSavedMovies(savedMovies, valueInputSavedMovies, isSavedCheckboxState)
    }
    
    useEffect(() => {
        if(savedFilteredMovies.length === 0) {
            setCheckLength(false)
        }
        setValueInputSavedMovies(valueInputSavedMovies)
        setIsSavedCheckboxState(isSavedCheckboxState)
        filterSavedMovies(savedMovies, valueInputSavedMovies, isSavedCheckboxState)
    }, [filterSavedMovies, savedMovies, valueInputSavedMovies, isSavedCheckboxState, savedFilteredMovies.length])

    // лайк и удаление фильма

    function onDeleteMovie(movieId) {
        mainApi.deleteMovie(movieId, localStorage.jwt)
            .then(() => {
                setSavedMovies(savedMovies.filter((movie) => movie._id !== movieId))
            })
            .catch((err) => {
                console.error(err)
            })
    }

    function handleLikeMovie(movie) {
        const isLike = savedMovies.some((film) => movie.id === film.movieId)
        const deleteThisFilm = savedMovies.filter((film) => {
            return film.movieId === movie.id
        })
        if (isLike) {
            onDeleteMovie(deleteThisFilm[0]._id)
        } else {
            mainApi.likeMovie(movie, localStorage.jwt)
                .then(res => {
                    setSavedMovies([res, ...savedMovies])
                })
                .catch((err) => {
                    console.error(err)
                })
        }
    }

    return (
        <>
            <CurrentUserContext.Provider value={currentUser}>
                <div className="page">
                    {isLoading ? <Preloader /> :
                        <Routes>
                            <Route path='/' element={
                                <Main loggedIn={loggedIn} />
                            } />
                            {loggedIn
                                ? ''
                                : <Route path='/signup' element={
                                    <Register handleRegister={handleRegister} registerError={registerError} setRegisterError={setRegisterError} />
                                }
                                />
                            }
                            {loggedIn
                                ? ''
                                : <Route path='/signin' element={
                                    <Login handleLogin={handleLogin} setLoginError={setLoginError} loginError={loginError} />
                                }
                                />
                            }
                            <Route path='/profile' element={
                                <ProtectedRoute
                                    element={Profile}
                                    logOut={logOut}
                                    loggedIn={loggedIn}
                                    editUserData={editUserData}
                                    profileError={profileError}
                                    setProfileError={setProfileError}
                                    isResult={isResult}
                                    setIsResult={setIsResult}
                                />
                            }
                            />
                            <Route path='/movies' element={
                                <ProtectedRoute
                                    element={Movies}
                                    loggedIn={loggedIn}
                                    isLoading={isLoading}
                                    searchMovies={searchMovies}
                                    setIsCheckboxState={setIsCheckboxState}
                                    isCheckboxState={isCheckboxState}
                                    movies={filteredMovies}
                                    valueInput={valueInput}
                                    savedMovies={savedMovies}
                                    handleLikeMovie={handleLikeMovie}
                                    checkLength={checkLength}
                                    setValueInputSavedMovies={setValueInputSavedMovies}
                                    setIsSavedCheckboxState={setIsSavedCheckboxState}
                                />
                            }
                            />
                            <Route path='/saved-movies' element={
                                <ProtectedRoute
                                    element={SavedMovies}
                                    loggedIn={loggedIn}
                                    isLoading={isLoading}
                                    searchMovies={searchSavedMovies}
                                    setIsCheckboxState={setIsSavedCheckboxState}
                                    isCheckboxState={isSavedCheckboxState}
                                    movies={savedFilteredMovies}
                                    valueInput={valueInputSavedMovies}
                                    onDeleteMovie={onDeleteMovie}
                                    checkLength={checkLength}
                                    setValueInputSavedMovies={setValueInputSavedMovies}
                                    setIsSavedCheckboxState={setIsSavedCheckboxState}
                                />
                            }
                            />
                            <Route path='*' element={
                                <ErrorPage />
                            }
                            />
                        </Routes>
                    }
                </div>
            </CurrentUserContext.Provider>
        </>

    )
}