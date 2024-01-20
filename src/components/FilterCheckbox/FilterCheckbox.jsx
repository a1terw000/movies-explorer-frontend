import './FilterCheckbox.css'

export default function FilterCheckbox() {
    return (
        <div className='filterCheckbox'>
            <label className='checkbox' htmlFor='checkbox'>
                <input type="checkbox" className='checkbox__input' id='checkbox' />
                <span className='checkbox__text'>Короткометражки</span>
            </label>
        </div>
    )
}