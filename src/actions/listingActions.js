import baseURL from './baseURL'

const listingURL = baseURL + '/listings'

const configObj = input => {
    return {
        method: 'POST',
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
        fetch(listingURL + '?q=' + pageNumber)
            .then(res=>res.json())
            .then(listings => dispatch({type: "ADD_LISTINGS", listings})) 
    }
}

export const postListing = listing => {
    return (dispatch) => {
        dispatch({type: "LOADING_LISTINGS"})
        fetch(listingURL, configObj(listing))
            .then(res=>res.json())
            .then(listing => dispatch({type: "ADD_LISTING", listing}))
            .catch(errors => dispatch({type: "ADD_ERRORS", errors}))
    }
}