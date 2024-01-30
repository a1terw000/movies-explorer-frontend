import { useContext, useEffect, useState } from 'react'
import './Profile.css'
import HeaderAuth from '../HeaderAuth/HeaderAuth'
import CurrentUserContext from '../../contexts/CurrentUserContext'
import useFormValidation from '../../hooks/useFormValidation'
import { profileIncorrectError } from '../../utils/constants'

export default function Profile({ logOut, editUserData, profileError, setProfileError, isResult, setIsResult }) {
    const currentUser = useContext(CurrentUserContext)
    const { values, errors, handleChange, setValue, isValid } = useFormValidation()
    const [isClick, setIsClick] = useState(false)

    useEffect(() => {
        setValue("name", currentUser.name)
        setValue("email", currentUser.email)
        setProfileError('')
    }, [currentUser, setValue, setProfileError, setIsResult])

    function onClick() {
        if (!isClick) {
            setIsClick(true)
        } else {
            setIsClick(false)
        }
    }

    function onSubmit(event) {
        event.preventDefault()
        editUserData(values.name, values.email)
        setIsClick(false)
    }

    return (
        <>
            <HeaderAuth />
            <section className='profile'>
                <h2 className='profile__title'>{`Привет, ${currentUser.name}!`}</h2>
                <form className='profile__form' onSubmit={onSubmit}>
                    <fieldset className="profile__fieldset">
                        <div className='profile__input-container'>
                            <p className='profile__input-name'>Имя</p>
                            <input type="text" name='name' disabled={isClick ? false : true} onChange={handleChange} value={values.name || ''} minLength={2} maxLength={10} required className={errors.name ? (isClick ? 'profile__input profile__input_hover profile__input_error' : 'profile__input') : (isClick ? 'profile__input profile__input_hover' : 'profile__input')} />
                        </div>
                        <span className='profile__input-error'>{errors.name}</span>

                        <div className='profile__input-container'>
                            <p className='profile__input-name'>E-mail</p>
                            <input type="email" name='email' disabled={isClick ? false : true} onChange={handleChange} value={values.email || ''} required className={errors.email ? (isClick ? 'profile__input profile__input_hover profile__input_error' : 'profile__input') : (isClick ? 'profile__input profile__input_hover' : 'profile__input')} />
                        </div>
                        <span className='profile__input-error'>{errors.email}</span>
                    </fieldset>
                    {
                        isClick ?
                            <>
                                <button disabled={!isValid || (currentUser.name === values.name && currentUser.email === values.email)} type='submit' className={!isValid || (currentUser.name === values.name && currentUser.email === values.email) ? 'profile__editUserDataButton profile__editUserDataButton_disabled' : 'profile__editUserDataButton'}>Сохранить</button>
                            </>
                            :
                            <div className='profile__container-edit'>
                                {profileError ? <span className='profile__error'>{profileIncorrectError}</span> : ''}
                                {isResult ? <span className='profile__result'>Успешное редактирование данных!</span> : ''}
                                <button className='profile__edit-button' type='button' onClick={onClick}>Редактировать</button>
                                <button className='profile__logOut-button' type='button' onClick={logOut}>Выйти&nbsp;из&nbsp;аккаунта</button>
                            </ div>
                    }

                </form>
            </section>
        </>
    )
}