import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './pages/Home';
import Patients from './pages/Patients';
import History from './pages/History';
import Others from './pages/Others';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div id="page-body">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/patients" component={Patients} />
            <Route path="/others" component={Others} />
            <Route path="/patients/history" component={History} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
