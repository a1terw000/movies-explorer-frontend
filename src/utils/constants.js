// константы для ошибок регистрации
export const registerConflictError = 'Пользователь с таким email уже существует'
export const registerIncorrectError = 'При регистрации пользователя произошла ошибка'

// константы для ошибок логина
export const loginNotFoundError = 'Вы ввели неправильный логин или пароль'
export const loginIncorrectError = 'Вы ввели некоректные данные'

// константы для ошибок профиля
export const profileConflictError = 'Пользователь с таким email уже существует'
export const profileIncorrectError = 'При обновлении профиля произошла ошибка'

export const regexEmail = /^\S+@\S+\.\S+$/
