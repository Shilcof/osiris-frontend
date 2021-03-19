import { BrowserRouter as Router} from 'react-router-dom';
import Main from './components/Main';
import NavBar from './components/layouts/NavBar';
import Footer from './components/layouts/Footer';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { autoLogin } from './actions/authActions';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(autoLogin())
  })

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