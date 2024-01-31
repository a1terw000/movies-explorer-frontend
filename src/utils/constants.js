// константы для ошибок регистрации
export const RegisterConflictError = 'Пользователь с таким email уже существует'
export const RegisterIncorrectError = 'При регистрации пользователя произошла ошибка'

// константы для ошибок логина
export const LoginNotFoundError = 'Вы ввели неправильный логин или пароль'
export const LoginIncorrectError = 'Вы ввели некоректные данные'

// константы для ошибок профиля
export const ProfileConflictError = 'Пользователь с таким email уже существует'
export const ProfileIncorrectError = 'При обновлении профиля произошла ошибка'

// регулярка емайла
export const EmailRegex = "^\\S+@\\S+\\.\\S+$"

// Константы для добавления карточек путем клика на кнопку "Ещё"
export const ComputerWidth = 1279
export const NotebookWidth = 1023
export const TelephoneWidth = 767
export const ComputerInitialMovies = 16
export const NotebookInitialMovies = 12
export const TabletInitialMovies = 8
export const TelephoneInitialMovies = 5
export const openMoviesOnComputer = 4
export const openMoviesOnNotebook = 3
export const openMoviesOnTelephone = 2

// функция перевода минут в часы и минуты
export function getTimeFromMins(mins) {
    if (mins >= 60) {
        let hours = Math.trunc(mins / 60);
        let minutes = mins % 60;
        return hours + 'ч ' + minutes + 'м'
    } else {
        return mins + 'м'
    }
};