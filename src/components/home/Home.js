import { useSelector } from "react-redux"
import LoggedIn from "./LoggedIn"
import LoggedOut from "./LoggedOut"

const Home = props => {  

    const shouldRedirect = useSelector(state=>state.listings.shouldRedirect)
    const show = useSelector(state=>state.listings.show)

    const currentSeller = useSelector(state=>state.auth.currentSeller)

    if (shouldRedirect) props.history.push(`/listings/${show.id}`)

    return (
        <div>
            {currentSeller ? <LoggedIn currentSeller={currentSeller} /> : <LoggedOut />}
        </div>
    )
}

export default Home