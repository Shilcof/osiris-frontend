import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <body className="d-flex flex-column min-vh-100">
          <NavBar />
          <Route exact path="/" render={() => <div>Home</div>} />
          <Route exact path="/about" render={() => <div>About</div>} />
          <Route exact path="/listings" render={() => <div>Listings</div>} />
          {/* <Route path='/movies' render={routerProps => <MoviesPage {...routerProps} movies={this.state.movies}/>} /> */}
          <Footer/>
        </body>
      </Router>
    </div>
  );
}

export default App;
