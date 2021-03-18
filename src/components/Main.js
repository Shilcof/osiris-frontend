import {Route, Switch} from 'react-router-dom';
import ListingsIndex from './listings/ListingsIndex'
import ListingForm from './listings/ListingForm'
import ListingShow from './listings/ListingShow'
import NotFound from './errors/NotFound'
import About from './about/About'

const Main = () => {
    return (
        <div className="container-fluid pt-3 container" style={{maxWidth: 1000}} >
            <Switch>

                <Route exact path="/" render={routerProps => <ListingForm {...routerProps}/>} />

                <Route exact path="/about" render={() => <About />} />

                <Route exact path="/listings" render={routerProps => <ListingsIndex {...routerProps}/>} />

                <Route path="/listings/:listingId" render={routerProps => <ListingShow {...routerProps} /> }/>

                <Route path="/*" render={routerProps => <NotFound {...routerProps} /> } />

            </Switch>
        </div>
    )
}

export default Main