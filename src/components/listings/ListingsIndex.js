import { useCallback, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import { fetchListings, resetAllLoaded } from '../../actions/listingActions'

import Listing from './Card/ListingCard'
import LoadingListing from './LoadingListing'

const ListingsIndex = () => {

    const listings = useSelector(store=>store.listings[store.listings.filter])
    const pageNumber = useSelector(store=>store.listings[store.listings.filter+"PageNumber"])
    const allLoaded = useSelector(store=>store.listings.allLoaded)
    const loading = useSelector(store=>store.listings.loading)
    const dispatch = useDispatch()

    useEffect(()=> {
        if(pageNumber === 0) fetchListings(pageNumber)(dispatch)
    }, [pageNumber, dispatch, listings])

    //  -------------- Infinite Scrolling Start ---------------------

    // check if element is fully in the screen
    const isBottom = (el) => {
        return el.getBoundingClientRect().bottom <= window.innerHeight;
    }

    // fetch more listings if not loading and element fully in screen
    const trackScrolling = useCallback(() => {
        const wrappedElement = document.getElementById('listing-container');
        if (isBottom(wrappedElement) && !loading ) {
            fetchListings(pageNumber)(dispatch)
        }
    },[pageNumber, dispatch, loading]);
    
    // add event listener for scrolling if there are more to load
    useEffect(() => {
        if (!allLoaded) document.addEventListener('scroll', trackScrolling);
        return () => {
            document.removeEventListener('scroll', trackScrolling)
        };
    },[trackScrolling, allLoaded, dispatch])

    // reset all loaded on unmount
    useEffect(() => {
        return () => dispatch(resetAllLoaded())
    }, [dispatch])

    //  --------------  Infinite Scrolling End  ---------------------

    return (
        <>
            <div id="listing-container" >
                <div className="row row-cols-1 row-cols-md-3 gx-3">
                    {listings.map(listing=><Listing key={listing.id} listing={listing} />)}
                </div>
            </div>
            {loading ? <LoadingListing /> : null}
        </>
    )
}

export default ListingsIndex