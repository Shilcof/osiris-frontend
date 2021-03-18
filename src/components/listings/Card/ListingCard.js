import { useState } from "react"

import ListingCardInfo from "./ListingCardInfo"
import ListingCardImage from "./ListingCardImage"

const ListingCard = (props) => {

    const [hover, setHover] = useState(false)

    const onMouseEnter = () => {
        setHover(true)
    }

    const onMouseLeave = () => {
        setHover(false)
    }

    return (
        <div className="col pb-3" >
            <div className="card h-100" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
                <ListingCardImage image_url={props.listing.image_url} hover={hover} />
                {hover ? <ListingCardInfo listing={props.listing} /> : null}
            </div>
        </div>
    )
}

export default ListingCard