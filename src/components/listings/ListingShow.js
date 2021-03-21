import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { fetchListing } from "../../actions/listingActions"
import { resetErrors } from "../../actions/errorActions"

import NotFound from "../errors/NotFound"
import ListingCardImage from "./Card/ListingCardImage"

const ListingShow = (props) => {

    const listing = useSelector(store=>store.listings.show)
    const loading = useSelector(store=>store.listings.loading)
    const errors = useSelector(store=>store.errors)
    const dispatch = useDispatch()

    useEffect(()=> {
        fetchListing(props.match.params.listingId)(dispatch)
        return dispatch(resetErrors())
    }, [dispatch, props.match.params.listingId])

    const showListing = () => {
        return (
            <>
                <ListingCardImage image_url={listing.image_url} />
                <div className="card-footer">
                    <h5 className="card-title">
                        {listing.name}
                    </h5>
                    <p className="card-text">
                        {listing.description}
                    </p>
                    <h6 className="card-text">
                        Contact the seller at: {listing.seller_email}
                    </h6>
                </div>
            </>
        )
    }

    return (
        <>
            { loading && "LOADING" }
            { listing.name && <div className="card h-100">{showListing()}</div> }
            { Object.keys(errors).length !== 0 && <NotFound match={props.match} />}
        </>
    )
}

export default ListingShow