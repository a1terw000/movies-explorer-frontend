import FilterCheckbox from '../FilterCheckbox/FilterCheckbox'
import searchForm__icon from '../../images/icon (1).svg'
import './SearchForm.css'

export default function SearchForm() {
    return (
        <section className='searchForm'>
            <div className='searchForm__elements'>
                <form className='searchForm__form'>
                    <fieldset className='searchForm__fieldset'>
                        <img src={searchForm__icon} alt="иконка" className='searchForm__icon' />
                        <input type="text" className='searchForm__input' placeholder='Фильм' />
                        <button className='searchForm__search-button'>Найти</button>
                    </fieldset>
                </form>
                <FilterCheckbox />
            </div>
        </section>
    )
}