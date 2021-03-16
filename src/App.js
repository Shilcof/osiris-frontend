import { BrowserRouter as Router} from 'react-router-dom';
import NavBar from './components/NavBar';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <NavBar />
          <Main />
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;