import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" render={() => <div>Home</div>} />
          {/* <Route path='/movies' render={routerProps => <MoviesPage {...routerProps} movies={this.state.movies}/>} /> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
