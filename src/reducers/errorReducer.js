export default function errorReducer(state = {}, action) {
    switch (action.type) {

        case "ADD_ERRORS":
            return action.errors

        case "RESET_ERRORS":
            return {}

        default:
            return state
    }
}
