import ListingForm from '../listings/ListingForm'

const LoggedIn = props => {  
    return (
        <div>
            <div className="text-center py-4">
                <h1 style={{fontSize: 50}}>Welcome {props.currentSeller.email.split("@")[0]}</h1>
            </div>
            <div className="text-center py-4">
                <h3>
                    Add a new listing here
                </h3>
            </div>
            <div className="container"  style={{maxWidth: "500px"}}>
                <ListingForm />
            </div>
        </div>
    )
}

export default LoggedIn