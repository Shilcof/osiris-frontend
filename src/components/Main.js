import {Route} from 'react-router-dom';
import ListingsIndex from './listings/ListingsIndex'
import About from './about/About'

const Main = () => {
    return (
        <div className="container-fluid pt-3">
            <Route exact path="/" render={() => <div>Home</div>} />
            <Route exact path="/about" render={() => <About />} />
            <Route path="/listings" render={routerProps => <ListingsIndex {...routerProps}/>} />
        </div>
    )
}

export default Main