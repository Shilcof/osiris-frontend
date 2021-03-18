export const addErrors = errors => {
    return ({
        type: "ADD_ERRORS",
        errors
    })
}

export const resetErrors = () => {
    return ({
        type: "RESET_ERRORS"
    })
}