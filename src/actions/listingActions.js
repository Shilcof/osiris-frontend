const baseURL = 'http://localhost:3000'

const configObj = (input) => {
    return {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
            "Accepts": "application/json"
        },
        body: JSON.stringify(input)
    }
}

export const fetchListings = (pageNumber) => {
    return (dispatch) => {
        dispatch({type: "LOADING_LISTINGS"})
        fetch(baseURL + '/listings', configObj(pageNumber))
            .then(res=>res.json())
            .then(listings => dispatch({type: "ADD_LISTINGS", listings})) 
    }
}