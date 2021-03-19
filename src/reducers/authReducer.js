export default function authReducer(state = {
    current_seller: null,
    loading: false
}, action) {
    switch (action.type) {

        case "LOGIN_SELLER":
            return {current_seller: action.seller, loading: false}

        case "LOGOUT_SELLER":
            return {current_seller: null}

        case "LOADING_SELLER":
            return {...state, loading: true}

        default:
            return state
    }
}
