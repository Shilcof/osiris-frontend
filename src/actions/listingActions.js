const baseURL = 'http://localhost:3000'

export const fetchListings = () => {
    return (dispatch) => {
        dispatch({type: "LOADING_LISTINGS"})
        fetch(baseURL + '/listings')
            .then(res=>res.json())
            .then(listings => dispatch({type: "ADD_LISTINGS", listings})) 
    }
}