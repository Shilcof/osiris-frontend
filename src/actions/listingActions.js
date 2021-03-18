import baseURL from './baseURL'

import { addErrors, resetErrors } from './errorActions'

const listingURL = baseURL + '/listings'

const configObj = input => {
    return {
        method: 'POST',
        // headers: {
        //     "Content-Type": "multipart/form-data",
        //     "Accepts": "application/json"
        // },
        body: input
    }
}

export const redirected = () => {
    return ({
        type: "REDIRECTED"
    })
}

export const fetchListings = (pageNumber) => {
    return (dispatch) => {
        dispatch({type: "LOADING_LISTINGS"})
        fetch(listingURL + '?q=' + pageNumber)
            .then(res=>res.json())
            .then(listings => dispatch({type: "ADD_LISTINGS", listings})) 
    }
}

export const fetchListing = (id) => {
    return (dispatch) => {
        dispatch({type: "LOADING_LISTINGS"})
        fetch(listingURL + '/' + id)
            .then(res=>res.json())
            .then(listing => {
                if (listing.name) {
                    dispatch({type: "SHOW_LISTING", listing})
                } else {
                    throw listing;
                }
            })
            .catch(errors => {dispatch(addErrors(errors))})
    }
}

export const postListing = listing => {
    console.log(listing)
    const formData = new FormData()
    formData.append('name', listing.name)
    formData.append('description', listing.description)
    formData.append('seller_id', listing.seller_id)
    formData.append('image', listing.image)
    console.log(formData)
    return (dispatch) => {
        fetch(listingURL, configObj(formData))
            .then(res=>res.json())
            .then(listing => dispatch({type: "ADD_LISTING", listing}))
            .catch(errors => dispatch({type: "ADD_ERRORS", errors}))
    }
}