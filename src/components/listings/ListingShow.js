import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchListing } from "../../actions/listingActions"

import NotFound from "../NotFound"

const ListingShow = (props) => {

    const listing = useSelector(store=>store.listings.show)
    const loading = useSelector(store=>store.listings.loading)
    const errors = useSelector(store=>store.errors)
    const dispatch = useDispatch()

    useEffect(()=> {
        fetchListing(props.match.params.listingId)(dispatch)
    }, [dispatch, props.match.params.listingId])

    const showListing = () => {
        return (
            <>
                {listing.image_url ? <img src={listing.image_url} className="card-img" alt="listing" ></img> : 
                <img src="https://miro.medium.com/max/2600/1*mtGIfXRPG2FG_zbKJhwWzA.png" className="card-img" alt="listing" ></img>}
                <div className="card-img-overlay">
                    <h5 className="card-title">
                        {listing.name}
                    </h5>
                    <p className="card-text">
                        {listing.description.slice(0,100)+"..."}
                    </p>
                </div>
            </>
        )
    }

    return (
        <>
            { loading ? "LOADING" : null }
            { listing.name ? <div className="card h-100">{showListing()}</div> : null }
            { Object.keys(errors).length === 0 ? null : <NotFound match={props.match} />}
        </>
    )
}

export default ListingShow