import baseURL from './baseURL'
import { addErrors } from './errorActions'

export const loginSeller = seller => {
    return ({
        type: "LOGIN_SELLER",
        seller
    })
}

export const logoutSeller = () => {
    return ({
        type: "LOGOUT_SELLER"
    })
}

export const loadingSeller = () => {
    return ({
        type: "LOADING_SELLER"
    })
}

export const createSeller = seller => {
    const configObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(seller)
    }

    return (dispatch) => {
        dispatch(loadingSeller())
        fetch(baseURL + `/sellers`, configObj)
        .then(res => res.json())
        .then(data => {
            if (data.errors) {
                throw data;
            } else {
                sessionStorage.setItem('accessToken', data.jwt)
                dispatch(loginSeller(data.seller))
            }
        })
        .catch(errors => dispatch(addErrors(errors)))
    }
}

export const autoLogin = () => {
    const token = sessionStorage.accessToken
    const configObj = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${ token }`
        }
    }

    return (dispatch) => {
        if (token) {
            fetch(baseURL + `/profile`, configObj)
            .then(res => res.json())
            .then(data => {
                if (!!data.errors) {
                    sessionStorage.removeItem('accessToken')
                } else {
                    dispatch(loginSeller(data.seller))
                }
            })
        }
    }
}

export const login = seller => {
    const configObj = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(seller)
    }

    return (dispatch) => {
        dispatch(loadingSeller())

        fetch(baseURL + `/login`, configObj)
        .then(res => res.json())
        .then(data => {
            if (!!data.errors) {
                alert('Invalid Credentials')
            } else {
                sessionStorage.setItem('accessToken', data.jwt)
                dispatch(loginSeller(data.seller))
            }
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        sessionStorage.removeItem('accessToken')
        dispatch(logoutSeller())
    }
}