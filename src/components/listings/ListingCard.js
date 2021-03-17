const ListingCard = (props) => {
    return (
        <div className="col pb-3">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">
                        {props.listing.name}
                    </h5>
                    <p className="card-text">
                        {props.listing.description.slice(0,100)+"..."}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ListingCard