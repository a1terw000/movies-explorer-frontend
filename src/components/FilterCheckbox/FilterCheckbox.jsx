import { useLocation } from 'react-router-dom'
import './FilterCheckbox.css'

export default function FilterCheckbox({ isCheckboxState, setIsCheckboxState, searchMovies, inputValue }) {
    const { pathname } = useLocation()

    return (
        <div className='filterCheckbox'>
            <label className='checkbox' htmlFor='checkbox'>
                <input type="checkbox" className='checkbox__input' id='checkbox' checked={isCheckboxState} onChange={() => {
                    setIsCheckboxState(!isCheckboxState)
                    searchMovies(inputValue || '')
                    if (pathname === '/movies') {
                        localStorage.setItem('checkboxState', !isCheckboxState)
                    }
                }} />
                <span className='checkbox__text'>Короткометражки</span>
            </label>
        </div>
    )
}