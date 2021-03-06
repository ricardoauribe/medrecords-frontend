import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './pages/Home';
import Patients from './pages/Patients';
import History from './pages/History';
import Admin from './pages/Admin';
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
            <Route path="/patients" component={Patients} exact/>
            <Route path="/patients/history/:id" component={History} />
            <Route path="/admin" component={Admin} />
            <Route path="/others" component={Others} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
