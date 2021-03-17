import { useCallback, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import {fetchListings} from '../../actions/listingActions'

import Listing from './ListingCard'
import LoadingListing from './LoadingListing'

const ListingsIndex = (props) => {

    const listings = useSelector(store=>store.listings[store.listings.filter])
    const pageNumber = useSelector(store=>store.listings[store.listings.filter+"PageNumber"])
    const loading = useSelector(store=>store.loading)
    const dispatch = useDispatch()

    useEffect(()=> {
        if(pageNumber === 0) fetchListings(pageNumber)(dispatch)
    }, [pageNumber, dispatch, listings])

    const isBottom = (el) => {
        return el.getBoundingClientRect().bottom <= window.innerHeight;
    }

    const trackScrolling = useCallback(() => {
        const wrappedElement = document.getElementById('listing-container');
        if (isBottom(wrappedElement)) {
            if (!loading) fetchListings(pageNumber)(dispatch)
        }
    },[pageNumber, dispatch, loading]);
    
    useEffect(() => {
        document.addEventListener('scroll', trackScrolling);
        return () => document.removeEventListener('scroll', trackScrolling);
    },[trackScrolling])
        
    return (
        <>
            <div id="listing-container" className="container" style={{maxWidth: 1000}}>
                <div className="row row-cols-1 row-cols-md-3 gx-3">
                    {listings.map(listing=><Listing key={listing.id} listing={listing} />)}
                </div>
            </div>
            {loading ? <LoadingListing /> : null}
        </>
    )
}

export default ListingsIndex