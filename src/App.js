import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div id="page-body">
          <Switch>
            <Route path
          </Switch>
          <header className="App-header">
            <p>
              Medical Records
            </p>
          </header>
        </div>
      </div>
    </Router>
  );
}

export default App;
