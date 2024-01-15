import { Route, Routes } from 'react-router-dom'
import CurrentUserContext from '../contexts/CurrentUserContext'
import './App.css'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Main from './Main/Main'
import Register from './Register/Register'
import Login from './Login/Login'
import Profile from './Profile/Profile'
import Movies from './Movies/Movies'
import SavedMovies from './SavedMovies/SavedMovies'
import ErrorPage from './ErrorPage/ErrorPage'

export default function App() {
    return (
        <CurrentUserContext.Provider>
            <div className="page">
                <Routes>
                    <Route path='/' element={
                        <div className='page__container'>
                            <Header />
                            <Main />
                            <Footer />
                        </div>
                    } />
                    <Route path='/signup' element={
                        <div className='page__container'>
                            <Register />
                        </div>
                    }
                    />
                    <Route path='/signin' element={
                        <div className='page__container'>
                            <Login />
                        </div>
                    }
                    />
                    <Route path='/profile' element={
                        <div className='page__container'>
                            <Header disabledColor={true}/>
                            <Profile />
                        </div>
                    }
                    />
                    <Route path='/movies' element={
                        <div className='page__container'>
                            <Header disabledColor={true}/>
                            <Movies />
                            <Footer />
                        </div>
                    }
                    />
                    <Route path='/saved-movies' element={
                        <div className='page__container'>
                            <Header disabledColor={true}/>
                            <SavedMovies />
                            <Footer />
                        </div>
                    }
                    />
                    <Route path='*' element={
                        <div className='page__container'>
                            <ErrorPage />
                        </div>
                    }
                    />
                </Routes>
            </div>
        </CurrentUserContext.Provider>
    )
}