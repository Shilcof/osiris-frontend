import { useEffect, useState } from "react"

import ListingCardInfo from "./ListingCardInfo"
import ListingCardImage from "./ListingCardImage"
import { Link } from "react-router-dom"

import { resetErrors } from "../../../actions/errorActions"
import { useDispatch } from "react-redux"

const ListingCard = (props) => {

    const [hover, setHover] = useState(false)

    const dispatch = useDispatch()

    useEffect(()=>{
        return () => {
            dispatch(resetErrors)
        }
    }, [dispatch])

    const onMouseEnter = () => {
        setHover(true)
    }

    const onMouseLeave = () => {
        setHover(false)
    }

    return (
        <div className="col pb-3" >
                <Link to={`/listings/${props.listing.id}`}>
                <div className="card h-100" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
                    <ListingCardImage image_url={props.listing.image_url} hover={hover} />
                    {hover ? <ListingCardInfo listing={props.listing} /> : null}
                </div>
            </Link>
        </div>
    )
}

export default ListingCard