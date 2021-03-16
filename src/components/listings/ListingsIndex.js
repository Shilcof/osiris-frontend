import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import {fetchListings} from '../../actions/listingActions'

import Listing from './Listing'

const ListingsIndex = (props) => {

    const listings = useSelector(store=>store.listings[store.listings.filter])
    const pageNumber = useSelector(store=>store.listings[store.listings.filter+"PageNumber"])
    const dispatch = useDispatch()

    useEffect(()=> {
        if(listings.length === 0) fetchListings(pageNumber)(dispatch)
    }, [pageNumber, dispatch, listings])
        
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-3 gx-3">
                {listings.map(listing=><Listing key={listing.id} listing={listing} />)}
            </div>
            {pageNumber}
        </div>
    )
}

export default ListingsIndex