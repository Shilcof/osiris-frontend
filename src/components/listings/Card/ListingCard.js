import { useState } from "react"

import ListingCardInfo from "./ListingCardInfo"

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
                <img 
                    src={props.listing.image_url ? props.listing.image_url : "https://miro.medium.com/max/2600/1*mtGIfXRPG2FG_zbKJhwWzA.png"}
                    className="card-img" 
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        filter: hover ? "brightness(75%)" : null
                    }} 
                    alt="listing" 
                >
                </img>
                {hover ? <ListingCardInfo listing={props.listing} /> : null}
            </div>
        </div>
    )
}

export default ListingCard