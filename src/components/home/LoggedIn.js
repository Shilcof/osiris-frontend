import { useEffect, useState } from "react"
import ListingForm from '../listings/ListingForm'

const LoggedIn = props => { 
    
    const [location, setLocation] = useState({ lat: 51.501364, lng: -0.141890 })

    // geolocator location
    const success = position => {
        const coordinates = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        }
        setLocation(coordinates)
    }

    useEffect(()=>{
        if (navigator.geolocation) {
            navigator.permissions
                .query({ name: "geolocation" })
                .then(function (result) {
                    if (result.state === "granted") {
                        navigator.geolocation.getCurrentPosition(success)
                    } else if (result.state === "prompt") {
                        navigator.geolocation.getCurrentPosition(success)
                    }
            });
        }
    },[])

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
                <ListingForm location={location} />
            </div>
        </div>
    )
}

export default LoggedIn