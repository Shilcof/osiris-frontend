import { useState } from "react"
import { useDispatch } from "react-redux"

import { postListing } from "../../actions/listingActions"

const ListingForm = (props) => {

    const dispatch = useDispatch()

    const [listing, setListing] = useState({
        name: "",
        description: "",
        seller_id: "4"
    })

    const handleChange = e => {
        setListing({...listing, [e.target.id]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(postListing(listing))
    }

    return (
        <form onSubmit={handleSubmit}>

            <div className="form-row" >
                <div className="col-md-12 mb-3">
                    <label htmlFor="name" className="form-label" >Listing name</label>
                    <input type="text" id="name" value={listing.name} onChange={handleChange} className="form-control" ></input>
                    {/* attach errors here from error reducer */}
                </div>
            </div>

            <div className="form-row" >
                <div className="col-md-12 mb-3">
                    <label htmlFor="description" className="form-label" >Listing description</label>
                    <textarea rows="5" id="description" value={listing.description} onChange={handleChange} className="form-control" ></textarea>
                </div>
            </div>

            <div className="input-group mb-3">
                <div className="custom-file">
                    <input type="file" className="custom-file-input" id="image"></input>
                    <label className="custom-file-label" htmlFor="image">Choose file</label>
                </div>
            </div>

            <input type="submit" className="btn btn-outline-primary btn-block" ></input>
            
        </form>
    )
}

export default ListingForm


// const displayErrors = (errors) => {
//     const messages = errors.message.split(',')
//     errorMessages.innerHTML = `
//         <p>${messages.length} errors prevented saving this track.</p>
//     `
//     for (const error of messages) {
//         errorMessages.innerHTML += `<li>${error}.</li>`
//     }
// }