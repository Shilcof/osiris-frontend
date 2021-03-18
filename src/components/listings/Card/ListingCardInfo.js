const ListingCardInfo = props => {
    return (
        <div className="card-img-overlay">
            <h5 className="card-title text-light">
                {props.listing.name}
            </h5>
            <p className="card-text text-light">
                { props.listing.description.length > 100 ? props.listing.description.slice(0,100)+"..." : props.listing.description }
            </p>
        </div>
    )
}

export default ListingCardInfo