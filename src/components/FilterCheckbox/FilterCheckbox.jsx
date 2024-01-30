import './FilterCheckbox.css'

export default function FilterCheckbox({ isCheckboxState, setIsCheckboxState }) {
    return (
        <div className='filterCheckbox'>
            <label className='checkbox' htmlFor='checkbox'>
                <input type="checkbox" className='checkbox__input' id='checkbox' checked={isCheckboxState} onChange={() => {
                    setIsCheckboxState(!isCheckboxState)
                    localStorage.setItem('checkboxState', !isCheckboxState)
                }} />
                <span className='checkbox__text'>Короткометражки</span>
            </label>
        </div>
    )
}