class MainApi {
    constructor(options) {
        this._baseUrl = options.baseUrl;
    }

    _checkResponse(res) { return res.ok ? res.json() : Promise.reject({ message: 'ошибка' }) }

    register(name, email, password) {
        return fetch(`${this._baseUrl}/signup`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            })
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                } else {
                    return Promise.reject({ message: "Ошибка регистрации" })
                }
            })
    }
    login(email, password) {
        return fetch(`${this._baseUrl}/signin`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                } else {
                    return Promise.reject({ message: "Ошибка авторизации" })
                }
            })
    }
    getPresentUser(token) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                } else {
                    return Promise.reject({ message: "Ошибка получения данных пользователя" })
                }
            })
    }
    editUserData(name, email, token) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                name: name,
                email: email,
            })
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                } else {
                    return Promise.reject({ message: "Ошибка редактирования данных пользователя" })
                }
            })
    }
    getSavedMovies(token) {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'GET',
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                } else {
                    return Promise.reject({ message: "Ошибка получения сохранённых фильмов" })
                }
            })
    }
    likeMovie(movie, token) {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({
                country: movie.country,
                director: movie.director,
                duration: movie.duration,
                year: movie.year,
                description: movie.description,
                image: `https://api.nomoreparties.co${movie.image.url}`,
                trailerLink: movie.trailerLink,
                thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
                movieId: movie.id,
                nameRU: movie.nameRU,
                nameEN: movie.nameEN
            })
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                } else {
                    return Promise.reject({ message: "Ошибка сохранения фильма" })
                }
            })
    }
    deleteMovie(cardId, token) {
        return fetch(`${this._baseUrl}/movies/${cardId}`, {
            method: 'DELETE',
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
            .then((res) => {
                if (res.ok) {
                    return res.json()
                } else {
                    return Promise.reject({ message: "Ошибка удаления фильма" })
                }
            })
    }
}

const mainApi = new MainApi({
    baseUrl: 'http://localhost:3000',
});

export default mainApi