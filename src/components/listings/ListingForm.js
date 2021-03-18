import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { postListing, redirected } from "../../actions/listingActions"
import { resetErrors } from "../../actions/errorActions"

const ListingForm = (props) => {

    const shouldRedirect = useSelector(state=>state.listings.shouldRedirect)
    const show = useSelector(state=>state.listings.show)
    const errors = useSelector(state=>state.errors)

    const dispatch = useDispatch()

    useEffect(()=>{
        return () => {
            dispatch(redirected)
            dispatch(resetErrors)
        }
    }, [dispatch])

    const [listing, setListing] = useState({
        name: "",
        description: "",
        seller_id: "4",
        image: {}
    })

    const handleChange = e => {
        setListing({...listing, [e.target.id]: e.target.value})
    }

    const handleFileAddition = e => {
        setListing({...listing, image: e.target.files[0]})
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(postListing(listing))
    }

    if (shouldRedirect) props.history.push(`/listings/${show.id}`)

    return (
        <form onSubmit={handleSubmit}>

            <div className="form-row" >
                <div className="col-md-12 mb-3">
                    <label htmlFor="name" className="form-label" >Listing name</label>
                    <input type="text" id="name" value={listing.name} onChange={handleChange} 
                    className={errors.name ? "form-control is-invalid" : "form-control"} 
                    ></input>
                    {errors.name ? <div className="invalid-feedback" >Name {errors.name.join(", ")}</div> : null}
                </div>
            </div>

            <div className="form-row" >
                <div className="col-md-12 mb-3">
                    <label htmlFor="description" className="form-label" >Listing description</label>
                    <textarea rows="5" id="description" value={listing.description} onChange={handleChange} 
                    className={errors.description ? "form-control is-invalid" : "form-control"}
                    ></textarea>
                    {errors.description ? <div className="invalid-feedback" >Description {errors.description.join(", ")}</div> : null}
                </div>
            </div>

            <div className="input-group mb-3">
                <div className="custom-file">
                    <input type="file" className="custom-file-input" id="image" onChange={handleFileAddition}></input>
                    <label className="custom-file-label" htmlFor="image">{listing.image.name ? listing.image.name : "Choose file"}</label>
                </div>
            </div>

            <input type="submit" className="btn btn-outline-primary btn-block" ></input>

        </form>
    )
}

export default ListingForm