import { useState } from "react"
import { useDispatch } from "react-redux"

const ListingForm = (props) => {

    const dispatch = useDispatch

    const [listing, setListing] = useState({
        name: "",
        description: ""
    })

    const handleChange = e => {
        setListing({[e.target.id]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()

    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-row" >
                <div className="col-md-12 mb-3">
                    <label htmlFor="name" className="form-label" >Listing name</label>
                    <input type="text" id="name" value={listing.name} onChange={handleChange} className="form-control" ></input>
                    {/* <%= invalid_feedback(@user, :username) %> */}
                </div>
            </div>
            <div className="form-row" >
                <div className="col-md-12 mb-3">
                    <label htmlFor="description" className="form-label" >Listing description</label>
                    <textarea rows="5" id="description" value={listing.description} onChange={handleChange} className="form-control" ></textarea>
                </div>
            </div>
            <input type="submit" className="btn btn-outline-primary btn-block" ></input>
        </form>
    )
}

export default ListingForm