import { useState } from "react"

const ListingForm = (props) => {

    const [listing, setListing] = useState({
        name: "",
        description: ""
    })

    const handleChange = e => {
        setListing({[e.target.name]: e.target.value})
    }

    return (
        <form>
            <div class="form-row" >
                <div class="col-md-12 mb-3">
                    <label for="listing-name" ></label>
                    <input type="text" id="listing-name" value={listing.name} onChange={handleChange} ></input>
                    {/* <%= invalid_feedback(@user, :username) %> */}
                </div>
            </div>
            <div class="form-row" >
                <div class="col-md-12 mb-3">
                </div>
            </div>
            <input type="submit" className="btn btn-outline-primary btn-block" ></input>
        </form>
    )
}

export default ListingForm