import { useState } from 'react'
import './Profile.css'

export default function Profile() {
    const [isClick, setIsClick] = useState(false)
    function editUserData() {
        if (!isClick) {
            setIsClick(true)
        } else {
            setIsClick(false)
        }
    }
    return (
        <section className='profile'>
            <h2 className='profile__title'>Привет, Данил!</h2>
            <form className='profile__form'>
                <fieldset className="profile__fieldset">
                    <div className='profile__input-container'>
                        <p className='profile__input-name'>Имя</p>
                        <input type="text" name='name' className={isClick ? 'profile__input profile__input_hover' : 'profile__input'} placeholder='Данил' disabled={isClick ? false : true} />
                    </div>
                    <div className='profile__input-container'>
                        <p className='profile__input-name'>E-mail</p>
                        <input type="email" name='email' className={isClick ? 'profile__input profile__input_hover' : 'profile__input'} placeholder='123@123.su' disabled={isClick ? false : true} />
                    </div>
                </fieldset>
                <button className={isClick ? 'profile__edit-button profile__edit-button_none' : 'profile__edit-button'} type='button' onClick={editUserData}>Редактировать</button>
                <button className={isClick ? 'profile__logOut-button profile__logOut-button_none' : 'profile__logOut-button'} type='button'>Выйти&nbsp;из&nbsp;аккаунта</button>
                <button className={isClick ? 'profile__editUserDataButton profile__editUserDataButton_active' : 'profile__editUserDataButton'} type='submit'>Сохранить</button>
            </form>
        </section>
    )
}