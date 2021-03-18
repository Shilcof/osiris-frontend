const ListingCardImage = props => {
    return (
        <img 
            src={props.image_url ? props.image_url : "https://miro.medium.com/max/2600/1*mtGIfXRPG2FG_zbKJhwWzA.png"}
            className="card-img" 
            style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: props.hover ? "brightness(75%)" : null
            }} 
            alt="listing" 
        >
        </img>
    )
}

export default ListingCardImage