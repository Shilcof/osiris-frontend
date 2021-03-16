import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ListingsIndex from './components/listings/ListingsIndex'

function App() {
  return (
    <div className="App">
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <NavBar />
          <Route exact path="/" render={() => <div>Home</div>} />
          <Route exact path="/about" render={() => <div>About</div>} />
          <Route path="/listings" render={routerProps => <ListingsIndex {...routerProps}/>} />
          {/* <Route path='/movies' render={routerProps => <MoviesPage {...routerProps} movies={this.state.movies}/>} /> */}
          <Footer/>
        </div>
      </Router>
    </div>
  );
}

export default App;
