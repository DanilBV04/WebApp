import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from '/pages/Home';
import Analysis from './pages/Analysis';
import Upload from './pages/Upload';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/analysis">Analysis</Link>
            </li>
            <li>
              <Link to="/upload">Upload</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/analysis">
            <Analysis />
          </Route>
          <Route path="/upload">
            <Upload />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;