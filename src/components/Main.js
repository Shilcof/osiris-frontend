import {Route} from 'react-router-dom';
import ListingsIndex from './listings/ListingsIndex'

const Main = () => {
    return (
        <div className="container-fluid pt-2">
            <Route exact path="/" render={() => <div>Home</div>} />
            <Route exact path="/about" render={() => <div>About</div>} />
            <Route path="/listings" render={routerProps => <ListingsIndex {...routerProps}/>} />
        </div>
    )
}

export default Main