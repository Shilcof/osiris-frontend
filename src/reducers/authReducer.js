export default function authReducer(state = {
    currentSeller: null,
    loading: false
}, action) {
    switch (action.type) {

        case "LOGIN_SELLER":
            return {currentSeller: action.seller, loading: false}

        case "LOGOUT_SELLER":
            return {currentSeller: null}

        case "LOADING_SELLER":
            return {...state, loading: true}

        default:
            return state
    }
}
