import {Route} from 'react-router-dom';
import ListingsIndex from './listings/ListingsIndex'
import ListingForm from './listings/ListingForm'
import About from './about/About'

const Main = () => {
    return (
        <div className="container-fluid pt-3">
            <Route exact path="/" render={() => <ListingForm />} />
            <Route exact path="/about" render={() => <About />} />
            <Route path="/listings" render={routerProps => <ListingsIndex {...routerProps}/>} />
        </div>
    )
}

export default Main