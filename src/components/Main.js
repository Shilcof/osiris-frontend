import {Route, Switch} from 'react-router-dom';
import ListingsIndex from './listings/ListingsIndex'
import ListingForm from './listings/ListingForm'
import ListingShow from './listings/ListingShow'
import NotFound from './NotFound'
import About from './about/About'

const Main = () => {
    return (
        <div className="container-fluid pt-3">
            <Switch>
                <Route exact path="/" render={() => <ListingForm />} />
                <Route exact path="/about" render={() => <About />} />
                <Route exact path="/listings" render={routerProps => <ListingsIndex {...routerProps}/>} />
                <Route path="/listings/:listingId" render={routerProps => <ListingShow {...routerProps} /> }/>
                <Route path="/*" render={routerProps => <NotFound {...routerProps} /> } />
            </Switch>
        </div>
    )
}

export default Main