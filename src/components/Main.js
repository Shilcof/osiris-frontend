import {Redirect, Route, Switch} from 'react-router-dom';
import ListingsIndex from './listings/ListingsIndex'
import ListingForm from './listings/ListingForm'
import ListingShow from './listings/ListingShow'
import NotFound from './errors/NotFound'
import About from './about/About'
import SignUp from './auth/SignUp';
import { useSelector } from 'react-redux';
import LogIn from './auth/LogIn';

const Main = () => {

    const currentSeller = useSelector(store=>store.auth.currentSeller)

    return (
        <div className="container-fluid pt-3 container" style={{maxWidth: 1000}} >
            <Switch>

                <Route exact path="/" render={routerProps => <div>Home</div>} />

                <Route exact path="/signup" render={routerProps => <SignUp {...routerProps}/>} />

                <Route exact path="/login" render={routerProps => <LogIn {...routerProps}/>} />

                <Route exact path="/about" render={() => <About />} />

                <Route exact path="/listings" render={routerProps => <ListingsIndex {...routerProps}/>} />

                <Route exact path="/listings/new" render={routerProps => currentSeller ? <ListingForm {...routerProps}/> : <Redirect to="/signup" /> } />

                <Route path="/listings/:listingId" render={routerProps => <ListingShow {...routerProps} /> }/>

                <Route path="/*" render={routerProps => <NotFound {...routerProps} /> } />

            </Switch>
        </div>
    )
}

export default Main