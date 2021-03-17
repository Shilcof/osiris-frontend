const ListingCard = (props) => {
    return (
        <div className="col pb-3">
            <div className="card h-100">
                {props.listing.image_url ? <img src={props.listing.image_url} className="card-img" alt="listing" ></img> : 
                <img src="https://miro.medium.com/max/2600/1*mtGIfXRPG2FG_zbKJhwWzA.png" className="card-img" alt="listing" ></img>}
                <div className="card-img-overlay">
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