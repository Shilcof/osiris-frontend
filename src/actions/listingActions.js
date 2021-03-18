import baseURL from './baseURL'

import { addErrors, resetErrors } from './errorActions'

const listingURL = baseURL + '/listings'

const configObj = input => {
    return {
        method: 'POST',
        body: input
    }
}

export const addListings = listings => {
    return ({
        type: "ADD_LISTINGS",
        listings
    })
}

export const addListing = listing => {
    return ({
        type: "ADD_LISTING",
        listing
    })
}

export const showListing = listing => {
    return ({
        type: "SHOW_LISTING",
        listing
    })
}

export const loadingListings = () => {
    return ({
        type: "LOADING_LISTINGS"
    })
}

export const redirected = () => {
    return ({
        type: "REDIRECTED"
    })
}

export const fetchListings = (pageNumber) => {
    return (dispatch) => {
        dispatch(loadingListings())
        fetch(listingURL + '?q=' + pageNumber)
            .then(res=>res.json())
            .then(listings => dispatch(addListings(listings)))
    }
}

export const fetchListing = (id) => {
    return (dispatch) => {
        dispatch(loadingListings())
        dispatch(resetErrors())
        fetch(listingURL + '/' + id)
            .then(res=>res.json())
            .then(listing => {
                if (listing.name) {
                    dispatch(showListing(listing))
                } else {
                    throw listing;
                }
            })
            .catch(errors => {dispatch(addErrors(errors))})
    }
}

export const postListing = listing => {
    const formData = new FormData()
    formData.append('name', listing.name)
    formData.append('description', listing.description)
    formData.append('seller_id', listing.seller_id)
    formData.append('image', listing.image)
    return (dispatch) => {
        dispatch(resetErrors())
        fetch(listingURL, configObj(formData))
            .then(res=>res.json())
            .then(listing => {
                if (listing.errors) {
                    throw listing;
                } else {
                    dispatch(addListing(listing))
                }
            })
            .catch(errors => dispatch(addErrors(errors)))
    }
}