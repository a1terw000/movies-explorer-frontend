import './FilterCheckbox.css'

export default function FilterCheckbox() {
    return (
        <div className='filterCheckbox'>
            <label className='checkbox' for='checkbox'>
                <input type="checkbox" className='checkbox__input' id='checkbox' />
                <span className='checkbox__text'>Короткометражки</span>
            </label>
        </div>
    )
}