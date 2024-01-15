import './Profile.css'

export default function Profile() {
    return (
        <div className='page__auth'>
            <section className='profile'>
                <h2 className='profile__title'>Привет, Данил!</h2>
                <form className='profile__form'>
                    <fieldset className="profile__fieldset">
                        <div className='profile__input-container'>
                            <p className='profile__input-name'>Имя</p>
                            <input type="text" name='name' className='profile__input' placeholder='Данил' disabled/>
                        </div>
                        <div className='profile__input-container'>
                            <p className='profile__input-name'>E-mail</p>
                            <input type="email" name='email' className='profile__input' placeholder='123@123.su' disabled/>   
                        </div>
                    </fieldset>
                    <button className='profile__edit-button' type='button'>Редактировать</button>
                    <button className='profile__logOut-button' type='button'>Выйти&nbsp;из&nbsp;аккаунта</button>
                </form>
            </section>
        </div>
    )
}