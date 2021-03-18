export default function errorReducer(state = {}, action) {
    switch (action.type) {

        case "ADD_ERRORS":
            return errors

        case "RESET_ERRORS":
            return {}

        default:
            return state
    }
}
