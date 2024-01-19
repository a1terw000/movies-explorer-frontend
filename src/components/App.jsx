import { Route, Routes } from 'react-router-dom'
import CurrentUserContext from '../contexts/CurrentUserContext'
import './App.css'
import Footer from './Footer/Footer'
import HeaderUnAuth from './HeaderUnAuth/HeaderUnAuth'
import Main from './Main/Main'
import Register from './Register/Register'
import Login from './Login/Login'
import Profile from './Profile/Profile'
import Movies from './Movies/Movies'
import SavedMovies from './SavedMovies/SavedMovies'
import ErrorPage from './ErrorPage/ErrorPage'
import HeaderAuth from './HeaderAuth/HeaderAuth'

export default function App() {
    return (
        <CurrentUserContext.Provider value={''}>
            <div className="page">
                <Routes>
                    <Route path='/' element={
                        <>
                            <HeaderUnAuth />
                            <Main />
                            <Footer />
                        </>    
                    } />
                    <Route path='/signup' element={
                        <Register />
                    }
                    />
                    <Route path='/signin' element={
                        <Login />
                    }
                    />
                    <Route path='/profile' element={
                        <>
                            <HeaderAuth />
                            <Profile />
                        </> 
                    }
                    />
                    <Route path='/movies' element={
                        <>
                            <HeaderAuth />
                            <Movies />
                            <Footer />
                        </>
                    }
                    />
                    <Route path='/saved-movies' element={
                        <>
                            <HeaderAuth />
                            <SavedMovies />
                            <Footer />
                        </>
                    }
                    />
                    <Route path='*' element={
                        <ErrorPage />
                    }
                    />
                </Routes>
            </div>
        </CurrentUserContext.Provider>
    )
}