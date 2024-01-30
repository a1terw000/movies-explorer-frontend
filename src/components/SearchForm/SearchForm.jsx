import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import searchForm__icon from '../../images/icon (1).svg'
import './SearchForm.css'
import useFormValidation from '../../hooks/useFormValidation'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function SearchForm({ searchMovies, isCheckboxState, setIsCheckboxState, valueInput }) {
    const { values, handleChange, errors, isValid, setValue } = useFormValidation()
    const { pathname } = useLocation()
    function onSubmit(evt) {
        evt.preventDefault()
        searchMovies(values.film)
    }

    useEffect(() => {
        setValue("film", valueInput)
    }, [setValue, valueInput])
    
    useEffect(() => {
        if( pathname === '/saved-movies') {
            setValue("film", '')
            setIsCheckboxState(true)
        }
    }, [pathname, setValue, setIsCheckboxState])
    
    return (
        <section className='searchForm'>
            <div className='searchForm__elements'>
                <form className='searchForm__form' onSubmit={onSubmit} noValidate>
                    <fieldset className='searchForm__fieldset'>
                        <img src={searchForm__icon} alt="иконка" className='searchForm__icon' />
                        <input value={values.film || ''} name='film' id='film' type="text" className='searchForm__input' placeholder='Фильм' onChange={handleChange} minLength={1} required />
                        <button className={`searchForm__search-button ${!isValid ? 'searchForm__search-button_disabled' : ''}`} disabled={!isValid}>Найти</button>
                    </fieldset>
                </form>
                <FilterCheckbox isCheckboxState={isCheckboxState} setIsCheckboxState={setIsCheckboxState} />
            </div>
            <span className='searchForm__input-error'>{errors.film}</span>
        </section>
    )
}